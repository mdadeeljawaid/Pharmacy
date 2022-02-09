$.Admin(G3)
    AdminId             nvarchar(20) (PK)
    AdminDegignation    nvarchar(50) NOT NULL (FK)
    AdminPassword       nvarchar(100) NOT NULL ,
    AdminAuthority      nvarchar(100) NOT NULL (FK)
    Status              bit NOT NULL

1. UserAccount(Customer)
    UserId          nvarchar(20) NOT NULL (PK )
    EmailID         nvarchar (50) NOT NULL ,
    Password        nvarchar (100) NOT NULL ,
    -- LastPassword/ForgotPassword nvarchar(100) NOT NULL,
    Status          bit NOT NULL

2. UserInfo
	UserInfo_Id     bigint NOT NULL ,  auto
	FullName        nvarchar (100) NOT NULL ,
	-- DOB          datetime NULL ,
	ContactNo       nvarchar (50) NULL ,
	-- Gender       nvarchar (10) NOT NULL ,
	AccountId       nvarchar(20)(FK ,UserAccount(UserId))
	Description     nvarchar (500) NULL ,

3.SellerAccount
    SellerId        nvarchar(20) NOT NULL (FK)
    EmailId         nvarchar (50) NOT NULL,
    Password        nvarchar (100) NOT NULL,
    -- LastPassword/ForgotPassword nvarchar(100) NOT NULL,
    Status          bit NOT NULL
4.SellerInfo
    SellerInfo_Id   bigint NOT NULL,
    ShopName        nvarchar (100) NOT NULL ,
    ShopRegistrationNo bigint NOT NULL,
    ShopContactNo   nvarchar (50) NULL ,
    ShopAddress     nvarchar (100) NOT NULL ,
    ShopAreaPincode bigint NOT NULL

5. ProductMaster(Medicine)
    ProductId       bigint NOT NULL (PK)
    ProductName     nvarchar(100) NOT NULL ,
    PurchasePrice 	float NOT NULL ,
    MRP			    float NOT NULL ,
    OurPrice 		float NOT NULL ,
    BrandId 		int   NOT NULL ,(FK, Brand(BrandId))
    CategoryId 		bigint NOT NULL ,(FK CategoryMaster(CMId) )
    Composition Id	bigint NOT NULL ,(FK, ProductType(TypeId))
    Quantity		bigint NOT NULL ,
    Description 	nvarchar (500) NULL ,
    -- RatingId 	bigint NOT NULL , ,(FK, RatingCountId(RatingId))
    Image1 			nvarchar (50) NULL
    Image2			nvarchar (50) NULL
    ValuePoint 		bigint NOT NULL

6. ProductType
    TypeId			 bigint NOT NULL ,(PK)
    TypeName 		 nvarchar (50) NOT NULL ,
    Description		 nvarchar (500) NULL ,
    Active			 bit NOT NULL,
    Active			 bit NOT NULL,

-- 7.RatingCount  seller rating / app rating
--     RatingCountId	bigint NOT NULL ,(PK)
--     UserId 			nvarchar(20) NOT NULL ,(FK ,UserAccount(UserId))
--     RateCount 		bigint NOT NULL
--     Description 		nvarchar (500) NULL ,

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
    OrderId 		bigint NOT NULL ,(PK)
    CustomerUserId 	nvarchar(20) NOT NULL ,(FK, , UserAccount(UserId))
    OrderDate 		datetime NOT NULL ,
    OrderAmount 	float NOT NULL ,
    Discount 		float NULL ,
    NetAmount       float NOT NULL ,
    ShippingDate 	datetime NOT NULL ,
    ShippingAddressID   bigint NOT NULL ,
    BillingAddressID    bigint NOT NULL ,
    StatusID 		tinyint NULL ,
    Active 			bit NOT NULL

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

-- 13. Review  
--     ReviewId 		bigint NOT NULL ,(PK)
--     ProductId 		bigint NOT NULL , ,(FK, ProductMaster(ProductId)
--     UserId 			nvarchar(20) NOT NULL , (FK, , UserAccount(UserId))
--     ReviewText 		nvarchar (500) NULL ,
--     Active 			bit NOT NULL

14.Query (helpdesk)
    QueryID 		int (PK)
    First_Name 		nvarchar(50)
    Last_name 		nvarchar(50)
    Email_id 		nvarchar(50)
    Subject 		nvarchar(100)
    QueryText 		nvarchar(MAX)

-- 15.Contact_Us (equal 14 Query)
--     Contact_id		 int(PK)
--     Contact_Person_Name	 nvarchar(50)
--     Contact_Email		 nvarchar(50)
--     Address 		    nvarchar(1000)
--     Enable 			 bit

16.Resource_Master(Inventry)
    Resource_id 		int(PK)
    Resource_name 		nvarchar(50)
    Discription 		nvarchar(100)
    Resource_url 		nvarchar(50)
    Enabled 		    bit

-- 17.Employee_Master
--     Employee_Code 	varchar(20)(PK)
--     Employee_Name 	nvarchar(50)
--     Email_login 		nvarchar(80)
--     Password 		nvarchar(50)
--     State 			bigint (FK,StateMaster(StateId))
--     City 			bigint (FK,CityMaster(CityId))
--     Address 			nvarchar(300)
--     Mobile_no 		nvarchar(10)

18. FAQ
    FAQ_Id 			int (PK)
    FAQ_Que 		nvarchar(200)
    FAQ_Ans 		nvarchar(2000)
    Active 			bit