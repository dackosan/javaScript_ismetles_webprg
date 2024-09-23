function gradeME(){
    let score = document.getElementById("score").value;

    if( score >= 85 && score <= 100){
        document.getElementById("finalGrade").innerHTML = "Your grade : A";
    }
    else if(score >= 70 && score < 85){
        document.getElementById("finalGrade").innerHTML = "Your grade : B";
    }
    else if(score >= 50 && score < 70){
        document.getElementById("finalGrade").innerHTML = "Your grade : C";
    }
    else if(score >= 30 && score < 50){
        document.getElementById("finalGrade").innerHTML = "Your grade : D";
    }
    else if(score >= 0 && score < 30){
        document.getElementById("finalGrade").innerHTML = "Your grade : F";
    }
    else{
        document.getElementById("finalGrade").innerHTML = "I can not grade you!";
    }
}