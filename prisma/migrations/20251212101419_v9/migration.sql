-- DropForeignKey
ALTER TABLE `genrePosterRel` DROP FOREIGN KEY `genrePosterRel_genreId_fkey`;

-- DropIndex
DROP INDEX `genrePosterRel_genreId_fkey` ON `genrePosterRel`;

-- AddForeignKey
ALTER TABLE `genrePosterRel` ADD CONSTRAINT `genrePosterRel_genreId_fkey` FOREIGN KEY (`genreId`) REFERENCES `genres`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
