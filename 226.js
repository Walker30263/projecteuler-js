// This problem is just calculus

function s(x) {
    return Math.abs(Math.floor(x+0.5)-x);
}

//approximate Blancmange function by summing from n = 0 to n = 50
function blancmange(x) {
    let accumulator = 0;

    for (let n = 0; n <= 50; n++) {
        accumulator += s((2**n)*x)/((2**n))
    }

    return accumulator;
}

//we are trying to find the area underneath the Blancmange function but above the lower half of the circle
function lowerHalfOfCircle(x) {
    return (-Math.sqrt((1/16)-((x-(1/4))**2))+(1/2));
}

function findFirstIntersection() {
    let x = 0;
    let step = 0.0000001;
    while (blancmange(x) < lowerHalfOfCircle(x)) {
        x += step;
    }

    return x;
}

let firstIntersection = findFirstIntersection();

function findSecondIntersection() {
    let x = firstIntersection;
    let step = 0.000001;
    while (blancmange(x) > lowerHalfOfCircle(x)) {
        x += step;
    }

    return x;
}

let secondIntersection = findSecondIntersection();

//Riemann sum
function integrate() {
    let accumulator = 0;
    let step = 0.00001;

    let x = firstIntersection;


    while (x < secondIntersection) {
        accumulator += (blancmange(x)-lowerHalfOfCircle(x))*step;
        x += step;
    }

    return accumulator;
}

let answer = integrate();
console.log(answer.toFixed(8)); //round to 8 decimal places