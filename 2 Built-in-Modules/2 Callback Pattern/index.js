function greet(name) {
    console.log(`Hello ${name}`);
}

function hightOrderFunction(callback) {
    const name = 'Ash';
    callback(name);
}


hightOrderFunction(greet);