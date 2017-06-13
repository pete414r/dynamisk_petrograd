var svar1 = $(".svar1");
var spgm1 = $(".spgm1");
var s1a = $(".s1a");
var s2a = $(".s2a");
var s2b = $(".s2b");
var s2c = $(".s2c");
var s3a = $(".s3a");
var s3b = $(".s3b");
var s3c = $(".s3c");
var s4c = $(".s4c");
var s5a = $(".s5a");
var s5b = $(".s5b");
var s5c = $(".s5c");

var sv1a = $(".sv1a");
var sv2a = $(".sv2a");
var sv2b = $(".sv2b");
var sv2c = $(".sv2c");
var sv3a = $(".sv3a");
var sv3b = $(".sv3b");
var sv3c = $(".sv3c");
var sv4c = $(".sv4c");
var sv5a = $(".sv5a");
var sv5b = $(".sv5b");

var s20 = $(".s20");
var s20a = $(".s20a");
var s20b = $(".s20b");
var s20c = $(".s20c");
var s21a = $(".s21a");
var s21b = $(".s21b");
var s21c = $(".s21c");

var sv20 = $(".sv20");
var sv20b = $(".sv20b");
var sv21a = $(".sv21a");
var sv21b = $(".sv21b");
var sv21c = $(".sv21c");

var s30 = $(".s30");
var s30a = $(".s30a");
var sv30a = $(".sv30a");

var prikker = $(".prikker");
var avatarHumor = getRndInteger(5, 8);
//1 = sur 0% grøn, 100% rød
//2 = megetKed 12.5% grøn, 87.5% rød
//3 = lidtKed 25% grøn, 75% rød
//4 = overrasket 37.5% grøn, 62.5% rød
//5 = flov 50% grøn, 50% rød
//6 = neutral 62.5% grøn, 37.5% rød
//7 = glad 75% grøn, 25% rød
//8 = megetGlad 87.5% grøn, 12.5% rød
//9 ekstatisk 100% grøn, 0% rød

startHumør();

$(".info").html("avatar <span>" + avatarHumor + "</span> humør");

function startHumør() {
	console.log("Start humør");
	if (avatarHumor == 5) {
		console.log("Humør 5");
		$(".avatarsin").css("background-image", "url('Img/dameflov-01.png')");
		$(".barometerred").css("width", "50%")
		$(".barometergreen").css("width", "50%")
		setTimeout(start, 1); //1500
	} else if (avatarHumor == 6) {
		console.log("Humør 6");
		$(".barometerred").css("width", "37.5%")
		$(".barometergreen").css("width", "62.5%")
		setTimeout(start, 1); //1500
	} else {
		console.log("Humør 7");
		$(".avatarsin").css("background-image", "url(Img/dameglad-01.png)");
		$(".barometerred").css("width", "25%")
		$(".barometergreen").css("width", "75%")
		setTimeout(start, 1); //1500
	}
}

function start() {
	$("#typing")[0].play();
	$(".chattype").typeIt({
		strings: ['Hej'],
		speed: 1 //40

	});
	setTimeout(klikPåKnap, 1); //4600
}

function klikPåKnap() {
	console.log("Klik på knappen")
		//$("#typing")[0].pause();
	$(".send").addClass("klik");
	$(".send").on("click", docSvarer);
	setTimeout(docSvarer, 55500);

}


function docSvarer() {
	console.log("Hej");
	$("#sendknap")[0].play();
	$("#sendknap")[0].volume = 0.2;
	$(".send").removeClass("klik");
	$(".send").off("click", docSvarer);
	$(".chattype").typeIt({
		startDelete: true
	});
	$("ul").append(spgm1);
	setTimeout(avatarSkriver, 1); //2000

}

function avatarSkriver() {
	console.log("typing");
	$(".dialog").css("height", "28vw")
	$(".prikker").show();
	setTimeout(avatarSvarer, 1); //3000
}

function avatarSvarer() {
	console.log("avatar");
	$("#modtaget_besked")[0].play();
	$("#modtaget_besked")[0].volume = 0.5;
	$(".prikker").hide(0);
	$(".dialog").css("height", "32vw");
	$("ul").append(svar1);
	setTimeout(valg1, 1); //5000
}

function valg1() {
	console.log("Valg1");
	$(".valg").css("z-index", "25");
	$(".mulighed").show(0);
	$(".mulighed1").on("click", mulighed1);
	$(".mulighed2").on("click", mulighed2);
	$(".mulighed3").on("click", mulighed3);
}

/////////dialog-spor 1

function mulighed1() {
	console.log("Mulighed 1");
	$(".mulighed").hide(0);
	$(".valg").css("z-index", "10");
	$(".mulighed1").off("click", mulighed1);
	$(".mulighed2").off("click", mulighed2);
	$(".mulighed3").off("click", mulighed3);
	$("#typing")[0].play();
	$(".chattype").typeIt({
		strings: ['Hej'],
		speed: 1 //40

	});

	setTimeout(klikPåKnap2, 1); //4000
}

function klikPåKnap2() {
	console.log("Klik på knappen");
	//	$("#typing")[0].pause();
	$(".send").addClass("klik");
	$(".send").on("click", docSvarer2);
	setTimeout(docSvarer2, 1);
}

function docSvarer2() {
	console.log("doc svarer 2");
	$("#sendknap")[0].play();
	$("#sendknap")[0].volume = 0.2;
	$(".send").removeClass("klik");
	$(".send").off("click", docSvarer2);
	$(".chattype").typeIt({
		startDelete: true
	});
	$("ul").append(s1a);
	setTimeout(avatarSkriver2, 1); //2000
}

function avatarSkriver2() {
	console.log("typing");
	$(".dialog").css("height", "28vw")
	$(".prikker").show();
	setTimeout(avatarSvarer2, 1); //3000
}

function avatarSvarer2() {
	console.log("avatar");
	$("#modtaget_besked")[0].play();
	$("#modtaget_besked")[0].volume = 0.5;
	$(".prikker").hide(0);
	$(".dialog").css("height", "32vw");
	$("ul").append(sv1a);
	setTimeout(valga1, 1); //5000
}

function valga1() {
	console.log("Valg a1");
	$(".avatarsvar").html("<strong></strong>Der har været stillet forslag til at mindske delen af almennøtige boliger?");
	$(".mulighed1").html("<strong></strong>Jeg burde vide om Christiania indgår i lokalplanen?");
	$(".mulighed2").html("<strong></strong>Der er meget store forandringer på boligområdet. Det kan medføre stor forskelsbehandling?");
	$(".mulighed3").html("<strong></strong>Sådan er det, hvis der er råd?");
	$(".valg").css("z-index", "25");
	$(".mulighed").show(0);
	$(".mulighed1").on("click", mulighed1a);
	$(".mulighed2").on("click", mulighed1b);
	$(".mulighed3").on("click", mulighed1c);
}

function mulighed1a() {
	console.log("Mulighed 1a");
	$(".mulighed").hide(0);
	$(".valg").css("z-index", "10");
	$(".mulighed1").off("click", mulighed1a);
	$(".mulighed2").off("click", mulighed1b);
	$(".mulighed3").off("click", mulighed1c);
	$("#typing")[0].play();
	$(".chattype").typeIt({
		strings: ['Hej'],
		speed: 1 //40

	});
	setTimeout(klikPåKnap3a, 1);
}

function klikPåKnap3a() {
	console.log("Klik på knap 3");
	//$("#typing")[0].pause();
	$(".send").addClass("klik");
	$(".send").on("click", docSvarer3a);
	setTimeout(docSvarer3a, 1);
}

function docSvarer3a() {
	console.log("doc svarer 3");
	$("#sendknap")[0].play();
	$("#sendknap")[0].volume = 0.2;
	$(".send").removeClass("klik");
	$(".send").off("click", docSvarer3a);
	$(".chattype").typeIt({
		startDelete: true
	});
	$("ul").append(s2a);
	setTimeout(humørSkift1a, 1); //2000
}

function humørSkift1a() {
	//1 = sur 0% grøn, 100% rød
	//2 = megetKed 12.5% grøn, 87.5% rød
	//3 = lidtKed 25% grøn, 75% rød
	//4 = overrasket 37.5% grøn, 62.5% rød
	//5 = flov 50% grøn, 50% rød
	//6 = neutral 62.5% grøn, 37.5% rød
	//7 = glad 75% grøn, 25% rød
	//8 = megetGlad 87.5% grøn, 12.5% rød
	//9 ekstatisk 100% grøn, 0% rød
	console.log("Humør skifte1");
	if (avatarHumor <= 1) {
		console.log("Humør 1");
		$(".avatarsin").css("background-image", "url('Img/damesur-01.png')");
		$(".doctorsen").css("background-image", "url('Img/på_dybt_vand-01.png')");
		$(".barometerred").css("width", "100%");
		$(".barometergreen").css("width", "0%");
		avatarSkriver3();
	} else if (avatarHumor == 2) {
		console.log("Humør 2");
		$(".avatarsin").css("background-image", "url('Img/damemegetked-01.png')");
		$(".doctorsen").css("background-image", "url('Img/på_dybt_vand-01.png')");
		$(".barometerred").css("width", "87.5%");
		$(".barometergreen").css("width", "12.5%");
		avatarSkriver3();
	} else if (avatarHumor == 3) {
		console.log("Humør 3");
		$(".avatarsin").css("background-image", "url('Img/damelidtked-01.png')");
		$(".doctorsen").css("background-image", "url('Img/overrasket_negativt-01.png')");
		$(".barometerred").css("width", "75%");
		$(".barometergreen").css("width", "25%");
		avatarSkriver3();
	} else if (avatarHumor == 4) {
		console.log("Humør 4");
		$(".avatarsin").css("background-image", "url('Img/dameoverrasket-01.png')");
		$(".doctorsen").css("background-image", "url('Img/overrasket_negativt-01.png')");
		$(".barometerred").css("width", "62.5%");
		$(".barometergreen").css("width", "37.5%");
		avatarSkriver3();
	} else if (avatarHumor == 5) {
		console.log("Humør 5");
		$(".avatarsin").css("background-image", "url('Img/dameflov-01.png')");
		$(".barometerred").css("width", "50%");
		$(".barometergreen").css("width", "50%");
		avatarSkriver3();
	} else if (avatarHumor == 6) {
		console.log("Humør 6");
		$(".avatarsin").css("background-image", "url('Img/dameneutral-01.png')");
		$(".barometerred").css("width", "37.5%");
		$(".barometergreen").css("width", "62.5%");
		avatarSkriver3();
	} else if (avatarHumor == 7) {
		console.log("Humør 7");
		$(".avatarsin").css("background-image", "url('Img/dameglad-01.png')");
		$(".barometerred").css("width", "25%");
		$(".barometergreen").css("width", "75%");
		avatarSkriver3();
	} else if (avatarHumor == 8) {
		console.log("Humør 8");
		$(".avatarsin").css("background-image", "url('Img/damemegetglad-01.png')");
		$(".doctorsen").css("background-image", "url('Img/meget_glad-01.png')");
		$(".barometerred").css("width", "12.5%");
		$(".barometergreen").css("width", "87.5%");
		avatarSkriver3();
	} else {
		console.log("Humør 9");
		$(".avatarsin").css("background-image", "url('Img/dameekstatisk-01.png')");
		$(".doctorsen").css("background-image", "url('Img/meget_glad-01.png')");
		$(".barometerred").css("width", "0%");
		$(".barometergreen").css("width", "100%");
		avatarSkriver3();
	}
}

function avatarSkriver3() {
	console.log("typing");
	$(".dialog").css("height", "28vw")
	$(".prikker").show();
	setTimeout(avatarSvarer3, 1);
}

function avatarSvarer3() {
	console.log("avatar");
	$("#modtaget_besked")[0].play();
	$("#modtaget_besked")[0].volume = 0.5;
	$(".prikker").hide(0);
	$(".dialog").css("height", "32vw");
	$("ul").append(sv2a);
	setTimeout(valg2a, 1); //5000
}

function valg2a() {
	console.log("Valg 2a");
	$(".avatarsvar").html("<strong></strong>Nej. Hvad med dialogen mellem politikere og borgere?");
	$(".mulighed1").html("<strong></strong>Her har der altid været en god dialog til politikerne. Vi får altid en sludder når de har en stand sat op?");
	$(".mulighed2").html("<strong></strong>Det ved jeg ikke rigtigt, de kan bare sige til?");
	$(".mulighed3").html("<strong></strong>Det er mange gange svært at se hvem der er lokal politiker, men jeg er medlem af et parti og får det samme matriale som politikeren, så der masser at snakke om?");
	$(".valg").css("z-index", "25");
	$(".mulighed").show(0);
	$(".mulighed1").on("click", mulighed2a);
	$(".mulighed2").on("click", mulighed2b);
	$(".mulighed3").on("click", mulighed2c);
}

function mulighed2a() {
	console.log("Mulighed 2a")
	$(".mulighed").hide(0);
	$(".valg").css("z-index", "10");
	$(".mulighed1").off("click", mulighed2a);
	$(".mulighed2").off("click", mulighed2b);
	$(".mulighed3").off("click", mulighed2c);
	$(".mulighed2").off("click", mulighed3c);
	$("#typing")[0].play();
	$(".chattype").typeIt({
		strings: ['Hej'],
		speed: 1 //40

	});
	setTimeout(klikPåKnap4a, 1);
}

function klikPåKnap4a() {
	console.log("klikPåKnap4");
	//$("#typing")[0].pause();
	$(".send").addClass("klik");
	$(".send").on("click", docSvarer4a);
	setTimeout(docSvarer4a, 1);
}

function docSvarer4a() {
	console.log("doc svarer 4a");
	$("#sendknap")[0].play();
	$("#sendknap")[0].volume = 0.2;
	$(".send").removeClass("klik");
	$(".send").off("click", docSvarer4a);
	$(".chattype").typeIt({
		startDelete: true
	});
	$("ul").append(s3a);
	setTimeout(humørSkift2a, 1); //2000
}

function humørSkift2a() {
	console.log("Humør skift 2a");
	//1 = sur 0% grøn, 100% rød
	//2 = megetKed 12.5% grøn, 87.5% rød
	//3 = lidtKed 25% grøn, 75% rød
	//4 = overrasket 37.5% grøn, 62.5% rød
	//5 = flov 50% grøn, 50% rød
	//6 = neutral 62.5% grøn, 37.5% rød
	//7 = glad 75% grøn, 25% rød
	//8 = megetGlad 87.5% grøn, 12.5% rød
	//9 ekstatisk 100% grøn, 0% rød
	console.log("Humør skifte1");
	if (avatarHumor <= 1) {
		console.log("Humør 1");
		$(".avatarsin").css("background-image", "url('Img/damesur-01.png')");
		$(".doctorsen").css("background-image", "url('Img/på_dybt_vand-01.png')");
		$(".barometerred").css("width", "100%");
		$(".barometergreen").css("width", "0%");
		avatarSkriver4a();
	} else if (avatarHumor == 2) {
		console.log("Humør 2");
		$(".avatarsin").css("background-image", "url('Img/damemegetked-01.png')");
		$(".doctorsen").css("background-image", "url('Img/på_dybt_vand-01.png')");
		$(".barometerred").css("width", "87.5%");
		$(".barometergreen").css("width", "12.5%");
		avatarSkriver4a();
	} else if (avatarHumor == 3) {
		console.log("Humør 3");
		$(".avatarsin").css("background-image", "url('Img/damelidtked-01.png')");
		$(".doctorsen").css("background-image", "url('Img/overrasket_negativt-01.png')");
		$(".barometerred").css("width", "75%");
		$(".barometergreen").css("width", "25%");
		avatarSkriver4a();
	} else if (avatarHumor == 4) {
		console.log("Humør 4");
		$(".avatarsin").css("background-image", "url('Img/dameoverrasket-01.png')");
		$(".doctorsen").css("background-image", "url('Img/overrasket_negativt-01.png')");
		$(".barometerred").css("width", "62.5%");
		$(".barometergreen").css("width", "37.5%");
		avatarSkriver4a();
	} else if (avatarHumor == 5) {
		console.log("Humør 5");
		$(".avatarsin").css("background-image", "url('Img/dameflov-01.png')");
		$(".barometerred").css("width", "50%");
		$(".barometergreen").css("width", "50%");
		avatarSkriver4a();
	} else if (avatarHumor == 6) {
		console.log("Humør 6");
		$(".avatarsin").css("background-image", "url('Img/dameneutral-01.png')");
		$(".barometerred").css("width", "37.5%");
		$(".barometergreen").css("width", "62.5%");
		avatarSkriver4a();
	} else if (avatarHumor == 7) {
		console.log("Humør 7");
		$(".avatarsin").css("background-image", "url('Img/dameglad-01.png')");
		$(".barometerred").css("width", "25%");
		$(".barometergreen").css("width", "75%");
		avatarSkriver4a();
	} else if (avatarHumor == 8) {
		console.log("Humør 8");
		$(".avatarsin").css("background-image", "url('Img/damemegetglad-01.png')");
		$(".doctorsen").css("background-image", "url('Img/meget_glad-01.png')");
		$(".barometerred").css("width", "12.5%");
		$(".barometergreen").css("width", "87.5%");
		avatarSkriver4a();
	} else {
		console.log("Humør 9");
		$(".avatarsin").css("background-image", "url('Img/dameekstatisk-01.png')");
		$(".doctorsen").css("background-image", "url('Img/meget_glad-01.png')");
		$(".barometerred").css("width", "0%");
		$(".barometergreen").css("width", "100%");
		avatarSkriver4a();
	}
}

function avatarSkriver4a() {
	console.log("typing");
	$(".dialog").css("height", "28vw")
	$(".prikker").show();
	setTimeout(avatarSvarer4a, 1);
}

function avatarSvarer4a() {
	console.log("avatar");
	$("#modtaget_besked")[0].play();
	$("#modtaget_besked")[0].volume = 0.5;
	$(".prikker").hide(0);
	$(".dialog").css("height", "32vw");
	$("ul").append(sv3a);
	setTimeout(tabEllerVind1a, 1); //5000
}

function tabEllerVind1a() {
	console.log("tabEllerVind");
	if (avatarHumor <= 1) {
		console.log("Humør 1");
		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
		$(".lastscreen").show(0);
		$(".loss")[0].play();
	} else if (avatarHumor == 2) {
		console.log("Humør 2");
		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
		$(".lastscreen").show(0);
		$(".loss")[0].play();
	} else if (avatarHumor == 3) {
		console.log("Humør 3");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 4) {
		console.log("Humør 4");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 5) {
		console.log("Humør 5");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 6) {
		console.log("Humør 6");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 7) {
		console.log("Humør 7");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 8) {
		console.log("Humør 8");
		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
		$(".lastscreen").show(0);
		$(".win")[0].play();
	} else {
		console.log("Humør 9");
		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
		$(".lastscreen").show(0);
		$(".win")[0].play();
	}
}

//////////

function mulighed2b() {
	console.log("Mulighed 2b")
	$(".mulighed").hide(0);
	$(".valg").css("z-index", "10");
	$(".mulighed1").off("click", mulighed2a);
	$(".mulighed2").off("click", mulighed2b);
	$(".mulighed3").off("click", mulighed2c);
	$("#typing")[0].play();
	$(".chattype").typeIt({
		strings: ['Hej'],
		speed: 1 //40

	});
	setTimeout(klikPåKnap4b, 1);
}

function klikPåKnap4b() {
	console.log("klikPåKnap4");
	//$("#typing")[0].pause();
	$(".send").addClass("klik");
	$(".send").on("click", docSvarer4b);
	setTimeout(docSvarer4b, 1);
}

function docSvarer4b() {
	console.log("docSvarer4b");
	$("#sendknap")[0].play();
	$("#sendknap")[0].volume = 0.2;
	$(".send").removeClass("klik");
	$(".send").off("click", docSvarer4b);
	$(".chattype").typeIt({
		startDelete: true
	});
	$("ul").append(s3b);
	avatarHumor--;
	avatarHumor--;
	avatarHumor--;
	$(".info").html("avatar <span>" + avatarHumor + "</span> humør");
	setTimeout(humørSkift2b, 1); //2000
}

function humørSkift2b() {
	console.log("Humør skift 2b");
	//1 = sur 0% grøn, 100% rød
	//2 = megetKed 12.5% grøn, 87.5% rød
	//3 = lidtKed 25% grøn, 75% rød
	//4 = overrasket 37.5% grøn, 62.5% rød
	//5 = flov 50% grøn, 50% rød
	//6 = neutral 62.5% grøn, 37.5% rød
	//7 = glad 75% grøn, 25% rød
	//8 = megetGlad 87.5% grøn, 12.5% rød
	//9 ekstatisk 100% grøn, 0% rød
	console.log("Humør skifte1");
	if (avatarHumor <= 1) {
		console.log("Humør 1");
		$(".avatarsin").css("background-image", "url('Img/damesur-01.png')");
		$(".doctorsen").css("background-image", "url('Img/på_dybt_vand-01.png')");
		$(".barometerred").css("width", "100%");
		$(".barometergreen").css("width", "0%");
		avatarSkriver4b();
	} else if (avatarHumor == 2) {
		console.log("Humør 2");
		$(".avatarsin").css("background-image", "url('Img/damemegetked-01.png')");
		$(".doctorsen").css("background-image", "url('Img/på_dybt_vand-01.png')");
		$(".barometerred").css("width", "87.5%");
		$(".barometergreen").css("width", "12.5%");
		avatarSkriver4b();
	} else if (avatarHumor == 3) {
		console.log("Humør 3");
		$(".avatarsin").css("background-image", "url('Img/damelidtked-01.png')");
		$(".doctorsen").css("background-image", "url('Img/overrasket_negativt-01.png')");
		$(".barometerred").css("width", "75%");
		$(".barometergreen").css("width", "25%");
		avatarSkriver4b();
	} else if (avatarHumor == 4) {
		console.log("Humør 4");
		$(".avatarsin").css("background-image", "url('Img/dameoverrasket-01.png')");
		$(".doctorsen").css("background-image", "url('Img/overrasket_negativt-01.png')");
		$(".barometerred").css("width", "62.5%");
		$(".barometergreen").css("width", "37.5%");
		avatarSkriver4b();
	} else if (avatarHumor == 5) {
		console.log("Humør 5");
		$(".avatarsin").css("background-image", "url('Img/dameflov-01.png')");
		$(".barometerred").css("width", "50%");
		$(".barometergreen").css("width", "50%");
		avatarSkriver4b();
	} else if (avatarHumor == 6) {
		console.log("Humør 6");
		$(".avatarsin").css("background-image", "url('Img/dameneutral-01.png')");
		$(".barometerred").css("width", "37.5%");
		$(".barometergreen").css("width", "62.5%");
		avatarSkriver4b();
	} else if (avatarHumor == 7) {
		console.log("Humør 7");
		$(".avatarsin").css("background-image", "url('Img/dameglad-01.png')");
		$(".barometerred").css("width", "25%");
		$(".barometergreen").css("width", "75%");
		avatarSkriver4b();
	} else if (avatarHumor == 8) {
		console.log("Humør 8");
		$(".avatarsin").css("background-image", "url('Img/damemegetglad-01.png')");
		$(".doctorsen").css("background-image", "url('Img/meget_glad-01.png')");
		$(".barometerred").css("width", "12.5%");
		$(".barometergreen").css("width", "87.5%");
		avatarSkriver4b();
	} else {
		console.log("Humør 9");
		$(".avatarsin").css("background-image", "url('Img/dameekstatisk-01.png')");
		$(".doctorsen").css("background-image", "url('Img/meget_glad-01.png')");
		$(".barometerred").css("width", "0%");
		$(".barometergreen").css("width", "100%");
		avatarSkriver4b();
	}
}


function avatarSkriver4b() {
	console.log("avatarSkriver4b");
	$(".dialog").css("height", "28vw")
	$(".prikker").show();
	setTimeout(avatarSvarer4b, 1);
}

function avatarSvarer4b() {
	console.log("avatar");
	$("#modtaget_besked")[0].play();
	$("#modtaget_besked")[0].volume = 0.5;
	$(".prikker").hide(0);
	$(".dialog").css("height", "32vw");
	$("ul").append(sv3b);
	setTimeout(tabEllerVind1b, 1); //5000
}

function tabEllerVind1b() {
	console.log("tabEllerVind");
	if (avatarHumor <= 1) {
		console.log("Humør 1");
		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
		$(".lastscreen").show(0);
		$(".loss")[0].play();
	} else if (avatarHumor == 2) {
		console.log("Humør 2");
		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
		$(".lastscreen").show(0);
		$(".loss")[0].play();
	} else if (avatarHumor == 3) {
		console.log("Humør 3");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 4) {
		console.log("Humør 4");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 5) {
		console.log("Humør 5");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 6) {
		console.log("Humør 6");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 7) {
		console.log("Humør 7");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 8) {
		console.log("Humør 8");
		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
		$(".lastscreen").show(0);
		$(".win")[0].play();
	} else {
		console.log("Humør 9");
		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
		$(".lastscreen").show(0);
		$(".win")[0].play();
	}
}

///////////
function mulighed2c() {
	console.log("Mulighed 2c")
	$(".mulighed").hide(0);
	$(".valg").css("z-index", "10");
	$(".mulighed1").off("click", mulighed2a);
	$(".mulighed2").off("click", mulighed2b);
	$(".mulighed3").off("click", mulighed2c);
	$(".mulighed2").off("click", mulighed3c);
	$("#typing")[0].play();
	$(".chattype").typeIt({
		strings: ['Hej'],
		speed: 1 //40

	});
	setTimeout(klikPåKnap4c, 1);
}

function klikPåKnap4c() {
	console.log("klikPåKnap4c");
	//$("#typing")[0].pause();
	$(".send").addClass("klik");
	$(".send").on("click", docSvarer4c);
	setTimeout(docSvarer4c, 1);
}

function docSvarer4c() {
	console.log("docSvarer4c");
	$("#sendknap")[0].play();
	$("#sendknap")[0].volume = 0.2;
	$(".send").removeClass("klik");
	$(".send").off("click", docSvarer4c);
	$(".chattype").typeIt({
		startDelete: true
	});
	$("ul").append(s3c);
	avatarHumor++;
	avatarHumor++;
	$(".info").html("avatar <span>" + avatarHumor + "</span> humør");
	setTimeout(humørSkift2c, 1); //2000
}

function humørSkift2c() {
	console.log("Humør skift 2c");
	//1 = sur 0% grøn, 100% rød
	//2 = megetKed 12.5% grøn, 87.5% rød
	//3 = lidtKed 25% grøn, 75% rød
	//4 = overrasket 37.5% grøn, 62.5% rød
	//5 = flov 50% grøn, 50% rød
	//6 = neutral 62.5% grøn, 37.5% rød
	//7 = glad 75% grøn, 25% rød
	//8 = megetGlad 87.5% grøn, 12.5% rød
	//9 ekstatisk 100% grøn, 0% rød
	console.log("Humør skifte1");
	if (avatarHumor == 1) {
		console.log("Humør 1");
		$(".avatarsin").css("background-image", "url('Img/damesur-01.png')");
		$(".doctorsen").css("background-image", "url('Img/på_dybt_vand-01.png')");
		$(".barometerred").css("width", "100%");
		$(".barometergreen").css("width", "0%");
		avatarSkriver4c();
	} else if (avatarHumor == 2) {
		console.log("Humør 2");
		$(".avatarsin").css("background-image", "url('Img/damemegetked-01.png')");
		$(".doctorsen").css("background-image", "url('Img/på_dybt_vand-01.png')");
		$(".barometerred").css("width", "87.5%");
		$(".barometergreen").css("width", "12.5%");
		avatarSkriver4c();
	} else if (avatarHumor == 3) {
		console.log("Humør 3");
		$(".avatarsin").css("background-image", "url('Img/damelidtked-01.png')");
		$(".doctorsen").css("background-image", "url('Img/overrasket_negativt-01.png')");
		$(".barometerred").css("width", "75%");
		$(".barometergreen").css("width", "25%");
		avatarSkriver4c();
	} else if (avatarHumor == 4) {
		console.log("Humør 4");
		$(".avatarsin").css("background-image", "url('Img/dameoverrasket-01.png')");
		$(".doctorsen").css("background-image", "url('Img/overrasket_negativt-01.png')");
		$(".barometerred").css("width", "62.5%");
		$(".barometergreen").css("width", "37.5%");
		avatarSkriver4c();
	} else if (avatarHumor == 5) {
		console.log("Humør 5");
		$(".avatarsin").css("background-image", "url('Img/dameflov-01.png')");
		$(".barometerred").css("width", "50%");
		$(".barometergreen").css("width", "50%");
		avatarSkriver4c();
	} else if (avatarHumor == 6) {
		console.log("Humør 6");
		$(".avatarsin").css("background-image", "url('Img/dameneutral-01.png')");
		$(".barometerred").css("width", "37.5%");
		$(".barometergreen").css("width", "62.5%");
		avatarSkriver4c();
	} else if (avatarHumor == 7) {
		console.log("Humør 7");
		$(".avatarsin").css("background-image", "url('Img/dameglad-01.png')");
		$(".barometerred").css("width", "25%");
		$(".barometergreen").css("width", "75%");
		avatarSkriver4c();
	} else if (avatarHumor == 8) {
		console.log("Humør 8");
		$(".avatarsin").css("background-image", "url('Img/damemegetglad-01.png')");
		$(".doctorsen").css("background-image", "url('Img/meget_glad-01.png')");
		$(".barometerred").css("width", "12.5%");
		$(".barometergreen").css("width", "87.5%");
		avatarSkriver4c();
	} else {
		console.log("Humør 9");
		$(".avatarsin").css("background-image", "url('Img/dameekstatisk-01.png')");
		$(".doctorsen").css("background-image", "url('Img/meget_glad-1.png')");
		$(".barometerred").css("width", "0%");
		$(".barometergreen").css("width", "100%");
		avatarSkriver4c();
	}
}


function avatarSkriver4c() {
	console.log("avatarSkriver4c");
	$(".dialog").css("height", "28vw")
	$(".prikker").show();
	setTimeout(avatarSvarer4c, 1);
}

function avatarSvarer4c() {
	console.log("avatar");
	$("#modtaget_besked")[0].play();
	$("#modtaget_besked")[0].volume = 0.5;
	$(".prikker").hide(0);
	$(".dialog").css("height", "32vw");
	$("ul").append(sv3c);
	setTimeout(tabEllerVind1c, 1); //5000
}

function tabEllerVind1c() {
	console.log("tabEllerVind");
	if (avatarHumor <= 1) {
		console.log("Humør 1");
		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
		$(".lastscreen").show(0);
		$(".loss")[0].play();
	} else if (avatarHumor == 2) {
		console.log("Humør 2");
		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
		$(".lastscreen").show(0);
		$(".loss")[0].play();
	} else if (avatarHumor == 3) {
		console.log("Humør 3");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 4) {
		console.log("Humør 4");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 5) {
		console.log("Humør 5");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 6) {
		console.log("Humør 6");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 7) {
		console.log("Humør 7");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 8) {
		console.log("Humør 8");
		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
		$(".lastscreen").show(0);
		$(".win")[0].play();
	} else {
		console.log("Humør 9");
		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
		$(".lastscreen").show(0);
		$(".win")[0].play();
	}
}


//////

function mulighed1b() {
	console.log("Mulighed 1b");
	$(".mulighed").hide(0);
	$(".valg").css("z-index", "10");
	$(".mulighed1").off("click", mulighed1a);
	$(".mulighed2").off("click", mulighed1b);
	$(".mulighed3").off("click", mulighed1c);
	$(".mulighed1").off("click", mulighed30a);
	$("#typing")[0].play();
	$(".chattype").typeIt({
		strings: ['Hej'],
		speed: 1 //40

	});
	setTimeout(klikPåKnap3b, 1);
}

function klikPåKnap3b() {
	console.log("Klik på knap 3b");
	//$("#typing")[0].pause();
	$(".send").addClass("klik");
	$(".send").on("click", docSvarer3b);
	setTimeout(docSvarer3b, 1);
}

function docSvarer3b() {
	console.log("doc svarer 3");
	$("#sendknap")[0].play();
	$("#sendknap")[0].volume = 0.2;
	$(".send").removeClass("klik");
	$(".send").off("click", docSvarer3b);
	$(".chattype").typeIt({
		startDelete: true
	});
	$("ul").append(s2b);
	avatarHumor++;
	$(".info").html("avatar <span>" + avatarHumor + "</span> humør");
	setTimeout(humørSkift1c, 1); //2000
}

function humørSkift1c() {
	//1 = sur 0% grøn, 100% rød
	//2 = megetKed 12.5% grøn, 87.5% rød
	//3 = lidtKed 25% grøn, 75% rød
	//4 = overrasket 37.5% grøn, 62.5% rød
	//5 = flov 50% grøn, 50% rød
	//6 = neutral 62.5% grøn, 37.5% rød
	//7 = glad 75% grøn, 25% rød
	//8 = megetGlad 87.5% grøn, 12.5% rød
	//9 ekstatisk 100% grøn, 0% rød
	console.log("Humør skifte1");
	if (avatarHumor <= 1) {
		console.log("Humør 1");
		$(".avatarsin").css("background-image", "url('Img/damesur-01.png')");
		$(".doctorsen").css("background-image", "url('Img/på_dybt_vand-01.png')");
		$(".barometerred").css("width", "100%");
		$(".barometergreen").css("width", "0%");
		avatarSkriver3b();
	} else if (avatarHumor == 2) {
		console.log("Humør 2");
		$(".avatarsin").css("background-image", "url('Img/damemegetked-01.png')");
		$(".doctorsen").css("background-image", "url('Img/på_dybt_vand-01.png')");
		$(".barometerred").css("width", "87.5%");
		$(".barometergreen").css("width", "12.5%");
		avatarSkriver3b();
	} else if (avatarHumor == 3) {
		console.log("Humør 3");
		$(".avatarsin").css("background-image", "url('Img/damelidtked-01.png')");
		$(".doctorsen").css("background-image", "url('Img/overrasket_negativt-01.png')");
		$(".barometerred").css("width", "75%");
		$(".barometergreen").css("width", "25%");
		avatarSkriver3b();
	} else if (avatarHumor == 4) {
		console.log("Humør 4");
		$(".avatarsin").css("background-image", "url('Img/dameoverrasket-01.png')");
		$(".doctorsen").css("background-image", "url('Img/overrasket_negativt-01.png')");
		$(".barometerred").css("width", "62.5%");
		$(".barometergreen").css("width", "37.5%");
		avatarSkriver3b();
	} else if (avatarHumor == 5) {
		console.log("Humør 5");
		$(".avatarsin").css("background-image", "url('Img/dameflov-01.png')");
		$(".barometerred").css("width", "50%");
		$(".barometergreen").css("width", "50%");
		avatarSkriver3b();
	} else if (avatarHumor == 6) {
		console.log("Humør 6");
		$(".avatarsin").css("background-image", "url('Img/dameneutral-01.png')");
		$(".barometerred").css("width", "37.5%");
		$(".barometergreen").css("width", "62.5%");
		avatarSkriver3b();
	} else if (avatarHumor == 7) {
		console.log("Humør 7");
		$(".avatarsin").css("background-image", "url('Img/dameglad-01.png')");
		$(".barometerred").css("width", "25%");
		$(".barometergreen").css("width", "75%");
		avatarSkriver3b();
	} else if (avatarHumor == 8) {
		console.log("Humør 8");
		$(".avatarsin").css("background-image", "url('Img/damemegetglad-01.png')");
		$(".doctorsen").css("background-image", "url('Img/meget_glad-01.png')");
		$(".barometerred").css("width", "12.5%");
		$(".barometergreen").css("width", "87.5%");
		avatarSkriver3b();
	} else {
		console.log("Humør 9");
		$(".avatarsin").css("background-image", "url('Img/dameekstatisk-01.png')");
		$(".doctorsen").css("background-image", "url('Img/meget_glad-01.png')");
		$(".barometerred").css("width", "0%");
		$(".barometergreen").css("width", "100%");
		avatarSkriver3b();
	}
}

function avatarSkriver3b() {
	console.log("typing");
	$(".dialog").css("height", "28vw")
	$(".prikker").show();
	setTimeout(avatarSvarer3b, 1);
}

function avatarSvarer3b() {
	console.log("avatar");
	$("#modtaget_besked")[0].play();
	$("#modtaget_besked")[0].volume = 0.5;
	$(".prikker").hide(0);
	$(".dialog").css("height", "32vw");
	$("ul").append(sv2b);
	setTimeout(valg2b, 1); //5000
}


function valg2b() {
	console.log("Valg 2b");
	$(".avatarsvar").html("<strong></strong>Ja, flere indbyggere, har betydning for miljøet?");
	$(".mulighed1").html("<strong></strong>Her har der været taget hensyn for grøn by og at CO2- niveauet skal ned?");
	$(".mulighed2").html("<strong></strong>Her har du en pjece, der omhandler dit problem. Læs den, og så skal det nok ordne sig?");
	$(".mulighed3").html("<strong></strong>Det er vigtigt der er boliger nok og at der satses på bæredygtighed over hele linjen?");
	$(".valg").css("z-index", "25");
	$(".mulighed").show(0);
	$(".mulighed1").on("click", mulighed2c);
	$(".mulighed2").on("click", mulighed2a);
	$(".mulighed3").on("click", mulighed3c);
}

function mulighed3c() {
	console.log("Mulighed 2a")
	$(".mulighed").hide(0);
	$(".valg").css("z-index", "10");
	$(".mulighed1").off("click", mulighed2a);
	$(".mulighed2").off("click", mulighed3c);
	$(".mulighed3").off("click", mulighed2c);
	$("#typing")[0].play();
	$(".chattype").typeIt({
		strings: ['Hej'],
		speed: 1 //40

	});
	setTimeout(klikPåKnap5c, 1);
}

function klikPåKnap5c() {
	console.log("klikPåKnap5c");
	//$("#typing")[0].pause();
	$(".send").addClass("klik");
	$(".send").on("click", docSvarer5c);
	setTimeout(docSvarer5c, 1);
}

function docSvarer5c() {
	console.log("doc svarer 5c");
	$("#sendknap")[0].play();
	$("#sendknap")[0].volume = 0.2;
	$(".send").removeClass("klik");
	$(".send").off("click", docSvarer5c);
	$(".chattype").typeIt({
		startDelete: true
	});
	avatarHumor++;
	$(".info").html("avatar <span>" + avatarHumor + "</span> humør");
	$("ul").append(s4c);
	setTimeout(humørSkift3c, 1); //2000
}

function humørSkift3c() {
	//1 = sur 0% grøn, 100% rød
	//2 = megetKed 12.5% grøn, 87.5% rød
	//3 = lidtKed 25% grøn, 75% rød
	//4 = overrasket 37.5% grøn, 62.5% rød
	//5 = flov 50% grøn, 50% rød
	//6 = neutral 62.5% grøn, 37.5% rød
	//7 = glad 75% grøn, 25% rød
	//8 = megetGlad 87.5% grøn, 12.5% rød
	//9 ekstatisk 100% grøn, 0% rød
	console.log("Humør skifte1");
	if (avatarHumor <= 1) {
		console.log("Humør 1");
		$(".avatarsin").css("background-image", "url('Img/damesur-01.png')");
		$(".doctorsen").css("background-image", "url('Img/på_dybt_vand-01.png')");
		$(".barometerred").css("width", "100%");
		$(".barometergreen").css("width", "0%");
		avatarSkriver5c();
	} else if (avatarHumor == 2) {
		console.log("Humør 2");
		$(".avatarsin").css("background-image", "url('Img/damemegetked-01.png')");
		$(".doctorsen").css("background-image", "url('Img/på_dybt_vand-01.png')");
		$(".barometerred").css("width", "87.5%");
		$(".barometergreen").css("width", "12.5%");
		avatarSkriver5c();
	} else if (avatarHumor == 3) {
		console.log("Humør 3");
		$(".avatarsin").css("background-image", "url('Img/damelidtked-01.png')");
		$(".doctorsen").css("background-image", "url('Img/overrasket_negativt-01.png')");
		$(".barometerred").css("width", "75%");
		$(".barometergreen").css("width", "25%");
		avatarSkriver5c();
	} else if (avatarHumor == 4) {
		console.log("Humør 4");
		$(".avatarsin").css("background-image", "url('Img/dameoverrasket-01.png')");
		$(".doctorsen").css("background-image", "url('Img/overrasket_negativt-01.png')");
		$(".barometerred").css("width", "62.5%");
		$(".barometergreen").css("width", "37.5%");
		avatarSkriver5c();
	} else if (avatarHumor == 5) {
		console.log("Humør 5");
		$(".avatarsin").css("background-image", "url('Img/dameflov-01.png')");
		$(".barometerred").css("width", "50%");
		$(".barometergreen").css("width", "50%");
		avatarSkriver5c();
	} else if (avatarHumor == 6) {
		console.log("Humør 6");
		$(".avatarsin").css("background-image", "url('Img/dameneutral-01.png')");
		$(".barometerred").css("width", "37.5%");
		$(".barometergreen").css("width", "62.5%");
		avatarSkriver5c();
	} else if (avatarHumor == 7) {
		console.log("Humør 7");
		$(".avatarsin").css("background-image", "url('Img/dameglad-01.png')");
		$(".barometerred").css("width", "25%");
		$(".barometergreen").css("width", "75%");
		avatarSkriver5c();
	} else if (avatarHumor == 8) {
		console.log("Humør 8");
		$(".avatarsin").css("background-image", "url('Img/damemegetglad-01.png')");
		$(".doctorsen").css("background-image", "url('Img/meget_glad-01.png')");
		$(".barometerred").css("width", "12.5%");
		$(".barometergreen").css("width", "87.5%");
		avatarSkriver5c();
	} else {
		console.log("Humør 9");
		$(".avatarsin").css("background-image", "url('Img/dameekstatisk-01.png')");
		$(".doctorsen").css("background-image", "url('Img/meget_glad-01.png')");
		$(".barometerred").css("width", "0%");
		$(".barometergreen").css("width", "100%");
		avatarSkriver5c();
	}
}

function avatarSkriver5c() {
	console.log("typing");
	$(".dialog").css("height", "28vw")
	$(".prikker").show();
	setTimeout(avatarSvarer5c, 1);
}

function avatarSvarer5c() {
	console.log("avatar");
	$("#modtaget_besked")[0].play();
	$("#modtaget_besked")[0].volume = 0.5;
	$(".prikker").hide(0);
	$(".dialog").css("height", "32vw");
	$("ul").append(sv4c);
	setTimeout(tabEllerVind1d, 1); //5000
}

function tabEllerVind1d() {
	console.log("tabEllerVind");
	if (avatarHumor <= 1) {
		console.log("Humør 1");
		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
		$(".lastscreen").show(0);
		$(".loss")[0].play();
	} else if (avatarHumor == 2) {
		console.log("Humør 2");
		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
		$(".lastscreen").show(0);
		$(".loss")[0].play();
	} else if (avatarHumor == 3) {
		console.log("Humør 3");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 4) {
		console.log("Humør 4");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 5) {
		console.log("Humør 5");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 6) {
		console.log("Humør 6");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 7) {
		console.log("Humør 7");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 8) {
		console.log("Humør 8");
		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
		$(".lastscreen").show(0);
		$(".win")[0].play();
	} else {
		console.log("Humør 9");
		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
		$(".lastscreen").show(0);
		$(".win")[0].play();
	}
}



///////////

function mulighed1c() {
	console.log("Mulighed 1c");
	$(".mulighed").hide(0);
	$(".valg").css("z-index", "10");
	$(".mulighed1").off("click", mulighed1a);
	$(".mulighed2").off("click", mulighed1b);
	$(".mulighed3").off("click", mulighed1c);
	$(".mulighed1").off("click", mulighed30a);
	$("#typing")[0].play();
	$(".chattype").typeIt({
		strings: ['Hej'],
		speed: 1 //40

	});
	setTimeout(klikPåKnap3c, 1);
}

function klikPåKnap3c() {
	console.log("Klik på knap 3c");
	//$("#typing")[0].pause();
	$(".send").addClass("klik");
	$(".send").on("click", docSvarer3c);
	setTimeout(docSvarer3c, 1);
}

function docSvarer3c() {
	console.log("doc svarer 3c");
	$("#sendknap")[0].play();
	$("#sendknap")[0].volume = 0.2;
	$(".send").removeClass("klik");
	$(".send").off("click", docSvarer3c);
	$(".chattype").typeIt({
		startDelete: true
	});
	$("ul").append(s2c);
	avatarHumor--;
	avatarHumor--;
	$(".info").html("avatar <span>" + avatarHumor + "</span> humør");
	setTimeout(humørSkift5c, 1); //2000
}

function humørSkift5c() {
	//1 = sur 0% grøn, 100% rød
	//2 = megetKed 12.5% grøn, 87.5% rød
	//3 = lidtKed 25% grøn, 75% rød
	//4 = overrasket 37.5% grøn, 62.5% rød
	//5 = flov 50% grøn, 50% rød
	//6 = neutral 62.5% grøn, 37.5% rød
	//7 = glad 75% grøn, 25% rød
	//8 = megetGlad 87.5% grøn, 12.5% rød
	//9 ekstatisk 100% grøn, 0% rød
	console.log("Humør skifte1");
	if (avatarHumor <= 1) {
		console.log("Humør 1");
		$(".avatarsin").css("background-image", "url('Img/damesur-01.png')");
		$(".doctorsen").css("background-image", "url('Img/på_dybt_vand-01.png')");
		$(".barometerred").css("width", "100%");
		$(".barometergreen").css("width", "0%");
		avatarSkriver6c();
	} else if (avatarHumor == 2) {
		console.log("Humør 2");
		$(".avatarsin").css("background-image", "url('Img/damemegetked-01.png')");
		$(".doctorsen").css("background-image", "url('Img/på_dybt_vand-01.png')");
		$(".barometerred").css("width", "87.5%");
		$(".barometergreen").css("width", "12.5%");
		avatarSkriver6c();
	} else if (avatarHumor == 3) {
		console.log("Humør 3");
		$(".avatarsin").css("background-image", "url('Img/damelidtked-01.png')");
		$(".doctorsen").css("background-image", "url('Img/overrasket_negativt-01.png')");
		$(".barometerred").css("width", "75%");
		$(".barometergreen").css("width", "25%");
		avatarSkriver6c();
	} else if (avatarHumor == 4) {
		console.log("Humør 4");
		$(".avatarsin").css("background-image", "url('Img/dameoverrasket-01.png')");
		$(".doctorsen").css("background-image", "url('Img/overrasket_negativt-01.png')");
		$(".barometerred").css("width", "62.5%");
		$(".barometergreen").css("width", "37.5%");
		avatarSkriver6c();
	} else if (avatarHumor == 5) {
		console.log("Humør 5");
		$(".avatarsin").css("background-image", "url('Img/dameflov-01.png')");
		$(".barometerred").css("width", "50%");
		$(".barometergreen").css("width", "50%");
		avatarSkriver6c();
	} else if (avatarHumor == 6) {
		console.log("Humør 6");
		$(".avatarsin").css("background-image", "url('Img/dameneutral-01.png')");
		$(".barometerred").css("width", "37.5%");
		$(".barometergreen").css("width", "62.5%");
		avatarSkriver6c();
	} else if (avatarHumor == 7) {
		console.log("Humør 7");
		$(".avatarsin").css("background-image", "url('Img/dameglad-01.png')");
		$(".barometerred").css("width", "25%");
		$(".barometergreen").css("width", "75%");
		avatarSkriver6c();
	} else if (avatarHumor == 8) {
		console.log("Humør 8");
		$(".avatarsin").css("background-image", "url('Img/damemegetglad-01.png')");
		$(".doctorsen").css("background-image", "url('Img/meget_glad-01.png')");
		$(".barometerred").css("width", "12.5%");
		$(".barometergreen").css("width", "87.5%");
		avatarSkriver6c();
	} else {
		console.log("Humør 9");
		$(".avatarsin").css("background-image", "url('Img/dameekstatisk-01.png')");
		$(".doctorsen").css("background-image", "url('Img/meget_glad-01.png')");
		$(".barometerred").css("width", "0%");
		$(".barometergreen").css("width", "100%");
		avatarSkriver6c();
	}
}

function avatarSkriver6c() {
	console.log("typing");
	$(".dialog").css("height", "28vw")
	$(".prikker").show();
	setTimeout(avatarSvarer6c, 1);
}

function avatarSvarer6c() {
	console.log("avatar");
	$("#modtaget_besked")[0].play();
	$("#modtaget_besked")[0].volume = 0.5;
	$(".prikker").hide(0);
	$(".dialog").css("height", "32vw");
	$("ul").append(sv2c);
	setTimeout(valg2c, 1); //5000
}

function valg2c() {
	console.log("Valg 2c");
	$(".avatarsvar").html("<strong></strong>Men der er altid råd til en bedre udvikling?");
	$(".mulighed1").html("<strong></strong>Beklager, udsatte kvinder, løsarbejdere og prostitution er svært at komme til livs?");
	$(".mulighed2").html("<strong></strong>Ja, men det er altid usikkert hvad man får ikke hvad man har?");
	$(".mulighed3").html("<strong></strong>Og hvad har jounior så tænkt sig at gøre ved det?");
	$(".valg").css("z-index", "25");
	$(".mulighed").show(0);
	$(".mulighed1").on("click", mulighed4a);
	$(".mulighed2").on("click", mulighed4b);
	$(".mulighed3").on("click", mulighed4c);
}

function mulighed4a() {
	console.log("mulighed4a");
	$(".mulighed").hide(0);
	$(".valg").css("z-index", "10");
	$(".mulighed1").off("click", mulighed4a);
	$(".mulighed2").off("click", mulighed4b);
	$(".mulighed3").off("click", mulighed4c);
	$("#typing")[0].play();
	$(".chattype").typeIt({
		strings: ['Hej'],
		speed: 1 //40

	});
	setTimeout(klikPåKnap6a, 1);
}

function klikPåKnap6a() {
	console.log("klikPåKnap6a");
	//	$("#typing")[0].pause();
	$(".send").addClass("klik");
	$(".send").on("click", docSvarer6a);
	setTimeout(docSvarer6a, 1);
}

function docSvarer6a() {
	console.log("docSvarer6a");
	$("#sendknap")[0].play();
	$("#sendknap")[0].volume = 0.2;
	$(".send").removeClass("klik");
	$(".send").off("click", docSvarer6a);
	$(".chattype").typeIt({
		startDelete: true
	});
	$("ul").append(s5a);
	avatarHumor++;
	$(".info").html("avatar <span>" + avatarHumor + "</span> humør");
	setTimeout(humørSkift6a, 1); //2000
}

function humørSkift6a() {
	//1 = sur 0% grøn, 100% rød
	//2 = megetKed 12.5% grøn, 87.5% rød
	//3 = lidtKed 25% grøn, 75% rød
	//4 = overrasket 37.5% grøn, 62.5% rød
	//5 = flov 50% grøn, 50% rød
	//6 = neutral 62.5% grøn, 37.5% rød
	//7 = glad 75% grøn, 25% rød
	//8 = megetGlad 87.5% grøn, 12.5% rød
	//9 ekstatisk 100% grøn, 0% rød
	console.log("Humør skifte1");
	if (avatarHumor <= 1) {
		console.log("Humør 1");
		$(".avatarsin").css("background-image", "url('Img/damesur-01.png')");
		$(".doctorsen").css("background-image", "url('Img/på_dybt_vand-01.png')");
		$(".barometerred").css("width", "100%");
		$(".barometergreen").css("width", "0%");
		avatarSkriver7a();
	} else if (avatarHumor == 2) {
		console.log("Humør 2");
		$(".avatarsin").css("background-image", "url('Img/damemegetked-01.png')");
		$(".doctorsen").css("background-image", "url('Img/på_dybt_vand-01.png')");
		$(".barometerred").css("width", "87.5%");
		$(".barometergreen").css("width", "12.5%");
		avatarSkriver7a();
	} else if (avatarHumor == 3) {
		console.log("Humør 3");
		$(".avatarsin").css("background-image", "url('Img/damelidtked-01.png')");
		$(".doctorsen").css("background-image", "url('Img/overrasket_negativt-01.png')");
		$(".barometerred").css("width", "75%");
		$(".barometergreen").css("width", "25%");
		avatarSkriver7a();
	} else if (avatarHumor == 4) {
		console.log("Humør 4");
		$(".avatarsin").css("background-image", "url('Img/dameoverrasket-01.png')");
		$(".doctorsen").css("background-image", "url('Img/overrasket_negativt-01.png')");
		$(".barometerred").css("width", "62.5%");
		$(".barometergreen").css("width", "37.5%");
		avatarSkriver7a();
	} else if (avatarHumor == 5) {
		console.log("Humør 5");
		$(".avatarsin").css("background-image", "url('Img/dameflov-01.png')");
		$(".barometerred").css("width", "50%");
		$(".barometergreen").css("width", "50%");
		avatarSkriver7a();
	} else if (avatarHumor == 6) {
		console.log("Humør 6");
		$(".avatarsin").css("background-image", "url('Img/dameneutral-01.png')");
		$(".barometerred").css("width", "37.5%");
		$(".barometergreen").css("width", "62.5%");
		avatarSkriver7a();
	} else if (avatarHumor == 7) {
		console.log("Humør 7");
		$(".avatarsin").css("background-image", "url('Img/dameglad-01.png')");
		$(".barometerred").css("width", "25%");
		$(".barometergreen").css("width", "75%");
		avatarSkriver7a();
	} else if (avatarHumor == 8) {
		console.log("Humør 8");
		$(".avatarsin").css("background-image", "url('Img/damemegetglad-01.png')");
		$(".doctorsen").css("background-image", "url('Img/meget_glad-01.png')");
		$(".barometerred").css("width", "12.5%");
		$(".barometergreen").css("width", "87.5%");
		avatarSkriver7a();
	} else {
		console.log("Humør 9");
		$(".avatarsin").css("background-image", "url('Img/dameekstatisk-01.png')");
		$(".doctorsen").css("background-image", "url('Img/meget_glad-01.png')");
		$(".barometerred").css("width", "0%");
		$(".barometergreen").css("width", "100%");
		avatarSkriver7a();
	}
}

function avatarSkriver7a() {
	console.log("typing");
	$(".dialog").css("height", "28vw")
	$(".prikker").show();
	setTimeout(avatarSvarer7a, 1);
}

function avatarSvarer7a() {
	console.log("avatar");
	$("#modtaget_besked")[0].play();
	$("#modtaget_besked")[0].volume = 0.5;
	$(".prikker").hide(0);
	$(".dialog").css("height", "32vw");
	$("ul").append(sv5a);
	setTimeout(tabEllerVind1e, 1); //5000
}

function tabEllerVind1e() {
	console.log("tabEllerVind");
	if (avatarHumor <= 1) {
		console.log("Humør 1");
		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
		$(".lastscreen").show(0);
		$(".loss")[0].play();
	} else if (avatarHumor == 2) {
		console.log("Humør 2");
		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
		$(".lastscreen").show(0);
		$(".loss")[0].play();
	} else if (avatarHumor == 3) {
		console.log("Humør 3");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 4) {
		console.log("Humør 4");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 5) {
		console.log("Humør 5");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 6) {
		console.log("Humør 6");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 7) {
		console.log("Humør 7");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 8) {
		console.log("Humør 8");
		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
		$(".lastscreen").show(0);
		$(".win")[0].play();
	} else {
		console.log("Humør 9");
		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
		$(".lastscreen").show(0);
		$(".win")[0].play();
	}
}



///////
function mulighed4b() {
	console.log("mulighed4b");
	$(".mulighed").hide(0);
	$(".valg").css("z-index", "10");
	$(".mulighed1").off("click", mulighed4a);
	$(".mulighed2").off("click", mulighed4b);
	$(".mulighed3").off("click", mulighed4c);
	$("#typing")[0].play();
	$(".chattype").typeIt({
		strings: ['Hej'],
		speed: 1 //40

	});
	setTimeout(klikPåKnap6b, 1);
}

function klikPåKnap6b() {
	console.log("klikPåKnap6b");
	//$("#typing")[0].pause();
	$(".send").addClass("klik");
	$(".send").on("click", docSvarer6b);
	setTimeout(docSvarer6b, 1);
}

function docSvarer6b() {
	console.log("docSvarer6b");
	$("#sendknap")[0].play();
	$("#sendknap")[0].volume = 0.2;
	$(".send").removeClass("klik");
	$(".send").off("click", docSvarer6b);
	$(".chattype").typeIt({
		startDelete: true
	});
	$("ul").append(s5b);
	avatarHumor--;
	avatarHumor--;
	$(".info").html("avatar <span>" + avatarHumor + "</span> humør");
	setTimeout(humørSkift6b, 1); //2000
}

function humørSkift6b() {
	//1 = sur 0% grøn, 100% rød
	//2 = megetKed 12.5% grøn, 87.5% rød
	//3 = lidtKed 25% grøn, 75% rød
	//4 = overrasket 37.5% grøn, 62.5% rød
	//5 = flov 50% grøn, 50% rød
	//6 = neutral 62.5% grøn, 37.5% rød
	//7 = glad 75% grøn, 25% rød
	//8 = megetGlad 87.5% grøn, 12.5% rød
	//9 ekstatisk 100% grøn, 0% rød
	console.log("Humør skifte1");
	if (avatarHumor <= 1) {
		console.log("Humør 1");
		$(".avatarsin").css("background-image", "url('Img/damesur-01.png')");
		$(".doctorsen").css("background-image", "url('Img/på_dybt_vand-01.png')");
		$(".barometerred").css("width", "100%");
		$(".barometergreen").css("width", "0%");
		avatarSkriver7b();
	} else if (avatarHumor == 2) {
		console.log("Humør 2");
		$(".avatarsin").css("background-image", "url('Img/damemegetked-01.png')");
		$(".doctorsen").css("background-image", "url('Img/på_dybt_vand-01.png')");
		$(".barometerred").css("width", "87.5%");
		$(".barometergreen").css("width", "12.5%");
		avatarSkriver7b();
	} else if (avatarHumor == 3) {
		console.log("Humør 3");
		$(".avatarsin").css("background-image", "url('Img/damelidtked-01.png')");
		$(".doctorsen").css("background-image", "url('Img/overrasket_negativt-01.png')");
		$(".barometerred").css("width", "75%");
		$(".barometergreen").css("width", "25%");
		avatarSkriver7b();
	} else if (avatarHumor == 4) {
		console.log("Humør 4");
		$(".avatarsin").css("background-image", "url('Img/dameoverrasket-01.png')");
		$(".doctorsen").css("background-image", "url('Img/overrasket_negativt-01.png')");
		$(".barometerred").css("width", "62.5%");
		$(".barometergreen").css("width", "37.5%");
		avatarSkriver7b();
	} else if (avatarHumor == 5) {
		console.log("Humør 5");
		$(".avatarsin").css("background-image", "url('Img/dameflov-01.png')");
		$(".barometerred").css("width", "50%");
		$(".barometergreen").css("width", "50%");
		avatarSkriver7b();
	} else if (avatarHumor == 6) {
		console.log("Humør 6");
		$(".avatarsin").css("background-image", "url('Img/dameneutral-01.png')");
		$(".barometerred").css("width", "37.5%");
		$(".barometergreen").css("width", "62.5%");
		avatarSkriver7b();
	} else if (avatarHumor == 7) {
		console.log("Humør 7");
		$(".avatarsin").css("background-image", "url('Img/dameglad-01.png')");
		$(".barometerred").css("width", "25%");
		$(".barometergreen").css("width", "75%");
		avatarSkriver7b();
	} else if (avatarHumor == 8) {
		console.log("Humør 8");
		$(".avatarsin").css("background-image", "url('Img/damemegetglad-01.png')")
		$(".doctorsen").css("background-image", "url('Img/meget_glad-01.png')");
		$(".barometerred").css("width", "12.5%");
		$(".barometergreen").css("width", "87.5%");
		avatarSkriver7b();
	} else {
		console.log("Humør 9");
		$(".avatarsin").css("background-image", "url('Img/dameekstatisk-01.png')");
		$(".doctorsen").css("background-image", "url('Img/meget_glad-01.png')");
		$(".barometerred").css("width", "0%");
		$(".barometergreen").css("width", "100%");
		avatarSkriver7b();
	}
}

function avatarSkriver7b() {
	console.log("typing");
	$(".dialog").css("height", "28vw")
	$(".prikker").show();
	setTimeout(avatarSvarer7b, 1);
}

function avatarSvarer7b() {
	console.log("avatar");
	$("#modtaget_besked")[0].play();
	$("#modtaget_besked")[0].volume = 0.5;
	$(".prikker").hide(0);
	$(".dialog").css("height", "32vw");
	$("ul").append(sv5b);
	setTimeout(tabEllerVind1f, 1); //5000
}

function tabEllerVind1f() {
	console.log("tabEllerVind");
	if (avatarHumor <= 1) {
		console.log("Humør 1");
		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
		$(".lastscreen").show(0);
		$(".loss")[0].play();
	} else if (avatarHumor == 2) {
		console.log("Humør 2");
		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
		$(".lastscreen").show(0);
		$(".loss")[0].play();
	} else if (avatarHumor == 3) {
		console.log("Humør 3");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 4) {
		console.log("Humør 4");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 5) {
		console.log("Humør 5");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 6) {
		console.log("Humør 6");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 7) {
		console.log("Humør 7");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 8) {
		console.log("Humør 8");
		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
		$(".lastscreen").show(0);
		$(".win")[0].play();
	} else {
		console.log("Humør 9");
		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
		$(".lastscreen").show(0);
		$(".win")[0].play();
	}
}


///////
function mulighed4c() {
	console.log("mulighed4c");
	$(".mulighed").hide(0);
	$(".valg").css("z-index", "10");
	$(".mulighed1").off("click", mulighed4a);
	$(".mulighed2").off("click", mulighed4b);
	$(".mulighed3").off("click", mulighed4c);
	$("#typing")[0].play();
	$(".chattype").typeIt({
		strings: ['Hej'],
		speed: 1 //40

	});
	setTimeout(klikPåKnap6c, 1);
}

function klikPåKnap6c() {
	console.log("klikPåKnap6c");
	//	$("#typing")[0].pause();
	$(".send").addClass("klik");
	$(".send").on("click", docSvarer6c);
	setTimeout(docSvarer6c, 1);
}

function docSvarer6c() {
	console.log("docSvarer6c");
	$("#sendknap")[0].play();
	$("#sendknap")[0].volume = 0.2;
	$(".send").removeClass("klik");
	$(".send").off("click", docSvarer6c);
	$(".chattype").typeIt({
		startDelete: true
	});
	$("ul").append(s5c);
	avatarHumor--;
	$(".info").html("avatar <span>" + avatarHumor + "</span> humør");
	setTimeout(humørSkift6b, 1); //2000
}

function humørSkift6b() {
	//1 = sur 0% grøn, 100% rød
	//2 = megetKed 12.5% grøn, 87.5% rød
	//3 = lidtKed 25% grøn, 75% rød
	//4 = overrasket 37.5% grøn, 62.5% rød
	//5 = flov 50% grøn, 50% rød
	//6 = neutral 62.5% grøn, 37.5% rød
	//7 = glad 75% grøn, 25% rød
	//8 = megetGlad 87.5% grøn, 12.5% rød
	//9 ekstatisk 100% grøn, 0% rød
	console.log("Humør skifte1");
	if (avatarHumor <= 1) {
		console.log("Humør 1");
		$(".avatarsin").css("background-image", "url('Img/damesur-01.png')");
		$(".doctorsen").css("background-image", "url('Img/på_dybt_vand-01.png')");
		$(".barometerred").css("width", "100%");
		$(".barometergreen").css("width", "0%");
		avatarSkriver7b();
	} else if (avatarHumor == 2) {
		console.log("Humør 2");
		$(".avatarsin").css("background-image", "url('Img/damemegetked-01.png')");
		$(".doctorsen").css("background-image", "url('Img/på_dybt_vand-01.png')");
		$(".barometerred").css("width", "87.5%");
		$(".barometergreen").css("width", "12.5%");
		avatarSkriver7b();
	} else if (avatarHumor == 3) {
		console.log("Humør 3");
		$(".avatarsin").css("background-image", "url('Img/damelidtked-01.png')");
		$(".doctorsen").css("background-image", "url('Img/overrasket_negativt-01.png')");
		$(".barometerred").css("width", "75%");
		$(".barometergreen").css("width", "25%");
		avatarSkriver7b();
	} else if (avatarHumor == 4) {
		console.log("Humør 4");
		$(".avatarsin").css("background-image", "url('Img/dameoverrasket-01.png')");
		$(".doctorsen").css("background-image", "url('Img/overrasket_negativt-01.png')");
		$(".barometerred").css("width", "62.5%");
		$(".barometergreen").css("width", "37.5%");
		avatarSkriver7b();
	} else if (avatarHumor == 5) {
		console.log("Humør 5");
		$(".avatarsin").css("background-image", "url('Img/dameflov-01.png')");
		$(".barometerred").css("width", "50%");
		$(".barometergreen").css("width", "50%");
		avatarSkriver7b();
	} else if (avatarHumor == 6) {
		console.log("Humør 6");
		$(".avatarsin").css("background-image", "url('Img/dameneutral-01.png')");
		$(".barometerred").css("width", "37.5%");
		$(".barometergreen").css("width", "62.5%");
		avatarSkriver7b();
	} else if (avatarHumor == 7) {
		console.log("Humør 7");
		$(".avatarsin").css("background-image", "url('Img/dameglad-01.png')");
		$(".barometerred").css("width", "25%");
		$(".barometergreen").css("width", "75%");
		avatarSkriver7b();
	} else if (avatarHumor == 8) {
		console.log("Humør 8");
		$(".avatarsin").css("background-image", "url('Img/damemegetglad-01.png')");
		$(".doctorsen").css("background-image", "url('Img/meget_glad-01.png')");
		$(".barometerred").css("width", "12.5%");
		$(".barometergreen").css("width", "87.5%");
		avatarSkriver7b();
	} else {
		console.log("Humør 9");
		$(".avatarsin").css("background-image", "url('Img/dameekstatisk-01.png')");
		$(".doctorsen").css("background-image", "url('Img/_meget_glad-01.png')");
		$(".barometerred").css("width", "0%");
		$(".barometergreen").css("width", "100%");
		avatarSkriver7b();
	}
}

function avatarSkriver7b() {
	console.log("typing");
	$(".dialog").css("height", "28vw")
	$(".prikker").show();
	setTimeout(avatarSvarer7b, 1);
}

function avatarSvarer7b() {
	console.log("avatar");
	$("#modtaget_besked")[0].play();
	$("#modtaget_besked")[0].volume = 0.5;
	$(".prikker").hide(0);
	$(".dialog").css("height", "32vw");
	$("ul").append(sv5b);
	setTimeout(tabEllerVind1g, 1); //5000
}

function tabEllerVind1g() {
	console.log("tabEllerVind");
	if (avatarHumor <= 1) {
		console.log("Humør 1");
		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
		$(".lastscreen").show(0);
		$(".loss")[0].play();
	} else if (avatarHumor == 2) {
		console.log("Humør 2");
		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
		$(".lastscreen").show(0);
		$(".loss")[0].play();
	} else if (avatarHumor == 3) {
		console.log("Humør 3");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 4) {
		console.log("Humør 4");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 5) {
		console.log("Humør 5");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 6) {
		console.log("Humør 6");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 7) {
		console.log("Humør 7");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 8) {
		console.log("Humør 8");
		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
		$(".lastscreen").show(0);
		$(".win")[0].play();
	} else {
		console.log("Humør 9");
		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
		$(".lastscreen").show(0);
		$(".win")[0].play();
	}
}




////////dialog-spor 2

function mulighed2() {
	console.log("Mulighed 2");
	$(".mulighed").hide(0);
	$(".valg").css("z-index", "10");
	$(".mulighed1").off("click", mulighed1);
	$(".mulighed2").off("click", mulighed2);
	$(".mulighed3").off("click", mulighed3);
	$("#typing")[0].play();
	$(".chattype").typeIt({
		strings: ['Hej'],
		speed: 1 //40

	});

	setTimeout(klikPåKnap20, 1); //4000
}

function klikPåKnap20() {
	console.log("Klik på knap 3");
	//$("#typing")[0].pause();
	$(".send").addClass("klik");
	$(".send").on("click", docSvarer20);
	setTimeout(docSvarer20, 1);
}

function docSvarer20() {
	console.log("doc svarer 3");
	$("#sendknap")[0].play();
	$("#sendknap")[0].volume = 0.2;
	$(".send").removeClass("klik");
	$(".send").off("click", docSvarer20);
	$(".chattype").typeIt({
		startDelete: true
	});
	avatarHumor--;
	avatarHumor--;
	avatarHumor--;
	$(".info").html("avatar <span>" + avatarHumor + "</span> humør");
	$("ul").append(s20);
	setTimeout(humørSkift20, 1); //2000
}

function humørSkift20() {
	//1 = sur 0% grøn, 100% rød
	//2 = megetKed 12.5% grøn, 87.5% rød
	//3 = lidtKed 25% grøn, 75% rød
	//4 = overrasket 37.5% grøn, 62.5% rød
	//5 = flov 50% grøn, 50% rød
	//6 = neutral 62.5% grøn, 37.5% rød
	//7 = glad 75% grøn, 25% rød
	//8 = megetGlad 87.5% grøn, 12.5% rød
	//9 ekstatisk 100% grøn, 0% rød
	console.log("Humør skifte1");
	if (avatarHumor <= 1) {
		console.log("Humør 1");
		$(".avatarsin").css("background-image", "url('Img/damesur-01.png')");
		$(".doctorsen").css("background-image", "url('Img/på_dybt_vand-01.png')");
		$(".barometerred").css("width", "100%");
		$(".barometergreen").css("width", "0%");
		avatarSkriver20();
	} else if (avatarHumor == 2) {
		console.log("Humør 2");
		$(".avatarsin").css("background-image", "url('Img/damemegetked-01.png')");
		$(".doctorsen").css("background-image", "url('Img/på_dybt_vand-01.png')");
		$(".barometerred").css("width", "87.5%");
		$(".barometergreen").css("width", "12.5%");
		avatarSkriver20();
	} else if (avatarHumor == 3) {
		console.log("Humør 3");
		$(".avatarsin").css("background-image", "url('Img/damelidtked-01.png')");
		$(".doctorsen").css("background-image", "url('Img/overrasket_negativt-01.png')");
		$(".barometerred").css("width", "75%");
		$(".barometergreen").css("width", "25%");
		avatarSkriver20();
	} else if (avatarHumor == 4) {
		console.log("Humør 4");
		$(".avatarsin").css("background-image", "url('Img/dameoverrasket-01.png')");
		$(".doctorsen").css("background-image", "url('Img/overrasket_negativt-01.png')");
		$(".barometerred").css("width", "62.5%");
		$(".barometergreen").css("width", "37.5%");
		avatarSkriver20();
	} else if (avatarHumor == 5) {
		console.log("Humør 5");
		$(".avatarsin").css("background-image", "url('Img/dameflov-01.png')");
		$(".barometerred").css("width", "50%");
		$(".barometergreen").css("width", "50%");
		avatarSkriver20();
	} else if (avatarHumor == 6) {
		console.log("Humør 6");
		$(".avatarsin").css("background-image", "url('Img/dameneutral-01.png')");
		$(".barometerred").css("width", "37.5%");
		$(".barometergreen").css("width", "62.5%");
		avatarSkriver20();
	} else if (avatarHumor == 7) {
		console.log("Humør 7");
		$(".avatarsin").css("background-image", "url('Img/dameglad-01.png')");
		$(".barometerred").css("width", "25%");
		$(".barometergreen").css("width", "75%");
		avatarSkriver20();
	} else if (avatarHumor == 8) {
		console.log("Humør 8");
		$(".avatarsin").css("background-image", "url('Img/damemegetglad-01.png')");
		$(".doctorsen").css("background-image", "url('Img/meget_glad-01.png')");
		$(".barometerred").css("width", "12.5%");
		$(".barometergreen").css("width", "87.5%");
		avatarSkriver20();
	} else {
		console.log("Humør 9");
		$(".avatarsin").css("background-image", "url('Img/dameekstatisk-01.png')");
		$(".doctorsen").css("background-image", "url('Img/meget_glad-01.png')");
		$(".barometerred").css("width", "0%");
		$(".barometergreen").css("width", "100%");
		avatarSkriver20();
	}
}

function avatarSkriver20() {
	console.log("avatarSkriver20");
	$(".dialog").css("height", "28vw")
	$(".prikker").show();
	setTimeout(avatarSvarer20, 1); //3000
}

function avatarSvarer20() {
	console.log("avatarSvarer20");
	$("#modtaget_besked")[0].play();
	$("#modtaget_besked")[0].volume = 0.5;
	$(".prikker").hide(0);
	$(".dialog").css("height", "32vw");
	$("ul").append(sv20);
	setTimeout(valg20, 1); //5000
}

function valg20() {
	console.log("valg20");
	$(".avatarsvar").html("<strong></strong>Øhh, der er stadig psykisk udsatte og alle har ret til en bolig, som danske statsborgere?");
	$(".mulighed1").html("<strong></strong>Nå, hvad med den merudgift der er på bolig som familie, må vi nu ikke være familie længere?");
	$(".mulighed2").html("<strong></strong>Nå ok, så skal der holdes godt øje med hjemløse, så de også får en bolig?");
	$(".mulighed3").html("<strong></strong>Hvad er sundhedsmæssigt den rigtige størrelses bolig?");
	$(".valg").css("z-index", "25");
	$(".mulighed").show(0);
	$(".mulighed1").on("click", mulighed20a);
	$(".mulighed2").on("click", mulighed20b);
	$(".mulighed3").on("click", mulighed20c);
}

function mulighed20a() {
	console.log("mulighed20a")
	$(".mulighed").hide(0);
	$(".valg").css("z-index", "10");
	$(".mulighed1").off("click", mulighed20a);
	$(".mulighed2").off("click", mulighed20b);
	$(".mulighed3").off("click", mulighed20c);
	$("#typing")[0].play();
	$(".chattype").typeIt({
		strings: ['Hej'],
		speed: 1 //40

	});
	setTimeout(klikPåKnap20a, 1);
}

function klikPåKnap20a() {
	console.log("klikPåKnap20a");
	//$("#typing")[0].pause();
	$(".send").addClass("klik");
	$(".send").on("click", docSvarer20a);
	setTimeout(docSvarer20a, 1);
}

function docSvarer20a() {
	console.log("doc svarer 20a");
	$("#sendknap")[0].play();
	$("#sendknap")[0].volume = 0.2;
	$(".send").removeClass("klik");
	$(".send").off("click", docSvarer20a);
	$(".chattype").typeIt({
		startDelete: true
	});
	$("ul").append(s20a);
	avatarHumor--;
	avatarHumor--;
	$(".info").html("avatar <span>" + avatarHumor + "</span> humør");
	setTimeout(humørSkift6b, 1); //2000
}

function mulighed20b() {
	console.log("mulighed20b")
	$(".mulighed").hide(0);
	$(".valg").css("z-index", "10");
	$(".mulighed1").off("click", mulighed20a);
	$(".mulighed2").off("click", mulighed20b);
	$(".mulighed3").off("click", mulighed20c);
	$("#typing")[0].play();
	$(".chattype").typeIt({
		strings: ['Hej'],
		speed: 1 //40

	});
	avatarHumor++;
	$(".info").html("avatar <span>" + avatarHumor + "</span> humør");
	setTimeout(klikPåKnap20b, 1);
}

function klikPåKnap20b() {
	console.log("klikPåKnap20b");
	//	$("#typing")[0].pause();
	$(".send").addClass("klik");
	$(".send").on("click", docSvarer20b);
	setTimeout(docSvarer20b, 1);
}

function docSvarer20b() {
	console.log("doc svarer 20b");
	$("#sendknap")[0].play();
	$("#sendknap")[0].volume = 0.2;
	$(".send").removeClass("klik");
	$(".send").off("click", docSvarer20b);
	$(".chattype").typeIt({
		startDelete: true
	});
	$("ul").append(s20b);
	setTimeout(humørSkift20b, 1); //2000
}

function mulighed20c() {
	console.log("mulighed20c")
	$(".mulighed").hide(0);
	$(".valg").css("z-index", "10");
	$(".mulighed1").off("click", mulighed20a);
	$(".mulighed2").off("click", mulighed20b);
	$(".mulighed3").off("click", mulighed20c);
	$("#typing")[0].play();
	$(".chattype").typeIt({
		strings: ['Hej'],
		speed: 1 //40

	});
	setTimeout(klikPåKnap20c, 1);
}

function klikPåKnap20c() {
	console.log("klikPåKnap20c");
	//$("#typing")[0].pause();
	$(".send").addClass("klik");
	$(".send").on("click", docSvarer20c);
	setTimeout(docSvarer20c, 1);
}

function docSvarer20c() {
	console.log("doc svarer 20c");
	$("#sendknap")[0].play();
	$("#sendknap")[0].volume = 0.2;
	$(".send").removeClass("klik");
	$(".send").off("click", docSvarer20c);
	$(".chattype").typeIt({
		startDelete: true
	});
	$("ul").append(s20c);
	setTimeout(humørSkift20b, 1); //2000
}

function humørSkift20b() {
	//1 = sur 0% grøn, 100% rød
	//2 = megetKed 12.5% grøn, 87.5% rød
	//3 = lidtKed 25% grøn, 75% rød
	//4 = overrasket 37.5% grøn, 62.5% rød
	//5 = flov 50% grøn, 50% rød
	//6 = neutral 62.5% grøn, 37.5% rød
	//7 = glad 75% grøn, 25% rød
	//8 = megetGlad 87.5% grøn, 12.5% rød
	//9 ekstatisk 100% grøn, 0% rød
	console.log("Humør skifte1");
	if (avatarHumor <= 1) {
		console.log("Humør 1");
		$(".avatarsin").css("background-image", "url('Img/damesur-01.png')");
		$(".doctorsen").css("background-image", "url('Img/på_dybt_vand-01.png')");
		$(".barometerred").css("width", "100%");
		$(".barometergreen").css("width", "0%");
		avatarSkriver20b();
	} else if (avatarHumor == 2) {
		console.log("Humør 2");
		$(".avatarsin").css("background-image", "url('Img/damemegetked-01.png')");
		$(".doctorsen").css("background-image", "url('Img/på_dybt_vand-01.png')");
		$(".barometerred").css("width", "87.5%");
		$(".barometergreen").css("width", "12.5%");
		avatarSkriver20b();
	} else if (avatarHumor == 3) {
		console.log("Humør 3");
		$(".avatarsin").css("background-image", "url('Img/damelidtked-01.png')");
		$(".doctorsen").css("background-image", "url('Img/overrasket_negativt-01.png')");
		$(".barometerred").css("width", "75%");
		$(".barometergreen").css("width", "25%");
		avatarSkriver20b();
	} else if (avatarHumor == 4) {
		console.log("Humør 4");
		$(".avatarsin").css("background-image", "url('Img/dameoverrasket-01.png')");
		$(".doctorsen").css("background-image", "url('Img/overrasket_negativt-01.png')");
		$(".barometerred").css("width", "62.5%");
		$(".barometergreen").css("width", "37.5%");
		avatarSkriver20b();
	} else if (avatarHumor == 5) {
		console.log("Humør 5");
		$(".avatarsin").css("background-image", "url('Img/dameflov-01.png')");
		$(".barometerred").css("width", "50%");
		$(".barometergreen").css("width", "50%");
		avatarSkriver20b();
	} else if (avatarHumor == 6) {
		console.log("Humør 6");
		$(".avatarsin").css("background-image", "url('Img/dameneutral-01.png')");
		$(".barometerred").css("width", "37.5%");
		$(".barometergreen").css("width", "62.5%");
		avatarSkriver20b();
	} else if (avatarHumor == 7) {
		console.log("Humør 7");
		$(".avatarsin").css("background-image", "url('Img/dameglad-01.png')");
		$(".barometerred").css("width", "25%");
		$(".barometergreen").css("width", "75%");
		avatarSkriver20b();
	} else if (avatarHumor == 8) {
		console.log("Humør 8");
		$(".avatarsin").css("background-image", "url('Img/damemegetglad-01.png')");
		$(".doctorsen").css("background-image", "url('Img/meget_glad-01.png')");
		$(".barometerred").css("width", "12.5%");
		$(".barometergreen").css("width", "87.5%");
		avatarSkriver20b();
	} else {
		console.log("Humør 9");
		$(".avatarsin").css("background-image", "url('Img/dameekstatisk-01.png')");
		$(".doctorsen").css("background-image", "url('Img/meget_glad-01.png')");
		$(".barometerred").css("width", "0%");
		$(".barometergreen").css("width", "100%");
		avatarSkriver29b();
	}
}

function avatarSkriver20b() {
	console.log("avatarSkriver20b");
	$(".dialog").css("height", "28vw")
	$(".prikker").show();
	setTimeout(avatarSvarer20b, 1);
}

function avatarSvarer20b() {
	console.log("avatarSvarer20b");
	$("#modtaget_besked")[0].play();
	$("#modtaget_besked")[0].volume = 0.5;
	$(".prikker").hide(0);
	$(".dialog").css("height", "32vw");
	$("ul").append(sv20b);
	setTimeout(valg21, 1); //5000
}

function valg21() {
	console.log("valg21");
	$(".avatarsvar").html("<strong></strong>Jeg har praktikpladser og voksenuddannelse?");
	$(".mulighed1").html("<strong></strong>Jeg kan give min arbejdsgiver besked om at der er voksen-uddannelser?");
	$(".mulighed2").html("<strong></strong>Jeg kender nogle industriområder, der samarbejder om at få flest gennem uddannelse uanset alder og social status?");
	$(".mulighed3").html("<strong></strong>Det er bare at bruge pengene på kriminalforsovnet?");
	$(".valg").css("z-index", "25");
	$(".mulighed").show(0);
	$(".mulighed1").on("click", mulighed21a);
	$(".mulighed2").on("click", mulighed21b);
	$(".mulighed3").on("click", mulighed21c);
}

function mulighed21a() {
	console.log("mulighed21a");
	$(".mulighed").hide(0);
	$(".valg").css("z-index", "10");
	$(".mulighed1").off("click", mulighed21a);
	$(".mulighed2").off("click", mulighed21b);
	$(".mulighed3").off("click", mulighed21c);
	$("#typing")[0].play();
	$(".chattype").typeIt({
		strings: ['Hej'],
		speed: 1 //40

	});
	setTimeout(klikPåKnap21a, 1); //4600
}

function klikPåKnap21a() {
	console.log("klikPåKnap21a");
	//$("#typing")[0].pause();
	$(".send").addClass("klik");
	$(".send").on("click", docSvarer21a);
	setTimeout(docSvarer21a, 1);
}

function docSvarer21a() {
	console.log("doc svarer 21a");
	$("#sendknap")[0].play();
	$("#sendknap")[0].volume = 0.2;
	$(".send").removeClass("klik");
	$(".send").off("click", docSvarer21a);
	$(".chattype").typeIt({
		startDelete: true
	});
	avatarHumor++;
	$(".info").html("avatar <span>" + avatarHumor + "</span> humør");
	$("ul").append(s21a);
	setTimeout(humørSkift21a, 1); //2000
}

function humørSkift21a() {

	console.log("Humør skifte1");
	if (avatarHumor <= 1) {
		console.log("Humør 1");
		$(".avatarsin").css("background-image", "url('Img/damesur-01.png')");
		$(".doctorsen").css("background-image", "url('Img/på_dybt_vand-01.png')");
		$(".barometerred").css("width", "100%");
		$(".barometergreen").css("width", "0%");
		avatarSkriver21a();
	} else if (avatarHumor == 2) {
		console.log("Humør 2");
		$(".avatarsin").css("background-image", "url('Img/damemegetked-01.png')");
		$(".doctorsen").css("background-image", "url('Img/på_dybt_vand-01.png')");
		$(".barometerred").css("width", "87.5%");
		$(".barometergreen").css("width", "12.5%");
		avatarSkriver21a();
	} else if (avatarHumor == 3) {
		console.log("Humør 3");
		$(".avatarsin").css("background-image", "url('Img/damelidtked-01.png')");
		$(".doctorsen").css("background-image", "url('Img/overrasket_negativt-01.png')");
		$(".barometerred").css("width", "75%");
		$(".barometergreen").css("width", "25%");
		avatarSkriver21a();
	} else if (avatarHumor == 4) {
		console.log("Humør 4");
		$(".avatarsin").css("background-image", "url('Img/dameoverrasket-01.png')");
		$(".doctorsen").css("background-image", "url('Img/overrasket_negativt-01.png')");
		$(".barometerred").css("width", "62.5%");
		$(".barometergreen").css("width", "37.5%");
		avatarSkriver21a();
	} else if (avatarHumor == 5) {
		console.log("Humør 5");
		$(".avatarsin").css("background-image", "url('Img/dameflov-01.png')");
		$(".barometerred").css("width", "50%");
		$(".barometergreen").css("width", "50%");
		avatarSkriver21a();
	} else if (avatarHumor == 6) {
		console.log("Humør 6");
		$(".avatarsin").css("background-image", "url('Img/dameneutral-01.png')");
		$(".barometerred").css("width", "37.5%");
		$(".barometergreen").css("width", "62.5%");
		avatarSkriver21a();
	} else if (avatarHumor == 7) {
		console.log("Humør 7");
		$(".avatarsin").css("background-image", "url('Img/dameglad-01.png')");
		$(".barometerred").css("width", "25%");
		$(".barometergreen").css("width", "75%");
		avatarSkriver21a();
	} else if (avatarHumor == 8) {
		console.log("Humør 8");
		$(".avatarsin").css("background-image", "url('Img/damemegetglad-01.png')");
		$(".doctorsen").css("background-image", "url('Img/meget_glad-01.png')");
		$(".barometerred").css("width", "12.5%");
		$(".barometergreen").css("width", "87.5%");
		avatarSkriver21a();
	} else {
		console.log("Humør 9");
		$(".avatarsin").css("background-image", "url('Img/dameekstatisk-01.png')");
		$(".doctorsen").css("background-image", "url('Img/meget_glad-01.png')");
		$(".barometerred").css("width", "0%");
		$(".barometergreen").css("width", "100%");
		avatarSkriver21a();
	}
}

function avatarSkriver21a() {
	console.log("avatarSkriver21a");
	$(".dialog").css("height", "28vw")
	$(".prikker").show();
	setTimeout(avatarSvarer21a, 1);
}

function avatarSvarer21a() {
	console.log("avatarSvarer21a");
	$("#modtaget_besked")[0].play();
	$("#modtaget_besked")[0].volume = 0.5;
	$(".prikker").hide(0);
	$(".dialog").css("height", "32vw");
	$("ul").append(sv21a);
	setTimeout(tabEllerVind2a, 1); //5000
}

function tabEllerVind2a() {
	console.log("tabEllerVind");
	if (avatarHumor <= 1) {
		console.log("Humør 1");
		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
		$(".lastscreen").show(0);
		$(".loss")[0].play();
	} else if (avatarHumor == 2) {
		console.log("Humør 2");
		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
		$(".lastscreen").show(0);
		$(".loss")[0].play();
	} else if (avatarHumor == 3) {
		console.log("Humør 3");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 4) {
		console.log("Humør 4");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 5) {
		console.log("Humør 5");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 6) {
		console.log("Humør 6");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 7) {
		console.log("Humør 7");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 8) {
		console.log("Humør 8");
		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
		$(".lastscreen").show(0);
		$(".win")[0].play();
	} else {
		console.log("Humør 9");
		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
		$(".lastscreen").show(0);
		$(".win")[0].play();
	}
}
///////////

function mulighed21b() {
	console.log("mulighed21a");
	$(".mulighed").hide(0);
	$(".valg").css("z-index", "10");
	$(".mulighed1").off("click", mulighed21a);
	$(".mulighed2").off("click", mulighed21b);
	$(".mulighed3").off("click", mulighed21c);
	$("#typing")[0].play();
	$(".chattype").typeIt({
		strings: ['Hej'],
		speed: 1 //40

	});
	setTimeout(klikPåKnap21b, 1); //4600
}

function klikPåKnap21b() {
	console.log("klikPåKnap21b");
	//	$("#typing")[0].pause();
	$(".send").addClass("klik");
	$(".send").on("click", docSvarer21b);
	setTimeout(docSvarer21b, 1);
}

function docSvarer21b() {
	console.log("doc svarer 21b");
	$("#sendknap")[0].play();
	$("#sendknap")[0].volume = 0.2;
	$(".send").removeClass("klik");
	$(".send").off("click", docSvarer21b);
	$(".chattype").typeIt({
		startDelete: true
	});
	avatarHumor++;
	avatarHumor++;
	$(".info").html("avatar <span>" + avatarHumor + "</span> humør");
	$("ul").append(s21b);
	setTimeout(humørSkift21b, 1); //2000
}

function humørSkift21b() {
	//1 = sur 0% grøn, 100% rød
	//2 = megetKed 12.5% grøn, 87.5% rød
	//3 = lidtKed 25% grøn, 75% rød
	//4 = overrasket 37.5% grøn, 62.5% rød
	//5 = flov 50% grøn, 50% rød
	//6 = neutral 62.5% grøn, 37.5% rød
	//7 = glad 75% grøn, 25% rød
	//8 = megetGlad 87.5% grøn, 12.5% rød
	//9 ekstatisk 100% grøn, 0% rød
	console.log("Humør skifte1");
	if (avatarHumor <= 1) {
		console.log("Humør 1");
		$(".avatarsin").css("background-image", "url('Img/damesur-01.png')");
		$(".doctorsen").css("background-image", "url('Img/på_dybt_vand-01.png')");
		$(".barometerred").css("width", "100%");
		$(".barometergreen").css("width", "0%");
		avatarSkriver21b();
	} else if (avatarHumor == 2) {
		console.log("Humør 2");
		$(".avatarsin").css("background-image", "url('Img/damemegetked-01.png')");
		$(".doctorsen").css("background-image", "url('Img/på_dybt_vand-01.png')");
		$(".barometerred").css("width", "87.5%");
		$(".barometergreen").css("width", "12.5%");
		avatarSkriver21b();
	} else if (avatarHumor == 3) {
		console.log("Humør 3");
		$(".avatarsin").css("background-image", "url('Img/damelidtked-01.png')");
		$(".doctorsen").css("background-image", "url('Img/overrasket_negativt-01.png')");
		$(".barometerred").css("width", "75%");
		$(".barometergreen").css("width", "25%");
		avatarSkriver21b();
	} else if (avatarHumor == 4) {
		console.log("Humør 4");
		$(".avatarsin").css("background-image", "url('Img/dameoverrasket-01.png')");
		$(".doctorsen").css("background-image", "url('Img/overrasket_negativt-01.png')");
		$(".barometerred").css("width", "62.5%");
		$(".barometergreen").css("width", "37.5%");
		avatarSkriver21b();
	} else if (avatarHumor == 5) {
		console.log("Humør 5");
		$(".avatarsin").css("background-image", "url('Img/dameflov-01.png')");
		$(".barometerred").css("width", "50%");
		$(".barometergreen").css("width", "50%");
		avatarSkriver21b();
	} else if (avatarHumor == 6) {
		console.log("Humør 6");
		$(".avatarsin").css("background-image", "url('Img/dameneutral-01.png')");
		$(".barometerred").css("width", "37.5%");
		$(".barometergreen").css("width", "62.5%");
		avatarSkriver21b();
	} else if (avatarHumor == 7) {
		console.log("Humør 7");
		$(".avatarsin").css("background-image", "url('Img/dameglad-01.png')");
		$(".barometerred").css("width", "25%");
		$(".barometergreen").css("width", "75%");
		avatarSkriver21b();
	} else if (avatarHumor == 8) {
		console.log("Humør 8");
		$(".avatarsin").css("background-image", "url('Img/damemegetglad-01.png')");
		$(".doctorsen").css("background-image", "url('Img/meget_glad-01.png')");
		$(".barometerred").css("width", "12.5%");
		$(".barometergreen").css("width", "87.5%");
		avatarSkriver21b();
	} else {
		console.log("Humør 9");
		$(".avatarsin").css("background-image", "url('Img/dameekstatisk-01.png')");
		$(".doctorsen").css("background-image", "url('Img/meget_glad-01.png')");
		$(".barometerred").css("width", "0%");
		$(".barometergreen").css("width", "100%");
		avatarSkriver21b();
	}
}

function avatarSkriver21b() {
	console.log("avatarSkriver21b");
	$(".dialog").css("height", "28vw")
	$(".prikker").show();
	setTimeout(avatarSvarer21b, 1);
}

function avatarSvarer21b() {
	console.log("avatarSvarer21b");
	$("#modtaget_besked")[0].play();
	$("#modtaget_besked")[0].volume = 0.5;
	$(".prikker").hide(0);
	$(".dialog").css("height", "32vw");
	$("ul").append(sv21b);
	setTimeout(tabEllerVind2b, 1); //5000
}

function tabEllerVind2b() {
	console.log("tabEllerVind");
	if (avatarHumor <= 1) {
		console.log("Humør 1");
		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
		$(".lastscreen").show(0);
		$(".loss")[0].play();
	} else if (avatarHumor == 2) {
		console.log("Humør 2");
		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
		$(".lastscreen").show(0);
		$(".loss")[0].play();
	} else if (avatarHumor == 3) {
		console.log("Humør 3");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 4) {
		console.log("Humør 4");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 5) {
		console.log("Humør 5");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 6) {
		console.log("Humør 6");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 7) {
		console.log("Humør 7");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 8) {
		console.log("Humør 8");
		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
		$(".lastscreen").show(0);
		$(".win")[0].play();
	} else {
		console.log("Humør 9");
		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
		$(".lastscreen").show(0);
		$(".win")[0].play();
	}
}

/////////////////
function mulighed21c() {
	console.log("mulighed21a");
	$(".mulighed").hide(0);
	$(".valg").css("z-index", "10");
	$(".mulighed1").off("click", mulighed21a);
	$(".mulighed2").off("click", mulighed21b);
	$(".mulighed3").off("click", mulighed21c);
	$("#typing")[0].play();
	$(".chattype").typeIt({
		strings: ['Hej'],
		speed: 1 //40

	});
	setTimeout(klikPåKnap21c, 1); //4600
}

function klikPåKnap21c() {
	console.log("klikPåKnap21c");
	//$("#typing")[0].pause();
	$(".send").addClass("klik");
	$(".send").on("click", docSvarer21c);
	setTimeout(docSvarer21c, 1);
}

function docSvarer21c() {
	console.log("doc svarer 21c");
	$("#sendknap")[0].play();
	$("#sendknap")[0].volume = 0.2;
	$(".send").removeClass("klik");
	$(".send").off("click", docSvarer21c);
	$(".chattype").typeIt({
		startDelete: true
	});
	avatarHumor--;
	$(".info").html("avatar <span>" + avatarHumor + "</span> humør");
	$("ul").append(s21c);
	setTimeout(humørSkift21c, 1); //2000
}

function humørSkift21c() {
	//1 = sur 0% grøn, 100% rød
	//2 = megetKed 12.5% grøn, 87.5% rød
	//3 = lidtKed 25% grøn, 75% rød
	//4 = overrasket 37.5% grøn, 62.5% rød
	//5 = flov 50% grøn, 50% rød
	//6 = neutral 62.5% grøn, 37.5% rød
	//7 = glad 75% grøn, 25% rød
	//8 = megetGlad 87.5% grøn, 12.5% rød
	//9 ekstatisk 100% grøn, 0% rød
	console.log("Humør skifte1");
	if (avatarHumor <= 1) {
		console.log("Humør 1");
		$(".avatarsin").css("background-image", "url('Img/gammeldamesur-01.png')");
		$(".doctorsen").css("background-image", "url('Img/på_dybt_vand-01.png')");
		$(".barometerred").css("width", "100%");
		$(".barometergreen").css("width", "0%");
		avatarSkriver21c();
	} else if (avatarHumor == 2) {
		console.log("Humør 2");
		$(".avatarsin").css("background-image", "url('Img/gammeldamemegetked-01.png')");
		$(".doctorsen").css("background-image", "url('Img/på_dybt_vand-01.png')");
		$(".barometerred").css("width", "87.5%");
		$(".barometergreen").css("width", "12.5%");
		avatarSkriver21c();
	} else if (avatarHumor == 3) {
		console.log("Humør 3");
		$(".avatarsin").css("background-image", "url('Img/gammeldamelidtked-01.png')");
		$(".doctorsen").css("background-image", "url('Img/overrasket_negativt-01.png')");
		$(".barometerred").css("width", "75%");
		$(".barometergreen").css("width", "25%");
		avatarSkriver21c();
	} else if (avatarHumor == 4) {
		console.log("Humør 4");
		$(".avatarsin").css("background-image", "url('Img/dameoverrasket-01.png')");
		$(".doctorsen").css("background-image", "url('Img/overrasket_negativt-01.png')");
		$(".barometerred").css("width", "62.5%");
		$(".barometergreen").css("width", "37.5%");
		avatarSkriver21c();
	} else if (avatarHumor == 5) {
		console.log("Humør 5");
		$(".avatarsin").css("background-image", "url('Img/dameflov-01.png')");
		$(".barometerred").css("width", "50%");
		$(".barometergreen").css("width", "50%");
		avatarSkriver21c();
	} else if (avatarHumor == 6) {
		console.log("Humør 6");
		$(".avatarsin").css("background-image", "url('Img/dameneutral-01.png')");
		$(".barometerred").css("width", "37.5%");
		$(".barometergreen").css("width", "62.5%");
		avatarSkriver21c();
	} else if (avatarHumor == 7) {
		console.log("Humør 7");
		$(".avatarsin").css("background-image", "url('Img/dameglad-01.png')");
		$(".barometerred").css("width", "25%");
		$(".barometergreen").css("width", "75%");
		avatarSkriver21c();
	} else if (avatarHumor == 8) {
		console.log("Humør 8");
		$(".avatarsin").css("background-image", "url('Img/damemegetglad-01.png')");
		$(".doctorsen").css("background-image", "url('Img/meget_glad-01.png')");
		$(".barometerred").css("width", "12.5%");
		$(".barometergreen").css("width", "87.5%");
		avatarSkriver21c();
	} else {
		console.log("Humør 9");
		$(".avatarsin").css("background-image", "url('Img/dameekstatisk-01.png')");
		$(".doctorsen").css("background-image", "url('Img/meget_glad-01.png')");
		$(".barometerred").css("width", "0%");
		$(".barometergreen").css("width", "100%");
		avatarSkriver21c();
	}
}

function avatarSkriver21c() {
	console.log("avatarSkriver21a");
	$(".dialog").css("height", "28vw")
	$(".prikker").show();
	setTimeout(avatarSvarer21c, 1);
}

function avatarSvarer21c() {
	console.log("avatarSvarer21c");
	$("#modtaget_besked")[0].play();
	$("#modtaget_besked")[0].volume = 0.5;
	$(".prikker").hide(0);
	$(".dialog").css("height", "32vw");
	$("ul").append(sv21c);
	setTimeout(tabEllerVind2c, 1); //5000
}

function tabEllerVind2c() {
	console.log("tabEllerVind");
	if (avatarHumor <= 1) {
		console.log("Humør 1");
		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
		$(".lastscreen").show(0);
		$(".loss")[0].play();
	} else if (avatarHumor == 2) {
		console.log("Humør 2");
		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
		$(".lastscreen").show(0);
		$(".loss")[0].play();
	} else if (avatarHumor == 3) {
		console.log("Humør 3");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 4) {
		console.log("Humør 4");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 5) {
		console.log("Humør 5");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 6) {
		console.log("Humør 6");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 7) {
		console.log("Humør 7");
		$(".lastscreen").show(0);
	} else if (avatarHumor == 8) {
		console.log("Humør 8");
		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
		$(".lastscreen").show(0);
		$(".win")[0].play();
	} else {
		console.log("Humør 9");
		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
		$(".lastscreen").show(0);
		$(".win")[0].play();
	}
}


//////////dialog-spor 3

function mulighed3() {
	console.log("Mulighed 3");
	$(".mulighed").hide(0);
	$(".valg").css("z-index", "10");
	$(".mulighed1").off("click", mulighed1);
	$(".mulighed2").off("click", mulighed2);
	$(".mulighed3").off("click", mulighed3);
	$("#typing")[0].play();
	$(".chattype").typeIt({
		strings: ['Hej'],
		speed: 1 //40

	});

	setTimeout(klikPåKnap30, 1); //4000
}

function klikPåKnap30() {
	console.log("klikPåKnap30");
	//$("#typing")[0].pause();
	$(".send").addClass("klik");
	$(".send").on("click", docSvarer30);
	setTimeout(docSvarer30, 1);
}

function docSvarer30() {
	console.log("docSvarer30");
	$("#sendknap")[0].play();
	$("#sendknap")[0].volume = 0.2;
	$(".send").removeClass("klik");
	$(".send").off("click", docSvarer30);
	$(".chattype").typeIt({
		startDelete: true
	});
	avatarHumor++;
	$(".info").html("avatar <span>" + avatarHumor + "</span> humør");
	$("ul").append(s30);
	setTimeout(humørSkift30, 1); //2000
}

function humørSkift30() {
	//1 = sur 0% grøn, 100% rød
	//2 = megetKed 12.5% grøn, 87.5% rød
	//3 = lidtKed 25% grøn, 75% rød
	//4 = overrasket 37.5% grøn, 62.5% rød
	//5 = flov 50% grøn, 50% rød
	//6 = neutral 62.5% grøn, 37.5% rød
	//7 = glad 75% grøn, 25% rød
	//8 = megetGlad 87.5% grøn, 12.5% rød
	//9 ekstatisk 100% grøn, 0% rød
	console.log("Humør skifte1");
	if (avatarHumor <= 1) {
		console.log("Humør 1");
		$(".avatarsin").css("background-image", "url('Img/damesur-01.png')");
		$(".doctorsen").css("background-image", "url('Img/dpå_dybt_vand-01.png')");
		$(".barometerred").css("width", "100%");
		$(".barometergreen").css("width", "0%");
		avatarSkriver30();
	} else if (avatarHumor == 2) {
		console.log("Humør 2");
		$(".avatarsin").css("background-image", "url('Img/damemegetked-01.png')");
		$(".doctorsen").css("background-image", "url('Img/på_dybt_vand-01.png')");
		$(".barometerred").css("width", "87.5%");
		$(".barometergreen").css("width", "12.5%");
		avatarSkriver30();
	} else if (avatarHumor == 3) {
		console.log("Humør 3");
		$(".avatarsin").css("background-image", "url('Img/damelidtked-01.png')");
		$(".doctorsen").css("background-image", "url('Img/overrasket_negativt-01.png')");
		$(".barometerred").css("width", "75%");
		$(".barometergreen").css("width", "25%");
		avatarSkriver30();
	} else if (avatarHumor == 4) {
		console.log("Humør 4");
		$(".avatarsin").css("background-image", "url('Img/dameoverrasket-01.png')");
		$(".doctorsen").css("background-image", "url('Img/overrasket_negativt-01.png')");
		$(".barometerred").css("width", "62.5%");
		$(".barometergreen").css("width", "37.5%");
		avatarSkriver30();
	} else if (avatarHumor == 5) {
		console.log("Humør 5");
		$(".avatarsin").css("background-image", "url('Img/dameflov-01.png')");
		$(".barometerred").css("width", "50%");
		$(".barometergreen").css("width", "50%");
		avatarSkriver30();
	} else if (avatarHumor == 6) {
		console.log("Humør 6");
		$(".avatarsin").css("background-image", "url('Img/dameneutral-01.png')");
		$(".barometerred").css("width", "37.5%");
		$(".barometergreen").css("width", "62.5%");
		avatarSkriver30();
	} else if (avatarHumor == 7) {
		console.log("Humør 7");
		$(".avatarsin").css("background-image", "url('Img/dameglad-01.png')");
		$(".barometerred").css("width", "25%");
		$(".barometergreen").css("width", "75%");
		avatarSkriver30();
	} else if (avatarHumor == 8) {
		console.log("Humør 8");
		$(".avatarsin").css("background-image", "url('Img/damemegetglad-01.png')");
		$(".doctorsen").css("background-image", "url('Img/meget_glad-01.png')");
		$(".barometerred").css("width", "12.5%");
		$(".barometergreen").css("width", "87.5%");
		avatarSkriver30();
	} else {
		console.log("Humør 9");
		$(".avatarsin").css("background-image", "url('Img/dameekstatisk-01.png')");
		$(".doctorsen").css("background-image", "url('Img/meget_glad-01.png')");
		$(".barometerred").css("width", "0%");
		$(".barometergreen").css("width", "100%");
		avatarSkriver30();
	}
}

function avatarSkriver30() {
	console.log("avatarSkriver30");
	$(".dialog").css("height", "28vw")
	$(".prikker").show();
	setTimeout(avatarSvarer30, 1); //3000
}

function avatarSvarer30() {
	console.log("avatarSvarer20");
	$("#modtaget_besked")[0].play();
	$("#modtaget_besked")[0].volume = 0.5;
	$(".prikker").hide(0);
	$(".dialog").css("height", "32vw");
	$("ul").append(sv1a);
	setTimeout(valg30, 1); //5000
}

function valg30() {
	console.log("valg30");
	$(".avatarsvar").html("<strong></strong>Det kan kun gå for langsomt med flere fritidsordninger og ansatte i institutionerne?");
	$(".mulighed1").html("<strong></strong>Det er lige noget for mig, hvor kan jeg skrive mig op?");
	$(".mulighed2").html("<strong></strong>Det lyder som om at der skal bygges i fremtiden?");
	$(".mulighed3").html("<strong></strong>Sådan er er det ikke hvor jeg kommer fra?");
	$(".valg").css("z-index", "25");
	$(".mulighed").show(0);
	$(".mulighed1").on("click", mulighed30a);
	$(".mulighed2").on("click", mulighed1b);
	$(".mulighed3").on("click", mulighed1c);
}

function mulighed30a() {
	console.log("mulighed30a");
	$(".mulighed").hide(0);
	$(".valg").css("z-index", "10");
	$(".mulighed1").off("click", mulighed30a);
	$(".mulighed2").off("click", mulighed1b);
	$(".mulighed3").off("click", mulighed1c);
	$("#typing")[0].play();
	$(".chattype").typeIt({
		strings: ['Hej'],
		speed: 1 //40

	});
	setTimeout(klikPåKnap30a, 1);
}

function klikPåKnap30a() {
	console.log("klikPåKnap30a");
	//$("#typing")[0].pause();
	$(".send").addClass("klik");
	$(".send").on("click", docSvarer30a);
	setTimeout(docSvarer30a, 1);
}

function docSvarer30a() {
	console.log("docSvarer30a");
	$("#sendknap")[0].play();
	$("#sendknap")[0].volume = 0.2;
	$(".send").removeClass("klik");
	$(".send").off("click", docSvarer30a);
	$(".chattype").typeIt({
		startDelete: true
	});
	$("ul").append(s30a);
	setTimeout(humørSkift30a, 1); //2000
}

function humørSkift30a() {
	//1 = sur 0% grøn, 100% rød
	//2 = megetKed 12.5% grøn, 87.5% rød
	//3 = lidtKed 25% grøn, 75% rød
	//4 = overrasket 37.5% grøn, 62.5% rød
	//5 = flov 50% grøn, 50% rød
	//6 = neutral 62.5% grøn, 37.5% rød
	//7 = glad 75% grøn, 25% rød
	//8 = megetGlad 87.5% grøn, 12.5% rød
	//9 ekstatisk 100% grøn, 0% rød
	console.log("Humør skifte1");
	if (avatarHumor <= 1) {
		console.log("Humør 1");
		$(".avatarsin").css("background-image", "url('Img/damesur-01.png')");
		$(".doctorsen").css("background-image", "url('Img/på_dybt_vand-01.png')");
		$(".barometerred").css("width", "100%");
		$(".barometergreen").css("width", "0%");
		avatarSkriver30a();
	} else if (avatarHumor == 2) {
		console.log("Humør 2");
		$(".avatarsin").css("background-image", "url('Img/damemegetked-01.png')");
		$(".doctorsen").css("background-image", "url('Img/på_dybt_vand-01.png')");
		$(".barometerred").css("width", "87.5%");
		$(".barometergreen").css("width", "12.5%");
		avatarSkriver30a();
	} else if (avatarHumor == 3) {
		console.log("Humør 3");
		$(".avatarsin").css("background-image", "url('Img/damelidtked-01.png')");
		$(".doctorsen").css("background-image", "url('Img/overrasket_negativt-01.png')");
		$(".barometerred").css("width", "75%");
		$(".barometergreen").css("width", "25%");
		avatarSkriver30a();
	} else if (avatarHumor == 4) {
		console.log("Humør 4");
		$(".avatarsin").css("background-image", "url('Img/dameoverrasket-01.png')");
		$(".doctorsen").css("background-image", "url('Img/overrasket_negativt-01.png')");
		$(".barometerred").css("width", "62.5%");
		$(".barometergreen").css("width", "37.5%");
		avatarSkriver30a();
	} else if (avatarHumor == 5) {
		console.log("Humør 5");
		$(".avatarsin").css("background-image", "url('Img/dameflov-01.png')");
		$(".barometerred").css("width", "50%");
		$(".barometergreen").css("width", "50%");
		avatarSkriver30a();
	} else if (avatarHumor == 6) {
		console.log("Humør 6");
		$(".avatarsin").css("background-image", "url('Img/dameneutral-01.png')");
		$(".barometerred").css("width", "37.5%");
		$(".barometergreen").css("width", "62.5%");
		avatarSkriver30a();
	} else if (avatarHumor == 7) {
		console.log("Humør 7");
		$(".avatarsin").css("background-image", "url('Img/dameglad-01.png')");
		$(".barometerred").css("width", "25%");
		$(".barometergreen").css("width", "75%");
		avatarSkriver30a();
	} else if (avatarHumor == 8) {
		console.log("Humør 8");
		$(".avatarsin").css("background-image", "url('Img/damemegetglad-01.png')");
		$(".doctorsen").css("background-image", "url('Img/meget_glad-01.png')");
		$(".barometerred").css("width", "12.5%");
		$(".barometergreen").css("width", "87.5%");
		avatarSkriver30a();
	} else {
		console.log("Humør 9");
		$(".avatarsin").css("background-image", "url('Img/dameekstatisk-01.png')");
		$(".doctorsen").css("background-image", "url('Img/meget_glad-01.png')");
		$(".barometerred").css("width", "0%");
		$(".barometergreen").css("width", "100%");
		avatarSkriver30a();
	}
}

function avatarSkriver30a() {
	console.log("avatarSkriver30a");
	$(".dialog").css("height", "28vw")
	$(".prikker").show();
	setTimeout(avatarSvarer30a, 1); //3000
}

function avatarSvarer30a() {
	console.log("avatarSvarer30a");
	$("#modtaget_besked")[0].play();
	$("#modtaget_besked")[0].volume = 0.5;
	$(".prikker").hide(0);
	$(".dialog").css("height", "32vw");
	$("ul").append(sv30a);
	setTimeout(valg31, 1);
}

function valg31() {
	console.log("valg31");
	$(".avatarsvar").html("<strong></strong>Kommunerne virker kun som en slags bank der vidreformidler og administrere offentlig velfærd");
	$(".mulighed1").html("<strong></strong>Her har du alle muligheder, grib changsen og find dit rigtige ståsted på arbejdsmarket");
	$(".mulighed2").html("<strong></strong>Det er godt og mindsker burikratiet på kommunalt plan");
	$(".mulighed3").html("<strong></strong>Det er meningen at Staten er vores alle sammens økonomi. Det er der for at udliciteringen har været svær at sluge, men når der er konkurrence på området får man også de bedste i ansættelse");
	$(".valg").css("z-index", "25");
	$(".mulighed").show(0);
	$(".mulighed1").on("click", mulighed2a);
	$(".mulighed2").on("click", mulighed2b);
	$(".mulighed3").on("click", mulighed2c);
}


function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
