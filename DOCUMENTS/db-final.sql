CREATE TABLE `admin` (
  `AdminId` int NOT NULL,
  `Username` varchar(45) NOT NULL,
  `Password` varchar(45) NOT NULL,
  PRIMARY KEY (`AdminId`),
  UNIQUE KEY `Username_UNIQUE` (`Username`));


CREATE TABLE `pharmacy`.`user` (
  `UserId` INT NOT NULL,
  `FullName` VARCHAR(45) NOT NULL,
  `EmailId` VARCHAR(45) NOT NULL,
  `ContactNumber` VARCHAR(45) NOT NULL,
  `Password` VARCHAR(45) NOT NULL,
  `Status` TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`UserId`),
  UNIQUE INDEX `EmailId_UNIQUE` (`EmailId` ASC) VISIBLE,
  UNIQUE INDEX `ContactNumber_UNIQUE` (`ContactNumber` ASC) VISIBLE);


CREATE TABLE `pharmacy`.`useraddresses` (
  `UserAddressId` INT NOT NULL,
  `UserId` INT NULL,
  `MobileNumber` VARCHAR(12) NOT NULL,
  `Locality` VARCHAR(20) NOT NULL,
  `AreaStreet` VARCHAR(45) NOT NULL,
  `Landmark` VARCHAR(45) NULL,
  `City` VARCHAR(20) NOT NULL,
  `State` VARCHAR(20) NOT NULL,
  `Pincode` INT NOT NULL,
  PRIMARY KEY (`UserAddressId`),
  INDEX `userId_idx` (`UserId` ASC) VISIBLE,
  CONSTRAINT `userId`
    FOREIGN KEY (`UserId`)
    REFERENCES `pharmacy`.`user` (`UserId`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);


CREATE TABLE `pharmacy`.`seller` (
  `SellerId` INT NOT NULL,
  `EmailId` VARCHAR(45) NOT NULL,
  `Password` VARCHAR(45) NOT NULL,
  `Status` TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`SellerId`),
  UNIQUE INDEX `EmailId_UNIQUE` (`EmailId` ASC) VISIBLE);


CREATE TABLE `pharmacy`.`sellerinfo` (
  `SellerInfoId` INT NOT NULL,
  `SellerId` INT NOT NULL,
  `ShopName` VARCHAR(45) NOT NULL,
  `ShopRegNo` VARCHAR(45) NOT NULL,
  `ShopContactNo` VARCHAR(12) NOT NULL,
  `ShopAddress` VARCHAR(45) NOT NULL,
  `ShopPincode` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`SellerInfoId`),
  UNIQUE INDEX `SellerId_UNIQUE` (`SellerId` ASC) VISIBLE,
  UNIQUE INDEX `ShopContactNo_UNIQUE` (`ShopContactNo` ASC) VISIBLE,
  CONSTRAINT `SellerId`
    FOREIGN KEY (`SellerId`)
    REFERENCES `pharmacy`.`seller` (`SellerId`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
