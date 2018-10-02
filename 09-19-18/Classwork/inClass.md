## We're picking up where we left off from yesterday with our pizza App

Utilize files in 09-19-18/Classwork/app as a starting point
### Basic File Structure

* Order Component
    * Utilizes an OrderService to add Toppings / Menu Items
    * Stores items on adding to localStorage for easy retrieval
    * Has two child components
        1. Selections Component
            * Can select toppings / items / etc.
            * Shares values with Parent through input and output
        2. Payment Component
            * Calculates Costs with tax
            * Takes payment data (fake) and sends it to a service
* About Component - Just info with no functionality
* Menu Component - All the Menu Items, no functionality
* Contact Component
    * Has a field for a  user to submit contact information
    * Connects with a ContactService (doesn't actually connect to an API) that sends data to a "database"
