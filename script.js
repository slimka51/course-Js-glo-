let budjet = +prompt("Ваш бюджет?");
let nameShop = prompt("Название вашего магазина?");
let time = 19;

let mainList = {
    cash : budjet,
    shop : nameShop,
    shopGoods : [],
    employers : {},
    open : false
}


for (let i = 0; i < 5; i++) {

    let a = prompt("Какой тип товаров будем продавать?");

    if((typeof(a)) === 'string' && (typeof(a)) === null && a != '' && a.length < 50) {
        console.log('Все верно!');
        mainList.shopGoods[i] = a;
    } else {

    }
}

/* let k = 0;
while (k < 5) {
    let x = prompt("Какой тип товаров будем продавать?");
    mainList.shopGoods[k] = x;
    k++;
} */
/* let k = 0;
do {
    let x = prompt("Какой тип товаров будем продавать?");
    mainList.shopGoods[k] = x;
    k++;
} while (k < 5); */



if (time < 0) {
    console.log('Такого просто не может быть');
} else if (time > 8 && time < 20) {
    console.log('Время работать!');
    } else if (time < 24) {
        console.log('Уже слишком поздно!');
    } else {
        console.log('В сутках только 24 часа!');
    }


alert(mainList.cash / 30);

console.log(mainList);