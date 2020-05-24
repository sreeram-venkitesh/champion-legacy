CREATE TABLE IF NOT EXISTS "medicine" (
	 "medicine_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	 "name" TEXT(255,0) NOT NULL,
	 "manufacturer" TEXT(255,0) NOT NULL,
     "batch" TEXT(255,0) NOT NULL UNIQUE,
     "packing" TEXT(255,0) NOT NULL UNIQUE,
     "expiry" TEXT(255,0) NOT NULL UNIQUE,
     "mrp" TEXT(255,0) NOT NULL UNIQUE
);
CREATE INDEX "name_index" ON medicine ("name" COLLATE NOCASE ASC);
CREATE INDEX "manufacturer_index" ON medicine ("manufacturer" COLLATE NOCASE ASC);
CREATE INDEX "batch_index" ON medicine ("batch" COLLATE NOCASE ASC);
CREATE INDEX "packing_index" ON medicine ("packing" COLLATE NOCASE ASC);
CREATE INDEX "expiry_index" ON medicine ("expiry" COLLATE NOCASE ASC);
CREATE INDEX "mrp_index" ON medicine ("mrp" COLLATE NOCASE ASC);

-- INSERT INTO `people` VALUES (NULL, "Jango", "Reinhardt"), (NULL, "Svend", "Asmussen");
-- INSERT INTO `doctors` VALUES (NULL, "Moonjely", "Angamaly","12345"), (NULL, "George", "Perumbavur","234");
