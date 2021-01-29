let money = 40000;
let income = 'Фриланс';
let addExpenses = 'Проезд на такси,Бензин на авто,Коммунальные расходы';
let deposit = true;
let mission =  ' цель 30000 рублей';
let period = '6 месяцев';
let budGetDay = 1000
budGetDay *=  30;

console.log(money);
console.log(income);
console.log(deposit);
console.log(addExpenses.length);
console.log(period + mission);
console.log(addExpenses.toLocaleLowerCase());
console.log(addExpenses.split(','));
console.log('доход за месяц', budGetDay)