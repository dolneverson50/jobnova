-- AlterTable
ALTER TABLE "ServiceRequest" ADD COLUMN     "adminNote" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "kycDocument" TEXT;
