/*
  Warnings:

  - Added the required column `name` to the `PaymentItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `PaymentItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `PaymentItem` ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `price` INTEGER NOT NULL;
