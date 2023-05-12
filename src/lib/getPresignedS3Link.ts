
export async function getPresignedS3Link(
  s3Key: string,
  setS3Link: React.Dispatch<React.SetStateAction<null | string>>
) {
  fetch(`/api/getS3DownloadLink?s3Key=${encodeURIComponent(s3Key)}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then(({url}) => {
        console.log(url);
      setS3Link(url);
    })
    .catch((err) => console.log(err));
}
