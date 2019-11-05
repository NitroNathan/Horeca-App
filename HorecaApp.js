function bestelling(){
const frisp = 3;
const bierp = 2;
const wijnp = 4;
const bb8p =  7;
const bb16p = 12;



	while (true){
var bestel = prompt ("wat wilt u bestellen? 'drinken' of 'snacks'? typ 'stop' voor de rekening!")


if (bestel == 'drinken'){
var bestellingdrinken = prompt ("Wat wilt u toevoegen aan de bestelling? 'fris' 'bier' of 'wijn'?");


if (bestellingdrinken == 'fris'){
	var fris = prompt ("hoeveel fris wilt u toevoegen aan uw bestelling?");
	document.write(fris + "X frisdrank <br>")
}//fris


else if(bestellingdrinken == 'bier'){
	var bier = prompt ("hoeveel bier wilt u toevoegen aan uw bestelling?");
	document.write(bier + "X bier <br>");
}//bier


else if (bestellingdrinken == 'wijn'){
	var wijn = prompt ("hoeveel wijn wilt u toevoegen aan uw bestelling?");
	document.write(wijn +"X wijn <br>");
}//wijn


else{
	alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.");
}//sluit alert drinken
}//sluit drinken


if (bestel == 'snacks'){
var bestellingsnacks = prompt ("Hoeveel bitterballen wilt u toevoegen ('8' of '16')?");


if (bestellingsnacks == '8'){
	var acht = prompt ("Hoeveel bitterbalschalen van 8 stuks wilt u bestellen?");
	document.write(acht +"X bitterbalschalen(8 stuks)<br>");
}//schaal 8


else if (bestellingsnacks == '16'){
	var zestien = prompt ("Hoeveel bitterbalschalen van 16 stuks wilt u bestellen?");
	document.write(zestien +"X bitterbalschalen(16 stuks)<br>");
}//sluit schaal 16


else{
	alert("je kunt alleen kiezen tussen 8 en 16.")
}//sluit alert snacks
}//sluit snacks


  if (bestel == 'stop'){
	document.write('Totaal prijs; \u20AC' + tot);
return false;
}//sluit stop

var tot = fris*frisp + bier*bierp + wijn*wijnp + acht*bb8p + zestien*bb16p;






}
}
bestelling();