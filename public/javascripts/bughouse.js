$(document).ready(function() {
	console.log("Bughouse starting up.");

	// intialize board
	var square_size = 75;
	var piece_size = 60;
	var piece_offset = (square_size - piece_size) / 2.0;
	var board_size = square_size * 8;
	var paper = Raphael("board_container", square_size * 8, square_size * 8);
	var circle = paper.circle(50, 40, 10);
	
	var bottom_color = 'white';

	var placePiece = function(name, place) {
		var i, j;
		i = place.charCodeAt(0) - 65;
		j = place.charCodeAt(1) - 49;
		if(bottom_color == 'white') j = 7 - j;
		return paper.image('/images/pieces/' + name + '.svg', square_size * i + piece_offset, square_size * j + piece_offset, piece_size, piece_size);
	}

	var board_squares = {};
	var i, j;
	for( i = 0 ; i < 8 ; i++ ) {
		board_squares[i] = {};
		for ( j = 0 ; j < 8 ; j++ ) {
			// light brown and dark brown
			var fill_color = ((i + j) % 2 == 0) ? "#f0d9b5" : "#b58863";
			board_squares[i][j] = paper.rect(i * square_size, j * square_size, square_size, square_size).attr({'stroke-width': 0, 'fill': fill_color});
		}
	}

	

	var start = function () {    
	  this.ox = this.attr("x");         
	  this.oy = this.attr("y");         
	  this.animate({r: 70, opacity: .5}, 500, ">");     
	},
	move = function (dx, dy) {
	  this.attr({x: this.ox + dx, y: this.oy + dy});     
	},
	up = function () {
	  this.animate({r: 50, opacity: 1}, 500, ">");
	};

	for(var place in starting_places) {
		var piece = placePiece(starting_places[place], place);
		piece.drag(move, start, up);
	}


});

// piece starting locations
var starting_places = {
	'A1': 'white rook',
	'B1': 'white knight',
	'C1': 'white bishop',
	'D1': 'white queen',
	'E1': 'white king',
	'F1': 'white bishop',
	'G1': 'white knight',
	'H1': 'white rook',

	'A2': 'white pawn',
	'B2': 'white pawn',
	'C2': 'white pawn',
	'D2': 'white pawn',
	'E2': 'white pawn',
	'F2': 'white pawn',
	'G2': 'white pawn',
	'H2': 'white pawn',

	'A7': 'black pawn',
	'B7': 'black pawn',
	'C7': 'black pawn',
	'D7': 'black pawn',
	'E7': 'black pawn',
	'F7': 'black pawn',
	'G7': 'black pawn',
	'H7': 'black pawn',

	'A8': 'black rook',
	'B8': 'black knight',
	'C8': 'black bishop',
	'D8': 'black queen',
	'E8': 'black king',
	'F8': 'black bishop',
	'G8': 'black knight',
	'H8': 'black rook',
};