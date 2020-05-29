CREATE TABLE IF NOT EXISTS "salesbillrow" (
	 "billrow_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	 "manufacturer" TEXT(255,0) NOT NULL,
	 "name" TEXT(255,0) NOT NULL,
     "packing" TEXT(255,0) NOT NULL UNIQUE,
     "hsn" TEXT(255,0) NOT NULL UNIQUE,
     "batch" TEXT(255,0) NOT NULL UNIQUE,
     "expiry" TEXT(255,0) NOT NULL UNIQUE,
     "quantity" TEXT(255,0) NOT NULL UNIQUE,
     "free" TEXT(255,0) NOT NULL UNIQUE,
     "rate" TEXT(255,0) NOT NULL UNIQUE,
     "mrp" TEXT(255,0) NOT NULL UNIQUE,
     "cgst" TEXT(255,0) NOT NULL UNIQUE,
     "sgst" TEXT(255,0) NOT NULL UNIQUE,
     "amount" TEXT(255,0) NOT NULL UNIQUE
);
CREATE INDEX "manufacturer_index" ON salesbillrow ("manufacturer" COLLATE NOCASE ASC);
CREATE INDEX "name_index" ON salesbillrow ("name" COLLATE NOCASE ASC);
CREATE INDEX "packing_index" ON salesbillrow ("packing" COLLATE NOCASE ASC);
CREATE INDEX "hsn_index" ON salesbillrow ("hsn" COLLATE NOCASE ASC);
CREATE INDEX "batch_index" ON salesbillrow ("batch" COLLATE NOCASE ASC);
CREATE INDEX "expiry_index" ON salesbillrow ("expiry" COLLATE NOCASE ASC);
CREATE INDEX "quantity_index" ON salesbillrow ("quantity" COLLATE NOCASE ASC);
CREATE INDEX "free_index" ON salesbillrow ("free" COLLATE NOCASE ASC);
CREATE INDEX "rate_index" ON salesbillrow ("rate" COLLATE NOCASE ASC);
CREATE INDEX "mrp_index" ON salesbillrow ("mrp" COLLATE NOCASE ASC);
CREATE INDEX "cgst_index" ON salesbillrow ("cgst" COLLATE NOCASE ASC);
CREATE INDEX "sgst_index" ON salesbillrow ("sgst" COLLATE NOCASE ASC);
CREATE INDEX "amount_index" ON salesbillrow ("amount" COLLATE NOCASE ASC);
-- INSERT INTO `people` VALUES (NULL, "Jango", "Reinhardt"), (NULL, "Svend", "Asmussen");
-- INSERT INTO `doctors` VALUES (NULL, "Moonjely", "Angamaly","12345"), (NULL, "George", "Perumbavur","234");
