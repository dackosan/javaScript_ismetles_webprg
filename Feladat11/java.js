function Print(){
    let str = document.getElementById("string").value;
    document.getElementById("solution").innerHTML = "";

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (char.match(/[a-zA-Z]/)){
            console.log(char);
            document.getElementById("solution").innerHTML += char + " ";
        } 
        else{
            break;
        }
    }
}