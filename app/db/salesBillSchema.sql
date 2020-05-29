CREATE TABLE IF NOT EXISTS "salesbill" (
	 "bill_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	 "doctor" TEXT(255,0) NOT NULL,
	 "date" TEXT(255,0) NOT NULL,
     "billRowStarting" TEXT(255,0) NOT NULL UNIQUE,
     "billRowEnding" TEXT(255,0) NOT NULL UNIQUE,
     "totalItems" TEXT(255,0) NOT NULL UNIQUE,
     "totalQuantity" TEXT(255,0) NOT NULL UNIQUE,
     "subtotal" TEXT(255,0) NOT NULL UNIQUE,
     "totalCgst" TEXT(255,0) NOT NULL UNIQUE,
     "totalSgst" TEXT(255,0) NOT NULL UNIQUE,
     "discount" TEXT(255,0) NOT NULL UNIQUE,
     "roundoff" TEXT(255,0) NOT NULL UNIQUE,
     "kfcess" TEXT(255,0) NOT NULL UNIQUE,
     "billAmount" TEXT(255,0) NOT NULL UNIQUE
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
