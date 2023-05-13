import { useEffect, useState } from "react";
import Balancer from "react-wrap-balancer";
import tw from "tailwind-styled-components";
import { useSession } from "next-auth/react";
import { ChevronDown } from "lucide-react";

import { incrementDownloadCount } from "lib/saveInfoToSupabase";
import { getPresignedS3Link } from "lib/getPresignedS3Link";
import { SanitizedEmbeddingsFileInfo } from "types";
import randomEmoji from "lib/randomEmoji";
import { useIncrementProperty, useSignInModalContext } from "state";
import Popover from "components/shared/popover";
import ExpandableText from "./ExpandableText";

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
const DownloadItem = ({ s3Key, uuid }: { s3Key: string; uuid: string }) => {
  const { data: session } = useSession();
  const { setShowSignInModal } = useSignInModalContext();
  const [s3Link, setS3Link] = useState<string | null>(null);

  const incrementProperty = useIncrementProperty();

  const handleClick = () => {
    if (!session) {
      setShowSignInModal(true);
    } else {
      getPresignedS3Link(s3Key, setS3Link);
    }
  };

  // Download file once S3 link is set
  useEffect(() => {
    if (s3Link) {
      const link = document.createElement("a");
      link.href = s3Link;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      incrementDownloadCount(uuid, incrementProperty);
    }
  }, [incrementProperty, s3Key, s3Link, uuid]);

  return <Button onClick={handleClick}>Download</Button>;
};

const CardTitle = ({ title }: { title: string }) => {
  const [emoji, setEmoji] = useState("");
  useEffect(() => setEmoji(randomEmoji()), []);
  return (
    <h2 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent md:text-3xl md:font-normal">
      <Balancer>
        <div className="mt-6 text-center text-gray-500 md:text-xl">
          {emoji} {title}
        </div>
      </Balancer>
    </h2>
  );
};

interface WrapDivProps {
  large?: boolean;
}

const WrapDiv = tw.div<WrapDivProps>`
  relative
  col-span-1
  h-96
  overflow-hidden
  rounded-xl
  border
  border-gray-200
  bg-white
  shadow-md
  ${(props) => props.large && "md:col-span-2"}
`;
interface DescriptionCardProps {
  description?: string;
  timesDownloaded?: number;
}
const DescriptionCard: React.FC<DescriptionCardProps> = ({
  description,
  timesDownloaded,
}) => {
  const lines = description?.split("\n");

  return (
    <div className="rounded-md bg-white p-8 shadow-lg">
      <h2 className="mb-4 text-xl font-bold">Description</h2>
      <pre className="text-md whitespace-pre-line text-gray-600">
        {lines?.map((line, index) => (
          <p key={index} className="text-lg text-gray-600">
            {line}
            <br />
          </p>
        ))}
        {Number.isInteger(timesDownloaded) && (
          <p className="text-lg text-gray-600">
            <br />
            <span className="font-bold">{timesDownloaded}</span> times
            downloaded
          </p>
        )}
      </pre>
    </div>
  );
};

interface FieldProps {
  info?: string;
  timesDownloaded?: number;
  label: string;
  variant?:
    | "embeddingsModel"
    | "license"
    | "description"
    | "default"
    | "timesDownloaded";
}

const Field: React.FC<FieldProps> = ({
  info,
  label,
  variant = "default",
  timesDownloaded,
}) => {
  const [openPopover, setOpenPopover] = useState(false);

  if (!info && Number.isInteger(timesDownloaded)) {
    return null;
  }

  let labelClass = "font-medium text-gray-800";
  let bodyClass = "font-mono items-center";

  let BodyComponent;

  switch (variant) {
    case "embeddingsModel":
    case "license":
      labelClass =
        "rounded-sm bg-gray-100 px-1 py-0.5 font-mono font-medium text-gray-800";
      BodyComponent = <span className={bodyClass}>{info}</span>;
      break;
    case "description":
      labelClass = "prose-sm -mt-2 leading-normal text-gray-500 md:prose";
      bodyClass = "font-mono cursor-pointer text-blue-500 hover:text-blue-600";
      BodyComponent = (
        <Popover
          content={
            <DescriptionCard
              description={info}
              timesDownloaded={timesDownloaded}
            />
          }
          openPopover={openPopover}
          setOpenPopover={setOpenPopover}
        >
          <span className={bodyClass} onClick={() => setOpenPopover(true)}>
            {info?.length && info.length > 30
              ? info?.slice(0, 30) + "... "
              : info}
            <ChevronDown />
          </span>
        </Popover>
      );
      break;
    default:
      BodyComponent = (
        <span className={`${bodyClass} text-center`}>{info}</span>
      );
      break;
  }

  return (
    <>
      <span className={labelClass}>{label}</span>
      {BodyComponent}
    </>
  );
};

export default function Card({
  item,
  large,
}: {
  item: SanitizedEmbeddingsFileInfo;
  large?: boolean;
}) {
  const {
    fileName,
    embeddingsModel,
    license,
    description,
    s3Key,
    timesDownloaded,
    uuid,
  } = item;

  const downloadSize = undefined;
  return (
    <WrapDiv>
      <div className="mx-auto max-w-md text-center">
        <CardTitle title={fileName} />
        <div className="flex h-60 items-center justify-center">
          <div className="grid grid-cols-2 gap-10 p-10">
            <Field
              info={embeddingsModel || "Unknown"}
              label="Embeddings Model"
              variant="embeddingsModel"
            />
            <Field info={downloadSize} label="download size" />
            <Field
              info={license || "None specified"}
              label="License"
              variant="license"
            />
            <Field
              info={description || "None"}
              label="Description"
              variant="description"
              timesDownloaded={timesDownloaded}
            />
          </div>
        </div>
        <DownloadItem s3Key={s3Key} uuid={uuid} />
      </div>
    </WrapDiv>
  );
}
