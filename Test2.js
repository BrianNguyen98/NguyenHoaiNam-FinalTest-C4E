let input = prompt("Nhap can nang(cach nhau boi dau \",\")")
let weight = input.split(",")

// let a = [20, 15, 38, 46, 57];
console.log("Input: ", weight);

let b = [];
let sumOfTeam1 = 0;

let sumOfTeam2 = 0;

for ( let i = 0; i< weight.length; i++){
    if (i % 2 == 0){
        sumOfTeam1 = sumOfTeam1 + Number(weight[i]);
    }
    else{sumOfTeam2 = sumOfTeam2 + Number(weight[i]);}
}

b.push(sumOfTeam1, sumOfTeam2);


console.log("New weight of Team 1 and Team 2: ", b);





