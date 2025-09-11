/*
  Warnings:

  - You are about to drop the column `nationlity` on the `User` table. All the data in the column will be lost.
  - Added the required column `nationality` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "nationlity",
ADD COLUMN     "nationality" TEXT NOT NULL;
