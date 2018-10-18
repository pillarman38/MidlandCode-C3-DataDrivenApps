let fetch = require("node-fetch");

let callType = process.argv[2]

switch(callType.toLowerCase()){
    case 'xrate':
    callXRate(process.argv[3], process.argv[4]);
    break;
    case 'stock': 
    callStock(process.argv[3]);
    break;
    default: 
    console.log("\x1b[31m", "Invalid option provided", "\x1b[37m", "Please provide one of the following:")
    console.log("\x1b[32m",'xrate: ', "\x1b[37m", 'Followed by two currency symbols to see live exchange rate (all space separated)')
    console.log("\x1b[33m", 'OR');
    console.log("\x1b[32m", 'stock: ', "\x1b[37m", 'followed by a stock symbol to see current live information.')
}

async function callStock(symbol){
const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=DQXD1V0JETLYTH2O`)
let json = await response.json();
console.log(json);
}

async function callXRate(from, to){
    const response = await fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${from}&to_currency=${to}&apikey=DQXD1V0JETLYTH2O`)
    let json = await response.json()
    console.log(json);
}