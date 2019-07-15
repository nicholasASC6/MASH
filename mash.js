function mash () {
    return "You will live in a " + getHome() + " and you will have " + getChildrenCount(process.argv[3]) + " kids" + " and you'll drive a " + getCar();
};

console.log(mash());



function getHome () {
    // const place = ["Mansion", "Apartment", "Shack", "House", "Hudson River"];
    // let location = (Math.random() * place.length);
    // let randplaceIndex = Math.floor(location);
    // let randplace = place[randplaceIndex];
    // return randplace;
    let item = process.argv[2];
    return item;
}

// getHome();

function getChildrenCount (ok) {
    if (ok > 50) {
    let numbers = Math.random();
    numbers *= 100;
    numbers = Math.floor(numbers);
    return numbers;
    } else {
        return ok; 
    }
}

// getChildrenCount();


function getCar () {
    const car = ["lambo", "convertible", "box with wheels"];
    let type = (Math.random() * car.length);
    let randcarIndex = Math.floor(type);
    let randcar = car[randcarIndex];
    let dog = process.argc[4];
    car.push(dog);
    return randcar;

};