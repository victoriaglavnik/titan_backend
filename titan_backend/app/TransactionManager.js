class Transaction {
    constructor(date, description, category, amount) {
    this.date = date;
    this.description = description;
    this.category = category;
    this.amount = amount;
}

} 
const transactions = [
    new Transaction('02-13-21', 'car', 'debit', '12000'),
    new Transaction('03-19-21', 'gas', 'credit', '50')
]

function getTransaction(){
console.log(transactions)
 return transactions;
}

module.exports = {getTransaction}

