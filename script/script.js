'use strict';

let money = +prompt('Ваш месячный доход?', 40000);


let income = 'фриланс';


let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
    'бензин,коммуналка,обед');


let deposit = confirm('Есть ли у вас депозит в банке?');

let mission = 100000; 
let period = 12; // число от 1 до 12 (месяцев)
// console.log(`Период равен ${period} месяцев.
//     Цель заработать ${mission} рублей/долларов/гривен/юани`);


let expenses1 = prompt('Введите обязательную статью расходов?', 'бензин');
let amount1 = +prompt('Во сколько это обойдется?', 10000);
let expenses2 = prompt('Введите обязательную статью расходов?', 'садик, продукты');
let amount2 = +prompt('Во сколько это обойдется?', 5000);


const getExpensesMonth = function() {
    return amount1 + amount2;
};


const getAccumulatedMonth = (moneyMonth, expensesMonth) => {
    if (!moneyMonth) { moneyMonth = 0; }
    return moneyMonth - expensesMonth;
};

const accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth());


const getTargetMonth = (myMiss, budgetMonth) => {
    return Math.ceil(myMiss / budgetMonth);
};


const budgetDay = accumulatedMonth / 30;

const showTypeOf = (data) => {
    console.log(data, typeof (data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);


console.log('Обязательные расходы за месяц: ', getExpensesMonth());


console.log(addExpenses.toLocaleLowerCase().split(', '));


console.log(`Цель будет достигнута за: ${getTargetMonth(mission, accumulatedMonth)} месяцев`);


console.log('Бюджет на день: ', Math.floor(budgetDay));


let getStatusIncome = function(){
if (budgetDay > 1200) {
  return('У вас высокий уровень дохода');
} else if (budgetDay < 1200 && budgetDay > 600) {
  return ('У вас средний уровень дохода');
}else if (budgetDay < 600 && budgetDay > 0) {
  return ('К сожалению у вас уровень дохода ниже среднего')
 }else if (budgetDay < 0) {
  return ('Что то пошло не так');
  } 
};
console.log(getStatusIncome())


