window.onload = function(){
    let index = 1;
    let counter = 0;


    for (let i = 1; i <= 100; i++)
    {
        if(i % 3 == 0)
        {
            if (index % 2 == 0 && index % 3 != 0)
            {
                document.getElementById("solution").innerHTML += `${i}, `;
            }
            else if (index % 5 == 0 && index % 3 != 0)
            {
                document.getElementById("solution").innerHTML += `${i}, `;
            }
            else if (index % (11 + counter*6) == 0)
            {
                document.getElementById("solution").innerHTML += `${i}, `;
                counter++;
            }

            index++;
        }
        else
        {
            document.getElementById("solution").innerHTML += `${i}, `;
        }
    }
}