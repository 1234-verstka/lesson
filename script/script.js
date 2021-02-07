'use strict';


const isNumber = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
  start = () => {
      do {
          money = prompt('Ваш месячный доход?', 60000);
      } while (!isNumber(money));
  };

start();

let appData = {
  income: {}, 
  addIncome: [],
  expenses: {}, 
  addExpenses: [], 
  deposit: false, 
  mission: 50000, 
  period: 3,
  budget: +money, 
  budgetDay: 0, 
  budgetMonth: 0,
  expensesMonth: 0,
  asking: () => {
      let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
          'интернет, такси, коммуналка');
      appData.addExpenses = addExpenses.toLowerCase().split(',');
      appData.deposit = confirm('Есть ли у вас депозит в банке?');
      for (let i = 0; i < 2; i++) {
          appData.expenses[prompt('Введите обязательную статью расходов?')] = (() => {
              let n = 0;
              do {
                  n = prompt('Во сколько это обойдется?');
              } while (!isNumber(n));
              return +n;
          })();
         
      }
  },
  getExpensesMonth: () => { 
      appData.expensesMonth = 0;
      for (let elem in appData.expenses) {
          appData.expensesMonth += appData.expenses[elem];
      }
  },
  getBudget: () => { 
      if (!appData.budget) {
          appData.budget = 0;
      }
      appData.budgetMonth = appData.budget - appData.expensesMonth;
      appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },
  getTargetMonth: () => { 
      return Math.ceil(appData.mission / appData.budgetMonth);
  },
  getStatusIncome: () => { 
      return isNaN(appData.budget) ? 'уауы':
          (appData.budget < 0) ? 'Что то пошло не так...' :
          (appData.budget < 600 && budgetDay > 0) ? 'К сожалению у вас уровень дохода ниже среднего' :
          (appData.budget === 600) ? 'У вас почти средний уровень дохода, но немного не хватает...' :
          (appData.budget < 1200 && budgetDay > 600) ? 'У вас средний уровень дохода' :
          (appData.budget === 1200) ?
          'У вас почти получилось попасть в группу с высокий уровень дохода! Постарайтесь лучше!' :
          'У вас высокий уровень дохода';      
  }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();

const targetMonth = appData.getTargetMonth();

console.log('Расходы за месяц: ', appData.expensesMonth);
console.log(targetMonth >= 0 ?
  `Цель будет достигнута за: ${targetMonth} месяц(а/ев)` :
  'Цель не будет достигнута');
console.log('Уровень дохода: ', appData.getStatusIncome());

console.log('Наша программа включает в себя данные: ');
for (let elem in appData) {
  console.log(elem, appData[elem]);
}





