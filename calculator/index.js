const display = document.getElementById("display");
const dispab = document.getElementById("display-above");


function appendToDisplay(input){
    const currentVal = display.value;
    if((currentVal.endsWith('+') || currentVal.endsWith('-') || currentVal.endsWith('/') || currentVal.endsWith('*') ) && (input == ('+') || input == ('-')|| input == ('/')|| input == ('*'))){
        display.value  = currentVal.slice(0, -1) + input;
    } else {
        display.value += input;
    }
    
}

function clearDisplay(){
    display.value = "";
    dispab.value = "";
}

function calculate(){
    dispab.value = display.value;
    try{
        display.value = eval(display.value);

    }
    catch(error){
        display.value = "Error";
    }
    
}

function backspace() {
    display.value = display.value.slice(0, -1);
}