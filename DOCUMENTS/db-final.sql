
create database pharmacy;

use pharmacy;


CREATE TABLE `admin` (
  `AdminId` int NOT NULL,
  `Username` varchar(45) NOT NULL,
  `Password` varchar(45) NOT NULL,
  PRIMARY KEY (`AdminId`),
  UNIQUE KEY `Username_UNIQUE` (`Username`)
);


CREATE TABLE `user` (
  `UserId` int NOT NULL,
  `FullName` varchar(45) NOT NULL,
  `EmailId` varchar(45) NOT NULL,
  `ContactNumber` varchar(45) NOT NULL,
  `Password` varchar(45) NOT NULL,
  `Status` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`UserId`),
  UNIQUE KEY `EmailId_UNIQUE` (`EmailId`),
  UNIQUE KEY `ContactNumber_UNIQUE` (`ContactNumber`)
);


CREATE TABLE `useraddresses` (
  `UserAddressId` int NOT NULL,
  `UserId` int DEFAULT NULL,
  `MobileNumber` varchar(12) NOT NULL,
  `Locality` varchar(20) NOT NULL,
  `AreaStreet` varchar(45) NOT NULL,
  `Landmark` varchar(45) DEFAULT NULL,
  `City` varchar(20) NOT NULL,
  `State` varchar(20) NOT NULL,
  `Pincode` int NOT NULL,
  PRIMARY KEY (`UserAddressId`),
  KEY `userId_idx` (`UserId`),
  CONSTRAINT `userId` FOREIGN KEY (`UserId`) REFERENCES `user` (`UserId`) ON DELETE CASCADE ON UPDATE CASCADE
);


CREATE TABLE `seller` (
  `SellerId` int NOT NULL,
  `EmailId` varchar(100) NOT NULL,
  `Password` varchar(500) NOT NULL,
  `Status` tinyint NOT NULL DEFAULT '0',
  `ShopName` varchar(100) NOT NULL,
  `ShopRegNo` varchar(50) NOT NULL,
  `ShopContactNo` varchar(12) NOT NULL,
  `ShopAddress` varchar(200) NOT NULL,
  `ShopPincode` int NOT NULL,
  `DocumentUrl` varchar(100) NOT NULL,
  PRIMARY KEY (`SellerId`),
  UNIQUE KEY `EmailId_UNIQUE` (`EmailId`),
  UNIQUE KEY `ShopContactNo_UNIQUE` (`ShopContactNo`)
);


CREATE TABLE `chemicalclass` (
  `ChemicalId` int NOT NULL,
  `ChemicalName` varchar(100) NOT NULL,
  PRIMARY KEY (`ChemicalId`)
);


CREATE TABLE `therarpeuticclass` (
  `TherarpeuticClassId` int NOT NULL,
  `TName` varchar(45) NOT NULL,
  `TDescription` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`TherarpeuticClassId`)
);

CREATE TABLE `manufacturermaster` (
  `Manufacturerid` int NOT NULL,
  `ManufacturerName` varchar(45) NOT NULL,
  `MDescription` varchar(45) DEFAULT NULL,
  `isActive` tinyint DEFAULT '0',
  PRIMARY KEY (`Manufacturerid`)
);


CREATE TABLE `medicinemaster` (
  `MedicineId` int NOT NULL,
  `MedicineName` varchar(45) NOT NULL,
  `Prescription` tinyint NOT NULL DEFAULT '0',
  `TypeOfSell` varchar(45) NOT NULL,
  `ManufacturerId` int NOT NULL,
  `Salt` varchar(45) NOT NULL,
  `MRP` decimal(10,0) NOT NULL,
  `Uses` varchar(1000) NOT NULL,
  `AlternateMedicines` varchar(500) NOT NULL,
  `SideEffects` varchar(1000) NOT NULL,
  `HowToUse` varchar(1000) NOT NULL,
  `ChemicalClassId` int NOT NULL,
  `HabitForming` varchar(45) NOT NULL,
  `TherapeuticClass` int NOT NULL,
  `ActionClass` varchar(45) NOT NULL,
  `MedicineUrl1` varchar(100) DEFAULT NULL,
  `MedicineUrl2` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`MedicineId`),
  KEY `ManufacturerId_idx` (`ManufacturerId`),
  KEY `ChemicalClassId_idx` (`ChemicalClassId`),
  KEY `TherapeuticClassId_idx` (`TherapeuticClass`),
  CONSTRAINT `ChemicalClassId` FOREIGN KEY (`ChemicalClassId`) REFERENCES `chemicalclass` (`ChemicalId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ManufacturerId` FOREIGN KEY (`ManufacturerId`) REFERENCES `manufacturermaster` (`Manufacturerid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `TherapeuticClassId` FOREIGN KEY (`TherapeuticClass`) REFERENCES `therarpeuticclass` (`TherarpeuticClassId`) ON DELETE CASCADE ON UPDATE CASCADE
);


CREATE TABLE `orderstatus` (
  `OrderStatusId` int NOT NULL,
  `StatusType` varchar(45) NOT NULL,
  `StatusDescription` varchar(45) NOT NULL,
  `isActive` varchar(45) NOT NULL,
  PRIMARY KEY (`OrderStatusId`)
);


CREATE TABLE `ordermaster` (
  `OrderId` int NOT NULL,
  `CustomerId` int DEFAULT NULL,
  `OrderDate` datetime DEFAULT NULL,
  `OrderAmount` decimal(10,0) DEFAULT NULL,
  `Discount` decimal(10,0) DEFAULT NULL,
  `NetAmount` decimal(10,0) DEFAULT NULL,
  `ShippingDate` datetime DEFAULT NULL,
  `ShippingAddressId` int DEFAULT NULL,
  `ShippingSellerId` int DEFAULT NULL,
  `StatusId` int DEFAULT NULL,
  PRIMARY KEY (`OrderId`),
  KEY `OrderCustomerid_idx` (`CustomerId`),
  KEY `OrderShippingAddressId_idx` (`ShippingAddressId`),
  KEY `OrderShippingSellerId_idx` (`ShippingSellerId`),
  KEY `OrderStatusId_idx` (`StatusId`),
  CONSTRAINT `OrderCustomerId` FOREIGN KEY (`CustomerId`) REFERENCES `user` (`UserId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `OrderShippingAddressId` FOREIGN KEY (`ShippingAddressId`) REFERENCES `useraddresses` (`UserAddressId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `OrderShippingSellerId` FOREIGN KEY (`ShippingSellerId`) REFERENCES `seller` (`SellerId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `OrderStatusId` FOREIGN KEY (`StatusId`) REFERENCES `orderstatus` (`OrderStatusId`) ON DELETE CASCADE ON UPDATE CASCADE
);


CREATE TABLE `orderdetails` (
  `OrderId` int DEFAULT NULL,
  `MedicineId` int DEFAULT NULL,
  `MedicinePrice` decimal(10,0) DEFAULT NULL,
  `MedicineQuantity` int DEFAULT NULL,
  `MedicineDiscount` decimal(10,0) DEFAULT NULL,
  `IsActive` tinyint DEFAULT '0',
  KEY `OrderDetailId_idx` (`OrderId`),
  KEY `OrderMedicineId_idx` (`MedicineId`),
  CONSTRAINT `OrderDetailId` FOREIGN KEY (`OrderId`) REFERENCES `ordermaster` (`OrderId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `OrderMedicineId` FOREIGN KEY (`MedicineId`) REFERENCES `medicinemaster` (`MedicineId`) ON DELETE CASCADE ON UPDATE CASCADE
);


CREATE TABLE `sellermedicinemaster` (
  `SellerId` int DEFAULT NULL,
  `MedicineId` int DEFAULT NULL,
  `Quantity` int DEFAULT '0',
  `Discount` decimal(10,0) DEFAULT '0',
  KEY `SellerId_idx` (`SellerId`),
  KEY `MedicineId_idx` (`MedicineId`),
  CONSTRAINT `MedicineId` FOREIGN KEY (`MedicineId`) REFERENCES `medicinemaster` (`MedicineId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `SellerMedicineId` FOREIGN KEY (`SellerId`) REFERENCES `seller` (`SellerId`) ON DELETE CASCADE ON UPDATE CASCADE
);


CREATE TABLE `shoppingcart` (
  `ShoppingCartId` int NOT NULL,
  `CustomerId` int NOT NULL,
  `Date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `MedicineId` int NOT NULL,
  `Quantity` int NOT NULL DEFAULT '1',
  `Price` decimal(10,0) NOT NULL,
  `Active` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`ShoppingCartId`),
  KEY `CustomerId_idx` (`CustomerId`),
  KEY `MedicineId_idx` (`MedicineId`),
  CONSTRAINT `CartMedicineId` FOREIGN KEY (`MedicineId`) REFERENCES `medicinemaster` (`MedicineId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `CustomerId` FOREIGN KEY (`CustomerId`) REFERENCES `user` (`UserId`) ON DELETE CASCADE ON UPDATE CASCADE
);


CREATE TABLE `prescription` (
  `PrescriptionId` int NOT NULL,
  `PrescriptionUserId` int NOT NULL,
  `PrescriptionImageUrl` varchar(100) NOT NULL,
  `PrescriptionUploadedDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`PrescriptionId`),
  KEY `PrescriptionUserId_idx` (`PrescriptionUserId`),
  CONSTRAINT `PrescriptionUserId` FOREIGN KEY (`PrescriptionUserId`) REFERENCES `user` (`UserId`) ON DELETE CASCADE ON UPDATE CASCADE
);


