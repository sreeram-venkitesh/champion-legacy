CREATE TABLE IF NOT EXISTS "purchasebillrow" (
	 "billrow_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	 "MFR" TEXT(255,0) NOT NULL,
	 "NAME" TEXT(255,0) NOT NULL,
     "PACK" TEXT(255,0) NOT NULL ,
     "HSN" TEXT(255,0) NOT NULL ,
     "BATCH" TEXT(255,0) NOT NULL ,
     "EXP" TEXT(255,0) NOT NULL ,
     "QTY" TEXT(255,0) NOT NULL ,
     "FREE" TEXT(255,0) NOT NULL ,
     "RATE" TEXT(255,0) NOT NULL ,
     "DISC" TEXT(255,0) NOT NULL,
     "MRP" TEXT(255,0) NOT NULL ,
     "CGST" TEXT(255,0) NOT NULL ,
     "SGST" TEXT(255,0) NOT NULL ,
     "AMNT" TEXT(255,0) NOT NULL 
);
CREATE INDEX "MFR_index" ON purchasebillrow ("MFR" COLLATE NOCASE ASC);
CREATE INDEX "NAME_index" ON purchasebillrow ("NAME" COLLATE NOCASE ASC);
CREATE INDEX "PACK_index" ON purchasebillrow ("PACK" COLLATE NOCASE ASC);
CREATE INDEX "HSN_index" ON purchasebillrow ("HSN" COLLATE NOCASE ASC);
CREATE INDEX "BATCH_index" ON purchasebillrow ("BATCH" COLLATE NOCASE ASC);
CREATE INDEX "EXP_index" ON purchasebillrow ("EXP" COLLATE NOCASE ASC);
CREATE INDEX "QTY_index" ON purchasebillrow ("QTY" COLLATE NOCASE ASC);
CREATE INDEX "FREE_index" ON purchasebillrow ("FREE" COLLATE NOCASE ASC);
CREATE INDEX "RATE_index" ON purchasebillrow ("RATE" COLLATE NOCASE ASC);
CREATE INDEX "DISC_index" ON purchasebillrow ("DISC" COLLATE NOCASE ASC);
CREATE INDEX "MRP_index" ON purchasebillrow ("MRP" COLLATE NOCASE ASC);
CREATE INDEX "CGST_index" ON purchasebillrow ("CGST" COLLATE NOCASE ASC);
CREATE INDEX "SGST_index" ON purchasebillrow ("SGST" COLLATE NOCASE ASC);
CREATE INDEX "AMNT_index" ON purchasebillrow ("AMNT" COLLATE NOCASE ASC);
-- INSERT INTO `people` VALUES (NULL, "Jango", "Reinhardt"), (NULL, "Svend", "Asmussen");
-- INSERT INTO `doctors` VALUES (NULL, "Moonjely", "Angamaly","12345"), (NULL, "George", "Perumbavur","234");
