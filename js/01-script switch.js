
const stars = 3;
let price = 0;

switch (stars) {
    case 1:
        price = 20;
        break;

    case 2:
    case 3:
    case 4:
        price = 50;
        break;

    case 5:
        price = 50;
        break;

    defoult:
    console.log('takogo kolichestva zvezd net');
}
console.log(price);