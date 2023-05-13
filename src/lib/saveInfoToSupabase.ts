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
      setFileInfoSavedToSupabase({uuid: fileInfo.uuid});
    })
    .catch((err) => console.log(err));
}
export async function updateInSupabase(
  fileInfo: EmbeddingsFileInfo,
  setFileInfoSavedToSupabase: React.Dispatch<React.SetStateAction<{uuid: null | string}>>
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
      setFileInfoSavedToSupabase({uuid: fileInfo.uuid});
    })
    .catch((err) => console.log(err));
}

export async function incrementDownloadCount(
  uuid: string,
  incrementProperty: (property: string, page?: string) => void,
) {
  fetch("/api/incrementTimesDownloaded", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ uuid }),
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json.message);
      // Call the incrementProperty function here
      incrementProperty('timesDownloaded'); // pass the name of the property you want to increment
    })
    .catch((err) => console.log(err));
}
