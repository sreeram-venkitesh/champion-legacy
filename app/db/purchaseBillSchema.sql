CREATE TABLE IF NOT EXISTS "purchasebill" (
	 "bill_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	 "dealer" TEXT(255,0) NOT NULL,
	 "date" TEXT(255,0) NOT NULL,
     "billRowStarting" TEXT(255,0) NOT NULL UNIQUE,
     "billRowEnding" TEXT(255,0) NOT NULL UNIQUE,
     "totalItems" TEXT(255,0) NOT NULL ,
     "totalQuantity" TEXT(255,0) NOT NULL ,
     "subtotal" TEXT(255,0) NOT NULL ,
     "totalDiscount" TEXT(255,0) NOT NULL,
     "totalCgst" TEXT(255,0) NOT NULL ,
     "totalSgst" TEXT(255,0) NOT NULL ,
     "roundoff" TEXT(255,0) NOT NULL ,
     "billAmount" TEXT(255,0) NOT NULL
);
CREATE INDEX "doctor_index" ON purchasebill ("doctor" COLLATE NOCASE ASC);
CREATE INDEX "date_index" ON purchasebill ("date" COLLATE NOCASE ASC);
CREATE INDEX "billRowStarting_index" ON purchasebill ("billRowStarting" COLLATE NOCASE ASC);
CREATE INDEX "billRowEnding_index" ON purchasebill ("billRowEnding" COLLATE NOCASE ASC);
CREATE INDEX "totalItems_index" ON purchasebill ("totalItems" COLLATE NOCASE ASC);
CREATE INDEX "totalQuantity_index" ON purchasebill ("totalQuantity" COLLATE NOCASE ASC);
CREATE INDEX "subtotal_index" ON purchasebill ("subtotal" COLLATE NOCASE ASC);
CREATE INDEX "totalDiscount_index" ON purchasebill ("totalDiscount" COLLATE NOCASE ASC);
CREATE INDEX "totalCgst_index" ON purchasebill ("totalCgst" COLLATE NOCASE ASC);
CREATE INDEX "totalSgst_index" ON purchasebill ("totalSgst" COLLATE NOCASE ASC);
CREATE INDEX "roundoff_index" ON purchasebill ("roundoff" COLLATE NOCASE ASC);
CREATE INDEX "billAmount_index" ON purchasebill ("billAmount" COLLATE NOCASE ASC);

-- INSERT INTO `people` VALUES (NULL, "Jango", "Reinhardt"), (NULL, "Svend", "Asmussen");
-- INSERT INTO `doctors` VALUES (NULL, "Moonjely", "Angamaly","12345"), (NULL, "George", "Perumbavur","234");
