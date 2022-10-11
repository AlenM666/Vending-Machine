

function choice()
{
    var snacks = 
    {
        "Chocolate" : 2.66,
        "Cola" : 1.76,
        "Water" : 0.76,
        "Chips" : 1.99,
        "KitKat" : 1.66,
        "Gatorade" : 2.25
    }  
    document.getElementById("btn-1").innerHTML = `<p>${snacks.Chips}</p>`
    document.getElementById("btn-2").innerHTML = `<p>${snacks.Cola}</p>`
    document.getElementById("btn-3").innerHTML = `<p>${snacks.Chocolate}</p>`

}

choice();



