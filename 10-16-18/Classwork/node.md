## Let's put some node work into practice!

1. To start we're going to make a simple node program for some back to basics.
    * Create a file with a function that takes two numbers as arguments. 
    * Create a main file that can be called with two arguments at run time.
    * If two numbers aren't provided, send a message to the console telling the user what went wrong.
    * If two numbers ARE provided, return a random number between those two.

1. We're going to write a command line API caller.
    * Set up a node file that will take in several arguments.
    * Snag an API key from [here](https://www.alphavantage.co/documentation/)
    * Take the first argument they put in. It should be one of the following, otherwise give them an error: 
        1. ExchangeRate
            * Will take two arguments: From Currency and To Currency.
            * Accesses [Currency Exchange](https://www.alphavantage.co/documentation/#currency-exchange)
            * Display the relevant data based off inputs
        2. StockPrice
            * Will take a Stock Symbol and return the [Latest Price](https://www.alphavantage.co/documentation/#latestprice)
            * If no quote is returned, let the user know something went wrong.
            * For added effect, have any change in price be shown in red for a loss, or green for an increase.