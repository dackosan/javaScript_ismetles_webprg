function Calculate(){
    let year =  document.getElementById("year").value;

    if (year % 100 == 0){
        if(year % 400 == 0){
            document.getElementById("isItLeapYear").innerHTML = "It is a leap year!";
        }
        else{
            document.getElementById("isItLeapYear").innerHTML = "It is not a leap year!";
        }
        
    }
    else if(year % 4 == 0){
        document.getElementById("isItLeapYear").innerHTML = "It is a leap year!";
    }
    else{
        document.getElementById("isItLeapYear").innerHTML = "It is not a leap year!";
    }
}