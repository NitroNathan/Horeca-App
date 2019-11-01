function bestelling(){
	for (a=1; a<=30; a++){
var bestel = prompt ("wat wilt u bestellen? 'drinken' of 'snacks'? typ 'stop' voor de rekening!")


  if (bestel == 'stop'){
	return false;
}//sluit stop

if (bestel == 'drinken'){
var bestellingdrinken = prompt ("Wat wilt u toevoegen aan de bestelling? 'fris' 'bier' of 'wijn'?");

if (bestellingdrinken == 'fris'){
	var fris = prompt ("hoeveel fris wilt u toevoegen aan uw bestelling?");
	document.write(fris + "X frisdrank <br>")


}//fris


if (bestellingdrinken == 'bier'){
	var bier = prompt ("hoeveel bier wilt u toevoegen aan uw bestelling?");
	document.write(bier + "X bier <br>");
}//bier

if (bestellingdrinken == 'wijn'){
	var wijn = prompt ("hoeveel wijn wilt u toevoegen aan uw bestelling?");
	document.write(wijn +"X wijn <br>");
}//wijn
}//sluit drinken


if (bestel == 'snacks'){
var bestellingsnacks = prompt ("Hoeveel bitterballen wilt u toevoegen ('8' of '16')?");


if (bestellingsnacks == '8'){
	var acht = prompt ("Hoeveel bitterbalschalen van 8 stuks wilt u bestellen?");
	document.write(acht +"X bitterbalschalen(8 stuks)<br>");
}//schaal 8
if (bestellingsnacks == '16'){
	var zestien = prompt ("Hoeveel bitterbalschalen van 16 stuks wilt u bestellen?");
	document.write(zestien +"X bitterbalschalen(16 stuks)<br>");
}//schaal 16
}//sluit snacks







}
}
bestelling();