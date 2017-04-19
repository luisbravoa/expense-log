
let categories = require('./data/categories.json'); 
let expenseData = require('./data/expenses.json'); 

let expenses = [];


// rent, water, electriciy, internet, cable, phone bill, 

// grosuries, spending, restaurant, transportation, 

// savings, gifts, repairs

function generateExpenses (length){
    for(let i = 0; i < length; i++){
        expenses.push(generateExpense(i));
    }
    console.log(expenses)
}

function generateExpense (id){
    let expenseBase = expenseData[randomIntFromInterval(0, expenseData.length-1)];

    let newExpense = Object.assign({}, expenseBase);

    newExpense.id = id;
    newExpense.date = new Date().toISOString();
    return newExpense;
}

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

generateExpenses(100);


module.exports = {
    categories,
    expenses
};