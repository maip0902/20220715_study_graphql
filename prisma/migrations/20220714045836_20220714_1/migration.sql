/*
  Warnings:

  - You are about to drop the column `paymentId` on the `PaymentItem` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `PaymentItem_paymentId_key` ON `PaymentItem`;

-- AlterTable
ALTER TABLE `PaymentItem` DROP COLUMN `paymentId`;
