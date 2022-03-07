$.Admin(G3)
    AdminId             nvarchar(20) (PK),
    AdminName           nvarchar(20),
    AdminPassword       nvarchar(100) NOT NULL , 

1. UserAccount(Customer)
    UserId          nvarchar(20) NOT NULL (PK ) auto,
    FullName        nvarchar (100) NOT NULL ,
    EmailID         nvarchar (50) NOT NULL ,
    ContactNo       nvarchar (50) NULL ,
    Password        nvarchar (100) NOT NULL ,
    Status          bit NOT NULL (default active) 

2. UserAddress(Customer)
	UserAddress_Id     bigint NOT NULL , (PK ) auto
    Name               nvarchar (100) NOT NULL ,
    Mobile_no          nvarchar (50) NULL ,
    PinCode            int(6) NOT NULL
    Area               nvarchar (300)NOT NULL
    City               nvarchar (50)NOT NULL
    State              nvarchar (50)NOT NULL
    Landmark           nvarchar (50)
    UserAccount        nvarchar(20)(FK ,UserAccount(UserId))
	

3.SellerAccount
    SellerId        nvarchar(20) NOT NULL (FK)
    EmailId         nvarchar (50) NOT NULL,
    Password        nvarchar (100) NOT NULL,
    Status          bit NOT NULL  (default deactive) 

4.SellerInfo
    SellerInfo_Id      bigint NOT NULL,
    ShopName           nvarchar (100) NOT NULL ,
    ShopRegistrationNo bigint NOT NULL,
    ShopContactNo      nvarchar (50) NULL ,
    ShopAddress        nvarchar (100) NOT NULL ,
    ShopAreaPincode    bigint NOT NULL,
    SellerAccount      nvarchar(20)(FK ,SellerAccount(SellerId))

5. ProductMaster(Medicine)
    ProductId       bigint NOT NULL (PK)
    ProductName     nvarchar(100) NOT NULL ,
    PurchasePrice 	float NOT NULL,
    MRP			    float NOT NULL,
    OurPrice 		float NOT NULL,
    BrandId 		int   NOT NULL,(FK, Brand(BrandId))
    CategoryId 		bigint NOT NULL,(FK CategoryMaster(CMId) )
    Composition Id	bigint NOT NULL,(FK, ProductType(TypeId))
    Quantity		bigint NOT NULL,
    Description 	nvarchar (500) NULL,
    Image1 			nvarchar (50) NULL,
    Image2			nvarchar (50) NULL,
    ValuePoint 		bigint NOT NULL

6. ProductType
    TypeId			 bigint NOT NULL ,(PK)
    TypeName 		 nvarchar (50) NOT NULL ,
    Description		 nvarchar (500) NULL ,
    Active			 bit NOT NULL,



8. Wishlist
    WishListid 		bigint NOT NULL ,
    CustomerUserId	nvarchar(20) NULL ,(FK, UserAccount(UserId))
    ProductId 		bigint NULL ,(FK, ProductMaster(ProductId))
    InsertDate 		datetime NULL

9. ShopingCart
    ShopingId		bigint NOT NULL ,(PK)
    CustomerUserId 	nvarchar(20) NULL ,(FK, , UserAccount(UserId))
    SessionId 		nvarchar (50) NOT NULL ,
    Date 			datetime NOT NULL ,
    ProductId 		bigint NOT NULL ,
    Quantity		bigint NOT NULL ,
    Price 			float NOT NULL ,
    Active 			bit NOT NULL

10.OrderMaster
    OrderId 		    bigint NOT NULL ,(PK)
    CustomerUserId 	    nvarchar(20) NOT NULL ,(FK, , UserAccount(UserId))
    OrderDate 		    datetime NOT NULL ,
    OrderAmount 	    float NOT NULL ,
    Discount 		    float NULL ,
    NetAmount           float NOT NULL ,
    ShippingDate 	    datetime NOT NULL ,
    ShippingAddressID   bigint NOT NULL ,(FK, , UserAddress( UserAddress_Id))
    ShippingSellerID    bigint NOT NULL ,(FK, , SellerAccount( SellerId))
    StatusID 		    tinyint NULL ,
    Active 			    bit NOT NULL

11. OrderDetails
    OrderId 		bigint NOT NULL ,(PK)
    ProductId 		bigint NOT NULL , ,(FK, ProductMaster(ProductId)
    ProductPrice 	float NOT NULL ,
    Quantity 		bigint NOT NULL ,
    Discount 		float NULL ,
    Active 			bit NOT NULL

12. OrderStatus
    StatusId 		bigint NOT NULL ,(PK)
    StatusType 		nvarchar (50) NOT NULL ,
    Description		nvarchar (500) NULL ,
    Active 			bit NOT NULL

-- 13. app Review  
--     ReviewId 		bigint NOT NULL ,(PK)
--     UserId 			nvarchar(20) NOT NULL , (FK, , UserAccount(UserId))
--     ReviewText 		nvarchar (500) NULL ,
--     Active 			bit NOT NULL



15. FAQ
    FAQ_Id 			int (PK)
    FAQ_Que 		nvarchar(200)
    FAQ_Ans 		nvarchar(2000)
    Active 			bit

16. Query (helpdesk)
    QueryID 		int (PK)
    First_Name 		nvarchar(50)
    Last_name 		nvarchar(50)
    Email_id 		nvarchar(50)
    Subject 		nvarchar(100)
    QueryText 		nvarchar(MAX)