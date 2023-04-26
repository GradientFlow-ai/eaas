import { useState } from "react";
import tw from "tailwind-styled-components";

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
  bg-gradient-to-r
  from-burnt-orange-300
  to-burnt-orange-200
  text-white
  font-semibold
  py-2
  px-4
  rounded
  shadow-md
  transition
  duration-200
`;

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploaded, setUploaded] = useState(false);
  const [error, setError] = useState("");
  const [showFront, setShowFront] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(e.target.files?.[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      setUploading(true);
      const result = await uploadPhoto(selectedFile, setProgress);
      setUploading(false);
      if (result) {
        setUploaded(true);
      } else {
        setError(
          "Upload failed. The file name may already exist on the server.",
        );
      }
    }
  };

  const handleClick = () => {
    setShowFront(!showFront);
  };

  return (
    <Card>
      {showFront ? (
        <div className="text-center">
          <Heading>Share an Embedding</Heading>
          <div className="mt-4">
            <CardButton onClick={handleClick}>Upload</CardButton>
          </div>
        </div>
      ) : (
        <div>
          <Heading onClick={handleClick}>
            Upload a .parquet or .pkl file (max 1MB).
          </Heading>
          <div className="mt-4">
            <input
              onChange={handleChange}
              type="file"
              accept="application/octet-stream,application/x-parquet,application/x-python-pickle"
            />
            <Button onClick={handleUpload} disabled={!selectedFile}>
              Confirm Upload
            </Button>
            {uploading && <p>Uploading... {progress}%</p>}
            {uploaded && <p>Upload completed!</p>}
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </div>
      )}
    </Card>
  );
}

const uploadPhoto = async (
  file: File,
  setProgress: (progress: number) => void,
) => {
  const filename = encodeURIComponent(file.name);
  const fileType = encodeURIComponent(file.type);

  const res = await fetch(
    `/api/embeddings/presignedPost?file=${filename}&fileType=${fileType}`,
  );
  console.log(res);
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
    console.log("Uploaded successfully!");
    return true;
  } else {
    console.error("Upload failed.");
    return false;
  }
};
