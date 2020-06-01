CREATE TABLE IF NOT EXISTS "dealers" (
	 "dealer_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	 "name" TEXT(255,0) NOT NULL UNIQUE,
	 "address" TEXT(255,0) NOT NULL,
     "phone" TEXT(255,0) NOT NULL UNIQUE
);
CREATE INDEX "name_index" ON dealers ("name" COLLATE NOCASE ASC);
CREATE INDEX "address_index" ON dealers ("address" COLLATE NOCASE ASC);
CREATE INDEX "phone_index" ON dealers ("phone" COLLATE NOCASE ASC);
-- INSERT INTO `people` VALUES (NULL, "Jango", "Reinhardt"), (NULL, "Svend", "Asmussen");
-- INSERT INTO `doctors` VALUES (NULL, "Moonjely", "Angamaly","12345"), (NULL, "George", "Perumbavur","234");
