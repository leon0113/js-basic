for (let i = 0; i < 6; ++i) {
    console.log(i);
}

function consoleNumber(i) {
    if (i > 5) {
        return;
    }
    console.log(i);
    consoleNumber(i + 1);
}
consoleNumber(1);


