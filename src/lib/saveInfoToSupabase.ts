import { EmbeddingsFileInfo } from "types";
export async function saveToSupabase(
  fileInfo: EmbeddingsFileInfo,
  setFileInfoSavedToSupabase: React.Dispatch<React.SetStateAction<{uuid: null | string}>>
) {
  fetch("/api/basicFileInfoToSupabase", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(fileInfo),
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      setFileInfoSavedToSupabase(json);
    })
    .catch((err) => console.log(err));
}
export async function updateInSupabase(
  fileInfo: EmbeddingsFileInfo,
  setFileInfoSavedToSupabase: React.Dispatch<React.SetStateAction<boolean>>
) {
  fetch("/api/updateFileInfoInSupabase", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(fileInfo),
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      setFileInfoSavedToSupabase(true);
    })
    .catch((err) => console.log(err));
}
