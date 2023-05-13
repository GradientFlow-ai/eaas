export type Icon = React.ComponentType<React.ComponentProps<"svg">>;
export interface EmbeddingsFileInfo {
  userEmail: string;
  uuid: string;
  s3Key?: string;
  fileName?: string;
  description?: string;
  embeddingsModel?: string;
  embeddingsName?: string;
  contributorName?: string;
  license?: string;
}
export interface SanitizedEmbeddingsFileInfo {
  uuid: string;
  s3Key: string;
  fileName: string;
  description?: string;
  embeddingsModel?: string;
  embeddingsName?: string;
  contributorName?: string;
  license?: string;
  timesDownloaded?: number;
}

export type PresignedPostResponse = {
  post: {
    url: string;
    fields: {
      acl?: string;
      "Content-Type"?: string;
      bucket?: string;
      "X-Amz-Algorithm"?: string;
      "X-Amz-Credential"?: string;
      "X-Amz-Date"?: string;
      key?: string;
      Policy?: string;
      "X-Amz-Signature"?: string;
    };
  };
  uuid: string;
};
