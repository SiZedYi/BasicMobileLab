function printForecast(arr) {
    let result = '... ';
    
    for (let i = 0; i < arr.length; i++) {
        result += `${arr[i]}°C in ${i + 1} day${i + 1 > 1 ? 's' : ''} ... `;
    }
    
    console.log(result);
}

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

printForecast(data1); 
printForecast(data2); 
