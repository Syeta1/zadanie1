let money = prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD');

let costs = prompt('Введите обязательную статью расходов в этом месяце'),
willCost = prompt('Во сколько обойдется?');

const appDate = {
    money,
    time,
    expenses: {
        costs,
        willCost,
    },
    optionalExpenses: {

    },
    income: [],
    savings: false,
}

let resultMoney = money / 30
alert(`Ваш бюджет на 1 день ${resultMoney}руб.`)
console.log(appDate)
console.log(expenses)
