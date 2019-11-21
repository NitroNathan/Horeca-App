function bestelling(){
const frisp = 3;
const bierp = 2;
const wijnp = 4;
const bb8p =  7;
const bb16p = 12;
//constanten waar de prijzen van de aangebode producten zijn

var prize= 0;

while (true){
var bestel = prompt ("wat wilt u bestellen? 'drinken' of 'snacks'? typ 'stop' voor de rekening!")


if (bestel == 'drinken'){
var bestellingdrinken = prompt ("Wat wilt u toevoegen aan de bestelling? 'fris' 'bier' of 'wijn'?");


if (bestellingdrinken == 'fris'){
    var fris = prompt ("hoeveel fris wilt u toevoegen aan uw bestelling?");
    var prijs = fris *frisp;
    document.write("fris X" + fris +":"+ "\u20AC"+fris *frisp + '<br>');
    prize+=prijs

}//fris


else if(bestellingdrinken == 'bier'){
    var bier = prompt ("hoeveel bier wilt u toevoegen aan uw bestelling?");
    var prijs = bier *bierp;
    document.write("bier X" + bier +":"+ "\u20AC"+bier * bierp +'<br>')
    prize+=prijs

}//bier


else if (bestellingdrinken == 'wijn'){
    var wijn = prompt ("hoeveel wijn wilt u toevoegen aan uw bestelling?");
    var prijs = wijn *wijnp;
    document.write("Wijn X" + wijn +":"+ "\u20AC"+wijn * wijnp +'<br>')
    prize+=prijs
}//wijn


else{
    alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.");
}//sluit alert drinken
}//sluit drinken


if (bestel == 'snacks'){
var bestellingsnacks = prompt ("Hoeveel bitterballen wilt u toevoegen ('8' of '16')?");


if (bestellingsnacks == '8'){
    var acht = prompt ("Hoeveel bitterbalschalen van 8 stuks wilt u bestellen?");
    var prijs = acht *bb8p;
    document.write("BalAcht X" + acht +":"+ "\u20AC"+acht * bb8p +'<br>')
    prize+=prijs
}//schaal 8


else if (bestellingsnacks == '16'){
    var zestien = prompt ("Hoeveel bitterbalschalen van 16 stuks wilt u bestellen?");
    var prijs = zestien *bb16p;
    document.write("BalZestien X" + zestien +":"+ "\u20AC"+zestien * bb16p +'<br>')
    prize+=prijs
}//sluit schaal 16


else{
    alert("je kunt alleen kiezen tussen 8 en 16.")
}//sluit alert snacks
}//sluit snacks


  if (bestel == 'stop'){
    document.write('Totaal prijs : \u20AC' + prize);
return false;
}//sluit stop







}
}
bestelling();