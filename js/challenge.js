function switchOuter(tableID) {
	alert("'Outer' is clicked");
}
 
function switchInner(tableID) {
	alert("'Inner' is clicked");
}

function bgUpdate(cell) {
	var newColor = prompt("Choose background color: ", cell.bgColor );
	if (newColor) {
		cell.bgColor = newColor;
	} 						
}
