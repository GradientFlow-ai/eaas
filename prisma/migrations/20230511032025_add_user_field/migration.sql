-- AlterTable
ALTER TABLE "S3File" ADD COLUMN     "userId" TEXT;

-- CreateTable
CREATE TABLE "Documents" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "embedding" vector (1536) NOT NULL,

    CONSTRAINT "Documents_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "S3File" ADD CONSTRAINT "S3File_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
