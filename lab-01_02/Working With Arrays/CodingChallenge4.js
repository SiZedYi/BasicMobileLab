const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
    ];

for (const dog of dogs) {
    dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
}

const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));

const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood).flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recommendedFood).flatMap(dog => dog.owners);

const message = (owners, verb) => {
    return `${owners.join(' and ')}'s dogs eat too ${verb}!`;
}

console.log(message(ownersEatTooMuch, 'much'));
console.log(message(ownersEatTooLittle, 'little'));

const dogEatsExact = dogs.some(dog => dog.curFood === dog.recommendedFood);

const dogEatsOkay = dogs.some(dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1);

console.log("dogEatsExact: " + dogEatsExact);

console.log("dogEatsOkay: " + dogEatsOkay);

const listDogsEatsOkay = dogs.filter(dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1);

console.log(listDogsEatsOkay);

const sortedDogs = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood); 

console.log(sortedDogs);