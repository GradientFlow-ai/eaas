/*
  Warnings:

  - A unique constraint covering the columns `[s3Key]` on the table `S3File` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "S3File" ALTER COLUMN "s3Key" DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX "S3File_s3Key_key" ON "S3File"("s3Key");
