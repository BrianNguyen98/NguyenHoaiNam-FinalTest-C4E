


let input = prompt("Nhap ten (Cach nhau boi dau \",\")");
let allName = input.split(",");
let max = 0;

for( i = 0; i<allName.length; i++) {
  if(max < allName[i].length){
      max = allName[i].length;
  }
}

console.log(max)
let maxLength = []
for( i = 0; i<allName.length; i++);{
    if( allName[i].length >= max); {
        maxLength.push(allName[i]);
    }
}
console.log(maxLength)