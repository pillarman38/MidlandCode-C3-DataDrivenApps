## Time to put some of the SQL Work into Practice!

 Head on over to the [SQL Practice Site](https://www.w3schools.com/sql/trysql.asp?filename=trysql_desc). This site has prebuilt tables that will work out quite nicely for what we want to do.

 Rather than have you try to hop back and forth, here's an overview of each of the tables:

 |CUSTOMERS|||||||
 |-|-|-|-|-|-|-|
 |CustomerID|CustomerName|ContactName|Address|City|PostalCode|Country|

 
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
    ``` SQL
    SELECT * FROM [Customers] 
    WHERE country IN ("Mexico", "USA") 
    ORDER BY Country, CustomerName DESC
    ```
2. Find all Products that cost more than 40
    * Solution: 
    ``` SQL
    SELECT * FROM Products WHERE PRICE > 40
    ```
3. Find all Employees born before 1960.
    * Solution: 
    ``` SQL
    SELECT * FROM Employees WHERE BirthDate <  "1960-01-01"
    ```
4. Find all Products that are Beverages
    * Solution: 
    ``` SQL
    SELECT Products.*, Categories.description FROM Products
    LEFT OUTER JOIN CATEGORIES ON Products.CATEGORYID = CATEGORIES.CATEGORYID
    WHERE Categories.categoryID = 1
    ```
5. Find all Employees Who have ordered something that shipped to Spain
    * Solution: 
    ``` SQL
    SELECT Employees.employeeID, EMPLOYEES.firstname, EMPLOYEES.lastName 
    FROM Employees

    LEFT OUTER JOIN ORDERS ON EMPLOYEES.EMPLOYEEID = ORDERS.EMPLOYEEID
    LEFT OUTER JOIN CUSTOMERS ON CUSTOMERS.CUSTOMERID = ORDERS.CUSTOMERID

    WHERE CUSTOMERS.COUNTRY = "Spain"

    GROUP BY EMPLOYEES.EMPLOYEEID
    ```
6. Find all Orders with a total price over 2000 sorted from most expensive to least expensive.
    * Solution: 
    ``` SQL
    SELECT ORDERDETAILS.ORDERID, SUM(ORDERDETAILS.QUANTITY * PRODUCTS.PRICE) AS TOTALPRICE FROM ORDERDETAILS

    LEFT OUTER JOIN PRODUCTS ON PRODUCTS.PRODUCTID  = ORDERDETAILS.PRODUCTID

    GROUP BY ORDERDETAILS.ORDERID
    HAVING TOTALPRICE > 2000

    ORDER BY TOTALPRICE DESC
    ```