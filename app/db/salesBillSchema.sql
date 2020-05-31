CREATE TABLE IF NOT EXISTS "salesbill" (
	 "bill_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	 "doctor" TEXT(255,0) NOT NULL,
	 "date" TEXT(255,0) NOT NULL,
     "billRowStarting" TEXT(255,0) NOT NULL UNIQUE,
     "billRowEnding" TEXT(255,0) NOT NULL UNIQUE,
     "totalItems" TEXT(255,0) NOT NULL ,
     "totalQuantity" TEXT(255,0) NOT NULL ,
     "subtotal" TEXT(255,0) NOT NULL ,
     "totalCgst" TEXT(255,0) NOT NULL ,
     "totalSgst" TEXT(255,0) NOT NULL ,
     "discount" TEXT(255,0) NOT NULL ,
     "roundoff" TEXT(255,0) NOT NULL ,
     "kfcess" TEXT(255,0) NOT NULL ,
     "billAmount" TEXT(255,0) NOT NULL
);
CREATE INDEX "doctor_index" ON salesbill ("doctor" COLLATE NOCASE ASC);
CREATE INDEX "date_index" ON salesbill ("date" COLLATE NOCASE ASC);
CREATE INDEX "billRowStarting_index" ON salesbill ("billRowStarting" COLLATE NOCASE ASC);
CREATE INDEX "billRowEnding_index" ON salesbill ("billRowEnding" COLLATE NOCASE ASC);
CREATE INDEX "totalItems_index" ON salesbill ("totalItems" COLLATE NOCASE ASC);
CREATE INDEX "totalQuantity_index" ON salesbill ("totalQuantity" COLLATE NOCASE ASC);
CREATE INDEX "subtotal_index" ON salesbill ("subtotal" COLLATE NOCASE ASC);
CREATE INDEX "totalCgst_index" ON salesbill ("totalCgst" COLLATE NOCASE ASC);
CREATE INDEX "totalSgst_index" ON salesbill ("totalSgst" COLLATE NOCASE ASC);
CREATE INDEX "discount_index" ON salesbill ("discount" COLLATE NOCASE ASC);
CREATE INDEX "roundoff_index" ON salesbill ("roundoff" COLLATE NOCASE ASC);
CREATE INDEX "kfcess_index" ON salesbill ("kfcess" COLLATE NOCASE ASC);
CREATE INDEX "billAmount_index" ON salesbill ("billAmount" COLLATE NOCASE ASC);

-- INSERT INTO `people` VALUES (NULL, "Jango", "Reinhardt"), (NULL, "Svend", "Asmussen");
-- INSERT INTO `doctors` VALUES (NULL, "Moonjely", "Angamaly","12345"), (NULL, "George", "Perumbavur","234");
