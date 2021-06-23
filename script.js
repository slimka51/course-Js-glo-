let budget,
    nameShop,
    time,
    price

function start() {
    budget = +prompt("Ваш бюджет?");

    while(isNaN(budget) || budget == "" || budget == null) {
        budget = +prompt("Ваш бюджет?");
    }

    nameShop = prompt("Название вашего магазина?").toUpperCase();
    time = 19;
}

// start();

let mainList = {
    cash: budget,
    shop: nameShop,
    shopGoods: [],
    employers: {},
    open: false,
    discount: true 
}

function chooseGoods() {
    for (let i = 0; i < 5; i++) {

        let a = prompt("Какой тип товаров будем продавать?");

        if((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
            console.log('Все верно!');
            mainList.shopGoods[i] = a;
        } else {
            i = i - 1;
        }
    }
}

// chooseGoods();


/* let k = 0;
while (k < 5) {
    let name = prompt("Какой тип товаров будем продавать?");
    mainList.shopGoods[k] = name;
    k++;
} */
/* let k = 0;
do {
    let name = prompt("Какой тип товаров будем продавать?");
    mainList.shopGoods[k] = name;
    k++;
} while (k < 5); */


function workTime(time) {
    if (time < 0) {
        console.log('Такого просто не может быть');
    } else if (time > 8 && time < 20) {
        console.log('Время работать!');
        } else if (time < 24) {
            console.log('Уже слишком поздно!');
        } else {
            console.log('В сутках только 24 часа!');
        }
}

workTime(-10);

// alert("Ежедневный бюджет " + mainList.cash / 30);

console.log(mainList);

function sale(price) {
    if (mainList.discount == true) {
        price = price * 80/100;
        console.log(price);
    } else {
        console.log(price);
    }
}

sale(500);


let worker = {};

function employers() {
    for (let i = 0; i < 4; i++) {
        let name = prompt("Введите имя сотрудника"); 

        if((typeof(name)) === 'string' && (typeof(name)) != null && name != '' && name.length < 50) {
            worker[i] = name;
        } else {
            i = i - 1;
        }
        
    }
}
employers();

console.log(worker);