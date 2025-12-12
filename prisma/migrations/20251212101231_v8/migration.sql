-- DropForeignKey
ALTER TABLE `genrePosterRel` DROP FOREIGN KEY `genrePosterRel_posterId_fkey`;

-- DropIndex
DROP INDEX `genrePosterRel_posterId_fkey` ON `genrePosterRel`;

-- AddForeignKey
ALTER TABLE `genrePosterRel` ADD CONSTRAINT `genrePosterRel_posterId_fkey` FOREIGN KEY (`posterId`) REFERENCES `posters`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
