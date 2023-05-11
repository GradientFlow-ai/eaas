export async function saveToSupabase(userEmail: string, fileName: string, setFileInfoSavedToSupabase:  React.Dispatch<React.SetStateAction<boolean>>) {
   fetch("/api/basicFileInfoToSupabase", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ userEmail, fileName }),
  })
    .then((res) => res.json())
    .then((json) => { console.log(json);  setFileInfoSavedToSupabase(true) })
    .catch((err) => console.log(err));
}
