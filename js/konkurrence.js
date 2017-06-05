//var svar1 = $(".svar1");
//var spgm1 = $(".spgm1");
//var s1a = $(".s1a");
//var s2a = $(".s2a");
//var s2b = $(".s2b");
//var s2c = $(".s2c");
//var s3a = $(".s3a");
//var s3b = $(".s3b");
//var s3c = $(".s3c");
//var s4c = $(".s4c");
//var s5a = $(".s5a");
//var s5b = $(".s5b");
//var s5c = $(".s5c");
//
//var sv1a = $(".sv1a");
//var sv2a = $(".sv2a");
//var sv2b = $(".sv2b");
//var sv2c = $(".sv2c");
//var sv3a = $(".sv3a");
//var sv3b = $(".sv3b");
//var sv3c = $(".sv3c");
//var sv4c = $(".sv4c");
//var sv5a = $(".sv5a");
//var sv5b = $(".sv5b");
//
//var s20 = $(".s20");
//var s20a = $(".s20a");
//var s20b = $(".s20b");
//var s20c = $(".s20c");
//var s21a = $(".s21a");
//var s21b = $(".s21b");
//var s21c = $(".s21c");
//
//var sv20 = $(".sv20");
//var sv20b = $(".sv20b");
//var sv21a = $(".sv21a");
//var sv21b = $(".sv21b");
//var sv21c = $(".sv21c");
//
//var s30 = $(".s30");
//var s30a = $(".s30a");
//var sv30a = $(".sv30a");
//
//var prikker = $(".prikker");
//var birgitHumor = getRndInteger(5, 8);
////1 = sur 0% grøn, 100% rød
////2 = megetKed 12.5% grøn, 87.5% rød
////3 = lidtKed 25% grøn, 75% rød
////4 = overrasket 37.5% grøn, 62.5% rød
////5 = flov 50% grøn, 50% rød
////6 = neutral 62.5% grøn, 37.5% rød
////7 = glad 75% grøn, 25% rød
////8 = megetGlad 87.5% grøn, 12.5% rød
////9 ekstatisk 100% grøn, 0% rød
//
//startHumør();
//
//$(".info").html("Birgit <span>" + birgitHumor + "</span> humør");
//
//function startHumør() {
//	console.log("Start humør");
//	if (birgitHumor == 5) {
//		console.log("Humør 5");
//		$(".birgitjensen").css("background-image", "url('Img/dameflov-01.png')");
//		$(".barometerred").css("width", "50%")
//		$(".barometergreen").css("width", "50%")
//		setTimeout(start, 1); //1500
//	} else if (birgitHumor == 6) {
//		console.log("Humør 6");
//		$(".barometerred").css("width", "37.5%")
//		$(".barometergreen").css("width", "62.5%")
//		setTimeout(start, 1); //1500
//	} else {
//		console.log("Humør 7");
//		$(".birgitjensen").css("background-image", "url(Img/dameglad-01.png)");
//		$(".barometerred").css("width", "25%")
//		$(".barometergreen").css("width", "75%")
//		setTimeout(start, 1); //1500
//	}
//}
//
//function start() {
//	$("#typing")[0].play();
//	$(".chattype").typeIt({
//		strings: ['Hej Birgit! Jeg har kigget på dine tal og alt ser helt fint ud. Er der andet, som du vil tale om?'],
//		speed: 1 //40
//
//	});
//	setTimeout(klikPåKnap, 1); //4600
//}
//
//function klikPåKnap() {
//	console.log("Klik på knappen")
//		//$("#typing")[0].pause();
//	$(".send").addClass("klik");
//	$(".send").on("click", lægeSvarer);
//	setTimeout(lægeSvarer, 55500);
//
//}
//
//
//function lægeSvarer() {
//	console.log("Hej");
//	$("#sendknap")[0].play();
//	$("#sendknap")[0].volume = 0.2;
//	$(".send").removeClass("klik");
//	$(".send").off("click", lægeSvarer);
//	$(".chattype").typeIt({
//		startDelete: true
//	});
//	$("ul").append(spgm1);
//	setTimeout(birgitSkriver, 1); //2000
//
//}
//
//function birgitSkriver() {
//	console.log("typing");
//	$(".dialog").css("height", "28vw")
//	$(".prikker").show();
//	setTimeout(birgitSvarer, 1); //3000
//}
//
//function birgitSvarer() {
//	console.log("Birgit");
//	$("#modtaget_besked")[0].play();
//	$("#modtaget_besked")[0].volume = 0.5;
//	$(".prikker").hide(0);
//	$(".dialog").css("height", "32vw");
//	$("ul").append(svar1);
//	setTimeout(valg1, 1); //5000
//}
//
//function valg1() {
//	console.log("Valg1");
//	$(".valg").css("z-index", "25");
//	$(".mulighed").show(0);
//	$(".mulighed1").on("click", mulighed1);
//	$(".mulighed2").on("click", mulighed2);
//	$(".mulighed3").on("click", mulighed3);
//}
//
///////////dialog-spor 1
//
//function mulighed1() {
//	console.log("Mulighed 1");
//	$(".mulighed").hide(0);
//	$(".valg").css("z-index", "10");
//	$(".mulighed1").off("click", mulighed1);
//	$(".mulighed2").off("click", mulighed2);
//	$(".mulighed3").off("click", mulighed3);
//	$("#typing")[0].play();
//	$(".chattype").typeIt({
//		strings: ['Er der problemer?'],
//		speed: 1 //40
//
//	});
//
//	setTimeout(klikPåKnap2, 1); //4000
//}
//
//function klikPåKnap2() {
//	console.log("Klik på knappen");
//	//	$("#typing")[0].pause();
//	$(".send").addClass("klik");
//	$(".send").on("click", lægeSvarer2);
//	setTimeout(lægeSvarer2, 1);
//}
//
//function lægeSvarer2() {
//	console.log("Læge svarer 2");
//	$("#sendknap")[0].play();
//	$("#sendknap")[0].volume = 0.2;
//	$(".send").removeClass("klik");
//	$(".send").off("click", lægeSvarer2);
//	$(".chattype").typeIt({
//		startDelete: true
//	});
//	$("ul").append(s1a);
//	setTimeout(birgitSkriver2, 1); //2000
//}
//
//function birgitSkriver2() {
//	console.log("typing");
//	$(".dialog").css("height", "28vw")
//	$(".prikker").show();
//	setTimeout(birgitSvarer2, 1); //3000
//}
//
//function birgitSvarer2() {
//	console.log("Birgit");
//	$("#modtaget_besked")[0].play();
//	$("#modtaget_besked")[0].volume = 0.5;
//	$(".prikker").hide(0);
//	$(".dialog").css("height", "32vw");
//	$("ul").append(sv1a);
//	setTimeout(valga1, 1); //5000
//}
//
//function valga1() {
//	console.log("Valg a1");
//	$(".birgitsvar").html("<strong></strong>Der har været stillet forslag til at mindske delen af almennøtige boliger?");
//	$(".mulighed1").html("<strong></strong>Jeg burde vide om Christiania indgår i lokalplanen?");
//	$(".mulighed2").html("<strong></strong>Der er meget store forandringer på boligområdet. Det kan medføre stor forskelsbehandling?");
//	$(".mulighed3").html("<strong></strong>Sådan er det, hvis der er råd?");
//	$(".valg").css("z-index", "25");
//	$(".mulighed").show(0);
//	$(".mulighed1").on("click", mulighed1a);
//	$(".mulighed2").on("click", mulighed1b);
//	$(".mulighed3").on("click", mulighed1c);
//}
//
//function mulighed1a() {
//	console.log("Mulighed 1a");
//	$(".mulighed").hide(0);
//	$(".valg").css("z-index", "10");
//	$(".mulighed1").off("click", mulighed1a);
//	$(".mulighed2").off("click", mulighed1b);
//	$(".mulighed3").off("click", mulighed1c);
//	$("#typing")[0].play();
//	$(".chattype").typeIt({
//		strings: ['Det lyder da ikke så godt.'],
//		speed: 1 //40
//
//	});
//	setTimeout(klikPåKnap3a, 1);
//}
//
//function klikPåKnap3a() {
//	console.log("Klik på knap 3");
//	//$("#typing")[0].pause();
//	$(".send").addClass("klik");
//	$(".send").on("click", lægeSvarer3a);
//	setTimeout(lægeSvarer3a, 1);
//}
//
//function lægeSvarer3a() {
//	console.log("Læge svarer 3");
//	$("#sendknap")[0].play();
//	$("#sendknap")[0].volume = 0.2;
//	$(".send").removeClass("klik");
//	$(".send").off("click", lægeSvarer3a);
//	$(".chattype").typeIt({
//		startDelete: true
//	});
//	$("ul").append(s2a);
//	setTimeout(humørSkift1a, 1); //2000
//}
//
//function humørSkift1a() {
//	//1 = sur 0% grøn, 100% rød
//	//2 = megetKed 12.5% grøn, 87.5% rød
//	//3 = lidtKed 25% grøn, 75% rød
//	//4 = overrasket 37.5% grøn, 62.5% rød
//	//5 = flov 50% grøn, 50% rød
//	//6 = neutral 62.5% grøn, 37.5% rød
//	//7 = glad 75% grøn, 25% rød
//	//8 = megetGlad 87.5% grøn, 12.5% rød
//	//9 ekstatisk 100% grøn, 0% rød
//	console.log("Humør skifte1");
//	if (birgitHumor <= 1) {
//		console.log("Humør 1");
//		$(".birgitjensen").css("background-image", "url('Img/damesur-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/på_dybt_vand-01.png')");
//		$(".barometerred").css("width", "100%");
//		$(".barometergreen").css("width", "0%");
//		birgitSkriver3();
//	} else if (birgitHumor == 2) {
//		console.log("Humør 2");
//		$(".birgitjensen").css("background-image", "url('Img/damemegetked-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/på_dybt_vand-01.png')");
//		$(".barometerred").css("width", "87.5%");
//		$(".barometergreen").css("width", "12.5%");
//		birgitSkriver3();
//	} else if (birgitHumor == 3) {
//		console.log("Humør 3");
//		$(".birgitjensen").css("background-image", "url('Img/damelidtked-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/overrasket_negativt-01.png')");
//		$(".barometerred").css("width", "75%");
//		$(".barometergreen").css("width", "25%");
//		birgitSkriver3();
//	} else if (birgitHumor == 4) {
//		console.log("Humør 4");
//		$(".birgitjensen").css("background-image", "url('Img/dameoverrasket-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/overrasket_negativt-01.png')");
//		$(".barometerred").css("width", "62.5%");
//		$(".barometergreen").css("width", "37.5%");
//		birgitSkriver3();
//	} else if (birgitHumor == 5) {
//		console.log("Humør 5");
//		$(".birgitjensen").css("background-image", "url('Img/dameflov-01.png')");
//		$(".barometerred").css("width", "50%");
//		$(".barometergreen").css("width", "50%");
//		birgitSkriver3();
//	} else if (birgitHumor == 6) {
//		console.log("Humør 6");
//		$(".birgitjensen").css("background-image", "url('Img/dameneutral-01.png')");
//		$(".barometerred").css("width", "37.5%");
//		$(".barometergreen").css("width", "62.5%");
//		birgitSkriver3();
//	} else if (birgitHumor == 7) {
//		console.log("Humør 7");
//		$(".birgitjensen").css("background-image", "url('Img/dameglad-01.png')");
//		$(".barometerred").css("width", "25%");
//		$(".barometergreen").css("width", "75%");
//		birgitSkriver3();
//	} else if (birgitHumor == 8) {
//		console.log("Humør 8");
//		$(".birgitjensen").css("background-image", "url('Img/damemegetglad-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/meget_glad-01.png')");
//		$(".barometerred").css("width", "12.5%");
//		$(".barometergreen").css("width", "87.5%");
//		birgitSkriver3();
//	} else {
//		console.log("Humør 9");
//		$(".birgitjensen").css("background-image", "url('Img/dameekstatisk-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/meget_glad-01.png')");
//		$(".barometerred").css("width", "0%");
//		$(".barometergreen").css("width", "100%");
//		birgitSkriver3();
//	}
//}
//
//function birgitSkriver3() {
//	console.log("typing");
//	$(".dialog").css("height", "28vw")
//	$(".prikker").show();
//	setTimeout(birgitSvarer3, 1);
//}
//
//function birgitSvarer3() {
//	console.log("Birgit");
//	$("#modtaget_besked")[0].play();
//	$("#modtaget_besked")[0].volume = 0.5;
//	$(".prikker").hide(0);
//	$(".dialog").css("height", "32vw");
//	$("ul").append(sv2a);
//	setTimeout(valg2a, 1); //5000
//}
//
//function valg2a() {
//	console.log("Valg 2a");
//	$(".birgitsvar").html("<strong></strong>Nej. Hvad med dialogen mellem politikere og borgere?");
//	$(".mulighed1").html("<strong></strong>Her har der altid været en god dialog til politikerne. Vi får altid en sludder når de har en stand sat op?");
//	$(".mulighed2").html("<strong></strong>Det ved jeg ikke rigtigt, de kan bare sige til?");
//	$(".mulighed3").html("<strong></strong>Det er mange gange svært at se hvem der er lokal politiker, men jeg er medlem af et parti og får det samme matriale som politikeren, så der masser at snakke om?");
//	$(".valg").css("z-index", "25");
//	$(".mulighed").show(0);
//	$(".mulighed1").on("click", mulighed2a);
//	$(".mulighed2").on("click", mulighed2b);
//	$(".mulighed3").on("click", mulighed2c);
//}
//
//function mulighed2a() {
//	console.log("Mulighed 2a")
//	$(".mulighed").hide(0);
//	$(".valg").css("z-index", "10");
//	$(".mulighed1").off("click", mulighed2a);
//	$(".mulighed2").off("click", mulighed2b);
//	$(".mulighed3").off("click", mulighed2c);
//	$(".mulighed2").off("click", mulighed3c);
//	$("#typing")[0].play();
//	$(".chattype").typeIt({
//		strings: ['Her har du en pjece, der omhandler dit problem. Læs den, og så skal det nok ordne sig.'],
//		speed: 1 //40
//
//	});
//	setTimeout(klikPåKnap4a, 1);
//}
//
//function klikPåKnap4a() {
//	console.log("klikPåKnap4");
//	//$("#typing")[0].pause();
//	$(".send").addClass("klik");
//	$(".send").on("click", lægeSvarer4a);
//	setTimeout(lægeSvarer4a, 1);
//}
//
//function lægeSvarer4a() {
//	console.log("Læge svarer 4a");
//	$("#sendknap")[0].play();
//	$("#sendknap")[0].volume = 0.2;
//	$(".send").removeClass("klik");
//	$(".send").off("click", lægeSvarer4a);
//	$(".chattype").typeIt({
//		startDelete: true
//	});
//	$("ul").append(s3a);
//	setTimeout(humørSkift2a, 1); //2000
//}
//
//function humørSkift2a() {
//	console.log("Humør skift 2a");
//	//1 = sur 0% grøn, 100% rød
//	//2 = megetKed 12.5% grøn, 87.5% rød
//	//3 = lidtKed 25% grøn, 75% rød
//	//4 = overrasket 37.5% grøn, 62.5% rød
//	//5 = flov 50% grøn, 50% rød
//	//6 = neutral 62.5% grøn, 37.5% rød
//	//7 = glad 75% grøn, 25% rød
//	//8 = megetGlad 87.5% grøn, 12.5% rød
//	//9 ekstatisk 100% grøn, 0% rød
//	console.log("Humør skifte1");
//	if (birgitHumor <= 1) {
//		console.log("Humør 1");
//		$(".birgitjensen").css("background-image", "url('Img/damesur-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/på_dybt_vand-01.png')");
//		$(".barometerred").css("width", "100%");
//		$(".barometergreen").css("width", "0%");
//		birgitSkriver4a();
//	} else if (birgitHumor == 2) {
//		console.log("Humør 2");
//		$(".birgitjensen").css("background-image", "url('Img/damemegetked-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/på_dybt_vand-01.png')");
//		$(".barometerred").css("width", "87.5%");
//		$(".barometergreen").css("width", "12.5%");
//		birgitSkriver4a();
//	} else if (birgitHumor == 3) {
//		console.log("Humør 3");
//		$(".birgitjensen").css("background-image", "url('Img/damelidtked-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/overrasket_negativt-01.png')");
//		$(".barometerred").css("width", "75%");
//		$(".barometergreen").css("width", "25%");
//		birgitSkriver4a();
//	} else if (birgitHumor == 4) {
//		console.log("Humør 4");
//		$(".birgitjensen").css("background-image", "url('Img/dameoverrasket-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/overrasket_negativt-01.png')");
//		$(".barometerred").css("width", "62.5%");
//		$(".barometergreen").css("width", "37.5%");
//		birgitSkriver4a();
//	} else if (birgitHumor == 5) {
//		console.log("Humør 5");
//		$(".birgitjensen").css("background-image", "url('Img/dameflov-01.png')");
//		$(".barometerred").css("width", "50%");
//		$(".barometergreen").css("width", "50%");
//		birgitSkriver4a();
//	} else if (birgitHumor == 6) {
//		console.log("Humør 6");
//		$(".birgitjensen").css("background-image", "url('Img/dameneutral-01.png')");
//		$(".barometerred").css("width", "37.5%");
//		$(".barometergreen").css("width", "62.5%");
//		birgitSkriver4a();
//	} else if (birgitHumor == 7) {
//		console.log("Humør 7");
//		$(".birgitjensen").css("background-image", "url('Img/dameglad-01.png')");
//		$(".barometerred").css("width", "25%");
//		$(".barometergreen").css("width", "75%");
//		birgitSkriver4a();
//	} else if (birgitHumor == 8) {
//		console.log("Humør 8");
//		$(".birgitjensen").css("background-image", "url('Img/damemegetglad-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/meget_glad-01.png')");
//		$(".barometerred").css("width", "12.5%");
//		$(".barometergreen").css("width", "87.5%");
//		birgitSkriver4a();
//	} else {
//		console.log("Humør 9");
//		$(".birgitjensen").css("background-image", "url('Img/dameekstatisk-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/meget_glad-01.png')");
//		$(".barometerred").css("width", "0%");
//		$(".barometergreen").css("width", "100%");
//		birgitSkriver4a();
//	}
//}
//
//function birgitSkriver4a() {
//	console.log("typing");
//	$(".dialog").css("height", "28vw")
//	$(".prikker").show();
//	setTimeout(birgitSvarer4a, 1);
//}
//
//function birgitSvarer4a() {
//	console.log("Birgit");
//	$("#modtaget_besked")[0].play();
//	$("#modtaget_besked")[0].volume = 0.5;
//	$(".prikker").hide(0);
//	$(".dialog").css("height", "32vw");
//	$("ul").append(sv3a);
//	setTimeout(tabEllerVind1a, 1); //5000
//}
//
//function tabEllerVind1a() {
//	console.log("tabEllerVind");
//	if (birgitHumor <= 1) {
//		console.log("Humør 1");
//		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
//		$(".lastscreen").show(0);
//		$(".loss")[0].play();
//	} else if (birgitHumor == 2) {
//		console.log("Humør 2");
//		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
//		$(".lastscreen").show(0);
//		$(".loss")[0].play();
//	} else if (birgitHumor == 3) {
//		console.log("Humør 3");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 4) {
//		console.log("Humør 4");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 5) {
//		console.log("Humør 5");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 6) {
//		console.log("Humør 6");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 7) {
//		console.log("Humør 7");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 8) {
//		console.log("Humør 8");
//		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
//		$(".lastscreen").show(0);
//		$(".win")[0].play();
//	} else {
//		console.log("Humør 9");
//		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
//		$(".lastscreen").show(0);
//		$(".win")[0].play();
//	}
//}
//
////////////
//
//function mulighed2b() {
//	console.log("Mulighed 2b")
//	$(".mulighed").hide(0);
//	$(".valg").css("z-index", "10");
//	$(".mulighed1").off("click", mulighed2a);
//	$(".mulighed2").off("click", mulighed2b);
//	$(".mulighed3").off("click", mulighed2c);
//	$("#typing")[0].play();
//	$(".chattype").typeIt({
//		strings: ['Det ved jeg ikke. Kender ikke selv til problemet.'],
//		speed: 1 //40
//
//	});
//	setTimeout(klikPåKnap4b, 1);
//}
//
//function klikPåKnap4b() {
//	console.log("klikPåKnap4");
//	//$("#typing")[0].pause();
//	$(".send").addClass("klik");
//	$(".send").on("click", lægeSvarer4b);
//	setTimeout(lægeSvarer4b, 1);
//}
//
//function lægeSvarer4b() {
//	console.log("lægeSvarer4b");
//	$("#sendknap")[0].play();
//	$("#sendknap")[0].volume = 0.2;
//	$(".send").removeClass("klik");
//	$(".send").off("click", lægeSvarer4b);
//	$(".chattype").typeIt({
//		startDelete: true
//	});
//	$("ul").append(s3b);
//	birgitHumor--;
//	birgitHumor--;
//	birgitHumor--;
//	$(".info").html("Birgit <span>" + birgitHumor + "</span> humør");
//	setTimeout(humørSkift2b, 1); //2000
//}
//
//function humørSkift2b() {
//	console.log("Humør skift 2b");
//	//1 = sur 0% grøn, 100% rød
//	//2 = megetKed 12.5% grøn, 87.5% rød
//	//3 = lidtKed 25% grøn, 75% rød
//	//4 = overrasket 37.5% grøn, 62.5% rød
//	//5 = flov 50% grøn, 50% rød
//	//6 = neutral 62.5% grøn, 37.5% rød
//	//7 = glad 75% grøn, 25% rød
//	//8 = megetGlad 87.5% grøn, 12.5% rød
//	//9 ekstatisk 100% grøn, 0% rød
//	console.log("Humør skifte1");
//	if (birgitHumor <= 1) {
//		console.log("Humør 1");
//		$(".birgitjensen").css("background-image", "url('Img/damesur-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/på_dybt_vand-01.png')");
//		$(".barometerred").css("width", "100%");
//		$(".barometergreen").css("width", "0%");
//		birgitSkriver4b();
//	} else if (birgitHumor == 2) {
//		console.log("Humør 2");
//		$(".birgitjensen").css("background-image", "url('Img/damemegetked-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/på_dybt_vand-01.png')");
//		$(".barometerred").css("width", "87.5%");
//		$(".barometergreen").css("width", "12.5%");
//		birgitSkriver4b();
//	} else if (birgitHumor == 3) {
//		console.log("Humør 3");
//		$(".birgitjensen").css("background-image", "url('Img/damelidtked-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/overrasket_negativt-01.png')");
//		$(".barometerred").css("width", "75%");
//		$(".barometergreen").css("width", "25%");
//		birgitSkriver4b();
//	} else if (birgitHumor == 4) {
//		console.log("Humør 4");
//		$(".birgitjensen").css("background-image", "url('Img/dameoverrasket-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/overrasket_negativt-01.png')");
//		$(".barometerred").css("width", "62.5%");
//		$(".barometergreen").css("width", "37.5%");
//		birgitSkriver4b();
//	} else if (birgitHumor == 5) {
//		console.log("Humør 5");
//		$(".birgitjensen").css("background-image", "url('Img/dameflov-01.png')");
//		$(".barometerred").css("width", "50%");
//		$(".barometergreen").css("width", "50%");
//		birgitSkriver4b();
//	} else if (birgitHumor == 6) {
//		console.log("Humør 6");
//		$(".birgitjensen").css("background-image", "url('Img/dameneutral-01.png')");
//		$(".barometerred").css("width", "37.5%");
//		$(".barometergreen").css("width", "62.5%");
//		birgitSkriver4b();
//	} else if (birgitHumor == 7) {
//		console.log("Humør 7");
//		$(".birgitjensen").css("background-image", "url('Img/dameglad-01.png')");
//		$(".barometerred").css("width", "25%");
//		$(".barometergreen").css("width", "75%");
//		birgitSkriver4b();
//	} else if (birgitHumor == 8) {
//		console.log("Humør 8");
//		$(".birgitjensen").css("background-image", "url('Img/damemegetglad-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/meget_glad-01.png')");
//		$(".barometerred").css("width", "12.5%");
//		$(".barometergreen").css("width", "87.5%");
//		birgitSkriver4b();
//	} else {
//		console.log("Humør 9");
//		$(".birgitjensen").css("background-image", "url('Img/dameekstatisk-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/meget_glad-01.png')");
//		$(".barometerred").css("width", "0%");
//		$(".barometergreen").css("width", "100%");
//		birgitSkriver4b();
//	}
//}
//
//
//function birgitSkriver4b() {
//	console.log("birgitSkriver4b");
//	$(".dialog").css("height", "28vw")
//	$(".prikker").show();
//	setTimeout(birgitSvarer4b, 1);
//}
//
//function birgitSvarer4b() {
//	console.log("Birgit");
//	$("#modtaget_besked")[0].play();
//	$("#modtaget_besked")[0].volume = 0.5;
//	$(".prikker").hide(0);
//	$(".dialog").css("height", "32vw");
//	$("ul").append(sv3b);
//	setTimeout(tabEllerVind1b, 1); //5000
//}
//
//function tabEllerVind1b() {
//	console.log("tabEllerVind");
//	if (birgitHumor <= 1) {
//		console.log("Humør 1");
//		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
//		$(".lastscreen").show(0);
//		$(".loss")[0].play();
//	} else if (birgitHumor == 2) {
//		console.log("Humør 2");
//		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
//		$(".lastscreen").show(0);
//		$(".loss")[0].play();
//	} else if (birgitHumor == 3) {
//		console.log("Humør 3");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 4) {
//		console.log("Humør 4");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 5) {
//		console.log("Humør 5");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 6) {
//		console.log("Humør 6");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 7) {
//		console.log("Humør 7");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 8) {
//		console.log("Humør 8");
//		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
//		$(".lastscreen").show(0);
//		$(".win")[0].play();
//	} else {
//		console.log("Humør 9");
//		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
//		$(".lastscreen").show(0);
//		$(".win")[0].play();
//	}
//}
//
/////////////
//function mulighed2c() {
//	console.log("Mulighed 2c")
//	$(".mulighed").hide(0);
//	$(".valg").css("z-index", "10");
//	$(".mulighed1").off("click", mulighed2a);
//	$(".mulighed2").off("click", mulighed2b);
//	$(".mulighed3").off("click", mulighed2c);
//	$(".mulighed2").off("click", mulighed3c);
//	$("#typing")[0].play();
//	$(".chattype").typeIt({
//		strings: ['Det er rigtig vigtigt, at dig og din partner snakker om det, da det godt kan være svært for den modsatte part at forstå. I kan eventuelt komme herop sammen, eller snakke med en sexolog. Jeg har også nogle pjecer, som du kan kigge lidt på.'],
//		speed: 1 //40
//
//	});
//	setTimeout(klikPåKnap4c, 1);
//}
//
//function klikPåKnap4c() {
//	console.log("klikPåKnap4c");
//	//$("#typing")[0].pause();
//	$(".send").addClass("klik");
//	$(".send").on("click", lægeSvarer4c);
//	setTimeout(lægeSvarer4c, 1);
//}
//
//function lægeSvarer4c() {
//	console.log("lægeSvarer4c");
//	$("#sendknap")[0].play();
//	$("#sendknap")[0].volume = 0.2;
//	$(".send").removeClass("klik");
//	$(".send").off("click", lægeSvarer4c);
//	$(".chattype").typeIt({
//		startDelete: true
//	});
//	$("ul").append(s3c);
//	birgitHumor++;
//	birgitHumor++;
//	$(".info").html("Birgit <span>" + birgitHumor + "</span> humør");
//	setTimeout(humørSkift2c, 1); //2000
//}
//
//function humørSkift2c() {
//	console.log("Humør skift 2c");
//	//1 = sur 0% grøn, 100% rød
//	//2 = megetKed 12.5% grøn, 87.5% rød
//	//3 = lidtKed 25% grøn, 75% rød
//	//4 = overrasket 37.5% grøn, 62.5% rød
//	//5 = flov 50% grøn, 50% rød
//	//6 = neutral 62.5% grøn, 37.5% rød
//	//7 = glad 75% grøn, 25% rød
//	//8 = megetGlad 87.5% grøn, 12.5% rød
//	//9 ekstatisk 100% grøn, 0% rød
//	console.log("Humør skifte1");
//	if (birgitHumor == 1) {
//		console.log("Humør 1");
//		$(".birgitjensen").css("background-image", "url('Img/damesur-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/på_dybt_vand-01.png')");
//		$(".barometerred").css("width", "100%");
//		$(".barometergreen").css("width", "0%");
//		birgitSkriver4c();
//	} else if (birgitHumor == 2) {
//		console.log("Humør 2");
//		$(".birgitjensen").css("background-image", "url('Img/damemegetked-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/på_dybt_vand-01.png')");
//		$(".barometerred").css("width", "87.5%");
//		$(".barometergreen").css("width", "12.5%");
//		birgitSkriver4c();
//	} else if (birgitHumor == 3) {
//		console.log("Humør 3");
//		$(".birgitjensen").css("background-image", "url('Img/damelidtked-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/overrasket_negativt-01.png')");
//		$(".barometerred").css("width", "75%");
//		$(".barometergreen").css("width", "25%");
//		birgitSkriver4c();
//	} else if (birgitHumor == 4) {
//		console.log("Humør 4");
//		$(".birgitjensen").css("background-image", "url('Img/dameoverrasket-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/overrasket_negativt-01.png')");
//		$(".barometerred").css("width", "62.5%");
//		$(".barometergreen").css("width", "37.5%");
//		birgitSkriver4c();
//	} else if (birgitHumor == 5) {
//		console.log("Humør 5");
//		$(".birgitjensen").css("background-image", "url('Img/dameflov-01.png')");
//		$(".barometerred").css("width", "50%");
//		$(".barometergreen").css("width", "50%");
//		birgitSkriver4c();
//	} else if (birgitHumor == 6) {
//		console.log("Humør 6");
//		$(".birgitjensen").css("background-image", "url('Img/dameneutral-01.png')");
//		$(".barometerred").css("width", "37.5%");
//		$(".barometergreen").css("width", "62.5%");
//		birgitSkriver4c();
//	} else if (birgitHumor == 7) {
//		console.log("Humør 7");
//		$(".birgitjensen").css("background-image", "url('Img/dameglad-01.png')");
//		$(".barometerred").css("width", "25%");
//		$(".barometergreen").css("width", "75%");
//		birgitSkriver4c();
//	} else if (birgitHumor == 8) {
//		console.log("Humør 8");
//		$(".birgitjensen").css("background-image", "url('Img/damemegetglad-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/meget_glad-01.png')");
//		$(".barometerred").css("width", "12.5%");
//		$(".barometergreen").css("width", "87.5%");
//		birgitSkriver4c();
//	} else {
//		console.log("Humør 9");
//		$(".birgitjensen").css("background-image", "url('Img/dameekstatisk-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/meget_glad-1.png')");
//		$(".barometerred").css("width", "0%");
//		$(".barometergreen").css("width", "100%");
//		birgitSkriver4c();
//	}
//}
//
//
//function birgitSkriver4c() {
//	console.log("birgitSkriver4c");
//	$(".dialog").css("height", "28vw")
//	$(".prikker").show();
//	setTimeout(birgitSvarer4c, 1);
//}
//
//function birgitSvarer4c() {
//	console.log("Birgit");
//	$("#modtaget_besked")[0].play();
//	$("#modtaget_besked")[0].volume = 0.5;
//	$(".prikker").hide(0);
//	$(".dialog").css("height", "32vw");
//	$("ul").append(sv3c);
//	setTimeout(tabEllerVind1c, 1); //5000
//}
//
//function tabEllerVind1c() {
//	console.log("tabEllerVind");
//	if (birgitHumor <= 1) {
//		console.log("Humør 1");
//		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
//		$(".lastscreen").show(0);
//		$(".loss")[0].play();
//	} else if (birgitHumor == 2) {
//		console.log("Humør 2");
//		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
//		$(".lastscreen").show(0);
//		$(".loss")[0].play();
//	} else if (birgitHumor == 3) {
//		console.log("Humør 3");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 4) {
//		console.log("Humør 4");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 5) {
//		console.log("Humør 5");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 6) {
//		console.log("Humør 6");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 7) {
//		console.log("Humør 7");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 8) {
//		console.log("Humør 8");
//		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
//		$(".lastscreen").show(0);
//		$(".win")[0].play();
//	} else {
//		console.log("Humør 9");
//		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
//		$(".lastscreen").show(0);
//		$(".win")[0].play();
//	}
//}
//
//
////////
//
//function mulighed1b() {
//	console.log("Mulighed 1b");
//	$(".mulighed").hide(0);
//	$(".valg").css("z-index", "10");
//	$(".mulighed1").off("click", mulighed1a);
//	$(".mulighed2").off("click", mulighed1b);
//	$(".mulighed3").off("click", mulighed1c);
//	$(".mulighed1").off("click", mulighed30a);
//	$("#typing")[0].play();
//	$(".chattype").typeIt({
//		strings: ['Det er meget almindeligt, når man kommer lidt op i alderen. Snakker du med din partner om det?'],
//		speed: 1 //40
//
//	});
//	setTimeout(klikPåKnap3b, 1);
//}
//
//function klikPåKnap3b() {
//	console.log("Klik på knap 3b");
//	//$("#typing")[0].pause();
//	$(".send").addClass("klik");
//	$(".send").on("click", lægeSvarer3b);
//	setTimeout(lægeSvarer3b, 1);
//}
//
//function lægeSvarer3b() {
//	console.log("Læge svarer 3");
//	$("#sendknap")[0].play();
//	$("#sendknap")[0].volume = 0.2;
//	$(".send").removeClass("klik");
//	$(".send").off("click", lægeSvarer3b);
//	$(".chattype").typeIt({
//		startDelete: true
//	});
//	$("ul").append(s2b);
//	birgitHumor++;
//	$(".info").html("Birgit <span>" + birgitHumor + "</span> humør");
//	setTimeout(humørSkift1c, 1); //2000
//}
//
//function humørSkift1c() {
//	//1 = sur 0% grøn, 100% rød
//	//2 = megetKed 12.5% grøn, 87.5% rød
//	//3 = lidtKed 25% grøn, 75% rød
//	//4 = overrasket 37.5% grøn, 62.5% rød
//	//5 = flov 50% grøn, 50% rød
//	//6 = neutral 62.5% grøn, 37.5% rød
//	//7 = glad 75% grøn, 25% rød
//	//8 = megetGlad 87.5% grøn, 12.5% rød
//	//9 ekstatisk 100% grøn, 0% rød
//	console.log("Humør skifte1");
//	if (birgitHumor <= 1) {
//		console.log("Humør 1");
//		$(".birgitjensen").css("background-image", "url('Img/damesur-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/på_dybt_vand-01.png')");
//		$(".barometerred").css("width", "100%");
//		$(".barometergreen").css("width", "0%");
//		birgitSkriver3b();
//	} else if (birgitHumor == 2) {
//		console.log("Humør 2");
//		$(".birgitjensen").css("background-image", "url('Img/damemegetked-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/på_dybt_vand-01.png')");
//		$(".barometerred").css("width", "87.5%");
//		$(".barometergreen").css("width", "12.5%");
//		birgitSkriver3b();
//	} else if (birgitHumor == 3) {
//		console.log("Humør 3");
//		$(".birgitjensen").css("background-image", "url('Img/damelidtked-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/overrasket_negativt-01.png')");
//		$(".barometerred").css("width", "75%");
//		$(".barometergreen").css("width", "25%");
//		birgitSkriver3b();
//	} else if (birgitHumor == 4) {
//		console.log("Humør 4");
//		$(".birgitjensen").css("background-image", "url('Img/dameoverrasket-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/overrasket_negativt-01.png')");
//		$(".barometerred").css("width", "62.5%");
//		$(".barometergreen").css("width", "37.5%");
//		birgitSkriver3b();
//	} else if (birgitHumor == 5) {
//		console.log("Humør 5");
//		$(".birgitjensen").css("background-image", "url('Img/dameflov-01.png')");
//		$(".barometerred").css("width", "50%");
//		$(".barometergreen").css("width", "50%");
//		birgitSkriver3b();
//	} else if (birgitHumor == 6) {
//		console.log("Humør 6");
//		$(".birgitjensen").css("background-image", "url('Img/dameneutral-01.png')");
//		$(".barometerred").css("width", "37.5%");
//		$(".barometergreen").css("width", "62.5%");
//		birgitSkriver3b();
//	} else if (birgitHumor == 7) {
//		console.log("Humør 7");
//		$(".birgitjensen").css("background-image", "url('Img/dameglad-01.png')");
//		$(".barometerred").css("width", "25%");
//		$(".barometergreen").css("width", "75%");
//		birgitSkriver3b();
//	} else if (birgitHumor == 8) {
//		console.log("Humør 8");
//		$(".birgitjensen").css("background-image", "url('Img/damemegetglad-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/meget_glad-01.png')");
//		$(".barometerred").css("width", "12.5%");
//		$(".barometergreen").css("width", "87.5%");
//		birgitSkriver3b();
//	} else {
//		console.log("Humør 9");
//		$(".birgitjensen").css("background-image", "url('Img/dameekstatisk-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/meget_glad-01.png')");
//		$(".barometerred").css("width", "0%");
//		$(".barometergreen").css("width", "100%");
//		birgitSkriver3b();
//	}
//}
//
//function birgitSkriver3b() {
//	console.log("typing");
//	$(".dialog").css("height", "28vw")
//	$(".prikker").show();
//	setTimeout(birgitSvarer3b, 1);
//}
//
//function birgitSvarer3b() {
//	console.log("Birgit");
//	$("#modtaget_besked")[0].play();
//	$("#modtaget_besked")[0].volume = 0.5;
//	$(".prikker").hide(0);
//	$(".dialog").css("height", "32vw");
//	$("ul").append(sv2b);
//	setTimeout(valg2b, 1); //5000
//}
//
//
//function valg2b() {
//	console.log("Valg 2b");
//	$(".birgitsvar").html("<strong></strong>Ja, flere indbyggere, har betydning for miljøet?");
//	$(".mulighed1").html("<strong></strong>Her har der været taget hensyn for grøn by og at CO2- niveauet skal ned?");
//	$(".mulighed2").html("<strong></strong>Her har du en pjece, der omhandler dit problem. Læs den, og så skal det nok ordne sig?");
//	$(".mulighed3").html("<strong></strong>Det er vigtigt der er boliger nok og at der satses på bæredygtighed over hele linjen?");
//	$(".valg").css("z-index", "25");
//	$(".mulighed").show(0);
//	$(".mulighed1").on("click", mulighed2c);
//	$(".mulighed2").on("click", mulighed2a);
//	$(".mulighed3").on("click", mulighed3c);
//}
//
//function mulighed3c() {
//	console.log("Mulighed 2a")
//	$(".mulighed").hide(0);
//	$(".valg").css("z-index", "10");
//	$(".mulighed1").off("click", mulighed2a);
//	$(".mulighed2").off("click", mulighed3c);
//	$(".mulighed3").off("click", mulighed2c);
//	$("#typing")[0].play();
//	$(".chattype").typeIt({
//		strings: ['Det er vigtigt, at du får talt med din partner om det. I kan eventuelt snakke med en sexolog?'],
//		speed: 1 //40
//
//	});
//	setTimeout(klikPåKnap5c, 1);
//}
//
//function klikPåKnap5c() {
//	console.log("klikPåKnap5c");
//	//$("#typing")[0].pause();
//	$(".send").addClass("klik");
//	$(".send").on("click", lægeSvarer5c);
//	setTimeout(lægeSvarer5c, 1);
//}
//
//function lægeSvarer5c() {
//	console.log("Læge svarer 5c");
//	$("#sendknap")[0].play();
//	$("#sendknap")[0].volume = 0.2;
//	$(".send").removeClass("klik");
//	$(".send").off("click", lægeSvarer5c);
//	$(".chattype").typeIt({
//		startDelete: true
//	});
//	birgitHumor++;
//	$(".info").html("Birgit <span>" + birgitHumor + "</span> humør");
//	$("ul").append(s4c);
//	setTimeout(humørSkift3c, 1); //2000
//}
//
//function humørSkift3c() {
//	//1 = sur 0% grøn, 100% rød
//	//2 = megetKed 12.5% grøn, 87.5% rød
//	//3 = lidtKed 25% grøn, 75% rød
//	//4 = overrasket 37.5% grøn, 62.5% rød
//	//5 = flov 50% grøn, 50% rød
//	//6 = neutral 62.5% grøn, 37.5% rød
//	//7 = glad 75% grøn, 25% rød
//	//8 = megetGlad 87.5% grøn, 12.5% rød
//	//9 ekstatisk 100% grøn, 0% rød
//	console.log("Humør skifte1");
//	if (birgitHumor <= 1) {
//		console.log("Humør 1");
//		$(".birgitjensen").css("background-image", "url('Img/damesur-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/på_dybt_vand-01.png')");
//		$(".barometerred").css("width", "100%");
//		$(".barometergreen").css("width", "0%");
//		birgitSkriver5c();
//	} else if (birgitHumor == 2) {
//		console.log("Humør 2");
//		$(".birgitjensen").css("background-image", "url('Img/damemegetked-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/på_dybt_vand-01.png')");
//		$(".barometerred").css("width", "87.5%");
//		$(".barometergreen").css("width", "12.5%");
//		birgitSkriver5c();
//	} else if (birgitHumor == 3) {
//		console.log("Humør 3");
//		$(".birgitjensen").css("background-image", "url('Img/damelidtked-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/overrasket_negativt-01.png')");
//		$(".barometerred").css("width", "75%");
//		$(".barometergreen").css("width", "25%");
//		birgitSkriver5c();
//	} else if (birgitHumor == 4) {
//		console.log("Humør 4");
//		$(".birgitjensen").css("background-image", "url('Img/dameoverrasket-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/overrasket_negativt-01.png')");
//		$(".barometerred").css("width", "62.5%");
//		$(".barometergreen").css("width", "37.5%");
//		birgitSkriver5c();
//	} else if (birgitHumor == 5) {
//		console.log("Humør 5");
//		$(".birgitjensen").css("background-image", "url('Img/dameflov-01.png')");
//		$(".barometerred").css("width", "50%");
//		$(".barometergreen").css("width", "50%");
//		birgitSkriver5c();
//	} else if (birgitHumor == 6) {
//		console.log("Humør 6");
//		$(".birgitjensen").css("background-image", "url('Img/dameneutral-01.png')");
//		$(".barometerred").css("width", "37.5%");
//		$(".barometergreen").css("width", "62.5%");
//		birgitSkriver5c();
//	} else if (birgitHumor == 7) {
//		console.log("Humør 7");
//		$(".birgitjensen").css("background-image", "url('Img/dameglad-01.png')");
//		$(".barometerred").css("width", "25%");
//		$(".barometergreen").css("width", "75%");
//		birgitSkriver5c();
//	} else if (birgitHumor == 8) {
//		console.log("Humør 8");
//		$(".birgitjensen").css("background-image", "url('Img/damemegetglad-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/meget_glad-01.png')");
//		$(".barometerred").css("width", "12.5%");
//		$(".barometergreen").css("width", "87.5%");
//		birgitSkriver5c();
//	} else {
//		console.log("Humør 9");
//		$(".birgitjensen").css("background-image", "url('Img/dameekstatisk-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/meget_glad-01.png')");
//		$(".barometerred").css("width", "0%");
//		$(".barometergreen").css("width", "100%");
//		birgitSkriver5c();
//	}
//}
//
//function birgitSkriver5c() {
//	console.log("typing");
//	$(".dialog").css("height", "28vw")
//	$(".prikker").show();
//	setTimeout(birgitSvarer5c, 1);
//}
//
//function birgitSvarer5c() {
//	console.log("Birgit");
//	$("#modtaget_besked")[0].play();
//	$("#modtaget_besked")[0].volume = 0.5;
//	$(".prikker").hide(0);
//	$(".dialog").css("height", "32vw");
//	$("ul").append(sv4c);
//	setTimeout(tabEllerVind1d, 1); //5000
//}
//
//function tabEllerVind1d() {
//	console.log("tabEllerVind");
//	if (birgitHumor <= 1) {
//		console.log("Humør 1");
//		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
//		$(".lastscreen").show(0);
//		$(".loss")[0].play();
//	} else if (birgitHumor == 2) {
//		console.log("Humør 2");
//		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
//		$(".lastscreen").show(0);
//		$(".loss")[0].play();
//	} else if (birgitHumor == 3) {
//		console.log("Humør 3");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 4) {
//		console.log("Humør 4");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 5) {
//		console.log("Humør 5");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 6) {
//		console.log("Humør 6");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 7) {
//		console.log("Humør 7");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 8) {
//		console.log("Humør 8");
//		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
//		$(".lastscreen").show(0);
//		$(".win")[0].play();
//	} else {
//		console.log("Humør 9");
//		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
//		$(".lastscreen").show(0);
//		$(".win")[0].play();
//	}
//}
//
//
//
/////////////
//
//function mulighed1c() {
//	console.log("Mulighed 1c");
//	$(".mulighed").hide(0);
//	$(".valg").css("z-index", "10");
//	$(".mulighed1").off("click", mulighed1a);
//	$(".mulighed2").off("click", mulighed1b);
//	$(".mulighed3").off("click", mulighed1c);
//	$(".mulighed1").off("click", mulighed30a);
//	$("#typing")[0].play();
//	$(".chattype").typeIt({
//		strings: ['Sådan er det, når man bliver gammel…'],
//		speed: 1 //40
//
//	});
//	setTimeout(klikPåKnap3c, 1);
//}
//
//function klikPåKnap3c() {
//	console.log("Klik på knap 3c");
//	//$("#typing")[0].pause();
//	$(".send").addClass("klik");
//	$(".send").on("click", lægeSvarer3c);
//	setTimeout(lægeSvarer3c, 1);
//}
//
//function lægeSvarer3c() {
//	console.log("Læge svarer 3c");
//	$("#sendknap")[0].play();
//	$("#sendknap")[0].volume = 0.2;
//	$(".send").removeClass("klik");
//	$(".send").off("click", lægeSvarer3c);
//	$(".chattype").typeIt({
//		startDelete: true
//	});
//	$("ul").append(s2c);
//	birgitHumor--;
//	birgitHumor--;
//	$(".info").html("Birgit <span>" + birgitHumor + "</span> humør");
//	setTimeout(humørSkift5c, 1); //2000
//}
//
//function humørSkift5c() {
//	//1 = sur 0% grøn, 100% rød
//	//2 = megetKed 12.5% grøn, 87.5% rød
//	//3 = lidtKed 25% grøn, 75% rød
//	//4 = overrasket 37.5% grøn, 62.5% rød
//	//5 = flov 50% grøn, 50% rød
//	//6 = neutral 62.5% grøn, 37.5% rød
//	//7 = glad 75% grøn, 25% rød
//	//8 = megetGlad 87.5% grøn, 12.5% rød
//	//9 ekstatisk 100% grøn, 0% rød
//	console.log("Humør skifte1");
//	if (birgitHumor <= 1) {
//		console.log("Humør 1");
//		$(".birgitjensen").css("background-image", "url('Img/damesur-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/på_dybt_vand-01.png')");
//		$(".barometerred").css("width", "100%");
//		$(".barometergreen").css("width", "0%");
//		birgitSkriver6c();
//	} else if (birgitHumor == 2) {
//		console.log("Humør 2");
//		$(".birgitjensen").css("background-image", "url('Img/damemegetked-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/på_dybt_vand-01.png')");
//		$(".barometerred").css("width", "87.5%");
//		$(".barometergreen").css("width", "12.5%");
//		birgitSkriver6c();
//	} else if (birgitHumor == 3) {
//		console.log("Humør 3");
//		$(".birgitjensen").css("background-image", "url('Img/damelidtked-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/overrasket_negativt-01.png')");
//		$(".barometerred").css("width", "75%");
//		$(".barometergreen").css("width", "25%");
//		birgitSkriver6c();
//	} else if (birgitHumor == 4) {
//		console.log("Humør 4");
//		$(".birgitjensen").css("background-image", "url('Img/dameoverrasket-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/overrasket_negativt-01.png')");
//		$(".barometerred").css("width", "62.5%");
//		$(".barometergreen").css("width", "37.5%");
//		birgitSkriver6c();
//	} else if (birgitHumor == 5) {
//		console.log("Humør 5");
//		$(".birgitjensen").css("background-image", "url('Img/dameflov-01.png')");
//		$(".barometerred").css("width", "50%");
//		$(".barometergreen").css("width", "50%");
//		birgitSkriver6c();
//	} else if (birgitHumor == 6) {
//		console.log("Humør 6");
//		$(".birgitjensen").css("background-image", "url('Img/dameneutral-01.png')");
//		$(".barometerred").css("width", "37.5%");
//		$(".barometergreen").css("width", "62.5%");
//		birgitSkriver6c();
//	} else if (birgitHumor == 7) {
//		console.log("Humør 7");
//		$(".birgitjensen").css("background-image", "url('Img/dameglad-01.png')");
//		$(".barometerred").css("width", "25%");
//		$(".barometergreen").css("width", "75%");
//		birgitSkriver6c();
//	} else if (birgitHumor == 8) {
//		console.log("Humør 8");
//		$(".birgitjensen").css("background-image", "url('Img/damemegetglad-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/meget_glad-01.png')");
//		$(".barometerred").css("width", "12.5%");
//		$(".barometergreen").css("width", "87.5%");
//		birgitSkriver6c();
//	} else {
//		console.log("Humør 9");
//		$(".birgitjensen").css("background-image", "url('Img/dameekstatisk-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/meget_glad-01.png')");
//		$(".barometerred").css("width", "0%");
//		$(".barometergreen").css("width", "100%");
//		birgitSkriver6c();
//	}
//}
//
//function birgitSkriver6c() {
//	console.log("typing");
//	$(".dialog").css("height", "28vw")
//	$(".prikker").show();
//	setTimeout(birgitSvarer6c, 1);
//}
//
//function birgitSvarer6c() {
//	console.log("Birgit");
//	$("#modtaget_besked")[0].play();
//	$("#modtaget_besked")[0].volume = 0.5;
//	$(".prikker").hide(0);
//	$(".dialog").css("height", "32vw");
//	$("ul").append(sv2c);
//	setTimeout(valg2c, 1); //5000
//}
//
//function valg2c() {
//	console.log("Valg 2c");
//	$(".birgitsvar").html("<strong></strong>Men der er altid råd til en bedre udvikling?");
//	$(".mulighed1").html("<strong></strong>Beklager, udsatte kvinder, løsarbejdere og prostitution er svært at komme til livs?");
//	$(".mulighed2").html("<strong></strong>Ja, men det er altid usikkert hvad man får ikke hvad man har?");
//	$(".mulighed3").html("<strong></strong>Og hvad har jounior så tænkt sig at gøre ved det?");
//	$(".valg").css("z-index", "25");
//	$(".mulighed").show(0);
//	$(".mulighed1").on("click", mulighed4a);
//	$(".mulighed2").on("click", mulighed4b);
//	$(".mulighed3").on("click", mulighed4c);
//}
//
//function mulighed4a() {
//	console.log("mulighed4a");
//	$(".mulighed").hide(0);
//	$(".valg").css("z-index", "10");
//	$(".mulighed1").off("click", mulighed4a);
//	$(".mulighed2").off("click", mulighed4b);
//	$(".mulighed3").off("click", mulighed4c);
//	$("#typing")[0].play();
//	$(".chattype").typeIt({
//		strings: ['Beklager, hvis du blev stødt af det. Men i hvert fald er det et problem, som I er nødt til at tage hånd om, hvis jeres parforhold skal holde.'],
//		speed: 1 //40
//
//	});
//	setTimeout(klikPåKnap6a, 1);
//}
//
//function klikPåKnap6a() {
//	console.log("klikPåKnap6a");
//	//	$("#typing")[0].pause();
//	$(".send").addClass("klik");
//	$(".send").on("click", lægeSvarer6a);
//	setTimeout(lægeSvarer6a, 1);
//}
//
//function lægeSvarer6a() {
//	console.log("lægeSvarer6a");
//	$("#sendknap")[0].play();
//	$("#sendknap")[0].volume = 0.2;
//	$(".send").removeClass("klik");
//	$(".send").off("click", lægeSvarer6a);
//	$(".chattype").typeIt({
//		startDelete: true
//	});
//	$("ul").append(s5a);
//	birgitHumor++;
//	$(".info").html("Birgit <span>" + birgitHumor + "</span> humør");
//	setTimeout(humørSkift6a, 1); //2000
//}
//
//function humørSkift6a() {
//	//1 = sur 0% grøn, 100% rød
//	//2 = megetKed 12.5% grøn, 87.5% rød
//	//3 = lidtKed 25% grøn, 75% rød
//	//4 = overrasket 37.5% grøn, 62.5% rød
//	//5 = flov 50% grøn, 50% rød
//	//6 = neutral 62.5% grøn, 37.5% rød
//	//7 = glad 75% grøn, 25% rød
//	//8 = megetGlad 87.5% grøn, 12.5% rød
//	//9 ekstatisk 100% grøn, 0% rød
//	console.log("Humør skifte1");
//	if (birgitHumor <= 1) {
//		console.log("Humør 1");
//		$(".birgitjensen").css("background-image", "url('Img/damesur-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/på_dybt_vand-01.png')");
//		$(".barometerred").css("width", "100%");
//		$(".barometergreen").css("width", "0%");
//		birgitSkriver7a();
//	} else if (birgitHumor == 2) {
//		console.log("Humør 2");
//		$(".birgitjensen").css("background-image", "url('Img/damemegetked-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/på_dybt_vand-01.png')");
//		$(".barometerred").css("width", "87.5%");
//		$(".barometergreen").css("width", "12.5%");
//		birgitSkriver7a();
//	} else if (birgitHumor == 3) {
//		console.log("Humør 3");
//		$(".birgitjensen").css("background-image", "url('Img/damelidtked-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/overrasket_negativt-01.png')");
//		$(".barometerred").css("width", "75%");
//		$(".barometergreen").css("width", "25%");
//		birgitSkriver7a();
//	} else if (birgitHumor == 4) {
//		console.log("Humør 4");
//		$(".birgitjensen").css("background-image", "url('Img/dameoverrasket-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/overrasket_negativt-01.png')");
//		$(".barometerred").css("width", "62.5%");
//		$(".barometergreen").css("width", "37.5%");
//		birgitSkriver7a();
//	} else if (birgitHumor == 5) {
//		console.log("Humør 5");
//		$(".birgitjensen").css("background-image", "url('Img/dameflov-01.png')");
//		$(".barometerred").css("width", "50%");
//		$(".barometergreen").css("width", "50%");
//		birgitSkriver7a();
//	} else if (birgitHumor == 6) {
//		console.log("Humør 6");
//		$(".birgitjensen").css("background-image", "url('Img/dameneutral-01.png')");
//		$(".barometerred").css("width", "37.5%");
//		$(".barometergreen").css("width", "62.5%");
//		birgitSkriver7a();
//	} else if (birgitHumor == 7) {
//		console.log("Humør 7");
//		$(".birgitjensen").css("background-image", "url('Img/dameglad-01.png')");
//		$(".barometerred").css("width", "25%");
//		$(".barometergreen").css("width", "75%");
//		birgitSkriver7a();
//	} else if (birgitHumor == 8) {
//		console.log("Humør 8");
//		$(".birgitjensen").css("background-image", "url('Img/damemegetglad-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/meget_glad-01.png')");
//		$(".barometerred").css("width", "12.5%");
//		$(".barometergreen").css("width", "87.5%");
//		birgitSkriver7a();
//	} else {
//		console.log("Humør 9");
//		$(".birgitjensen").css("background-image", "url('Img/dameekstatisk-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/meget_glad-01.png')");
//		$(".barometerred").css("width", "0%");
//		$(".barometergreen").css("width", "100%");
//		birgitSkriver7a();
//	}
//}
//
//function birgitSkriver7a() {
//	console.log("typing");
//	$(".dialog").css("height", "28vw")
//	$(".prikker").show();
//	setTimeout(birgitSvarer7a, 1);
//}
//
//function birgitSvarer7a() {
//	console.log("Birgit");
//	$("#modtaget_besked")[0].play();
//	$("#modtaget_besked")[0].volume = 0.5;
//	$(".prikker").hide(0);
//	$(".dialog").css("height", "32vw");
//	$("ul").append(sv5a);
//	setTimeout(tabEllerVind1e, 1); //5000
//}
//
//function tabEllerVind1e() {
//	console.log("tabEllerVind");
//	if (birgitHumor <= 1) {
//		console.log("Humør 1");
//		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
//		$(".lastscreen").show(0);
//		$(".loss")[0].play();
//	} else if (birgitHumor == 2) {
//		console.log("Humør 2");
//		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
//		$(".lastscreen").show(0);
//		$(".loss")[0].play();
//	} else if (birgitHumor == 3) {
//		console.log("Humør 3");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 4) {
//		console.log("Humør 4");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 5) {
//		console.log("Humør 5");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 6) {
//		console.log("Humør 6");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 7) {
//		console.log("Humør 7");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 8) {
//		console.log("Humør 8");
//		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
//		$(".lastscreen").show(0);
//		$(".win")[0].play();
//	} else {
//		console.log("Humør 9");
//		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
//		$(".lastscreen").show(0);
//		$(".win")[0].play();
//	}
//}
//
//
//
/////////
//function mulighed4b() {
//	console.log("mulighed4b");
//	$(".mulighed").hide(0);
//	$(".valg").css("z-index", "10");
//	$(".mulighed1").off("click", mulighed4a);
//	$(".mulighed2").off("click", mulighed4b);
//	$(".mulighed3").off("click", mulighed4c);
//	$("#typing")[0].play();
//	$(".chattype").typeIt({
//		strings: ['Hvad jeg bilder mig ind?! Hvis du vil have min hjælp, så må du også sætte lidt pris på det.'],
//		speed: 1 //40
//
//	});
//	setTimeout(klikPåKnap6b, 1);
//}
//
//function klikPåKnap6b() {
//	console.log("klikPåKnap6b");
//	//$("#typing")[0].pause();
//	$(".send").addClass("klik");
//	$(".send").on("click", lægeSvarer6b);
//	setTimeout(lægeSvarer6b, 1);
//}
//
//function lægeSvarer6b() {
//	console.log("lægeSvarer6b");
//	$("#sendknap")[0].play();
//	$("#sendknap")[0].volume = 0.2;
//	$(".send").removeClass("klik");
//	$(".send").off("click", lægeSvarer6b);
//	$(".chattype").typeIt({
//		startDelete: true
//	});
//	$("ul").append(s5b);
//	birgitHumor--;
//	birgitHumor--;
//	$(".info").html("Birgit <span>" + birgitHumor + "</span> humør");
//	setTimeout(humørSkift6b, 1); //2000
//}
//
//function humørSkift6b() {
//	//1 = sur 0% grøn, 100% rød
//	//2 = megetKed 12.5% grøn, 87.5% rød
//	//3 = lidtKed 25% grøn, 75% rød
//	//4 = overrasket 37.5% grøn, 62.5% rød
//	//5 = flov 50% grøn, 50% rød
//	//6 = neutral 62.5% grøn, 37.5% rød
//	//7 = glad 75% grøn, 25% rød
//	//8 = megetGlad 87.5% grøn, 12.5% rød
//	//9 ekstatisk 100% grøn, 0% rød
//	console.log("Humør skifte1");
//	if (birgitHumor <= 1) {
//		console.log("Humør 1");
//		$(".birgitjensen").css("background-image", "url('Img/damesur-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/på_dybt_vand-01.png')");
//		$(".barometerred").css("width", "100%");
//		$(".barometergreen").css("width", "0%");
//		birgitSkriver7b();
//	} else if (birgitHumor == 2) {
//		console.log("Humør 2");
//		$(".birgitjensen").css("background-image", "url('Img/damemegetked-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/på_dybt_vand-01.png')");
//		$(".barometerred").css("width", "87.5%");
//		$(".barometergreen").css("width", "12.5%");
//		birgitSkriver7b();
//	} else if (birgitHumor == 3) {
//		console.log("Humør 3");
//		$(".birgitjensen").css("background-image", "url('Img/damelidtked-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/overrasket_negativt-01.png')");
//		$(".barometerred").css("width", "75%");
//		$(".barometergreen").css("width", "25%");
//		birgitSkriver7b();
//	} else if (birgitHumor == 4) {
//		console.log("Humør 4");
//		$(".birgitjensen").css("background-image", "url('Img/dameoverrasket-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/overrasket_negativt-01.png')");
//		$(".barometerred").css("width", "62.5%");
//		$(".barometergreen").css("width", "37.5%");
//		birgitSkriver7b();
//	} else if (birgitHumor == 5) {
//		console.log("Humør 5");
//		$(".birgitjensen").css("background-image", "url('Img/dameflov-01.png')");
//		$(".barometerred").css("width", "50%");
//		$(".barometergreen").css("width", "50%");
//		birgitSkriver7b();
//	} else if (birgitHumor == 6) {
//		console.log("Humør 6");
//		$(".birgitjensen").css("background-image", "url('Img/dameneutral-01.png')");
//		$(".barometerred").css("width", "37.5%");
//		$(".barometergreen").css("width", "62.5%");
//		birgitSkriver7b();
//	} else if (birgitHumor == 7) {
//		console.log("Humør 7");
//		$(".birgitjensen").css("background-image", "url('Img/dameglad-01.png')");
//		$(".barometerred").css("width", "25%");
//		$(".barometergreen").css("width", "75%");
//		birgitSkriver7b();
//	} else if (birgitHumor == 8) {
//		console.log("Humør 8");
//		$(".birgitjensen").css("background-image", "url('Img/damemegetglad-01.png')")
//		$(".doctorhansen").css("background-image", "url('Img/meget_glad-01.png')");
//		$(".barometerred").css("width", "12.5%");
//		$(".barometergreen").css("width", "87.5%");
//		birgitSkriver7b();
//	} else {
//		console.log("Humør 9");
//		$(".birgitjensen").css("background-image", "url('Img/dameekstatisk-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/meget_glad-01.png')");
//		$(".barometerred").css("width", "0%");
//		$(".barometergreen").css("width", "100%");
//		birgitSkriver7b();
//	}
//}
//
//function birgitSkriver7b() {
//	console.log("typing");
//	$(".dialog").css("height", "28vw")
//	$(".prikker").show();
//	setTimeout(birgitSvarer7b, 1);
//}
//
//function birgitSvarer7b() {
//	console.log("Birgit");
//	$("#modtaget_besked")[0].play();
//	$("#modtaget_besked")[0].volume = 0.5;
//	$(".prikker").hide(0);
//	$(".dialog").css("height", "32vw");
//	$("ul").append(sv5b);
//	setTimeout(tabEllerVind1f, 1); //5000
//}
//
//function tabEllerVind1f() {
//	console.log("tabEllerVind");
//	if (birgitHumor <= 1) {
//		console.log("Humør 1");
//		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
//		$(".lastscreen").show(0);
//		$(".loss")[0].play();
//	} else if (birgitHumor == 2) {
//		console.log("Humør 2");
//		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
//		$(".lastscreen").show(0);
//		$(".loss")[0].play();
//	} else if (birgitHumor == 3) {
//		console.log("Humør 3");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 4) {
//		console.log("Humør 4");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 5) {
//		console.log("Humør 5");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 6) {
//		console.log("Humør 6");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 7) {
//		console.log("Humør 7");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 8) {
//		console.log("Humør 8");
//		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
//		$(".lastscreen").show(0);
//		$(".win")[0].play();
//	} else {
//		console.log("Humør 9");
//		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
//		$(".lastscreen").show(0);
//		$(".win")[0].play();
//	}
//}
//
//
/////////
//function mulighed4c() {
//	console.log("mulighed4c");
//	$(".mulighed").hide(0);
//	$(".valg").css("z-index", "10");
//	$(".mulighed1").off("click", mulighed4a);
//	$(".mulighed2").off("click", mulighed4b);
//	$(".mulighed3").off("click", mulighed4c);
//	$("#typing")[0].play();
//	$(".chattype").typeIt({
//		strings: ['Ja, man er da gammel, når man er over 60.'],
//		speed: 1 //40
//
//	});
//	setTimeout(klikPåKnap6c, 1);
//}
//
//function klikPåKnap6c() {
//	console.log("klikPåKnap6c");
//	//	$("#typing")[0].pause();
//	$(".send").addClass("klik");
//	$(".send").on("click", lægeSvarer6c);
//	setTimeout(lægeSvarer6c, 1);
//}
//
//function lægeSvarer6c() {
//	console.log("lægeSvarer6c");
//	$("#sendknap")[0].play();
//	$("#sendknap")[0].volume = 0.2;
//	$(".send").removeClass("klik");
//	$(".send").off("click", lægeSvarer6c);
//	$(".chattype").typeIt({
//		startDelete: true
//	});
//	$("ul").append(s5c);
//	birgitHumor--;
//	$(".info").html("Birgit <span>" + birgitHumor + "</span> humør");
//	setTimeout(humørSkift6b, 1); //2000
//}
//
//function humørSkift6b() {
//	//1 = sur 0% grøn, 100% rød
//	//2 = megetKed 12.5% grøn, 87.5% rød
//	//3 = lidtKed 25% grøn, 75% rød
//	//4 = overrasket 37.5% grøn, 62.5% rød
//	//5 = flov 50% grøn, 50% rød
//	//6 = neutral 62.5% grøn, 37.5% rød
//	//7 = glad 75% grøn, 25% rød
//	//8 = megetGlad 87.5% grøn, 12.5% rød
//	//9 ekstatisk 100% grøn, 0% rød
//	console.log("Humør skifte1");
//	if (birgitHumor <= 1) {
//		console.log("Humør 1");
//		$(".birgitjensen").css("background-image", "url('Img/damesur-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/på_dybt_vand-01.png')");
//		$(".barometerred").css("width", "100%");
//		$(".barometergreen").css("width", "0%");
//		birgitSkriver7b();
//	} else if (birgitHumor == 2) {
//		console.log("Humør 2");
//		$(".birgitjensen").css("background-image", "url('Img/damemegetked-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/på_dybt_vand-01.png')");
//		$(".barometerred").css("width", "87.5%");
//		$(".barometergreen").css("width", "12.5%");
//		birgitSkriver7b();
//	} else if (birgitHumor == 3) {
//		console.log("Humør 3");
//		$(".birgitjensen").css("background-image", "url('Img/damelidtked-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/overrasket_negativt-01.png')");
//		$(".barometerred").css("width", "75%");
//		$(".barometergreen").css("width", "25%");
//		birgitSkriver7b();
//	} else if (birgitHumor == 4) {
//		console.log("Humør 4");
//		$(".birgitjensen").css("background-image", "url('Img/dameoverrasket-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/overrasket_negativt-01.png')");
//		$(".barometerred").css("width", "62.5%");
//		$(".barometergreen").css("width", "37.5%");
//		birgitSkriver7b();
//	} else if (birgitHumor == 5) {
//		console.log("Humør 5");
//		$(".birgitjensen").css("background-image", "url('Img/dameflov-01.png')");
//		$(".barometerred").css("width", "50%");
//		$(".barometergreen").css("width", "50%");
//		birgitSkriver7b();
//	} else if (birgitHumor == 6) {
//		console.log("Humør 6");
//		$(".birgitjensen").css("background-image", "url('Img/dameneutral-01.png')");
//		$(".barometerred").css("width", "37.5%");
//		$(".barometergreen").css("width", "62.5%");
//		birgitSkriver7b();
//	} else if (birgitHumor == 7) {
//		console.log("Humør 7");
//		$(".birgitjensen").css("background-image", "url('Img/dameglad-01.png')");
//		$(".barometerred").css("width", "25%");
//		$(".barometergreen").css("width", "75%");
//		birgitSkriver7b();
//	} else if (birgitHumor == 8) {
//		console.log("Humør 8");
//		$(".birgitjensen").css("background-image", "url('Img/damemegetglad-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/meget_glad-01.png')");
//		$(".barometerred").css("width", "12.5%");
//		$(".barometergreen").css("width", "87.5%");
//		birgitSkriver7b();
//	} else {
//		console.log("Humør 9");
//		$(".birgitjensen").css("background-image", "url('Img/dameekstatisk-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/_meget_glad-01.png')");
//		$(".barometerred").css("width", "0%");
//		$(".barometergreen").css("width", "100%");
//		birgitSkriver7b();
//	}
//}
//
//function birgitSkriver7b() {
//	console.log("typing");
//	$(".dialog").css("height", "28vw")
//	$(".prikker").show();
//	setTimeout(birgitSvarer7b, 1);
//}
//
//function birgitSvarer7b() {
//	console.log("Birgit");
//	$("#modtaget_besked")[0].play();
//	$("#modtaget_besked")[0].volume = 0.5;
//	$(".prikker").hide(0);
//	$(".dialog").css("height", "32vw");
//	$("ul").append(sv5b);
//	setTimeout(tabEllerVind1g, 1); //5000
//}
//
//function tabEllerVind1g() {
//	console.log("tabEllerVind");
//	if (birgitHumor <= 1) {
//		console.log("Humør 1");
//		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
//		$(".lastscreen").show(0);
//		$(".loss")[0].play();
//	} else if (birgitHumor == 2) {
//		console.log("Humør 2");
//		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
//		$(".lastscreen").show(0);
//		$(".loss")[0].play();
//	} else if (birgitHumor == 3) {
//		console.log("Humør 3");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 4) {
//		console.log("Humør 4");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 5) {
//		console.log("Humør 5");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 6) {
//		console.log("Humør 6");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 7) {
//		console.log("Humør 7");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 8) {
//		console.log("Humør 8");
//		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
//		$(".lastscreen").show(0);
//		$(".win")[0].play();
//	} else {
//		console.log("Humør 9");
//		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
//		$(".lastscreen").show(0);
//		$(".win")[0].play();
//	}
//}
//
//
//
//
//////////dialog-spor 2
//
//function mulighed2() {
//	console.log("Mulighed 2");
//	$(".mulighed").hide(0);
//	$(".valg").css("z-index", "10");
//	$(".mulighed1").off("click", mulighed1);
//	$(".mulighed2").off("click", mulighed2);
//	$(".mulighed3").off("click", mulighed3);
//	$("#typing")[0].play();
//	$(".chattype").typeIt({
//		strings: ['Hvad så? Kan han ikke få den op og stå? ;-)'],
//		speed: 1 //40
//
//	});
//
//	setTimeout(klikPåKnap20, 1); //4000
//}
//
//function klikPåKnap20() {
//	console.log("Klik på knap 3");
//	//$("#typing")[0].pause();
//	$(".send").addClass("klik");
//	$(".send").on("click", lægeSvarer20);
//	setTimeout(lægeSvarer20, 1);
//}
//
//function lægeSvarer20() {
//	console.log("Læge svarer 3");
//	$("#sendknap")[0].play();
//	$("#sendknap")[0].volume = 0.2;
//	$(".send").removeClass("klik");
//	$(".send").off("click", lægeSvarer20);
//	$(".chattype").typeIt({
//		startDelete: true
//	});
//	birgitHumor--;
//	birgitHumor--;
//	birgitHumor--;
//	$(".info").html("Birgit <span>" + birgitHumor + "</span> humør");
//	$("ul").append(s20);
//	setTimeout(humørSkift20, 1); //2000
//}
//
//function humørSkift20() {
//	//1 = sur 0% grøn, 100% rød
//	//2 = megetKed 12.5% grøn, 87.5% rød
//	//3 = lidtKed 25% grøn, 75% rød
//	//4 = overrasket 37.5% grøn, 62.5% rød
//	//5 = flov 50% grøn, 50% rød
//	//6 = neutral 62.5% grøn, 37.5% rød
//	//7 = glad 75% grøn, 25% rød
//	//8 = megetGlad 87.5% grøn, 12.5% rød
//	//9 ekstatisk 100% grøn, 0% rød
//	console.log("Humør skifte1");
//	if (birgitHumor <= 1) {
//		console.log("Humør 1");
//		$(".birgitjensen").css("background-image", "url('Img/damesur-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/på_dybt_vand-01.png')");
//		$(".barometerred").css("width", "100%");
//		$(".barometergreen").css("width", "0%");
//		birgitSkriver20();
//	} else if (birgitHumor == 2) {
//		console.log("Humør 2");
//		$(".birgitjensen").css("background-image", "url('Img/damemegetked-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/på_dybt_vand-01.png')");
//		$(".barometerred").css("width", "87.5%");
//		$(".barometergreen").css("width", "12.5%");
//		birgitSkriver20();
//	} else if (birgitHumor == 3) {
//		console.log("Humør 3");
//		$(".birgitjensen").css("background-image", "url('Img/damelidtked-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/overrasket_negativt-01.png')");
//		$(".barometerred").css("width", "75%");
//		$(".barometergreen").css("width", "25%");
//		birgitSkriver20();
//	} else if (birgitHumor == 4) {
//		console.log("Humør 4");
//		$(".birgitjensen").css("background-image", "url('Img/dameoverrasket-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/overrasket_negativt-01.png')");
//		$(".barometerred").css("width", "62.5%");
//		$(".barometergreen").css("width", "37.5%");
//		birgitSkriver20();
//	} else if (birgitHumor == 5) {
//		console.log("Humør 5");
//		$(".birgitjensen").css("background-image", "url('Img/dameflov-01.png')");
//		$(".barometerred").css("width", "50%");
//		$(".barometergreen").css("width", "50%");
//		birgitSkriver20();
//	} else if (birgitHumor == 6) {
//		console.log("Humør 6");
//		$(".birgitjensen").css("background-image", "url('Img/dameneutral-01.png')");
//		$(".barometerred").css("width", "37.5%");
//		$(".barometergreen").css("width", "62.5%");
//		birgitSkriver20();
//	} else if (birgitHumor == 7) {
//		console.log("Humør 7");
//		$(".birgitjensen").css("background-image", "url('Img/dameglad-01.png')");
//		$(".barometerred").css("width", "25%");
//		$(".barometergreen").css("width", "75%");
//		birgitSkriver20();
//	} else if (birgitHumor == 8) {
//		console.log("Humør 8");
//		$(".birgitjensen").css("background-image", "url('Img/damemegetglad-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/meget_glad-01.png')");
//		$(".barometerred").css("width", "12.5%");
//		$(".barometergreen").css("width", "87.5%");
//		birgitSkriver20();
//	} else {
//		console.log("Humør 9");
//		$(".birgitjensen").css("background-image", "url('Img/dameekstatisk-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/meget_glad-01.png')");
//		$(".barometerred").css("width", "0%");
//		$(".barometergreen").css("width", "100%");
//		birgitSkriver20();
//	}
//}
//
//function birgitSkriver20() {
//	console.log("birgitSkriver20");
//	$(".dialog").css("height", "28vw")
//	$(".prikker").show();
//	setTimeout(birgitSvarer20, 1); //3000
//}
//
//function birgitSvarer20() {
//	console.log("birgitSvarer20");
//	$("#modtaget_besked")[0].play();
//	$("#modtaget_besked")[0].volume = 0.5;
//	$(".prikker").hide(0);
//	$(".dialog").css("height", "32vw");
//	$("ul").append(sv20);
//	setTimeout(valg20, 1); //5000
//}
//
//function valg20() {
//	console.log("valg20");
//	$(".birgitsvar").html("<strong></strong>Øhh, der er stadig psykisk udsatte og alle har ret til en bolig, som danske statsborgere?");
//	$(".mulighed1").html("<strong></strong>Nå, hvad med den merudgift der er på bolig som familie, må vi nu ikke være familie længere?");
//	$(".mulighed2").html("<strong></strong>Nå ok, så skal der holdes godt øje med hjemløse, så de også får en bolig?");
//	$(".mulighed3").html("<strong></strong>Hvad er sundhedsmæssigt den rigtige størrelses bolig?");
//	$(".valg").css("z-index", "25");
//	$(".mulighed").show(0);
//	$(".mulighed1").on("click", mulighed20a);
//	$(".mulighed2").on("click", mulighed20b);
//	$(".mulighed3").on("click", mulighed20c);
//}
//
//function mulighed20a() {
//	console.log("mulighed20a")
//	$(".mulighed").hide(0);
//	$(".valg").css("z-index", "10");
//	$(".mulighed1").off("click", mulighed20a);
//	$(".mulighed2").off("click", mulighed20b);
//	$(".mulighed3").off("click", mulighed20c);
//	$("#typing")[0].play();
//	$(".chattype").typeIt({
//		strings: ['Nå, hvad så? Du må jo fortælle, hvad det er så! Jeg kan jo ikke læse tanker.'],
//		speed: 1 //40
//
//	});
//	setTimeout(klikPåKnap20a, 1);
//}
//
//function klikPåKnap20a() {
//	console.log("klikPåKnap20a");
//	//$("#typing")[0].pause();
//	$(".send").addClass("klik");
//	$(".send").on("click", lægeSvarer20a);
//	setTimeout(lægeSvarer20a, 1);
//}
//
//function lægeSvarer20a() {
//	console.log("Læge svarer 20a");
//	$("#sendknap")[0].play();
//	$("#sendknap")[0].volume = 0.2;
//	$(".send").removeClass("klik");
//	$(".send").off("click", lægeSvarer20a);
//	$(".chattype").typeIt({
//		startDelete: true
//	});
//	$("ul").append(s20a);
//	birgitHumor--;
//	birgitHumor--;
//	$(".info").html("Birgit <span>" + birgitHumor + "</span> humør");
//	setTimeout(humørSkift6b, 1); //2000
//}
//
//function mulighed20b() {
//	console.log("mulighed20b")
//	$(".mulighed").hide(0);
//	$(".valg").css("z-index", "10");
//	$(".mulighed1").off("click", mulighed20a);
//	$(".mulighed2").off("click", mulighed20b);
//	$(".mulighed3").off("click", mulighed20c);
//	$("#typing")[0].play();
//	$(".chattype").typeIt({
//		strings: ['Nå okay - beklager mit kække svar. Hvad er så problemet?'],
//		speed: 1 //40
//
//	});
//	birgitHumor++;
//	$(".info").html("Birgit <span>" + birgitHumor + "</span> humør");
//	setTimeout(klikPåKnap20b, 1);
//}
//
//function klikPåKnap20b() {
//	console.log("klikPåKnap20b");
//	//	$("#typing")[0].pause();
//	$(".send").addClass("klik");
//	$(".send").on("click", lægeSvarer20b);
//	setTimeout(lægeSvarer20b, 1);
//}
//
//function lægeSvarer20b() {
//	console.log("Læge svarer 20b");
//	$("#sendknap")[0].play();
//	$("#sendknap")[0].volume = 0.2;
//	$(".send").removeClass("klik");
//	$(".send").off("click", lægeSvarer20b);
//	$(".chattype").typeIt({
//		startDelete: true
//	});
//	$("ul").append(s20b);
//	setTimeout(humørSkift20b, 1); //2000
//}
//
//function mulighed20c() {
//	console.log("mulighed20c")
//	$(".mulighed").hide(0);
//	$(".valg").css("z-index", "10");
//	$(".mulighed1").off("click", mulighed20a);
//	$(".mulighed2").off("click", mulighed20b);
//	$(".mulighed3").off("click", mulighed20c);
//	$("#typing")[0].play();
//	$(".chattype").typeIt({
//		strings: ['Hvad er så problemet?'],
//		speed: 1 //40
//
//	});
//	setTimeout(klikPåKnap20c, 1);
//}
//
//function klikPåKnap20c() {
//	console.log("klikPåKnap20c");
//	//$("#typing")[0].pause();
//	$(".send").addClass("klik");
//	$(".send").on("click", lægeSvarer20c);
//	setTimeout(lægeSvarer20c, 1);
//}
//
//function lægeSvarer20c() {
//	console.log("Læge svarer 20c");
//	$("#sendknap")[0].play();
//	$("#sendknap")[0].volume = 0.2;
//	$(".send").removeClass("klik");
//	$(".send").off("click", lægeSvarer20c);
//	$(".chattype").typeIt({
//		startDelete: true
//	});
//	$("ul").append(s20c);
//	setTimeout(humørSkift20b, 1); //2000
//}
//
//function humørSkift20b() {
//	//1 = sur 0% grøn, 100% rød
//	//2 = megetKed 12.5% grøn, 87.5% rød
//	//3 = lidtKed 25% grøn, 75% rød
//	//4 = overrasket 37.5% grøn, 62.5% rød
//	//5 = flov 50% grøn, 50% rød
//	//6 = neutral 62.5% grøn, 37.5% rød
//	//7 = glad 75% grøn, 25% rød
//	//8 = megetGlad 87.5% grøn, 12.5% rød
//	//9 ekstatisk 100% grøn, 0% rød
//	console.log("Humør skifte1");
//	if (birgitHumor <= 1) {
//		console.log("Humør 1");
//		$(".birgitjensen").css("background-image", "url('Img/damesur-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/på_dybt_vand-01.png')");
//		$(".barometerred").css("width", "100%");
//		$(".barometergreen").css("width", "0%");
//		birgitSkriver20b();
//	} else if (birgitHumor == 2) {
//		console.log("Humør 2");
//		$(".birgitjensen").css("background-image", "url('Img/damemegetked-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/på_dybt_vand-01.png')");
//		$(".barometerred").css("width", "87.5%");
//		$(".barometergreen").css("width", "12.5%");
//		birgitSkriver20b();
//	} else if (birgitHumor == 3) {
//		console.log("Humør 3");
//		$(".birgitjensen").css("background-image", "url('Img/damelidtked-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/overrasket_negativt-01.png')");
//		$(".barometerred").css("width", "75%");
//		$(".barometergreen").css("width", "25%");
//		birgitSkriver20b();
//	} else if (birgitHumor == 4) {
//		console.log("Humør 4");
//		$(".birgitjensen").css("background-image", "url('Img/dameoverrasket-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/overrasket_negativt-01.png')");
//		$(".barometerred").css("width", "62.5%");
//		$(".barometergreen").css("width", "37.5%");
//		birgitSkriver20b();
//	} else if (birgitHumor == 5) {
//		console.log("Humør 5");
//		$(".birgitjensen").css("background-image", "url('Img/dameflov-01.png')");
//		$(".barometerred").css("width", "50%");
//		$(".barometergreen").css("width", "50%");
//		birgitSkriver20b();
//	} else if (birgitHumor == 6) {
//		console.log("Humør 6");
//		$(".birgitjensen").css("background-image", "url('Img/dameneutral-01.png')");
//		$(".barometerred").css("width", "37.5%");
//		$(".barometergreen").css("width", "62.5%");
//		birgitSkriver20b();
//	} else if (birgitHumor == 7) {
//		console.log("Humør 7");
//		$(".birgitjensen").css("background-image", "url('Img/dameglad-01.png')");
//		$(".barometerred").css("width", "25%");
//		$(".barometergreen").css("width", "75%");
//		birgitSkriver20b();
//	} else if (birgitHumor == 8) {
//		console.log("Humør 8");
//		$(".birgitjensen").css("background-image", "url('Img/damemegetglad-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/meget_glad-01.png')");
//		$(".barometerred").css("width", "12.5%");
//		$(".barometergreen").css("width", "87.5%");
//		birgitSkriver20b();
//	} else {
//		console.log("Humør 9");
//		$(".birgitjensen").css("background-image", "url('Img/dameekstatisk-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/meget_glad-01.png')");
//		$(".barometerred").css("width", "0%");
//		$(".barometergreen").css("width", "100%");
//		birgitSkriver29b();
//	}
//}
//
//function birgitSkriver20b() {
//	console.log("birgitSkriver20b");
//	$(".dialog").css("height", "28vw")
//	$(".prikker").show();
//	setTimeout(birgitSvarer20b, 1);
//}
//
//function birgitSvarer20b() {
//	console.log("birgitSvarer20b");
//	$("#modtaget_besked")[0].play();
//	$("#modtaget_besked")[0].volume = 0.5;
//	$(".prikker").hide(0);
//	$(".dialog").css("height", "32vw");
//	$("ul").append(sv20b);
//	setTimeout(valg21, 1); //5000
//}
//
//function valg21() {
//	console.log("valg21");
//	$(".birgitsvar").html("<strong></strong>Jeg har praktikpladser og voksenuddannelse?");
//	$(".mulighed1").html("<strong></strong>Jeg kan give min arbejdsgiver besked om at der er voksen-uddannelser?");
//	$(".mulighed2").html("<strong></strong>Jeg kender nogle industriområder, der samarbejder om at få flest gennem uddannelse uanset alder og social status?");
//	$(".mulighed3").html("<strong></strong>Det er bare at bruge pengene på kriminalforsovnet?");
//	$(".valg").css("z-index", "25");
//	$(".mulighed").show(0);
//	$(".mulighed1").on("click", mulighed21a);
//	$(".mulighed2").on("click", mulighed21b);
//	$(".mulighed3").on("click", mulighed21c);
//}
//
//function mulighed21a() {
//	console.log("mulighed21a");
//	$(".mulighed").hide(0);
//	$(".valg").css("z-index", "10");
//	$(".mulighed1").off("click", mulighed21a);
//	$(".mulighed2").off("click", mulighed21b);
//	$(".mulighed3").off("click", mulighed21c);
//	$("#typing")[0].play();
//	$(".chattype").typeIt({
//		strings: ['Jeg kan give dig nummeret på en god sexolog, som muligvis kan hjælpe jer.'],
//		speed: 1 //40
//
//	});
//	setTimeout(klikPåKnap21a, 1); //4600
//}
//
//function klikPåKnap21a() {
//	console.log("klikPåKnap21a");
//	//$("#typing")[0].pause();
//	$(".send").addClass("klik");
//	$(".send").on("click", lægeSvarer21a);
//	setTimeout(lægeSvarer21a, 1);
//}
//
//function lægeSvarer21a() {
//	console.log("Læge svarer 21a");
//	$("#sendknap")[0].play();
//	$("#sendknap")[0].volume = 0.2;
//	$(".send").removeClass("klik");
//	$(".send").off("click", lægeSvarer21a);
//	$(".chattype").typeIt({
//		startDelete: true
//	});
//	birgitHumor++;
//	$(".info").html("Birgit <span>" + birgitHumor + "</span> humør");
//	$("ul").append(s21a);
//	setTimeout(humørSkift21a, 1); //2000
//}
//
//function humørSkift21a() {
//	//1 = sur 0% grøn, 100% rød
//	//2 = megetKed 12.5% grøn, 87.5% rød
//	//3 = lidtKed 25% grøn, 75% rød
//	//4 = overrasket 37.5% grøn, 62.5% rød
//	//5 = flov 50% grøn, 50% rød
//	//6 = neutral 62.5% grøn, 37.5% rød
//	//7 = glad 75% grøn, 25% rød
//	//8 = megetGlad 87.5% grøn, 12.5% rød
//	//9 ekstatisk 100% grøn, 0% rød
//	console.log("Humør skifte1");
//	if (birgitHumor <= 1) {
//		console.log("Humør 1");
//		$(".birgitjensen").css("background-image", "url('Img/damesur-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/på_dybt_vand-01.png')");
//		$(".barometerred").css("width", "100%");
//		$(".barometergreen").css("width", "0%");
//		birgitSkriver21a();
//	} else if (birgitHumor == 2) {
//		console.log("Humør 2");
//		$(".birgitjensen").css("background-image", "url('Img/damemegetked-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/på_dybt_vand-01.png')");
//		$(".barometerred").css("width", "87.5%");
//		$(".barometergreen").css("width", "12.5%");
//		birgitSkriver21a();
//	} else if (birgitHumor == 3) {
//		console.log("Humør 3");
//		$(".birgitjensen").css("background-image", "url('Img/damelidtked-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/overrasket_negativt-01.png')");
//		$(".barometerred").css("width", "75%");
//		$(".barometergreen").css("width", "25%");
//		birgitSkriver21a();
//	} else if (birgitHumor == 4) {
//		console.log("Humør 4");
//		$(".birgitjensen").css("background-image", "url('Img/dameoverrasket-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/overrasket_negativt-01.png')");
//		$(".barometerred").css("width", "62.5%");
//		$(".barometergreen").css("width", "37.5%");
//		birgitSkriver21a();
//	} else if (birgitHumor == 5) {
//		console.log("Humør 5");
//		$(".birgitjensen").css("background-image", "url('Img/dameflov-01.png')");
//		$(".barometerred").css("width", "50%");
//		$(".barometergreen").css("width", "50%");
//		birgitSkriver21a();
//	} else if (birgitHumor == 6) {
//		console.log("Humør 6");
//		$(".birgitjensen").css("background-image", "url('Img/dameneutral-01.png')");
//		$(".barometerred").css("width", "37.5%");
//		$(".barometergreen").css("width", "62.5%");
//		birgitSkriver21a();
//	} else if (birgitHumor == 7) {
//		console.log("Humør 7");
//		$(".birgitjensen").css("background-image", "url('Img/dameglad-01.png')");
//		$(".barometerred").css("width", "25%");
//		$(".barometergreen").css("width", "75%");
//		birgitSkriver21a();
//	} else if (birgitHumor == 8) {
//		console.log("Humør 8");
//		$(".birgitjensen").css("background-image", "url('Img/damemegetglad-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/meget_glad-01.png')");
//		$(".barometerred").css("width", "12.5%");
//		$(".barometergreen").css("width", "87.5%");
//		birgitSkriver21a();
//	} else {
//		console.log("Humør 9");
//		$(".birgitjensen").css("background-image", "url('Img/dameekstatisk-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/meget_glad-01.png')");
//		$(".barometerred").css("width", "0%");
//		$(".barometergreen").css("width", "100%");
//		birgitSkriver21a();
//	}
//}
//
//function birgitSkriver21a() {
//	console.log("birgitSkriver21a");
//	$(".dialog").css("height", "28vw")
//	$(".prikker").show();
//	setTimeout(birgitSvarer21a, 1);
//}
//
//function birgitSvarer21a() {
//	console.log("birgitSvarer21a");
//	$("#modtaget_besked")[0].play();
//	$("#modtaget_besked")[0].volume = 0.5;
//	$(".prikker").hide(0);
//	$(".dialog").css("height", "32vw");
//	$("ul").append(sv21a);
//	setTimeout(tabEllerVind2a, 1); //5000
//}
//
//function tabEllerVind2a() {
//	console.log("tabEllerVind");
//	if (birgitHumor <= 1) {
//		console.log("Humør 1");
//		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
//		$(".lastscreen").show(0);
//		$(".loss")[0].play();
//	} else if (birgitHumor == 2) {
//		console.log("Humør 2");
//		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
//		$(".lastscreen").show(0);
//		$(".loss")[0].play();
//	} else if (birgitHumor == 3) {
//		console.log("Humør 3");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 4) {
//		console.log("Humør 4");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 5) {
//		console.log("Humør 5");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 6) {
//		console.log("Humør 6");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 7) {
//		console.log("Humør 7");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 8) {
//		console.log("Humør 8");
//		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
//		$(".lastscreen").show(0);
//		$(".win")[0].play();
//	} else {
//		console.log("Humør 9");
//		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
//		$(".lastscreen").show(0);
//		$(".win")[0].play();
//	}
//}
/////////////
//
//function mulighed21b() {
//	console.log("mulighed21a");
//	$(".mulighed").hide(0);
//	$(".valg").css("z-index", "10");
//	$(".mulighed1").off("click", mulighed21a);
//	$(".mulighed2").off("click", mulighed21b);
//	$(".mulighed3").off("click", mulighed21c);
//	$("#typing")[0].play();
//	$(".chattype").typeIt({
//		strings: ['Jeg har nogle forskellige pjecer og informationsfoldere, som du kan læse lidt i, og hvis du ikke finder svar, må du tage kontakt til mig igen.'],
//		speed: 1 //40
//
//	});
//	setTimeout(klikPåKnap21b, 1); //4600
//}
//
//function klikPåKnap21b() {
//	console.log("klikPåKnap21b");
//	//	$("#typing")[0].pause();
//	$(".send").addClass("klik");
//	$(".send").on("click", lægeSvarer21b);
//	setTimeout(lægeSvarer21b, 1);
//}
//
//function lægeSvarer21b() {
//	console.log("Læge svarer 21b");
//	$("#sendknap")[0].play();
//	$("#sendknap")[0].volume = 0.2;
//	$(".send").removeClass("klik");
//	$(".send").off("click", lægeSvarer21b);
//	$(".chattype").typeIt({
//		startDelete: true
//	});
//	birgitHumor++;
//	birgitHumor++;
//	$(".info").html("Birgit <span>" + birgitHumor + "</span> humør");
//	$("ul").append(s21b);
//	setTimeout(humørSkift21b, 1); //2000
//}
//
//function humørSkift21b() {
//	//1 = sur 0% grøn, 100% rød
//	//2 = megetKed 12.5% grøn, 87.5% rød
//	//3 = lidtKed 25% grøn, 75% rød
//	//4 = overrasket 37.5% grøn, 62.5% rød
//	//5 = flov 50% grøn, 50% rød
//	//6 = neutral 62.5% grøn, 37.5% rød
//	//7 = glad 75% grøn, 25% rød
//	//8 = megetGlad 87.5% grøn, 12.5% rød
//	//9 ekstatisk 100% grøn, 0% rød
//	console.log("Humør skifte1");
//	if (birgitHumor <= 1) {
//		console.log("Humør 1");
//		$(".birgitjensen").css("background-image", "url('Img/damesur-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/på_dybt_vand-01.png')");
//		$(".barometerred").css("width", "100%");
//		$(".barometergreen").css("width", "0%");
//		birgitSkriver21b();
//	} else if (birgitHumor == 2) {
//		console.log("Humør 2");
//		$(".birgitjensen").css("background-image", "url('Img/damemegetked-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/på_dybt_vand-01.png')");
//		$(".barometerred").css("width", "87.5%");
//		$(".barometergreen").css("width", "12.5%");
//		birgitSkriver21b();
//	} else if (birgitHumor == 3) {
//		console.log("Humør 3");
//		$(".birgitjensen").css("background-image", "url('Img/damelidtked-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/overrasket_negativt-01.png')");
//		$(".barometerred").css("width", "75%");
//		$(".barometergreen").css("width", "25%");
//		birgitSkriver21b();
//	} else if (birgitHumor == 4) {
//		console.log("Humør 4");
//		$(".birgitjensen").css("background-image", "url('Img/dameoverrasket-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/overrasket_negativt-01.png')");
//		$(".barometerred").css("width", "62.5%");
//		$(".barometergreen").css("width", "37.5%");
//		birgitSkriver21b();
//	} else if (birgitHumor == 5) {
//		console.log("Humør 5");
//		$(".birgitjensen").css("background-image", "url('Img/dameflov-01.png')");
//		$(".barometerred").css("width", "50%");
//		$(".barometergreen").css("width", "50%");
//		birgitSkriver21b();
//	} else if (birgitHumor == 6) {
//		console.log("Humør 6");
//		$(".birgitjensen").css("background-image", "url('Img/dameneutral-01.png')");
//		$(".barometerred").css("width", "37.5%");
//		$(".barometergreen").css("width", "62.5%");
//		birgitSkriver21b();
//	} else if (birgitHumor == 7) {
//		console.log("Humør 7");
//		$(".birgitjensen").css("background-image", "url('Img/dameglad-01.png')");
//		$(".barometerred").css("width", "25%");
//		$(".barometergreen").css("width", "75%");
//		birgitSkriver21b();
//	} else if (birgitHumor == 8) {
//		console.log("Humør 8");
//		$(".birgitjensen").css("background-image", "url('Img/damemegetglad-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/meget_glad-01.png')");
//		$(".barometerred").css("width", "12.5%");
//		$(".barometergreen").css("width", "87.5%");
//		birgitSkriver21b();
//	} else {
//		console.log("Humør 9");
//		$(".birgitjensen").css("background-image", "url('Img/dameekstatisk-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/meget_glad-01.png')");
//		$(".barometerred").css("width", "0%");
//		$(".barometergreen").css("width", "100%");
//		birgitSkriver21b();
//	}
//}
//
//function birgitSkriver21b() {
//	console.log("birgitSkriver21b");
//	$(".dialog").css("height", "28vw")
//	$(".prikker").show();
//	setTimeout(birgitSvarer21b, 1);
//}
//
//function birgitSvarer21b() {
//	console.log("birgitSvarer21b");
//	$("#modtaget_besked")[0].play();
//	$("#modtaget_besked")[0].volume = 0.5;
//	$(".prikker").hide(0);
//	$(".dialog").css("height", "32vw");
//	$("ul").append(sv21b);
//	setTimeout(tabEllerVind2b, 1); //5000
//}
//
//function tabEllerVind2b() {
//	console.log("tabEllerVind");
//	if (birgitHumor <= 1) {
//		console.log("Humør 1");
//		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
//		$(".lastscreen").show(0);
//		$(".loss")[0].play();
//	} else if (birgitHumor == 2) {
//		console.log("Humør 2");
//		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
//		$(".lastscreen").show(0);
//		$(".loss")[0].play();
//	} else if (birgitHumor == 3) {
//		console.log("Humør 3");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 4) {
//		console.log("Humør 4");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 5) {
//		console.log("Humør 5");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 6) {
//		console.log("Humør 6");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 7) {
//		console.log("Humør 7");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 8) {
//		console.log("Humør 8");
//		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
//		$(".lastscreen").show(0);
//		$(".win")[0].play();
//	} else {
//		console.log("Humør 9");
//		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
//		$(".lastscreen").show(0);
//		$(".win")[0].play();
//	}
//}
//
///////////////////
//function mulighed21c() {
//	console.log("mulighed21a");
//	$(".mulighed").hide(0);
//	$(".valg").css("z-index", "10");
//	$(".mulighed1").off("click", mulighed21a);
//	$(".mulighed2").off("click", mulighed21b);
//	$(".mulighed3").off("click", mulighed21c);
//	$("#typing")[0].play();
//	$(".chattype").typeIt({
//		strings: ['Det er bare at komme op på hesten igen ;-) , så skal problemet nok blive løst.'],
//		speed: 1 //40
//
//	});
//	setTimeout(klikPåKnap21c, 1); //4600
//}
//
//function klikPåKnap21c() {
//	console.log("klikPåKnap21c");
//	//$("#typing")[0].pause();
//	$(".send").addClass("klik");
//	$(".send").on("click", lægeSvarer21c);
//	setTimeout(lægeSvarer21c, 1);
//}
//
//function lægeSvarer21c() {
//	console.log("Læge svarer 21c");
//	$("#sendknap")[0].play();
//	$("#sendknap")[0].volume = 0.2;
//	$(".send").removeClass("klik");
//	$(".send").off("click", lægeSvarer21c);
//	$(".chattype").typeIt({
//		startDelete: true
//	});
//	birgitHumor--;
//	$(".info").html("Birgit <span>" + birgitHumor + "</span> humør");
//	$("ul").append(s21c);
//	setTimeout(humørSkift21c, 1); //2000
//}
//
//function humørSkift21c() {
//	//1 = sur 0% grøn, 100% rød
//	//2 = megetKed 12.5% grøn, 87.5% rød
//	//3 = lidtKed 25% grøn, 75% rød
//	//4 = overrasket 37.5% grøn, 62.5% rød
//	//5 = flov 50% grøn, 50% rød
//	//6 = neutral 62.5% grøn, 37.5% rød
//	//7 = glad 75% grøn, 25% rød
//	//8 = megetGlad 87.5% grøn, 12.5% rød
//	//9 ekstatisk 100% grøn, 0% rød
//	console.log("Humør skifte1");
//	if (birgitHumor <= 1) {
//		console.log("Humør 1");
//		$(".birgitjensen").css("background-image", "url('Img/gammeldamesur-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/på_dybt_vand-01.png')");
//		$(".barometerred").css("width", "100%");
//		$(".barometergreen").css("width", "0%");
//		birgitSkriver21c();
//	} else if (birgitHumor == 2) {
//		console.log("Humør 2");
//		$(".birgitjensen").css("background-image", "url('Img/gammeldamemegetked-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/på_dybt_vand-01.png')");
//		$(".barometerred").css("width", "87.5%");
//		$(".barometergreen").css("width", "12.5%");
//		birgitSkriver21c();
//	} else if (birgitHumor == 3) {
//		console.log("Humør 3");
//		$(".birgitjensen").css("background-image", "url('Img/gammeldamelidtked-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/overrasket_negativt-01.png')");
//		$(".barometerred").css("width", "75%");
//		$(".barometergreen").css("width", "25%");
//		birgitSkriver21c();
//	} else if (birgitHumor == 4) {
//		console.log("Humør 4");
//		$(".birgitjensen").css("background-image", "url('Img/dameoverrasket-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/overrasket_negativt-01.png')");
//		$(".barometerred").css("width", "62.5%");
//		$(".barometergreen").css("width", "37.5%");
//		birgitSkriver21c();
//	} else if (birgitHumor == 5) {
//		console.log("Humør 5");
//		$(".birgitjensen").css("background-image", "url('Img/dameflov-01.png')");
//		$(".barometerred").css("width", "50%");
//		$(".barometergreen").css("width", "50%");
//		birgitSkriver21c();
//	} else if (birgitHumor == 6) {
//		console.log("Humør 6");
//		$(".birgitjensen").css("background-image", "url('Img/dameneutral-01.png')");
//		$(".barometerred").css("width", "37.5%");
//		$(".barometergreen").css("width", "62.5%");
//		birgitSkriver21c();
//	} else if (birgitHumor == 7) {
//		console.log("Humør 7");
//		$(".birgitjensen").css("background-image", "url('Img/dameglad-01.png')");
//		$(".barometerred").css("width", "25%");
//		$(".barometergreen").css("width", "75%");
//		birgitSkriver21c();
//	} else if (birgitHumor == 8) {
//		console.log("Humør 8");
//		$(".birgitjensen").css("background-image", "url('Img/damemegetglad-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/meget_glad-01.png')");
//		$(".barometerred").css("width", "12.5%");
//		$(".barometergreen").css("width", "87.5%");
//		birgitSkriver21c();
//	} else {
//		console.log("Humør 9");
//		$(".birgitjensen").css("background-image", "url('Img/dameekstatisk-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/meget_glad-01.png')");
//		$(".barometerred").css("width", "0%");
//		$(".barometergreen").css("width", "100%");
//		birgitSkriver21c();
//	}
//}
//
//function birgitSkriver21c() {
//	console.log("birgitSkriver21a");
//	$(".dialog").css("height", "28vw")
//	$(".prikker").show();
//	setTimeout(birgitSvarer21c, 1);
//}
//
//function birgitSvarer21c() {
//	console.log("birgitSvarer21c");
//	$("#modtaget_besked")[0].play();
//	$("#modtaget_besked")[0].volume = 0.5;
//	$(".prikker").hide(0);
//	$(".dialog").css("height", "32vw");
//	$("ul").append(sv21c);
//	setTimeout(tabEllerVind2c, 1); //5000
//}
//
//function tabEllerVind2c() {
//	console.log("tabEllerVind");
//	if (birgitHumor <= 1) {
//		console.log("Humør 1");
//		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
//		$(".lastscreen").show(0);
//		$(".loss")[0].play();
//	} else if (birgitHumor == 2) {
//		console.log("Humør 2");
//		$(".lastscreen").css("background-image", "url('Img/loss-01.png')");
//		$(".lastscreen").show(0);
//		$(".loss")[0].play();
//	} else if (birgitHumor == 3) {
//		console.log("Humør 3");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 4) {
//		console.log("Humør 4");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 5) {
//		console.log("Humør 5");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 6) {
//		console.log("Humør 6");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 7) {
//		console.log("Humør 7");
//		$(".lastscreen").show(0);
//	} else if (birgitHumor == 8) {
//		console.log("Humør 8");
//		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
//		$(".lastscreen").show(0);
//		$(".win")[0].play();
//	} else {
//		console.log("Humør 9");
//		$(".lastscreen").css("background-image", "url('Img/sejr-01.png')");
//		$(".lastscreen").show(0);
//		$(".win")[0].play();
//	}
//}
//
//
////////////dialog-spor 3
//
//function mulighed3() {
//	console.log("Mulighed 3");
//	$(".mulighed").hide(0);
//	$(".valg").css("z-index", "10");
//	$(".mulighed1").off("click", mulighed1);
//	$(".mulighed2").off("click", mulighed2);
//	$(".mulighed3").off("click", mulighed3);
//	$("#typing")[0].play();
//	$(".chattype").typeIt({
//		strings: ['Har I nogle fysiske problemer, eller er det noget andet?'],
//		speed: 1 //40
//
//	});
//
//	setTimeout(klikPåKnap30, 1); //4000
//}
//
//function klikPåKnap30() {
//	console.log("klikPåKnap30");
//	//$("#typing")[0].pause();
//	$(".send").addClass("klik");
//	$(".send").on("click", lægeSvarer30);
//	setTimeout(lægeSvarer30, 1);
//}
//
//function lægeSvarer30() {
//	console.log("lægeSvarer30");
//	$("#sendknap")[0].play();
//	$("#sendknap")[0].volume = 0.2;
//	$(".send").removeClass("klik");
//	$(".send").off("click", lægeSvarer30);
//	$(".chattype").typeIt({
//		startDelete: true
//	});
//	birgitHumor++;
//	$(".info").html("Birgit <span>" + birgitHumor + "</span> humør");
//	$("ul").append(s30);
//	setTimeout(humørSkift30, 1); //2000
//}
//
//function humørSkift30() {
//	//1 = sur 0% grøn, 100% rød
//	//2 = megetKed 12.5% grøn, 87.5% rød
//	//3 = lidtKed 25% grøn, 75% rød
//	//4 = overrasket 37.5% grøn, 62.5% rød
//	//5 = flov 50% grøn, 50% rød
//	//6 = neutral 62.5% grøn, 37.5% rød
//	//7 = glad 75% grøn, 25% rød
//	//8 = megetGlad 87.5% grøn, 12.5% rød
//	//9 ekstatisk 100% grøn, 0% rød
//	console.log("Humør skifte1");
//	if (birgitHumor <= 1) {
//		console.log("Humør 1");
//		$(".birgitjensen").css("background-image", "url('Img/damesur-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/dpå_dybt_vand-01.png')");
//		$(".barometerred").css("width", "100%");
//		$(".barometergreen").css("width", "0%");
//		birgitSkriver30();
//	} else if (birgitHumor == 2) {
//		console.log("Humør 2");
//		$(".birgitjensen").css("background-image", "url('Img/damemegetked-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/på_dybt_vand-01.png')");
//		$(".barometerred").css("width", "87.5%");
//		$(".barometergreen").css("width", "12.5%");
//		birgitSkriver30();
//	} else if (birgitHumor == 3) {
//		console.log("Humør 3");
//		$(".birgitjensen").css("background-image", "url('Img/damelidtked-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/overrasket_negativt-01.png')");
//		$(".barometerred").css("width", "75%");
//		$(".barometergreen").css("width", "25%");
//		birgitSkriver30();
//	} else if (birgitHumor == 4) {
//		console.log("Humør 4");
//		$(".birgitjensen").css("background-image", "url('Img/dameoverrasket-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/overrasket_negativt-01.png')");
//		$(".barometerred").css("width", "62.5%");
//		$(".barometergreen").css("width", "37.5%");
//		birgitSkriver30();
//	} else if (birgitHumor == 5) {
//		console.log("Humør 5");
//		$(".birgitjensen").css("background-image", "url('Img/dameflov-01.png')");
//		$(".barometerred").css("width", "50%");
//		$(".barometergreen").css("width", "50%");
//		birgitSkriver30();
//	} else if (birgitHumor == 6) {
//		console.log("Humør 6");
//		$(".birgitjensen").css("background-image", "url('Img/dameneutral-01.png')");
//		$(".barometerred").css("width", "37.5%");
//		$(".barometergreen").css("width", "62.5%");
//		birgitSkriver30();
//	} else if (birgitHumor == 7) {
//		console.log("Humør 7");
//		$(".birgitjensen").css("background-image", "url('Img/dameglad-01.png')");
//		$(".barometerred").css("width", "25%");
//		$(".barometergreen").css("width", "75%");
//		birgitSkriver30();
//	} else if (birgitHumor == 8) {
//		console.log("Humør 8");
//		$(".birgitjensen").css("background-image", "url('Img/damemegetglad-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/meget_glad-01.png')");
//		$(".barometerred").css("width", "12.5%");
//		$(".barometergreen").css("width", "87.5%");
//		birgitSkriver30();
//	} else {
//		console.log("Humør 9");
//		$(".birgitjensen").css("background-image", "url('Img/dameekstatisk-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/meget_glad-01.png')");
//		$(".barometerred").css("width", "0%");
//		$(".barometergreen").css("width", "100%");
//		birgitSkriver30();
//	}
//}
//
//function birgitSkriver30() {
//	console.log("birgitSkriver30");
//	$(".dialog").css("height", "28vw")
//	$(".prikker").show();
//	setTimeout(birgitSvarer30, 1); //3000
//}
//
//function birgitSvarer30() {
//	console.log("birgitSvarer20");
//	$("#modtaget_besked")[0].play();
//	$("#modtaget_besked")[0].volume = 0.5;
//	$(".prikker").hide(0);
//	$(".dialog").css("height", "32vw");
//	$("ul").append(sv1a);
//	setTimeout(valg30, 1); //5000
//}
//
//function valg30() {
//	console.log("valg30");
//	$(".birgitsvar").html("<strong></strong>Det kan kun gå for langsomt med flere fritidsordninger og ansatte i institutionerne?");
//	$(".mulighed1").html("<strong></strong>Det er lige noget for mig, hvor kan jeg skrive mig op?");
//	$(".mulighed2").html("<strong></strong>Det lyder som om at der skal bygges i fremtiden?");
//	$(".mulighed3").html("<strong></strong>Sådan er er det ikke hvor jeg kommer fra?");
//	$(".valg").css("z-index", "25");
//	$(".mulighed").show(0);
//	$(".mulighed1").on("click", mulighed30a);
//	$(".mulighed2").on("click", mulighed1b);
//	$(".mulighed3").on("click", mulighed1c);
//}
//
//function mulighed30a() {
//	console.log("mulighed30a");
//	$(".mulighed").hide(0);
//	$(".valg").css("z-index", "10");
//	$(".mulighed1").off("click", mulighed30a);
//	$(".mulighed2").off("click", mulighed1b);
//	$(".mulighed3").off("click", mulighed1c);
//	$("#typing")[0].play();
//	$(".chattype").typeIt({
//		strings: ['Det lyder da ikke så godt. Hvad forventer du, at jeg kan gøre ? '],
//		speed: 1 //40
//
//	});
//	setTimeout(klikPåKnap30a, 1);
//}
//
//function klikPåKnap30a() {
//	console.log("klikPåKnap30a");
//	//$("#typing")[0].pause();
//	$(".send").addClass("klik");
//	$(".send").on("click", lægeSvarer30a);
//	setTimeout(lægeSvarer30a, 1);
//}
//
//function lægeSvarer30a() {
//	console.log("lægeSvarer30a");
//	$("#sendknap")[0].play();
//	$("#sendknap")[0].volume = 0.2;
//	$(".send").removeClass("klik");
//	$(".send").off("click", lægeSvarer30a);
//	$(".chattype").typeIt({
//		startDelete: true
//	});
//	$("ul").append(s30a);
//	setTimeout(humørSkift30a, 1); //2000
//}
//
//function humørSkift30a() {
//	//1 = sur 0% grøn, 100% rød
//	//2 = megetKed 12.5% grøn, 87.5% rød
//	//3 = lidtKed 25% grøn, 75% rød
//	//4 = overrasket 37.5% grøn, 62.5% rød
//	//5 = flov 50% grøn, 50% rød
//	//6 = neutral 62.5% grøn, 37.5% rød
//	//7 = glad 75% grøn, 25% rød
//	//8 = megetGlad 87.5% grøn, 12.5% rød
//	//9 ekstatisk 100% grøn, 0% rød
//	console.log("Humør skifte1");
//	if (birgitHumor <= 1) {
//		console.log("Humør 1");
//		$(".birgitjensen").css("background-image", "url('Img/damesur-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/på_dybt_vand-01.png')");
//		$(".barometerred").css("width", "100%");
//		$(".barometergreen").css("width", "0%");
//		birgitSkriver30a();
//	} else if (birgitHumor == 2) {
//		console.log("Humør 2");
//		$(".birgitjensen").css("background-image", "url('Img/damemegetked-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/på_dybt_vand-01.png')");
//		$(".barometerred").css("width", "87.5%");
//		$(".barometergreen").css("width", "12.5%");
//		birgitSkriver30a();
//	} else if (birgitHumor == 3) {
//		console.log("Humør 3");
//		$(".birgitjensen").css("background-image", "url('Img/damelidtked-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/overrasket_negativt-01.png')");
//		$(".barometerred").css("width", "75%");
//		$(".barometergreen").css("width", "25%");
//		birgitSkriver30a();
//	} else if (birgitHumor == 4) {
//		console.log("Humør 4");
//		$(".birgitjensen").css("background-image", "url('Img/dameoverrasket-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/overrasket_negativt-01.png')");
//		$(".barometerred").css("width", "62.5%");
//		$(".barometergreen").css("width", "37.5%");
//		birgitSkriver30a();
//	} else if (birgitHumor == 5) {
//		console.log("Humør 5");
//		$(".birgitjensen").css("background-image", "url('Img/dameflov-01.png')");
//		$(".barometerred").css("width", "50%");
//		$(".barometergreen").css("width", "50%");
//		birgitSkriver30a();
//	} else if (birgitHumor == 6) {
//		console.log("Humør 6");
//		$(".birgitjensen").css("background-image", "url('Img/dameneutral-01.png')");
//		$(".barometerred").css("width", "37.5%");
//		$(".barometergreen").css("width", "62.5%");
//		birgitSkriver30a();
//	} else if (birgitHumor == 7) {
//		console.log("Humør 7");
//		$(".birgitjensen").css("background-image", "url('Img/dameglad-01.png')");
//		$(".barometerred").css("width", "25%");
//		$(".barometergreen").css("width", "75%");
//		birgitSkriver30a();
//	} else if (birgitHumor == 8) {
//		console.log("Humør 8");
//		$(".birgitjensen").css("background-image", "url('Img/damemegetglad-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/meget_glad-01.png')");
//		$(".barometerred").css("width", "12.5%");
//		$(".barometergreen").css("width", "87.5%");
//		birgitSkriver30a();
//	} else {
//		console.log("Humør 9");
//		$(".birgitjensen").css("background-image", "url('Img/dameekstatisk-01.png')");
//		$(".doctorhansen").css("background-image", "url('Img/meget_glad-01.png')");
//		$(".barometerred").css("width", "0%");
//		$(".barometergreen").css("width", "100%");
//		birgitSkriver30a();
//	}
//}
//
//function birgitSkriver30a() {
//	console.log("birgitSkriver30a");
//	$(".dialog").css("height", "28vw")
//	$(".prikker").show();
//	setTimeout(birgitSvarer30a, 1); //3000
//}
//
//function birgitSvarer30a() {
//	console.log("birgitSvarer30a");
//	$("#modtaget_besked")[0].play();
//	$("#modtaget_besked")[0].volume = 0.5;
//	$(".prikker").hide(0);
//	$(".dialog").css("height", "32vw");
//	$("ul").append(sv30a);
//	setTimeout(valg31, 1); //5000
//}
//
//function valg31() {
//	console.log("valg31");
//	$(".birgitsvar").html("<strong>Birgit: </strong>Det ved jeg ikke, men kan du ikke hjælpe mig?");
//	$(".mulighed1").html("<strong>Dr. Hansen: </strong>Her har du en pjece, der omhandler dit problem. Læs den, og så skal det nok ordne sig.");
//	$(".mulighed2").html("<strong>Dr. Hansen: </strong>Det ved jeg ikke. Kender ikke selv til problemet.");
//	$(".mulighed3").html("<strong>Dr. Hansen: </strong>Det er rigtig vigtigt, at dig og din partner snakker om det, da det godt kan være svært for den modsatte part at forstå. I kan eventuelt komme herop sammen, eller snakke med en sexolog. Jeg har også nogle pjecer, som du kan kigge lidt på. ");
//	$(".valg").css("z-index", "25");
//	$(".mulighed").show(0);
//	$(".mulighed1").on("click", mulighed2a);
//	$(".mulighed2").on("click", mulighed2b);
//	$(".mulighed3").on("click", mulighed2c);
//}
//
//
//////////////////////////
//function getRndInteger(min, max) {
//	return Math.floor(Math.random() * (max - min)) + min;
//}
