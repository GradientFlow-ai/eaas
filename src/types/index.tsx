export type Icon = React.ComponentType<React.ComponentProps<"svg">>;
export interface EmbeddingsFileInfo {
  userEmail: string;
  fileName?: string;
  uuid?: string;
  description?: string;
  embeddingsModel?: string;
  embeddingsName?: string;
  contributorName?: string;
  license?: string;
}
