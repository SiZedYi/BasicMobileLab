const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const totals = []
const tips = []

const calcTip =(bill)=> {
    return bill>=50 && bill<=300 ? 0.15 : 0.2
}

bills.forEach(bill => {
    const tip = calcTip(bill)
    tips.push(tip)
    totals.push(bill + tip)
})

const calcAverage= (arr) => {
    var sum =0
    arr.forEach(ele => sum = sum + ele)
    return sum/ arr.length
    
}

console.log(tips);
console.log(totals);
console.log(calcAverage(totals));


