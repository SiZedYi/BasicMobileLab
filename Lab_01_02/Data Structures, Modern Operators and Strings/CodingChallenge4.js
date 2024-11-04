// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
// THIS TEST DATA (pasted to textarea)
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure
// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅
// HINT 1:
// Remember which character defines a new word.
// HINT 2:
// The solution only needs to convert the variable names written in underscore_case
// to camelCase. There is no need to check for valid variable names.
// Test data:
// console.log(convertVariableName('underscore_case'));
// console.log(convertVariableName('first_name'));
// console.log(convertVariableName('Some_Variable'));
// console.log(convertVariableName('calculate_AGE'));
// console.log(convertVariableName('delayed_departure'));
// Data:
// console.log(convertVariableName('underscore_case'));
// console.log(convertVariableName('first_name'));
// console.log(convertVariableName('Some_Variable'));
// console.log(convertVariableName('calculate_AGE'));
// console.log(convertVariableName('delayed_departure'));
const convertVariableName = (variableName, idx) => {
    const [first, ...rest] = variableName.split("_");
    const camelCase = [
      first.toLowerCase(),
      ...rest.map(
        (word) => word[0].toUpperCase() + word.slice(1).toLowerCase()
      ),
    ].join("");
    return `${camelCase} ${"✅".repeat(idx.length)}`;
  };
window.onload = () => {
  

  const textArea = document.createElement("textarea");
  const button = document.createElement("button");
  button.textContent = "Convert";
  document.body.append(textArea, button);

  button.addEventListener("click", function () {
    const variableNames = textArea.value.split("\n");
    let idx = 1;
    for (let variableName of variableNames) {
        variableName = variableName.trim();
        console.log(convertVariableName(variableName, idx));
      idx++;
    }
  });
};
