/*  
1. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
2. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
    від 200 до 300 - знижка буде 3%; 
    від 300 до 500 - 5%;
    від 500 і вище - 7%.
3. Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.
4. Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

*/

// __________1__________

let askNumber = +prompt("Введіть п’ятирозрядне число", 12321);
let arrayList = ("" + askNumber).split("").map(Number);
console.log(arrayList);
console.log(arrayList[0]);
let end = 0;
if (askNumber >= 10000 && askNumber <= 99999) {
    if (arrayList[0] === arrayList[4]) {
        if (arrayList[1] === arrayList[3]) {
            alert("This number is palindrome");
            console.log(arrayList);
        } else {
            alert("This is not a polindrome number");

        }
    } else {
        alert("This is not a polindrome number")
    }
} else {
    alert("This is not a five-digit number");
}


// __________2__________

let buyPrice = +prompt("Please write final price in usd: ", 190);
console.log(buyPrice);


// switch (buyPrice) {
//     case (buyPrice < 200):
//         console.log(`Final price is ${buyPrice}`);
//         alert(`Final price is ${buyPrice}`);
//         break;
//     case (buyPrice >= 200 && buyPrice < 300):
//         discount = (buyPrice / 100) * 3;
//         finalPrice = buyPrice - discount;
//         console.log(`Final price is ${finalPrice}`);
//         alert(`Final price is ${finalPrice}`);
//         break;
//     case (buyPrice >= 300 && buyPrice < 500):
//         discount = (buyPrice / 100) * 5;
//         finalPrice = buyPrice - discount;
//         console.log(`Final price is ${finalPrice}`);
//         alert(`Final price is ${finalPrice}`);
//         break;
//     case (buyPrice >= 500 && buyPrice < undefined):
//         discount = (buyPrice / 100) * 7;
//         finalPrice = buyPrice - discount;
//         console.log(`Final price is ${finalPrice}`);
//         alert(`Final price is ${finalPrice}`);
//         break;
//     default:
//         console.log(`Final price is ${buyPrice}`);
//         alert("Please enter a valid price");
//         break;
//         }


if (buyPrice < 200) {
    console.log(`Final price is ${buyPrice}`);
    alert(`Final price is ${buyPrice}`);
} else if (buyPrice >= 200 && buyPrice < 300) {
    let discount = (buyPrice / 100) * 3;
    let finalPrice = buyPrice - discount;
    console.log(`Final price is ${finalPrice}, your dischaunt is 3%`);
    alert(`Final price is ${finalPrice}`);
} else if (buyPrice >= 300 && buyPrice < 500) {
    let discount = (buyPrice / 100) * 5;
    let finalPrice = buyPrice - discount;
    console.log(`Final price is ${finalPrice}`);
    alert(`Final price is ${finalPrice}, your dischaunt is 5%`);
} else if (buyPrice >= 500 && buyPrice < 99999999999999999999999) {
    let discount = (buyPrice / 100) * 7;
    let finalPrice = buyPrice - discount;
    console.log(`Final price is ${finalPrice}`);
    alert(`Final price is ${finalPrice}, your dischaunt is 7%`);
} else {
    alert("Please enter a valid price");
}

// __________3__________

let positiveNumbers = 0;
let negativeNumbers = 0;
let zeroNumbers = 0;

for (let i = 0; i < 10; i++) {
    let requestNumber = +prompt("Please enter number: ");
    console.log(requestNumber);

    // switch (requestNumber) {
    //     case requestNumber == 0: zeroNumbers++;
    //     case requestNumber < 0: negativeNumbers++;
    //     case requestNumber > 0: positiveNumbers++;
    // }

    if (requestNumber == 0) {
        zeroNumbers++;
    } else if (requestNumber < 0) {
        negativeNumbers++;
    } else {
        positiveNumbers++;
    }
}
alert(`Positive numbers: ${positiveNumbers}, negative numbers: ${negativeNumbers}, zero numbers: ${zeroNumbers}`);

// __________4__________

let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let currentDay = 0;

while (confirm(`${weekDays[currentDay]}. Do you want to see next day?`)) {
    currentDay = (currentDay + 1) % weekDays.length;
}
