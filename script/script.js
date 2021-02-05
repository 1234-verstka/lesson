'use strict';


const isNumber = (n) => {
  console.log('n: ', n);
  console.log(parseFloat(n));
  console.log(isFinite(n));
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
  income = 'фриланс',
  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
      'садик, такси, коммуналка'),
  deposit = confirm('Есть ли у вас депозит в банке?'),
  mission = 100000,
  period = 12;


do {
  money = prompt('Ваш месячный доход?');
} while (!isNumber(money));

let expenses = [];

const getExpensesMonth = () => {
  let sum = 0;
  for (let i = 0; i < 2; i++) {
      expenses[i] = prompt('Введите обязательную статью расходов?');
      sum += (() => {
          let n = 0;
          do {
              n = prompt('Во сколько это обойдется?');
          } while (!isNumber(n));
          return +n;
      })();
  }
  return sum;
};

let expensesAmount = getExpensesMonth();

const getAccumulatedMonth = (moneyMonth, expensesMonth) => {
  if (!moneyMonth) {
      moneyMonth = 0;
  }
  return moneyMonth - expensesMonth;
};

const accumulatedMonth = getAccumulatedMonth(money, expensesAmount);

const getTargetMonth = (myMiss, budgetMonth) => {
  return Math.ceil(myMiss / budgetMonth);
};

const targetMonth = getTargetMonth(mission, accumulatedMonth);

const budgetDay = accumulatedMonth / 30;

const showTypeOf = (data) => {
  console.log(data, typeof (data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(addExpenses.toLocaleLowerCase().split(', '));
console.log('Обязательные расходы за месяц: ', expensesAmount);


(targetMonth >= 0) ?
  console.log(`Цель будет достигнута за: ${targetMonth} месяцев`) :
  console.log(`Цель не будет достигнута`);

  console.log('Бюджет на день: ', Math.floor(budgetDay));


let getStatusIncome = function () {
  if (budgetDay > 1200) {
    return ('У вас высокий уровень дохода');
  } else if (budgetDay < 1200 && budgetDay > 600) {
    return ('У вас средний уровень дохода');
  } else if (budgetDay < 600 && budgetDay > 0) {
    return ('К сожалению у вас уровень дохода ниже среднего')
  } else if (budgetDay < 0) {
    return ('Что то пошло не так');
  }
};
console.log(getStatusIncome())
