function alertName()
{
    var name = document.forms["nameForm"]["name"].value;
    alert("Hi " + name + "!")
    return false;
}

function changeColor()
{
    // document.getElementById("background").style.backgroundColor = "blue"
    
    var body = document.getElementById("background")

    var currentColor = window.getComputedStyle(body, null).backgroundColor

    if (currentColor == "rgb(255, 228, 196)")
    {
        document.getElementById("background").style.backgroundColor = "rgb(0, 0, 255)"
    }
    else if (currentColor == "rgb(0, 0, 255)")
    {
        document.getElementById("background").style.backgroundColor = "rgb(255, 228, 196)"
    }
    else
    {
        alert("Something about color block is off")
    }
}

// 4.c
function testText()
{
    var inputText = document.forms["textForm"]["text_tester"].value;

    var validation = "/[!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>\/?]+/";

    for (i in inputText)
    {
        for (j in validation)
        {
            if (inputText[i] == validation[j])
            {
                alert("invalid char contains");
            }
        }
    }
}

// 5.b
function modHeading()
{
    document.getElementById("heading").innerHTML += "Add Text";
}