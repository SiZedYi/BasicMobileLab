let dogs = [5, 2, 4, 1, 15, 8, 3];

const calcAverageHumanAge = (dogs) => {
    return dogs.map(dog => dog <= 2 ? 2 * dog : 16 + dog * 4).filter(age => age >= 18).reduce((acc, age, i, arr) => acc + age / arr.length, 0);
}

console.log(calcAverageHumanAge(dogs));