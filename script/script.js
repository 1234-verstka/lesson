'use strict';


let money = prompt('Ваш месячный доход?', '40000');
console.log('type money: ', typeof Number (money));

let income = 'фриланс';
console.log('type income: ', typeof income);

let addExpenses =
    prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'интернет, такси, коммуналка');
   
let deposit = confirm('Есть ли у вас депозит в банке?');
console.log('type deposit: ', typeof deposit);
let mission = 2000000; 
console.log('addExpenses: ', addExpenses.length);
let period = 12; 
console.log(`Период равен ${period} месяцев.
    Цель заработать ${mission} рублей`);
console.log(addExpenses.toLocaleLowerCase().split(', '));

let expenses1 = prompt('Введите обязательную статью расходов?', 'продукты');
let amount1 = prompt('Во сколько это обойдется?', '10000');
let expenses2 = prompt('Введите обязательную статью расходов?', 'бензин, транспорт');
let amount2 = prompt('Во сколько это обойдется?', '5000');
let budgetMonth = Number(money) - (Number(amount1) + Number(amount2));
console.log('Бюджет на месяц: ', budgetMonth);
console.log(`Цель будет достигнута за: ${Math.ceil(mission / budgetMonth)} месяцев`);
let budgetDay = budgetMonth / 30;
console.log('Бюджет на день: ', Math.floor(budgetDay));

if (budgetDay > 1200) {
  console.log('У вас высокий уровень дохода');
} 
else if (budgetDay < 1200 && budgetDay > 600) {
  console.log('У вас средний уровень дохода');
}
else if (budgetDay < 600 && budgetDay > 0) {
  console.log('К сожалению у вас уровень дохода ниже среднего')
 }
else if (budgetDay < 0) {
  console.log('Что то пошло не так');
} 