function rotateColors(tableID, layer) {
	var table = document.getElementById(tableID);
	var numRows = table.rows.length;
	var numCols = table.rows[0].cells.length;
	var cells = [];
	
	if (layer == 1) {
		// Add applicable OUTER cells from the first row
		for (col = 0; col < numCols; col++)
			cells.push(table.rows[0].cells[col]);
		
		// Add applicable OUTER cells from last column - except for first and last cell
		for ( row = 1; row < numRows - 1; row++ )
			cells.push(table.rows[row].cells[numCols - 1]);
		
		// Add applicable OUTER cells from last row (sorted in reverse order)
		for (col = numCols - 1; col >= 0; col--)
			cells.push(table.rows[numRows - 1].cells[col]);
			
		// Add applicable OUTER cells from first column (in reverse order) - except for first and last cell
		for ( row = numRows - 2; row > 0; row-- )
			cells.push(table.rows[row].cells[0]);
		
	} else if (layer == 2) {
		// Add applicable INNER cells from the second row
		for (col = 1; col < numCols - 1; col++)
			cells.push(table.rows[1].cells[col]);
		
		// Add applicable INNER cells from (last - 1) column
		for ( row = 2; row < numRows - 2; row++ )
			cells.push(table.rows[row].cells[numCols - 2]);
		
		// Add applicable INNER cells from (last - 1) row
		for (col = numCols - 2; col > 0; col--)
			cells.push(table.rows[numRows - 2].cells[col]);
			
		// Add applicable INNER cells from the second column
		for ( row = numRows - 2; row > 1; row-- )
			cells.push(table.rows[row].cells[1]);		
	}
	
	// At this point, we have collected all cells that need to be updated (background color "rotated" left)
	
	var savedBgColor = cells[0].bgColor;	// Save first cell's background color
	
	for (i=0; i < cells.length - 1; i++) {
		// Assign each cell's background color to that of the next in the list (except for very last cell !!!)
		cells[i].bgColor = cells[i + 1].bgColor;
	}
	
	// Assign background color of the last cell - to the saved one of cells[0]
	cells[cells.length - 1].bgColor = savedBgColor;		
}
 
function bgUpdate(cell) {
	var newColor = prompt("Choose background color: ", cell.bgColor );
	if (newColor) {
		cell.bgColor = newColor;
	} 						
}

