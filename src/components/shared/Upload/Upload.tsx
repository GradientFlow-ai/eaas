import { useState } from "react";
import { useSession } from "next-auth/react";

import { saveToSupabase } from "lib/saveInfoToSupabase";
import { useSignInModal } from "../../layout/sign-in-modal";

import tw from "tailwind-styled-components";
import UserInfoForm from "./UserInfoForm";

const Label = tw.label`
  block
  mb-2
`;

const Input = tw.input`
  border
  border-gray-300
  rounded
  w-full
  p-2
  mb-4
`;

const Select = tw.select`
  border
  border-gray-300
  rounded
  w-full
  p-2
  mb-4
`;

const ErrorMessage = tw.p`
  text-red-500
`;
const Card = tw.div`
  relative
  col-span-1
  p-6
  overflow-hidden
  rounded-xl
  border
  border-gray-200
  bg-white
  shadow-md
`;

const Heading = tw.h2`
bg-gradient-to-br
from-black
to-stone-500
bg-clip-text
text-center
font-display
text-xl
text-transparent
drop-shadow-sm
`;

const Button = tw.button`
  bg-blue-400
  hover:bg-blue-500
  text-white
  font-semibold
  py-2
  px-4
  rounded
  shadow-md
  transition
  duration-200
  ${(p) => p.disabled && "opacity-50 cursor-not-allowed"}
`;
const CardButton = tw.button`
  items-center
  justify-between
  bg-gradient-to-r
  from-burnt-orange-200
  to-burnt-orange-300
  text-white
  font-semibold
  text-xl
  py-3
  px-6
  rounded
  shadow-md
  transition
  duration-200
`;

const CustomFileInputLabel = tw.label`
  bg-blue-400
  hover:bg-blue-500
  text-white
  font-semibold
  py-2
  px-4
  rounded
  shadow-md
  transition
  duration-200
  cursor-pointer
`;

const UploadingSpinner = () => (
  <svg
    aria-hidden="true"
    role="status"
    className="mr-3 inline h-4 w-4 animate-spin text-white"
    viewBox="0 0 100 101"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
      fill="#E5E7EB"
    />
    <path
      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
      fill="currentColor"
    />
  </svg>
);

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploaded, setUploaded] = useState(false);
  const [error, setError] = useState("");
  const [showFront, setShowFront] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setSelectedFile(file);
    setSelectedFileName(file ? file.name : "");
  };
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    setSelectedFile(file);
    setSelectedFileName(file ? file.name : "");
  };

  const handleUpload = async () => {
    if (selectedFile) {
      setUploading(true);
      const result = await uploadFileToS3(selectedFile, setProgress);
      setUploading(false);
      if (result) {
        setUploaded(true);
        saveToSupabase(session?.user?.email, selectedFileName);
      } else {
        setError(
          "Upload failed. The file name may already exist on the server.",
        );
      }
    }
  };

  const { data: session } = useSession();
  const { SignInModal, setShowSignInModal } = useSignInModal();

  const handleSignIn = () => {
    if (!session) {
      setShowSignInModal(true);
    } else {
      handleClick();
    }
  };

  const handleClick = () => {
    setShowFront(!showFront);
  };

  const CardFront = () => (
    <div className="text-center">
      <CardButton onClick={handleSignIn}>
        <span role="img" aria-label="heart">
          ❤️
        </span>
        Share an Embedding
        <span role="img" aria-label="love-you-hand">
          🤟
        </span>
      </CardButton>
    </div>
  );

  const CardBack = () => (
    <div onDragOver={handleDragOver} onDrop={handleDrop}>
      <Heading onClick={handleClick}>
        Upload a Pickle, parquet, or CSV file
      </Heading>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <input id="file-upload" onChange={handleChange} type="file" hidden />
          <CustomFileInputLabel htmlFor="file-upload">
            {selectedFileName || "Choose a file"}
          </CustomFileInputLabel>
        </div>
        <div>
          <Button onClick={handleUpload} disabled={!selectedFile}>
            {uploading && <UploadingSpinner />}
            Confirm Upload
          </Button>
          {uploading && <p>Uploading, please do not close the browser...</p>}
          {uploaded && <p>Upload completed!</p>}
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );

  return (
    <Card>
      {showFront ? (
        <>
          <CardFront />
          <SignInModal />
        </>
      ) : uploaded ? (
        <UserInfoForm />
      ) : (
        <CardBack />
      )}
    </Card>
  );
}

const uploadFileToS3 = async (
  file: File,
  setProgress: (progress: number) => void,
) => {
  const filename = encodeURIComponent(file.name);
  const fileType = encodeURIComponent(file.type);

  const res = await fetch(
    `/api/embeddings/presignedPost?file=${filename}&fileType=${fileType}`,
  );
  const { url, fields } = await res.json();
  const formData = new FormData();

  Object.entries({ ...fields, file }).forEach(([key, value]) => {
    formData.append(key, value as string);
  });

  const upload = await fetch(url, {
    method: "POST",
    body: formData,
  });

  if (upload.ok) {
    return true;
  } else {
    console.error("Upload failed.");
    return false;
  }
};
