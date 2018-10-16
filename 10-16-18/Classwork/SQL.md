## Time to put some of the SQL Work into Practice!

 Head on over to the [SQL Practice Site](https://www.w3schools.com/sql/trysql.asp?filename=trysql_desc). This site has prebuilt tables that will work out quite nicely for what we want to do.

 Rather than have you try to hop back and forth, here's an overview of each of the tables:

 |CUSTOMERS|||||||
 |-|-|-|-|-|-|-|
 |CustomerID|CustomerName|ContactName|Address|City|PostalCode|Count|

 
 |CATEGORIES|||
 |-|-|-|
 |CategoryID|CategoryName|Description|

 |EMPLOYEES||||||
 |-|-|-|-|-|-|
 |EmployeeID|LastName|FirstName|BirthDate|Photo|Notes|

 |ORDERDETAILS||||
 |-|-|-|-|
 |OrderDetailID|OrderID|ProductID|Quantity

 |ORDERS|||||
 |-|-|-|-|-|
 |OrderID|CustomerID|EmployeeID|OrderDate|ShipperID|

 |PRODUCTS||||||
 |-|-|-|-|-|-|
 |ProductID|ProductName|SupplierID|CategoryID|Unit|Price|

 |SHIPPERS|||
 |-|-|-|
 |ShipperID|ShipperName|Phone|

|SUPPLIERS|||||||
 |-|-|-|-|-|-|-|
 |SupplierID|SupplierName|Address|City|PostalCode|Country|



 ## Now that we know our Schema, let's do the following (making sure that the table returns all useful data, not just the bare minimum): 
1. Find all Customers in the USA or Mexico ordered Alphabetically by Customer Name
    * Solution: 
2. Find all Products that cost more than 40
    * Solution: 
3. FInd all Employees born before 1960.
    * Solution: 
4. Find all Products that are Beverages
    * Solution: 
5. Find all Employees Who have ordered something that shipped to Spain
    * Solution: 
6. Find all Orders with a total price over 2000 sorted from most expensive to least expensive.
    * Solution: 