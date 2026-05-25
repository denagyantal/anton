-- AlterTable
ALTER TABLE "accounts" ADD COLUMN "quickbooks_access_token" TEXT;
ALTER TABLE "accounts" ADD COLUMN "quickbooks_refresh_token" TEXT;
ALTER TABLE "accounts" ADD COLUMN "quickbooks_token_expires_at" TIMESTAMP(3);
ALTER TABLE "accounts" ADD COLUMN "quickbooks_company_name" TEXT;

-- CreateTable
CREATE TABLE "quickbooks_sync_log" (
    "id" TEXT NOT NULL,
    "account_id" TEXT NOT NULL,
    "entity_type" TEXT NOT NULL,
    "entity_id" TEXT NOT NULL,
    "direction" TEXT NOT NULL DEFAULT 'PUSH',
    "status" TEXT NOT NULL,
    "error_message" TEXT,
    "quickbooks_id" TEXT,
    "synced_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "quickbooks_sync_log_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "idx_qb_sync_log_account_id" ON "quickbooks_sync_log"("account_id");

-- CreateIndex
CREATE INDEX "idx_qb_sync_log_entity_id" ON "quickbooks_sync_log"("entity_id");

-- AddForeignKey
ALTER TABLE "quickbooks_sync_log" ADD CONSTRAINT "quickbooks_sync_log_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
