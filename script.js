let budjet = +prompt("Ваш бюджет?");
let nameShop = prompt("Название вашего магазина?");

let mainList = {
    cash : budjet,
    shop : nameShop,
    shopGoods : [],
    employers : {},
    open : false
}

mainList.shopGoods[0] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[1] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[2] = prompt("Какой тип товаров будем продавать?");

alert(mainList.cash / 30);