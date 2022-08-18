fanction BMI(weight, height) {
let result = weight /(height * height);
return result;
}

console.log(BMI(70, 1.70));


faction status(bmi) {
if (m=bmi <18.5) {
    return("لديك نقص في الوزن");
 } else if (bmi >= 18.5 && bmi < 25 ) {
    return "وزنك الصحي"
 } else {
    return "لديك زياده في الوزن";
 }
}

function calculate() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    let bmi = bmi(wight, height);

    let desc = status(bmi);

    let div = document.getElementById("result"); 

  div.innerText = bmi + " == " + desc;
  
}