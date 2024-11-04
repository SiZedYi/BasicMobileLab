const Mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69
}

const John = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95
}

const calcBMI = (person) => {
    const mass = person.mass
    const height = person.height
    return mass / (height * height)    
}

const checkBMI = (person1, person2)=> {
    const person1BMI = calcBMI(person1).toFixed(2)
    const person2BMI = calcBMI(person2).toFixed(2)

    if(person1BMI > person2BMI )
        console.log(`${person1.fullName}'s BMI (${person1BMI}) is higher than ${person2.fullName}'s (${person2BMI})`);
    else 
    console.log(`${person2.fullName}'s BMI (${person2BMI}) is higher than ${person1.fullName}'s (${person1BMI})`);
}

checkBMI(Mark,John)