#!/usr/bin/env node
import inquirer from "inquirer";

let currencyData:any = {
  USD: 1, 
  EUR: 0.92,
  GBP: 0.79,
  JPY: 151.61,
  AUD: 1.52,
  CAD: 1.36,
  CHF: 0.90,
  CNY: 7.23,
  INR: 83.30,
  PKR: 277.54,
};

const curency = await inquirer.prompt([

{
    name: "from",
    type: "list",
    message: "Select the currency you want to convert from:",
    choices: ["USD","EUR","GBP","JPY","AUD","CAD","CHF","CNY","INR","PKR"]
},
{
    name: "to",
    type: "list",
    message: "Select the currency you want to convert to:",
    choices: ["USD","EUR","GBP","JPY","AUD","CAD","CHF","CNY","INR","PKR"]
},
{name: "amount",
 type: "number",
 message: "Enter the amount you want to convert: "

}
]);

let fromCurrency:any = currencyData[curency.from];
let toCurrency : any = currencyData[curency.to];
let amount1 = curency.amount;
let baseCurency =amount1 / fromCurrency;
 let currencyConvertor = baseCurency * toCurrency;
 console.log(currencyConvertor);