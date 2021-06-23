let budget,
    nameShop,
    time,
    price

function start() {
    budget = +prompt("Ваш бюджет?", '');

    while(isNaN(budget) || budget == "" || budget == null) {
        budget = +prompt("Ваш бюджет?", '');
    }

    nameShop = prompt("Название вашего магазина?", '').toUpperCase();
    time = 19;
}

// start();

let mainList = {
    cash: budget,
    shop: nameShop,
    shopGoods: [],
    employers: {},
    open: false,
    discount: true,
    shopItems: [],
    chooseGoods: function chooseGoods() {
            for (let i = 0; i < 5; i++) {
        
                let a = prompt("Какой тип товаров будем продавать?", '');
        
                if((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
                    console.log('Все верно!');
                    mainList.shopGoods[i] = a;
                } else {
                    i = i - 1;
                }
            }
    },
    
    workTime: function workTime(time) {
            if (time < 0) {
                console.log('Такого просто не может быть');
            } else if (time > 8 && time < 20) {
                console.log('Время работать!');
                mainList.open = true;
                } else if (time < 24) {
                    console.log('Уже слишком поздно!');
                } else {
                    console.log('В сутках только 24 часа!');
                }
    },
    
    dayBudget: function dayBudget() {
            alert("Ежедневный бюджет " + mainList.cash / 30);
    },

    sale: function sale(price) {
            if (mainList.discount == true) {
                price = price * 80/100;
            }
    },

    employers: function employers() {
            for (let i = 0; i < 4; i++) {
                let name = prompt("Введите имя сотрудника", ''); 
        
                if((typeof(name)) === 'string' && (typeof(name)) != null && name != '' && name.length < 50) {
                    mainList.worker[i] = name;
                } else {
                    i = i - 1;
                }
                
            }
    },
    chooseShopItems: function chooseShopItems() {
        let items = prompt("Перечислите через запятую товары", "");

        if((typeof(items)) === 'string' && (typeof(items)) != null && items != ''){
            mainList.shopItems = items.split(',');
            mainList.shopItems.push(prompt("Подождите, еще ", ""));
            mainList.shopItems.sort();
            mainList.shopItems.forEach(function(index, i, arr) {
                console.log("У нас вы можете купить: " + (i + 1) + ' ' + index);
            }) 
        } else {
           this.chooseShopItems();
        }       

    }
}

console.log(mainList);

for(keys in mainList) {
    console.log("Наш магазин включает в себя: " + keys);
}












