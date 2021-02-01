'use strict';

let money = 40000;
money = prompt('Ваш месячный доход ?');
console.log(Number(money));

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую (пример: Квартплата, проездной, кредит)');
console.log(addExpenses.toLocaleLowerCase());

let income = 'Фриланс';

let deposit = (confirm('Есть ли у вас депозит в банке?'));
console.log(Boolean(deposit));

let expenses1 = prompt('Введите обязательную статью расходов?' , 'бензин, коммуналка');
let amount1 = prompt('Во сколько это обойдется', 8000);
let expenses2 = prompt('Введите  еще одну статью расходов?' , 'еда , проезд');
let amount2 = prompt('Во сколько это обойдется', 6000);
let budgetMonth = ('бюджет за месяц' + (money - amount1 - amount2));
console.log(budgetMonth);

let mission = 'цель 300000 рублей';

let period = '6 месяцев';
let budGetDay = 10000;
budGetDay *= 30;


console.log(income);

console.log(addExpenses.length);
console.log(period + mission);

console.log(addExpenses.split(','));
console.log('доход за месяц', budGetDay)