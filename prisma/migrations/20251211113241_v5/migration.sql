/*
  Warnings:

  - You are about to drop the column `createdeAt` on the `cartlines` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `cartlines` DROP COLUMN `createdeAt`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
