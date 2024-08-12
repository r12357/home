function calculate0() {
    // 入力された数値を取得
    let num1 = parseFloat(document.getElementById('product_number1').value);
    let num2 = parseFloat(document.getElementById('product_number2').value);

    let binary_operator = document.getElementsByName("calculate_binary");
    let selected_binary = null;
    for (let i = 0; i < binary_operator.length; i++){
        if (binary_operator[i].checked) {
            selected_binary = binary_operator[i].value;
            break;
        }
    }


    // 数値が入力されているか確認
    if (isNaN(num1) || isNaN(num2)) {
        alert("数値を入力してください．")
    } else {
        console.log(selected_binary);
        //数値の二項演算
        let result;
        switch (selected_binary){
            case "0":
                result = num1 + num2;
                alert("和:" + result);
                break;
            case "1":
                result = num1 - num2;
                alert("差:" + result);
                break;
            case "2":
                result = num1 * num2;
                alert("積:" + result);
                break;
            case "3":
                result = num1 / num2;
                alert("商:" + result);
                break;
        }
    }
}

console.log("Hello JavaScript!!");

console.log("Hello")
console.log("World!")

let x;
x = "message";
console.log(x);


let a = "b";

let cc = a;

cc = "a";
const math = "good";
let score = 100;
let akaten = (score < 60) ? "赤点だよ" : "提出物だしてる？";

let n = "not a number" * 1;
for (let i = 0; i < 10; i++){
    console.log(i);
}