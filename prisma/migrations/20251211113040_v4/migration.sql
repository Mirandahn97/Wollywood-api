/*
  Warnings:

  - You are about to drop the column `createdeAt` on the `posters` table. All the data in the column will be lost.
  - You are about to drop the column `updatedeAt` on the `posters` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `posters` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `posters` DROP COLUMN `createdeAt`,
    DROP COLUMN `updatedeAt`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
