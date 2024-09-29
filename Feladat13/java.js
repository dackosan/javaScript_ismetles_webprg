window.onload = function(){
    let i = 10;

    while (i <= 30){
        let j = 1;
        let divisors = "";

        while (j <= i){
            if (i % j === 0) {
                divisors += j + ", ";
            }

            j++;
        }


        document.getElementById("solution").innerHTML += i + " : " + divisors + "<br>";
        i++;
    }
}