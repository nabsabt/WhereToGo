

function addOption(){
    var container = document.getElementById("form");
    var number = document.getElementById("form").length;

    var input = document.createElement("input");
    input.type = "text";
    input.id = "option"+(number+1);
    container.appendChild(input);
    container.appendChild(document.createElement("br"));

}


var result = document.getElementById("result");

function calculate(){
    var numberOfOptions = document.getElementById("form").length;
    random = Math.floor(Math.random()* (numberOfOptions)) +1;
    //console.log("a választott opció száma: "+ random);
    selectedOption = document.getElementById("option"+random).value;

    document.getElementById("img").style.display = "inline";


    setTimeout(function(){
        document.getElementById("img").style.display = "none";
        result.innerHTML = selectedOption;
        document.getElementById("calculate").disabled = true;
        //////
        if(selectedOption == "30as" || selectedOption == "cameleon"){
            document.getElementById("cameleon_link").style.display = "inline";
        }
        else if (selectedOption == "retro" || selectedOption == "Retro"){
            document.getElementById("retro_link").style.display = "inline";
        }
        else if(selectedOption == "sorhaz" || selectedOption == "sörház" || selectedOption == "Sörház"){
            document.getElementById("sorhaz_link").style.display = "inline";
        }
        else if (selectedOption == "est" || selectedOption == "Est" || selectedOption == "estcafe" || selectedOption == "Estcafe" || selectedOption == "estcafé"){
            document.getElementById("est_link").style.display = "inline";
        }
    }, 3000);

    document.getElementById('calculate').title="Nem-nem, most már " +selectedOption+ " lesz, cica!";
} 