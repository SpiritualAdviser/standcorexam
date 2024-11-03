import { itemsArray } from "./items.js";

const tradeTax = {
    brockerTax: 1.68,
    saleTax: 2.025
}

const itemsTable = document.getElementById('items');
const calculateButton = document.getElementById('calculateButton');
const tableBody = itemsTable.children[2];

const calculatePrice = (item, rowNameItem, rowBuy, rowSale) => {
    let rezaltBuy = 0;
    let rezaltSale = 0;

    for (let nameMinerals in item.minerals) {

        const priceMinerals = document.getElementById(nameMinerals);
        const buy = Number(priceMinerals.children.buy.value);
        const sale = Number(priceMinerals.children.sale.value);

        rezaltBuy = rezaltBuy + (item.minerals[nameMinerals] * buy);
        rezaltSale = rezaltSale + (item.minerals[nameMinerals] * sale);
    }
    // sum - tax for trade
    rezaltBuy = rezaltBuy - (rezaltBuy / 100 * (tradeTax.saleTax + tradeTax.brockerTax));
    rezaltSale = rezaltSale - (rezaltSale / 100 * tradeTax.saleTax);

    rowNameItem.innerText = item.name;
    rowBuy.innerText = rezaltBuy.toFixed(2);
    rowSale.innerText = rezaltSale.toFixed(2);
    return
}

const createTable = () => {
    tableBody.innerHTML = '';

    itemsArray.forEach(item => {

        let line = document.createElement('tr');
        let rowNameItem = document.createElement('td');
        let rowBuy = document.createElement('td');
        let rowSale = document.createElement('td');

        line.className = "thLine";
        rowNameItem.className = "thLine";
        rowBuy.className = "thLine";
        rowSale.className = "thLine";

        calculatePrice(item, rowNameItem, rowBuy, rowSale);

        line.append(rowNameItem);
        line.append(rowBuy);
        line.append(rowSale);
        tableBody.append(line);
    });
    return
}

calculateButton.onclick = createTable;
