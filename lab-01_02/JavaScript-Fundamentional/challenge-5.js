const data1 = {
    Dolphins: [44,23,71],
    Koalas: [65,54,49]
}

const data2 = {
    Dolphins: [85,54,41],
    Koalas: [23,34,27]
}
const calcAverage= (scores)=> {
    const sum =0;
    const total = scores.reduce((sum,score)=> sum + score)
    return total / scores.length
}

function checkWinner(avgDolhins, avgKoalas) {
    if (avgDolhins > avgKoalas) 
        return `Dolhins win (${avgDolhins} vs. ${avgKoalas})`
    else if(avgDolhins < avgKoalas)
        return `Koalas win (${avgKoalas} vs. ${avgDolhins})`
    return ''
}

console.log(checkWinner(calcAverage(data1.Dolphins), calcAverage(data1.Koalas)));
console.log(checkWinner(calcAverage(data2.Dolphins), calcAverage(data2.Koalas)));
