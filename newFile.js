function randomJSCode() {
    const operators = ['+', '-', '*', '/'];
    const operands = [Math.random(), Math.random(), Math.random()];
    const operator = operators[Math.floor(Math.random() * operators.length)];

    return `${operands[0]} ${operator} ${operands[1]} ${operator} ${operands[2]}`;
}

console.log(eval(randomJSCode()));
