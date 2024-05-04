let NumberOfDigits

AskTerms();
function AskTerms(){
NumberOfDigits = Number(prompt("enter number of terms 0-100 only"));

if(isNaN(NumberOfDigits) || NumberOfDigits < 1 || NumberOfDigits > 100){
    alert("please enter a valid number");
    AskTerms();
} else{

    Output();

}

}

function Output(){
   let FibonacciSquenceArray = [];
   let a = 0;
   let b = 1;
   let temporary

   for (let i = 0; i < NumberOfDigits; i++){
    FibonacciSquenceArray.push(a);
    temporary = a;
    a = b;
    b += temporary;
   }

   alert(`Fibonacci sequence with `+NumberOfDigits+` terms: \n`+FibonacciSquenceArray)

}
