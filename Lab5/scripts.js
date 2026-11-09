function showAvailable(){

    const apiUrl = "https://api.frankfurter.dev/v2/currencies";

    var availableList = new Array();

    fetch(apiUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log("Data fetched successfully:");

        for (var i=0; i<data.length; i++)
        {
            console.log(data[i]);
            availableList[i] = data[i].iso_code
        }

        for (i in availableList)
        {
            // DOM ize waitlist
            var cur = availableList[i];
            var para = document.createElement("option");
            var node = document.createTextNode(cur);
            para.appendChild(node);

            // from element list input
            var fromElement = document.getElementById("fromCurrency");
            var fromChild = document.getElementById("fromSelect");
            fromElement.insertBefore(para, fromChild);
        }

        for (i in availableList)
        {
            // DOM ize waitlist
            var cur = availableList[i];
            var para = document.createElement("option");
            var node = document.createTextNode(cur);
            para.appendChild(node);

            // to element list input
            var toElement = document.getElementById("toCurrency");
            var toChild = document.getElementById("toSelect");
            toElement.insertBefore(para, toChild);
        }

        var parent = document.getElementById("fromCurrency");
        var child = document.getElementById("fromSelect");
        parent.removeChild(child);

        var parent = document.getElementById("toCurrency");
        var child = document.getElementById("toSelect");
        parent.removeChild(child);
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });
}


function convertCurrency(){
    var fromCurrency = document.getElementById("fromCurrency").value;
    var toCurrency = document.getElementById("toCurrency").value;
    var apiUrl = "https://api.frankfurter.dev/v2/rate/" + fromCurrency + "/" + toCurrency;
    
    var fromNumber = document.forms["convertForm"]["fromNumber"].value;
    
    fetch(apiUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log("Data fetched successfully:");
        
        var toNumber = fromNumber * data.rate;
        alert(toNumber);
        
        document.getElementById("result").innerHTML = fromNumber + " " + fromCurrency + 
        " is equals to " + toNumber + " " + toCurrency;
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });
}