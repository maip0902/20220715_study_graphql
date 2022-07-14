/*
  Warnings:

  - A unique constraint covering the columns `[deviceId,paymentItemId]` on the table `Payment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `paymentItemId` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Payment` ADD COLUMN `paymentItemId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `PaymentItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `paymentId` INTEGER NOT NULL,

    UNIQUE INDEX `PaymentItem_paymentId_key`(`paymentId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Payment_deviceId_paymentItemId_key` ON `Payment`(`deviceId`, `paymentItemId`);

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_paymentItemId_fkey` FOREIGN KEY (`paymentItemId`) REFERENCES `PaymentItem`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
