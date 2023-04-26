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
`;

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploaded, setUploaded] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(e.target.files?.[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      setUploading(true);
      await uploadPhoto(selectedFile, setProgress);
      setUploading(false);
      setUploaded(true);
    }
  };

  return (
    <Card>
      <Heading>Upload a .png or .jpg image (max 1MB).</Heading>
      <div className="mt-4">
        <input
          onChange={handleChange}
          type="file"
          accept="image/png, image/jpeg"
        />
        <Button onClick={handleUpload} disabled={!selectedFile}>
          Confirm Upload
        </Button>
        {uploading && <p>Uploading... {progress}%</p>}
        {uploaded && <p>Upload completed!</p>}
      </div>
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
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  if (upload.ok) {
    console.log("Uploaded successfully!");
  } else {
    console.error("Upload failed.");
  }
};
