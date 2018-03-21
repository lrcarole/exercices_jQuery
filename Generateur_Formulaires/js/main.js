$(function() {

	$('#btn-label').on('click', () => {
		$('#droite').append('<div class="generate-label"><p>Texte du label</p><input id="label" type="text"><button id="submit">ok</button></p></div>');
		
		$('#submit').on('click', () => {
			var $labelVal = $('#label:text').val();
			$('#gauche').append('<span>' + $labelVal +'</span>');
			$('div.generate-label').remove();
		});
	});

	$('#btn-input').on('click', () => {
		$('#droite').append('<div class="generate-input"><p>id de la zone de texte</p><input id="input" type="text"><button id="submit">ok</button></p></div>');
		
		$('#submit').on('click', () => {
			var $inputVal = $('#input:text').val();
			$('#gauche').append('<input id=\"' + $inputVal +'\" type="text" ><br/>');
			$('div.generate-input').remove();
		});
	});

	$('#btn-button').on('click', () => {
		$('#droite').append('<div class="generate-button"><p>Texte du bouton</p><input id="button" type="text"><button id="submit">ok</button></p></div>');
		
		$('#submit').on('click', () => {
			var $buttonVal = $('#button:text').val();
			$('#gauche').append('<button>'+ $buttonVal +'</button>');
			$('div.generate-button').remove();
		});
	});


	

});