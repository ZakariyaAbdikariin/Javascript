let age = 7;

switch (age) {

    case 0:
    case 1:
    case 2:
    case 3:
        console.log("You are a toddler.");
        break;

    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
        console.log("You are a teenager.");
        break;

    case 18:
    case 19:
    case 20:
    case 21:
        console.log("You are an adult.");
        break;

    default:
        console.log("You are not an adult.");
}