$(function() {
	/* Ajout de l'élément audio */
	var sound = document.createElement("audio");;
	sound.src = "sound/party_horn-Mike_Koenig.mp3";
	sound.autoPlay = false;
	sound.preLoad = true;

	/* Les 3 paragraphes sont cachés */
	$("#div2").hide();
	$("#div3").hide();
	$("#div4").hide();

	/* Affichage successif des paragraphes */
	$("#div1").on('click', function() {
		$("#div2").show();
	});

	$("#div2").on('click', function() {
		$("#div3").show();
	});

	$("#div3").on('click', function() {
		$("#div4").show();
	});

	/* Déclenchement du son et modification du background */
	$("#div4").on('click', function() {
		sound.play();
		$("body").css("background-image", "url(img/birthday-wallpapers.jpg)")
	});
});