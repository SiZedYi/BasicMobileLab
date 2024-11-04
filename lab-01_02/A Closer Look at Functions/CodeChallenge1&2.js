const poll = {
    registerNewAnswer:() => {
        let str = 'What is your favourite programming language?';
        str += '\n0: JavaScript';
        str += '\n1: Python';
        str += '\n2: Rust';
        str += '\n3: C++';
        const answer = Number(prompt(str));
        if (answer >= 0 && answer <= 3) {
            poll.answers[answer]++;
        }
    },
    answers: new Array(4).fill(0),
    displayResults:(type = 'array') => {
        if (type === 'array') {
            console.log(poll.answers);
        } else if (type === 'string') {
            console.log(`Poll results are ${poll.answers.join(', ')}`);
        }
        console.log(type)
    }
}

window.onload = () => {
    document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer);
    document.querySelector('.results').addEventListener('click', () => poll.displayResults('string'));
// Challenge 2
    const header = document.querySelector("h1");
    header.style.color = "red";
    // tim den the h1 r doi mau styles
}