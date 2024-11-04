const bills =[125,555,44]

const calcTip =(bill)=> {
    return bill>=50 && bill<=300 ? 0.15 : 0.2
}
console.log(calcTip(100));

const tips = [...bills.map((bill)=> calcTip(bill))]
const total = [...bills.map((bill)=> bill+ calcTip(bill))]
console.log(tips);
console.log(total);
