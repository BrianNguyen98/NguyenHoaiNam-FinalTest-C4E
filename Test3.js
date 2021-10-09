
let colorInput = document.querySelector("#color");
let hexInput = document.querySelector("#hex");

let hexString = document.getElementById("hex")
colorInput.addEventListener('input', () =>{
    let color = colorInput.value;
    hexInput.value = color;
    document.body.style.backgroundColor = color;
});

let copyHex = document.getElementById("btn");
copyHex.addEventListener("click", () => {
    navigator.clipboard.writeText(hexString.value);
    alert("Has copied successfull the text: " + hexString.value);
});

