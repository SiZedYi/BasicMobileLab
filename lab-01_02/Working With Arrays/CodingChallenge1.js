const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const checkDogs =  (dogsJulia, dogsKate) => {
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0, 1);
    dogsJuliaCorrected.splice(-2);
    const dogs = [...dogsJuliaCorrected, ...dogsKate];
    dogs.forEach((dog, i) => {
        if(dog >= 3){
            console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
        } else {
            console.log(`Dog number ${i + 1} is still a puppy 🐶`);
        }
    });
}

checkDogs(dogsJulia, dogsKate);