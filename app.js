let money = +prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD');

const appDate = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeDate: time,
    savings: false,
}

for(let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдется?', '');

    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a!= '' && b != '' && a.length < 50) {
        console.log('done');
        appDate.expenses[a] = b;
    } else {

    }
}

appDate.moneyPerDay = appDate.budget / 30;

alert('Ежедневный бюджет: ' + appDate.moneyPerDay);

if(appDate.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (appDate.moneyPerDay > 100 && appDate.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
} else if (appDate.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка')
}
