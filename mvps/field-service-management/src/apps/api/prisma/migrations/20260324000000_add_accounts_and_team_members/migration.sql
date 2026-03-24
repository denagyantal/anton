-- CreateEnum
CREATE TYPE "TradeType" AS ENUM ('HVAC', 'PLUMBING', 'ELECTRICAL');

-- CreateEnum
CREATE TYPE "TeamMemberRole" AS ENUM ('OWNER', 'MEMBER');

-- CreateTable
CREATE TABLE "accounts" (
    "id" TEXT NOT NULL,
    "business_name" TEXT,
    "business_logo_url" TEXT,
    "license_number" TEXT,
    "contact_email" TEXT,
    "contact_phone" TEXT,
    "trade_type" "TradeType",
    "quickbooks_connected" BOOLEAN NOT NULL DEFAULT false,
    "quickbooks_realm_id" TEXT,
    "stripe_account_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "synced_at" TIMESTAMP(3),

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "team_members" (
    "id" TEXT NOT NULL,
    "account_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "name" TEXT NOT NULL,
    "role" "TeamMemberRole" NOT NULL,
    "auth_user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "synced_at" TIMESTAMP(3),

    CONSTRAINT "team_members_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "team_members_email_key" ON "team_members"("email");

-- CreateIndex
CREATE UNIQUE INDEX "team_members_auth_user_id_key" ON "team_members"("auth_user_id");

-- AddForeignKey
ALTER TABLE "team_members" ADD CONSTRAINT "team_members_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
