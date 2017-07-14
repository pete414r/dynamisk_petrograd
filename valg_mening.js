var sar1 = $(".sar1");
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

var s20 = $(".s20");
var s20a = $(".s20a");
var s20b = $(".s20b");
var s20c = $(".s20c");
var s21a = $(".s21a");
var s21b = $(".s21b");
var s21c = $(".s21c");

var s20 = $(".s20");
var s20b = $(".s20b");
var s21a = $(".s21a");
var s21b = $(".s21b");
var s21c = $(".s21c");

var s30 = $(".s30");
var s30a = $(".s30a");
var s30a = $(".s30a");

var motiver = $(".motiver");
var avatarv = getRndInteger(1, 9);

humorv();

$(".info").html("avatar <span>" + avatarv + "</span> Humor");

function humorv() {
	console.log("Start Humor");
	if (avatarv <= 1) {
		console.log("Humor 1");
		$(".avatarsin").css("background-image", "url('images_sitet/sur-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/vand-01.png')");
		setTimeout(start, 1); //1500
	} else if (avatarv == 2) {
		console.log("Humor 2");
		$(".avatarsin").css("background-image", "url('images_sitet/megetked-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/vand-01.png')");
		setTimeout(start, 1); //1500
	} else if (avatarv == 3) {
		console.log("Humor 3");
		$(".avatarsin").css("background-image", "url('images_sitet/lidtked-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/gglad-01.png')");
		setTimeout(start, 1); //1500
	} else if (avatarv == 4) {
		console.log("Humor 4");
		$(".avatarsin").css("background-image", "url('images_sitet/overrasket-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/gglad-01.png')");
		setTimeout(start, 1); //1500
	} else if (avatarv == 5) {
		console.log("Humor 5");
		$(".avatarsin").css("background-image", "url('images_sitet/flov-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/gglad-01.png')");
		setTimeout(start, 1); //1500
	} else if (avatarv == 6) {
		console.log("Humor 6");
		$(".avatarsin").css("background-image", "url('images_sitet/neutral-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/gglad-01.png')");
		setTimeout(start, 1); //1500
	} else if (avatarv == 7) {
		console.log("Humor 7");
		$(".avatarsin").css("background-image", "url('images_sitet/glad-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/gglad-01.png')");
		setTimeout(start, 1); //1500
	} else if (avatarv == 8) {
		console.log("Humor 8");
		$(".avatarsin").css("background-image", "url('images_sitet/megetglad-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/negativt-01.png')");
		setTimeout(start, 1); //1500
	} else {
		console.log("Humor 9");
		$(".avatarsin").css("background-image", "url('images_sitet/ekstatisk-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/negativt-01.png')");
		setTimeout(start, 1); //1500
	}
}

function start() {
	$("#keyboard")[0].play();
	setTimeout(klikkenPåKnap, 1); //4600
}

function klikkenPåKnap() {
	console.log("klikken på knappen");
	$(".starter").addClass("klikken");
	$(".starter").on("click", docsarer);
	setTimeout(docsarer, 55500);

}


function docsarer() {
	console.log("Hej");
	$(".starter").removeClass("klikken");
	$(".starter").off("click", docsarer);
	$("ul").append(spgm1);
	setTimeout(avatarSkriver, 1); //2000

}

function avatarSkriver() {
	console.log("typisk");
		$(".motiver").show();
	setTimeout(avatarsarer, 1); //3000
}

function avatarsarer() {
	console.log("avatar");
	$("#modtaget")[0].play();
	$("#modtaget")[0].volume = 0.5;
	$(".motiver").hide(0);
		$("ul").append(sar1);
	setTimeout(v1, 3000); //3000
}

function v1() {
	console.log("v1");
	$(".v").css("z-index", "25");
	$(".mulige").show(0);
	$(".mulige1").on("click", mulige1);
	$(".mulige2").on("click", mulige2);
	$(".mulige3").on("click", mulige3);
}

//Dialogben1

function mulige1() {
	console.log("mulige 1");
	$(".mulige").hide(0);
	$(".v").css("z-index", "10");
	$(".mulige1").off("click", mulige1);
	$(".mulige2").off("click", mulige2);
	$(".mulige3").off("click", mulige3);
		setTimeout(klikkenPåKnap2, 1); //4000
}

function klikkenPåKnap2() {
	console.log("klikken på knappen");
	$(".starter").addClass("klikken");
	$(".starter").on("click", docsarer2);
	setTimeout(docsarer2, 1);
}

function docsarer2() {
	console.log("doc sarer 2");
	$(".starter").removeClass("klikken");
	$(".starter").off("click", docsarer2);
	$("ul").append(s1a);
	setTimeout(avatarSkriver2, 1); //2000
}

function avatarSkriver2() {
	console.log("typisk");
	$(".motiver").show();
	setTimeout(avatarsarer2, 1); //3000
}

function avatarsarer2() {
	console.log("avatar");
	$("#modtaget")[0].play();
	$("#modtaget")[0].volume = 0.5;
	$(".motiver").hide(0);
		$("ul").append(s1a);
	setTimeout(va1, 1); //3000
}

function va1() {
	console.log("v a1");
	$(".avatarsar").html("<strong></strong>Der har været stillet forslag til at mindske delen af almennøtige boliger?");
	$(".mulige1").html("<strong></strong>Jeg burde vide om Christiania indgår i lokalplanen?");
	$(".mulige2").html("<strong></strong>Der er meget store forandringer på boligområdet. Det kan medføre stor forskelsbehandling?");
	$(".mulige3").html("<strong></strong>Sådan er det, hvis der er råd?");
	$(".v").css("z-index", "25");
	$(".mulige").show(0);
	$(".mulige1").on("click", mulige1a);
	$(".mulige2").on("click", mulige1b);
	$(".mulige3").on("click", mulige1c);
}

function mulige1a() {
	console.log("mulige 1a");
	$(".mulige").hide(0);
	$(".v").css("z-index", "10");
	$(".mulige1").off("click", mulige1a);
	$(".mulige2").off("click", mulige1b);
	$(".mulige3").off("click", mulige1c);
	setTimeout(klikkenPåKnap3a, 1);
}

function klikkenPåKnap3a() {
	console.log("klikken på knap 3");
	$(".starter").addClass("klikken");
	$(".starter").on("click", docsarer3a);
	setTimeout(docsarer3a, 1);
}

function docsarer3a() {
	console.log("doc sarer 3");
	$(".starter").removeClass("klikken");
	$(".starter").off("click", docsarer3a);
	$("ul").append(s2a);
	setTimeout(HumorSkift1a, 1); //2000
}

function HumorSkift1a() {

	console.log("Humor skifte1");
	if (avatarv <= 1) {
		console.log("Humor 1");
		$(".avatarsin").css("background-image", "url('images_sitet/sur-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/vand-01.png')");
		avatarSkriver3();
	} else if (avatarv == 2) {
		console.log("Humor 2");
		$(".avatarsin").css("background-image", "url('images_sitet/megetked-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/vand-01.png')");
		avatarSkriver3();
	} else if (avatarv == 3) {
		console.log("Humor 3");
		$(".avatarsin").css("background-image", "url('images_sitet/lidtked-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/negativt-01.png')");
		avatarSkriver3();
	} else if (avatarv == 4) {
		console.log("Humor 4");
		$(".avatarsin").css("background-image", "url('images_sitet/overrasket-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/negativt-01.png')");
		avatarSkriver3();
	} else if (avatarv == 5) {
		console.log("Humor 5");
		$(".avatarsin").css("background-image", "url('images_sitet/flov-01.png')");
		avatarSkriver3();
	} else if (avatarv == 6) {
		console.log("Humor 6");
		$(".avatarsin").css("background-image", "url('images_sitet/neutral-01.png')");
		avatarSkriver3();
	} else if (avatarv == 7) {
		console.log("Humor 7");
		$(".avatarsin").css("background-image", "url('images_sitet/glad-01.png')");
		avatarSkriver3();
	} else if (avatarv == 8) {
		console.log("Humor 8");
		$(".avatarsin").css("background-image", "url('images_sitet/megetglad-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/gglad-01.png')");
		avatarSkriver3();
	} else {
		console.log("Humor 9");
		$(".avatarsin").css("background-image", "url('images_sitet/ekstatisk-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/gglad-01.png')");
		avatarSkriver3();
	}
}

function avatarSkriver3() {
	console.log("typisk");
	$(".motiver").show();
	setTimeout(avatarsarer3, 1);
}

function avatarsarer3() {
	console.log("avatar");
	$("#modtaget")[0].play();
	$("#modtaget")[0].volume = 0.5;
	$(".motiver").hide(0);
		$("ul").append(s2a);
	setTimeout(v2a, 3000); //3000
}

function v2a() {
	console.log("v 2a");
	$(".avatarsar").html("<strong></strong>Nej. Hvad med dialogen mellem politikere og borgere?");
	$(".mulige1").html("<strong></strong>Her har der altid været en god dialog til politikerne. Vi får altid en sludder når de har en stand sat op?");
	$(".mulige2").html("<strong></strong>Det ved jeg ikke rigtigt, de kan bare sige til?");
	$(".mulige3").html("<strong></strong>Det er mange gange sært at se hvem der er lokal politiker, men jeg er medlem af et parti og får det samme matriale som politikeren, så der masser at snakke om?");
	$(".v").css("z-index", "25");
	$(".mulige").show(0);
	$(".mulige1").on("click", mulige2a);
	$(".mulige2").on("click", mulige2b);
	$(".mulige3").on("click", mulige2c);
}

function mulige2a() {
	console.log("mulige 2a")
	$(".mulige").hide(0);
	$(".v").css("z-index", "10");
	$(".mulige1").off("click", mulige2a);
	$(".mulige2").off("click", mulige2b);
	$(".mulige3").off("click", mulige2c);
	$(".mulige2").off("click", mulige3c);
	setTimeout(klikkenPåKnap4a, 1);
}

function klikkenPåKnap4a() {
	console.log("klikkenPåKnap4");
	$(".starter").addClass("klikken");
	$(".starter").on("click", docsarer4a);
	setTimeout(docsarer4a, 1);
}

function docsarer4a() {
	$(".starter").removeClass("klikken");
	$(".starter").off("click", docsarer4a);
	$("ul").append(s3a);
	setTimeout(HumorSkift2a, 1); //2000
}

function HumorSkift2a() {
	console.log("Humor skift 2a");

	console.log("Humor skifte1");
	if (avatarv <= 1) {
		console.log("Humor 1");
		$(".avatarsin").css("background-image", "url('images_sitet/sur-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/vand-01.png')");
		avatarSkriver4a();
	} else if (avatarv == 2) {
		console.log("Humor 2");
		$(".avatarsin").css("background-image", "url('images_sitet/megetked-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/vand-01.png')");
		avatarSkriver4a();
	} else if (avatarv == 3) {
		console.log("Humor 3");
		$(".avatarsin").css("background-image", "url('images_sitet/lidtked-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/negativt-01.png')");
		avatarSkriver4a();
	} else if (avatarv == 4) {
		console.log("Humor 4");
		$(".avatarsin").css("background-image", "url('images_sitet/overrasket-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/negativt-01.png')");
		avatarSkriver4a();
	} else if (avatarv == 5) {
		console.log("Humor 5");
		$(".avatarsin").css("background-image", "url('images_sitet/flov-01.png')");
		avatarSkriver4a();
	} else if (avatarv == 6) {
		console.log("Humor 6");
		$(".avatarsin").css("background-image", "url('images_sitet/neutral-01.png')");
		avatarSkriver4a();
	} else if (avatarv == 7) {
		console.log("Humor 7");
		$(".avatarsin").css("background-image", "url('images_sitet/glad-01.png')");
		avatarSkriver4a();
	} else if (avatarv == 8) {
		console.log("Humor 8");
		$(".avatarsin").css("background-image", "url('images_sitet/megetglad-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/gglad-01.png')");
		avatarSkriver4a();
	} else {
		console.log("Humor 9");
		$(".avatarsin").css("background-image", "url('images_sitet/ekstatisk-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/gglad-01.png')");
		avatarSkriver4a();
	}
}

function avatarSkriver4a() {
	console.log("typisk");
	$(".motiver").show();
	setTimeout(avatarsarer4a, 1);
}

function avatarsarer4a() {
	console.log("avatar");
	$("#modtaget")[0].play();
	$("#modtaget")[0].volume = 0.5;
	$(".motiver").hide(0);
		$("ul").append(s3a);
	setTimeout(tabEllerVind1a, 1); //3000
}

function tabEllerVind1a() {
	console.log("tabEllerVind");
	if (avatarv <= 1) {
		console.log("Humor 1");
		$(".screenes").css("background-image", "url('images_sitet/taber-01.png')");
		$(".screenes").show(0);
	} else if (avatarv == 2) {
		console.log("Humor 2");
		$(".screenes").css("background-image", "url('images_sitet/taber-01.png')");
		$(".screenes").show(0);
	} else if (avatarv == 3) {
		console.log("Humor 3");
		$(".screenes").show(0);
	} else if (avatarv == 4) {
		console.log("Humor 4");
		$(".screenes").show(0);
	} else if (avatarv == 5) {
		console.log("Humor 5");
		$(".screenes").show(0);
	} else if (avatarv == 6) {
		console.log("Humor 6");
		$(".screenes").show(0);
	} else if (avatarv == 7) {
		console.log("Humor 7");
		$(".screenes").show(0);
	} else if (avatarv == 8) {
		console.log("Humor 8");
		$(".screenes").css("background-image", "url('images_sitet/vinner-01.png')");
		$(".screenes").show(0);
	} else {
		console.log("Humor 9");
		$(".screenes").css("background-image", "url('images_sitet/vinner-01.png')");
		$(".screenes").show(0);
	}
}

///

function mulige2b() {
	console.log("mulige 2b")
	$(".mulige").hide(0);
	$(".v").css("z-index", "10");
	$(".mulige1").off("click", mulige2a);
	$(".mulige2").off("click", mulige2b);
	$(".mulige3").off("click", mulige2c);
	setTimeout(klikkenPåKnap4b, 1);
}

function klikkenPåKnap4b() {
	console.log("klikkenPåKnap4");
	$(".starter").addClass("klikken");
	$(".starter").on("click", docsarer4b);
	setTimeout(docsarer4b, 1);
}

function docsarer4b() {
	console.log("docsarer4b");
	$(".starter").removeClass("klikken");
	$(".starter").off("click", docsarer4b);
	$("ul").append(s3b);
	avatarv--;
	avatarv--;
	avatarv--;
	$(".info").html("avatar <span>" + avatarv + "</span> Humor");
	setTimeout(HumorSkift2b, 1); //2000
}

function HumorSkift2b() {
	console.log("Humor skift 2b");

	console.log("Humor skifte1");
	if (avatarv <= 1) {
		console.log("Humor 1");
		$(".avatarsin").css("background-image", "url('images_sitet/sur-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/vand-01.png')");
		avatarSkriver4b();
	} else if (avatarv == 2) {
		console.log("Humor 2");
		$(".avatarsin").css("background-image", "url('images_sitet/megetked-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/vand-01.png')");
		avatarSkriver4b();
	} else if (avatarv == 3) {
		console.log("Humor 3");
		$(".avatarsin").css("background-image", "url('images_sitet/lidtked-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/negativt-01.png')");
		avatarSkriver4b();
	} else if (avatarv == 4) {
		console.log("Humor 4");
		$(".avatarsin").css("background-image", "url('images_sitet/overrasket-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/negativt-01.png')");
		avatarSkriver4b();
	} else if (avatarv == 5) {
		console.log("Humor 5");
		$(".avatarsin").css("background-image", "url('images_sitet/flov-01.png')");
		avatarSkriver4b();
	} else if (avatarv == 6) {
		console.log("Humor 6");
		$(".avatarsin").css("background-image", "url('images_sitet/neutral-01.png')");
		avatarSkriver4b();
	} else if (avatarv == 7) {
		console.log("Humor 7");
		$(".avatarsin").css("background-image", "url('images_sitet/glad-01.png')");
		avatarSkriver4b();
	} else if (avatarv == 8) {
		console.log("Humor 8");
		$(".avatarsin").css("background-image", "url('images_sitet/megetglad-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/gglad-01.png')");
		avatarSkriver4b();
	} else {
		console.log("Humor 9");
		$(".avatarsin").css("background-image", "url('images_sitet/ekstatisk-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/gglad-01.png')");
		avatarSkriver4b();
	}
}


function avatarSkriver4b() {
	console.log("avatarSkriver4b");
	$(".motiver").show();
	setTimeout(avatarsarer4b, 1);
}

function avatarsarer4b() {
	console.log("avatar");
	$("#modtaget")[0].play();
	$("#modtaget")[0].volume = 0.5;
	$(".motiver").hide(0);
		$("ul").append(s3b);
	setTimeout(tabEllerVind1b, 1); //3000
}

function tabEllerVind1b() {
	console.log("tabEllerVind");
	if (avatarv <= 1) {
		console.log("Humor 1");
		$(".screenes").css("background-image", "url('images_sitet/taber-01.png')");
		$(".screenes").show(0);
	} else if (avatarv == 2) {
		console.log("Humor 2");
		$(".screenes").css("background-image", "url('images_sitet/taber-01.png')");
		$(".screenes").show(0);
	} else if (avatarv == 3) {
		console.log("Humor 3");
		$(".screenes").show(0);
	} else if (avatarv == 4) {
		console.log("Humor 4");
		$(".screenes").show(0);
	} else if (avatarv == 5) {
		console.log("Humor 5");
		$(".screenes").show(0);
	} else if (avatarv == 6) {
		console.log("Humor 6");
		$(".screenes").show(0);
	} else if (avatarv == 7) {
		console.log("Humor 7");
		$(".screenes").show(0);
	} else if (avatarv == 8) {
		console.log("Humor 8");
		$(".screenes").css("background-image", "url('images_sitet/vinner-01.png')");
		$(".screenes").show(0);
	} else {
		console.log("Humor 9");
		$(".screenes").css("background-image", "url('images_sitet/vinner-01.png')");
		$(".screenes").show(0);
	}
}

////
function mulige2c() {
	console.log("mulige 2c")
	$(".mulige").hide(0);
	$(".v").css("z-index", "10");
	$(".mulige1").off("click", mulige2a);
	$(".mulige2").off("click", mulige2b);
	$(".mulige3").off("click", mulige2c);
	$(".mulige2").off("click", mulige3c);
	setTimeout(klikkenPåKnap4c, 1);
}

function klikkenPåKnap4c() {
	console.log("klikkenPåKnap4c");
	$(".starter").addClass("klikken");
	$(".starter").on("click", docsarer4c);
	setTimeout(docsarer4c, 1);
}

function docsarer4c() {
	console.log("docsarer4c");
	$(".starter").removeClass("klikken");
	$(".starter").off("click", docsarer4c);
	$("ul").append(s3c);
	avatarv++;
	avatarv++;
	$(".info").html("avatar <span>" + avatarv + "</span> Humor");
	setTimeout(HumorSkift2c, 1); //2000
}

function HumorSkift2c() {
	console.log("Humor skift 2c");

	console.log("Humor skifte1");
	if (avatarv == 1) {
		console.log("Humor 1");
		$(".avatarsin").css("background-image", "url('images_sitet/sur-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/vand-01.png')");
		avatarSkriver4c();
	} else if (avatarv == 2) {
		console.log("Humor 2");
		$(".avatarsin").css("background-image", "url('images_sitet/megetked-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/vand-01.png')");
		avatarSkriver4c();
	} else if (avatarv == 3) {
		console.log("Humor 3");
		$(".avatarsin").css("background-image", "url('images_sitet/lidtked-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/negativt-01.png')");
		avatarSkriver4c();
	} else if (avatarv == 4) {
		console.log("Humor 4");
		$(".avatarsin").css("background-image", "url('images_sitet/overrasket-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/negativt-01.png')");
		avatarSkriver4c();
	} else if (avatarv == 5) {
		console.log("Humor 5");
		$(".avatarsin").css("background-image", "url('images_sitet/flov-01.png')");
		avatarSkriver4c();
	} else if (avatarv == 6) {
		console.log("Humor 6");
		$(".avatarsin").css("background-image", "url('images_sitet/neutral-01.png')");
		avatarSkriver4c();
	} else if (avatarv == 7) {
		console.log("Humor 7");
		$(".avatarsin").css("background-image", "url('images_sitet/glad-01.png')");
		avatarSkriver4c();
	} else if (avatarv == 8) {
		console.log("Humor 8");
		$(".avatarsin").css("background-image", "url('images_sitet/megetglad-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/gglad-01.png')");
		avatarSkriver4c();
	} else {
		console.log("Humor 9");
		$(".avatarsin").css("background-image", "url('images_sitet/ekstatisk-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/gglad-1.png')");
		avatarSkriver4c();
	}
}


function avatarSkriver4c() {
	console.log("avatarSkriver4c");
	$(".motiver").show();
	setTimeout(avatarsarer4c, 1);
}

function avatarsarer4c() {
	console.log("avatar");
	$("#modtaget")[0].play();
	$("#modtaget")[0].volume = 0.5;
	$(".motiver").hide(0);
		$("ul").append(s3c);
	setTimeout(tabEllerVind1c, 1); //3000
}

function tabEllerVind1c() {
	console.log("tabEllerVind");
	if (avatarv <= 1) {
		console.log("Humor 1");
		$(".screenes").css("background-image", "url('images_sitet/taber-01.png')");
		$(".screenes").show(0);
	} else if (avatarv == 2) {
		console.log("Humor 2");
		$(".screenes").css("background-image", "url('images_sitet/taber-01.png')");
		$(".screenes").show(0);
	} else if (avatarv == 3) {
		console.log("Humor 3");
		$(".screenes").show(0);
	} else if (avatarv == 4) {
		console.log("Humor 4");
		$(".screenes").show(0);
	} else if (avatarv == 5) {
		console.log("Humor 5");
		$(".screenes").show(0);
	} else if (avatarv == 6) {
		console.log("Humor 6");
		$(".screenes").show(0);
	} else if (avatarv == 7) {
		console.log("Humor 7");
		$(".screenes").show(0);
	} else if (avatarv == 8) {
		console.log("Humor 8");
		$(".screenes").css("background-image", "url('images_sitet/vinner-01.png')");
		$(".screenes").show(0);
	} else {
		console.log("Humor 9");
		$(".screenes").css("background-image", "url('images_sitet/vinner-01.png')");
		$(".screenes").show(0);
	}
}


//////

function mulige1b() {
	console.log("mulige 1b");
	$(".mulige").hide(0);
	$(".v").css("z-index", "10");
	$(".mulige1").off("click", mulige1a);
	$(".mulige2").off("click", mulige1b);
	$(".mulige3").off("click", mulige1c);
	$(".mulige1").off("click", mulige30a);
	setTimeout(klikkenPåKnap3b, 1);
}

function klikkenPåKnap3b() {
	console.log("klikken på knap 3b");
	$(".starter").addClass("klikken");
	$(".starter").on("click", docsarer3b);
	setTimeout(docsarer3b, 1);
}

function docsarer3b() {
	console.log("doc sarer 3");
	$(".starter").removeClass("klikken");
	$(".starter").off("click", docsarer3b);
	$("ul").append(s2b);
	avatarv++;
	$(".info").html("avatar <span>" + avatarv + "</span> Humor");
	setTimeout(HumorSkift1c, 1); //2000
}

function HumorSkift1c() {

	console.log("Humor skifte1");
	if (avatarv <= 1) {
		console.log("Humor 1");
		$(".avatarsin").css("background-image", "url('images_sitet/sur-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/vand-01.png')");
		avatarSkriver3b();
	} else if (avatarv == 2) {
		console.log("Humor 2");
		$(".avatarsin").css("background-image", "url('images_sitet/megetked-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/vand-01.png')");
		avatarSkriver3b();
	} else if (avatarv == 3) {
		console.log("Humor 3");
		$(".avatarsin").css("background-image", "url('images_sitet/lidtked-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/negativt-01.png')");
		avatarSkriver3b();
	} else if (avatarv == 4) {
		console.log("Humor 4");
		$(".avatarsin").css("background-image", "url('images_sitet/overrasket-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/negativt-01.png')");
		avatarSkriver3b();
	} else if (avatarv == 5) {
		console.log("Humor 5");
		$(".avatarsin").css("background-image", "url('images_sitet/flov-01.png')");
		avatarSkriver3b();
	} else if (avatarv == 6) {
		console.log("Humor 6");
		$(".avatarsin").css("background-image", "url('images_sitet/neutral-01.png')");
		avatarSkriver3b();
	} else if (avatarv == 7) {
		console.log("Humor 7");
		$(".avatarsin").css("background-image", "url('images_sitet/glad-01.png')");
		avatarSkriver3b();
	} else if (avatarv == 8) {
		console.log("Humor 8");
		$(".avatarsin").css("background-image", "url('images_sitet/megetglad-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/gglad-01.png')");
		avatarSkriver3b();
	} else {
		console.log("Humor 9");
		$(".avatarsin").css("background-image", "url('images_sitet/ekstatisk-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/gglad-01.png')");
		avatarSkriver3b();
	}
}

function avatarSkriver3b() {
	console.log("typisk");
	$(".motiver").show();
	setTimeout(avatarsarer3b, 1);
}

function avatarsarer3b() {
	console.log("avatar");
	$("#modtaget")[0].play();
	$("#modtaget")[0].volume = 0.5;
	$(".motiver").hide(0);
		$("ul").append(s2b);
	setTimeout(v2b, 3000); //3000
}


function v2b() {
	console.log("v 2b");
	$(".avatarsar").html("<strong></strong>Ja, flere indbyggere, har betydning for miljøet?");
	$(".mulige1").html("<strong></strong>Her har der været taget hensyn for grøn by og at CO2- niveauet skal ned?");
	$(".mulige2").html("<strong></strong>Her har du en pjece, der omhandler dit problem. Læs den, og så skal det nok ordne sig?");
	$(".mulige3").html("<strong></strong>Det er vigtigt der er boliger nok og at der satses på bæredygtighed over hele linjen?");
	$(".v").css("z-index", "25");
	$(".mulige").show(0);
	$(".mulige1").on("click", mulige2c);
	$(".mulige2").on("click", mulige2a);
	$(".mulige3").on("click", mulige3c);
}

function mulige3c() {
	console.log("mulige 2a")
	$(".mulige").hide(0);
	$(".v").css("z-index", "10");
	$(".mulige1").off("click", mulige2a);
	$(".mulige2").off("click", mulige3c);
	$(".mulige3").off("click", mulige2c);
	setTimeout(klikkenPåKnap5c, 1);
}

function klikkenPåKnap5c() {
	console.log("klikkenPåKnap5c");
	$(".starter").addClass("klikken");
	$(".starter").on("click", docsarer5c);
	setTimeout(docsarer5c, 1);
}

function docsarer5c() {
	console.log("doc sarer 5c");
	$(".starter").removeClass("klikken");
	$(".starter").off("click", docsarer5c);
	avatarv++;
	$(".info").html("avatar <span>" + avatarv + "</span> Humor");
	$("ul").append(s4c);
	setTimeout(HumorSkift3c, 1); //2000
}

function HumorSkift3c() {

	console.log("Humor skifte1");
	if (avatarv <= 1) {
		console.log("Humor 1");
		$(".avatarsin").css("background-image", "url('images_sitet/sur-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/vand-01.png')");
		avatarSkriver5c();
	} else if (avatarv == 2) {
		console.log("Humor 2");
		$(".avatarsin").css("background-image", "url('images_sitet/megetked-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/vand-01.png')");
		avatarSkriver5c();
	} else if (avatarv == 3) {
		console.log("Humor 3");
		$(".avatarsin").css("background-image", "url('images_sitet/lidtked-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/negativt-01.png')");
		avatarSkriver5c();
	} else if (avatarv == 4) {
		console.log("Humor 4");
		$(".avatarsin").css("background-image", "url('images_sitet/overrasket-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/negativt-01.png')");
		avatarSkriver5c();
	} else if (avatarv == 5) {
		console.log("Humor 5");
		$(".avatarsin").css("background-image", "url('images_sitet/flov-01.png')");
		avatarSkriver5c();
	} else if (avatarv == 6) {
		console.log("Humor 6");
		$(".avatarsin").css("background-image", "url('images_sitet/neutral-01.png')");
		avatarSkriver5c();
	} else if (avatarv == 7) {
		console.log("Humor 7");
		$(".avatarsin").css("background-image", "url('images_sitet/glad-01.png')");
		avatarSkriver5c();
	} else if (avatarv == 8) {
		console.log("Humor 8");
		$(".avatarsin").css("background-image", "url('images_sitet/megetglad-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/gglad-01.png')");
		avatarSkriver5c();
	} else {
		console.log("Humor 9");
		$(".avatarsin").css("background-image", "url('images_sitet/ekstatisk-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/gglad-01.png')");
		avatarSkriver5c();
	}
}

function avatarSkriver5c() {
	console.log("typisk");
	$(".motiver").show();
	setTimeout(avatarsarer5c, 1);
}

function avatarsarer5c() {
	console.log("avatar");
	$("#modtaget")[0].play();
	$("#modtaget")[0].volume = 0.5;
	$(".motiver").hide(0);
		$("ul").append(s4c);
	setTimeout(tabEllerVind1d, 1); //3000
}

function tabEllerVind1d() {
	console.log("tabEllerVind");
	if (avatarv <= 1) {
		console.log("Humor 1");
		$(".screenes").css("background-image", "url('images_sitet/taber-01.png')");
		$(".screenes").show(0);
	} else if (avatarv == 2) {
		console.log("Humor 2");
		$(".screenes").css("background-image", "url('images_sitet/taber-01.png')");
		$(".screenes").show(0);
	} else if (avatarv == 3) {
		console.log("Humor 3");
		$(".screenes").show(0);
	} else if (avatarv == 4) {
		console.log("Humor 4");
		$(".screenes").show(0);
	} else if (avatarv == 5) {
		console.log("Humor 5");
		$(".screenes").show(0);
	} else if (avatarv == 6) {
		console.log("Humor 6");
		$(".screenes").show(0);
	} else if (avatarv == 7) {
		console.log("Humor 7");
		$(".screenes").show(0);
	} else if (avatarv == 8) {
		console.log("Humor 8");
		$(".screenes").css("background-image", "url('images_sitet/vinner-01.png')");
		$(".screenes").show(0);
	} else {
		console.log("Humor 9");
		$(".screenes").css("background-image", "url('images_sitet/vinner-01.png')");
		$(".screenes").show(0);
	}
}



////

function mulige1c() {
	console.log("mulige 1c");
	$(".mulige").hide(0);
	$(".v").css("z-index", "10");
	$(".mulige1").off("click", mulige1a);
	$(".mulige2").off("click", mulige1b);
	$(".mulige3").off("click", mulige1c);
	$(".mulige1").off("click", mulige30a);
	setTimeout(klikkenPåKnap3c, 1);
}

function klikkenPåKnap3c() {
	console.log("klikken på knap 3c");
	$(".starter").addClass("klikken");
	$(".starter").on("click", docsarer3c);
	setTimeout(docsarer3c, 1);
}

function docsarer3c() {
	console.log("doc sarer 3c");
	$(".starter").removeClass("klikken");
	$(".starter").off("click", docsarer3c);
	$("ul").append(s2c);
	avatarv--;
	avatarv--;
	$(".info").html("avatar <span>" + avatarv + "</span> Humor");
	setTimeout(HumorSkift5c, 1); //2000
}

function HumorSkift5c() {

	console.log("Humor skifte1");
	if (avatarv <= 1) {
		console.log("Humor 1");
		$(".avatarsin").css("background-image", "url('images_sitet/sur-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/vand-01.png')");
		avatarSkriver6c();
	} else if (avatarv == 2) {
		console.log("Humor 2");
		$(".avatarsin").css("background-image", "url('images_sitet/megetked-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/vand-01.png')");
		avatarSkriver6c();
	} else if (avatarv == 3) {
		console.log("Humor 3");
		$(".avatarsin").css("background-image", "url('images_sitet/lidtked-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/negativt-01.png')");
		avatarSkriver6c();
	} else if (avatarv == 4) {
		console.log("Humor 4");
		$(".avatarsin").css("background-image", "url('images_sitet/overrasket-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/negativt-01.png')");
		avatarSkriver6c();
	} else if (avatarv == 5) {
		console.log("Humor 5");
		$(".avatarsin").css("background-image", "url('images_sitet/flov-01.png')");
		avatarSkriver6c();
	} else if (avatarv == 6) {
		console.log("Humor 6");
		$(".avatarsin").css("background-image", "url('images_sitet/neutral-01.png')");
		avatarSkriver6c();
	} else if (avatarv == 7) {
		console.log("Humor 7");
		$(".avatarsin").css("background-image", "url('images_sitet/glad-01.png')");
		avatarSkriver6c();
	} else if (avatarv == 8) {
		console.log("Humor 8");
		$(".avatarsin").css("background-image", "url('images_sitet/megetglad-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/gglad-01.png')");
		avatarSkriver6c();
	} else {
		console.log("Humor 9");
		$(".avatarsin").css("background-image", "url('images_sitet/ekstatisk-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/gglad-01.png')");
		avatarSkriver6c();
	}
}

function avatarSkriver6c() {
	console.log("typisk");
	$(".motiver").show();
	setTimeout(avatarsarer6c, 1);
}

function avatarsarer6c() {
	console.log("avatar");
	$("#modtaget")[0].play();
	$("#modtaget")[0].volume = 0.5;
	$(".motiver").hide(0);
		$("ul").append(s2c);
	setTimeout(v2c, 1); //3000
}

function v2c() {
	console.log("v 2c");
	$(".avatarsar").html("<strong></strong>Men der er altid råd til en bedre udvikling?");
	$(".mulige1").html("<strong></strong>Beklager, udsatte kvinder, løsarbejdere og prostitution er sært at komme til livs?");
	$(".mulige2").html("<strong></strong>Ja, men det er altid usikkert hvad man får ikke hvad man har?");
	$(".mulige3").html("<strong></strong>Og hvad har jounior så tænkt sig at gøre ved det?");
	$(".v").css("z-index", "25");
	$(".mulige").show(0);
	$(".mulige1").on("click", mulige4a);
	$(".mulige2").on("click", mulige4b);
	$(".mulige3").on("click", mulige4c);
}

function mulige4a() {
	console.log("mulige4a");
	$(".mulige").hide(0);
	$(".v").css("z-index", "10");
	$(".mulige1").off("click", mulige4a);
	$(".mulige2").off("click", mulige4b);
	$(".mulige3").off("click", mulige4c);
	setTimeout(klikkenPåKnap6a, 1);
}

function klikkenPåKnap6a() {
	console.log("klikkenPåKnap6a");
	$(".starter").addClass("klikken");
	$(".starter").on("click", docsarer6a);
	setTimeout(docsarer6a, 1);
}

function docsarer6a() {
	console.log("docsarer6a");
	$(".starter").removeClass("klikken");
	$(".starter").off("click", docsarer6a);
	$("ul").append(s5a);
	avatarv++;
	$(".info").html("avatar <span>" + avatarv + "</span> Humor");
	setTimeout(HumorSkift6a, 1); //2000
}

function HumorSkift6a() {

	console.log("Humor skifte1");
	if (avatarv <= 1) {
		console.log("Humor 1");
		$(".avatarsin").css("background-image", "url('images_sitet/sur-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/vand-01.png')");
		avatarSkriver7a();
	} else if (avatarv == 2) {
		console.log("Humor 2");
		$(".avatarsin").css("background-image", "url('images_sitet/megetked-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/vand-01.png')");
		avatarSkriver7a();
	} else if (avatarv == 3) {
		console.log("Humor 3");
		$(".avatarsin").css("background-image", "url('images_sitet/lidtked-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/negativt-01.png')");
		avatarSkriver7a();
	} else if (avatarv == 4) {
		console.log("Humor 4");
		$(".avatarsin").css("background-image", "url('images_sitet/overrasket-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/negativt-01.png')");
		avatarSkriver7a();
	} else if (avatarv == 5) {
		console.log("Humor 5");
		$(".avatarsin").css("background-image", "url('images_sitet/flov-01.png')");
		avatarSkriver7a();
	} else if (avatarv == 6) {
		console.log("Humor 6");
		$(".avatarsin").css("background-image", "url('images_sitet/neutral-01.png')");
		avatarSkriver7a();
	} else if (avatarv == 7) {
		console.log("Humor 7");
		$(".avatarsin").css("background-image", "url('images_sitet/glad-01.png')");
		avatarSkriver7a();
	} else if (avatarv == 8) {
		console.log("Humor 8");
		$(".avatarsin").css("background-image", "url('images_sitet/megetglad-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/gglad-01.png')");
		avatarSkriver7a();
	} else {
		console.log("Humor 9");
		$(".avatarsin").css("background-image", "url('images_sitet/ekstatisk-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/gglad-01.png')");
		avatarSkriver7a();
	}
}

function avatarSkriver7a() {
	console.log("typisk");
	$(".motiver").show();
	setTimeout(avatarsarer7a, 1);
}

function avatarsarer7a() {
	console.log("avatar");
	$("#modtaget")[0].play();
	$("#modtaget")[0].volume = 0.5;
	$(".motiver").hide(0);
		$("ul").append(s5a);
	setTimeout(tabEllerVind1e, 1); //3000
}

function tabEllerVind1e() {
	console.log("tabEllerVind");
	if (avatarv <= 1) {
		console.log("Humor 1");
		$(".screenes").css("background-image", "url('images_sitet/taber-01.png')");
		$(".screenes").show(0);
	} else if (avatarv == 2) {
		console.log("Humor 2");
		$(".screenes").css("background-image", "url('images_sitet/taber-01.png')");
		$(".screenes").show(0);
	} else if (avatarv == 3) {
		console.log("Humor 3");
		$(".screenes").show(0);
	} else if (avatarv == 4) {
		console.log("Humor 4");
		$(".screenes").show(0);
	} else if (avatarv == 5) {
		console.log("Humor 5");
		$(".screenes").show(0);
	} else if (avatarv == 6) {
		console.log("Humor 6");
		$(".screenes").show(0);
	} else if (avatarv == 7) {
		console.log("Humor 7");
		$(".screenes").show(0);
	} else if (avatarv == 8) {
		console.log("Humor 8");
		$(".screenes").css("background-image", "url('images_sitet/vinner-01.png')");
		$(".screenes").show(0);
	} else {
		console.log("Humor 9");
		$(".screenes").css("background-image", "url('images_sitet/vinner-01.png')");
		$(".screenes").show(0);
	}
}



///////
function mulige4b() {
	console.log("mulige4b");
	$(".mulige").hide(0);
	$(".v").css("z-index", "10");
	$(".mulige1").off("click", mulige4a);
	$(".mulige2").off("click", mulige4b);
	$(".mulige3").off("click", mulige4c);
	setTimeout(klikkenPåKnap6b, 1);
}

function klikkenPåKnap6b() {
	console.log("klikkenPåKnap6b");
	$(".starter").addClass("klikken");
	$(".starter").on("click", docsarer6b);
	setTimeout(docsarer6b, 1);
}

function docsarer6b() {
	console.log("docsarer6b");
	$(".starter").removeClass("klikken");
	$(".starter").off("click", docsarer6b);
	$("ul").append(s5b);
	avatarv--;
	avatarv--;
	$(".info").html("avatar <span>" + avatarv + "</span> Humor");
	setTimeout(HumorSkift6b, 1); //2000
}

function HumorSkift6b() {

	console.log("Humor skifte1");
	if (avatarv <= 1) {
		console.log("Humor 1");
		$(".avatarsin").css("background-image", "url('images_sitet/sur-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/vand-01.png')");
		avatarSkriver7b();
	} else if (avatarv == 2) {
		console.log("Humor 2");
		$(".avatarsin").css("background-image", "url('images_sitet/megetked-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/vand-01.png')");
		avatarSkriver7b();
	} else if (avatarv == 3) {
		console.log("Humor 3");
		$(".avatarsin").css("background-image", "url('images_sitet/lidtked-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/negativt-01.png')");
		avatarSkriver7b();
	} else if (avatarv == 4) {
		console.log("Humor 4");
		$(".avatarsin").css("background-image", "url('images_sitet/overrasket-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/negativt-01.png')");
		avatarSkriver7b();
	} else if (avatarv == 5) {
		console.log("Humor 5");
		$(".avatarsin").css("background-image", "url('images_sitet/flov-01.png')");
		avatarSkriver7b();
	} else if (avatarv == 6) {
		console.log("Humor 6");
		$(".avatarsin").css("background-image", "url('images_sitet/neutral-01.png')");
		avatarSkriver7b();
	} else if (avatarv == 7) {
		console.log("Humor 7");
		$(".avatarsin").css("background-image", "url('images_sitet/glad-01.png')");
		avatarSkriver7b();
	} else if (avatarv == 8) {
		console.log("Humor 8");
		$(".avatarsin").css("background-image", "url('images_sitet/megetglad-01.png')")
		$(".doctorsen").css("background-image", "url('images_sitet/gglad-01.png')");
		avatarSkriver7b();
	} else {
		console.log("Humor 9");
		$(".avatarsin").css("background-image", "url('images_sitet/ekstatisk-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/gglad-01.png')");
		avatarSkriver7b();
	}
}

function avatarSkriver7b() {
	console.log("typisk");
	$(".motiver").show();
	setTimeout(avatarsarer7b, 1);
}

function avatarsarer7b() {
	console.log("avatar");
	$("#modtaget")[0].play();
	$("#modtaget")[0].volume = 0.5;
	$(".motiver").hide(0);
		$("ul").append(s5b);
	setTimeout(tabEllerVind1f, 1); //3000
}

function tabEllerVind1f() {
	console.log("tabEllerVind");
	if (avatarv <= 1) {
		console.log("Humor 1");
		$(".screenes").css("background-image", "url('images_sitet/taber-01.png')");
		$(".screenes").show(0);
	} else if (avatarv == 2) {
		console.log("Humor 2");
		$(".screenes").css("background-image", "url('images_sitet/taber-01.png')");
		$(".screenes").show(0);
	} else if (avatarv == 3) {
		console.log("Humor 3");
		$(".screenes").show(0);
	} else if (avatarv == 4) {
		console.log("Humor 4");
		$(".screenes").show(0);
	} else if (avatarv == 5) {
		console.log("Humor 5");
		$(".screenes").show(0);
	} else if (avatarv == 6) {
		console.log("Humor 6");
		$(".screenes").show(0);
	} else if (avatarv == 7) {
		console.log("Humor 7");
		$(".screenes").show(0);
	} else if (avatarv == 8) {
		console.log("Humor 8");
		$(".screenes").css("background-image", "url('images_sitet/vinner-01.png')");
		$(".screenes").show(0);
	} else {
		console.log("Humor 9");
		$(".screenes").css("background-image", "url('images_sitet/vinner-01.png')");
		$(".screenes").show(0);
	}
}


///////
function mulige4c() {
	console.log("mulige4c");
	$(".mulige").hide(0);
	$(".v").css("z-index", "10");
	$(".mulige1").off("click", mulige4a);
	$(".mulige2").off("click", mulige4b);
	$(".mulige3").off("click", mulige4c);
	setTimeout(klikkenPåKnap6c, 1);
}

function klikkenPåKnap6c() {
	console.log("klikkenPåKnap6c");
	$(".starter").addClass("klikken");
	$(".starter").on("click", docsarer6c);
	setTimeout(docsarer6c, 1);
}

function docsarer6c() {
	console.log("docsarer6c");
	$(".starter").removeClass("klikken");
	$(".starter").off("click", docsarer6c);
	$("ul").append(s5c);
	avatarv--;
	$(".info").html("avatar <span>" + avatarv + "</span> Humor");
	setTimeout(HumorSkift6b, 1); //2000
}

function HumorSkift6b() {

	console.log("Humor skifte1");
	if (avatarv <= 1) {
		console.log("Humor 1");
		$(".avatarsin").css("background-image", "url('images_sitet/sur-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/vand-01.png')");
		avatarSkriver7b();
	} else if (avatarv == 2) {
		console.log("Humor 2");
		$(".avatarsin").css("background-image", "url('images_sitet/megetked-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/vand-01.png')");
		avatarSkriver7b();
	} else if (avatarv == 3) {
		console.log("Humor 3");
		$(".avatarsin").css("background-image", "url('images_sitet/lidtked-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/negativt-01.png')");
		avatarSkriver7b();
	} else if (avatarv == 4) {
		console.log("Humor 4");
		$(".avatarsin").css("background-image", "url('images_sitet/overrasket-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/negativt-01.png')");
		avatarSkriver7b();
	} else if (avatarv == 5) {
		console.log("Humor 5");
		$(".avatarsin").css("background-image", "url('images_sitet/flov-01.png')");
		avatarSkriver7b();
	} else if (avatarv == 6) {
		console.log("Humor 6");
		$(".avatarsin").css("background-image", "url('images_sitet/neutral-01.png')");
		avatarSkriver7b();
	} else if (avatarv == 7) {
		console.log("Humor 7");
		$(".avatarsin").css("background-image", "url('images_sitet/glad-01.png')");
		avatarSkriver7b();
	} else if (avatarv == 8) {
		console.log("Humor 8");
		$(".avatarsin").css("background-image", "url('images_sitet/megetglad-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/gglad-01.png')");
		avatarSkriver7b();
	} else {
		console.log("Humor 9");
		$(".avatarsin").css("background-image", "url('images_sitet/ekstatisk-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/_gglad-01.png')");
		avatarSkriver7b();
	}
}

function avatarSkriver7b() {
	console.log("typisk");
	$(".motiver").show();
	setTimeout(avatarsarer7b, 1);
}

function avatarsarer7b() {
	console.log("avatar");
	$("#modtaget")[0].play();
	$("#modtaget")[0].volume = 0.5;
	$(".motiver").hide(0);
		$("ul").append(s5b);
	setTimeout(tabEllerVind1g, 1); //3000
}

function tabEllerVind1g() {
	console.log("tabEllerVind");
	if (avatarv <= 1) {
		console.log("Humor 1");
		$(".screenes").css("background-image", "url('images_sitet/taber-01.png')");
		$(".screenes").show(0);
	} else if (avatarv == 2) {
		console.log("Humor 2");
		$(".screenes").css("background-image", "url('images_sitet/taber-01.png')");
		$(".screenes").show(0);
	} else if (avatarv == 3) {
		console.log("Humor 3");
		$(".screenes").show(0);
	} else if (avatarv == 4) {
		console.log("Humor 4");
		$(".screenes").show(0);
	} else if (avatarv == 5) {
		console.log("Humor 5");
		$(".screenes").show(0);
	} else if (avatarv == 6) {
		console.log("Humor 6");
		$(".screenes").show(0);
	} else if (avatarv == 7) {
		console.log("Humor 7");
		$(".screenes").show(0);
	} else if (avatarv == 8) {
		console.log("Humor 8");
		$(".screenes").css("background-image", "url('images_sitet/vinner-01.png')");
		$(".screenes").show(0);
	} else {
		console.log("Humor 9");
		$(".screenes").css("background-image", "url('images_sitet/vinner-01.png')");
		$(".screenes").show(0);
	}
}




////////dialog-spor 2

function mulige2() {
	console.log("mulige 2");
	$(".mulige").hide(0);
	$(".v").css("z-index", "10");
	$(".mulige1").off("click", mulige1);
	$(".mulige2").off("click", mulige2);
	$(".mulige3").off("click", mulige3);
		setTimeout(klikkenPåKnap20, 1); //4000
}

function klikkenPåKnap20() {
	console.log("klikken på knap 3");
	$(".starter").addClass("klikken");
	$(".starter").on("click", docsarer20);
	setTimeout(docsarer20, 1);
}

function docsarer20() {
	console.log("doc sarer 3");
	$(".starter").removeClass("klikken");
	$(".starter").off("click", docsarer20);
	avatarv--;
	avatarv--;
	avatarv--;
	$(".info").html("avatar <span>" + avatarv + "</span> Humor");
	$("ul").append(s20);
	setTimeout(HumorSkift20, 1); //2000
}

function HumorSkift20() {

	console.log("Humor skifte1");
	if (avatarv <= 1) {
		console.log("Humor 1");
		$(".avatarsin").css("background-image", "url('images_sitet/sur-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/vand-01.png')");
		avatarSkriver20();
	} else if (avatarv == 2) {
		console.log("Humor 2");
		$(".avatarsin").css("background-image", "url('images_sitet/megetked-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/vand-01.png')");
		avatarSkriver20();
	} else if (avatarv == 3) {
		console.log("Humor 3");
		$(".avatarsin").css("background-image", "url('images_sitet/lidtked-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/negativt-01.png')");
		avatarSkriver20();
	} else if (avatarv == 4) {
		console.log("Humor 4");
		$(".avatarsin").css("background-image", "url('images_sitet/overrasket-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/negativt-01.png')");
		avatarSkriver20();
	} else if (avatarv == 5) {
		console.log("Humor 5");
		$(".avatarsin").css("background-image", "url('images_sitet/flov-01.png')");
		avatarSkriver20();
	} else if (avatarv == 6) {
		console.log("Humor 6");
		$(".avatarsin").css("background-image", "url('images_sitet/neutral-01.png')");
		avatarSkriver20();
	} else if (avatarv == 7) {
		console.log("Humor 7");
		$(".avatarsin").css("background-image", "url('images_sitet/glad-01.png')");
		avatarSkriver20();
	} else if (avatarv == 8) {
		console.log("Humor 8");
		$(".avatarsin").css("background-image", "url('images_sitet/megetglad-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/gglad-01.png')");
		avatarSkriver20();
	} else {
		console.log("Humor 9");
		$(".avatarsin").css("background-image", "url('images_sitet/ekstatisk-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/gglad-01.png')");
		avatarSkriver20();
	}
}

function avatarSkriver20() {
	console.log("avatarSkriver20");
	$(".motiver").show();
	setTimeout(avatarsarer20, 1); //3000
}

function avatarsarer20() {
	console.log("avatarsarer20");
	$("#modtaget")[0].play();
	$("#modtaget")[0].volume = 0.5;
	$(".motiver").hide(0);
		$("ul").append(s20);
	setTimeout(v20, 3000); //3000
}

function v20() {
	console.log("v20");
	$(".avatarsar").html("<strong></strong>Øhh, der er stadig psykisk udsatte og alle har ret til en bolig, som danske statsborgere?");
	$(".mulige1").html("<strong></strong>Nå, hvad med den merudgift der er på bolig som familie, må vi nu ikke være familie længere?");
	$(".mulige2").html("<strong></strong>Nå ok, så skal der holdes godt øje med hjemløse, så de også får en bolig?");
	$(".mulige3").html("<strong></strong>Hvad er sundhedsmæssigt den rigtige størrelses bolig?");
	$(".v").css("z-index", "25");
	$(".mulige").show(0);
	$(".mulige1").on("click", mulige20a);
	$(".mulige2").on("click", mulige20b);
	$(".mulige3").on("click", mulige20c);
}

function mulige20a() {
	console.log("mulige20a")
	$(".mulige").hide(0);
	$(".v").css("z-index", "10");
	$(".mulige1").off("click", mulige20a);
	$(".mulige2").off("click", mulige20b);
	$(".mulige3").off("click", mulige20c);
	setTimeout(klikkenPåKnap20a, 1);
}

function klikkenPåKnap20a() {
	console.log("klikkenPåKnap20a");
	$(".starter").addClass("klikken");
	$(".starter").on("click", docsarer20a);
	setTimeout(docsarer20a, 1);
}

function docsarer20a() {
	console.log("doc sarer 20a");
	$(".starter").removeClass("klikken");
	$(".starter").off("click", docsarer20a);
	$("ul").append(s20a);
	avatarv--;
	avatarv--;
	$(".info").html("avatar <span>" + avatarv + "</span> Humor");
	setTimeout(HumorSkift6b, 1); //2000
}

function mulige20b() {
	console.log("mulige20b")
	$(".mulige").hide(0);
	$(".v").css("z-index", "10");
	$(".mulige1").off("click", mulige20a);
	$(".mulige2").off("click", mulige20b);
	$(".mulige3").off("click", mulige20c);
	avatarv++;
	$(".info").html("avatar <span>" + avatarv + "</span> Humor");
	setTimeout(klikkenPåKnap20b, 1);
}

function klikkenPåKnap20b() {
	console.log("klikkenPåKnap20b");

	$(".starter").addClass("klikken");
	$(".starter").on("click", docsarer20b);
	setTimeout(docsarer20b, 1);
}

function docsarer20b() {
	console.log("doc sarer 20b");
	$(".starter").removeClass("klikken");
	$(".starter").off("click", docsarer20b);
	$("ul").append(s20b);
	setTimeout(HumorSkift20b, 1); //2000
}

function mulige20c() {
	console.log("mulige20c")
	$(".mulige").hide(0);
	$(".v").css("z-index", "10");
	$(".mulige1").off("click", mulige20a);
	$(".mulige2").off("click", mulige20b);
	$(".mulige3").off("click", mulige20c);
	setTimeout(klikkenPåKnap20c, 1);
}

function klikkenPåKnap20c() {
	console.log("klikkenPåKnap20c");
	$(".starter").addClass("klikken");
	$(".starter").on("click", docsarer20c);
	setTimeout(docsarer20c, 1);
}

function docsarer20c() {
	console.log("doc sarer 20c");
	$(".starter").removeClass("klikken");
	$(".starter").off("click", docsarer20c);
	$("ul").append(s20c);
	setTimeout(HumorSkift20b, 1); //2000
}

function HumorSkift20b() {

	console.log("Humor skifte1");
	if (avatarv <= 1) {
		console.log("Humor 1");
		$(".avatarsin").css("background-image", "url('images_sitet/sur-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/vand-01.png')");
		avatarSkriver20b();
	} else if (avatarv == 2) {
		console.log("Humor 2");
		$(".avatarsin").css("background-image", "url('images_sitet/megetked-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/vand-01.png')");
		avatarSkriver20b();
	} else if (avatarv == 3) {
		console.log("Humor 3");
		$(".avatarsin").css("background-image", "url('images_sitet/lidtked-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/negativt-01.png')");
		avatarSkriver20b();
	} else if (avatarv == 4) {
		console.log("Humor 4");
		$(".avatarsin").css("background-image", "url('images_sitet/overrasket-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/negativt-01.png')");
		avatarSkriver20b();
	} else if (avatarv == 5) {
		console.log("Humor 5");
		$(".avatarsin").css("background-image", "url('images_sitet/flov-01.png')");
		avatarSkriver20b();
	} else if (avatarv == 6) {
		console.log("Humor 6");
		$(".avatarsin").css("background-image", "url('images_sitet/neutral-01.png')");
		avatarSkriver20b();
	} else if (avatarv == 7) {
		console.log("Humor 7");
		$(".avatarsin").css("background-image", "url('images_sitet/glad-01.png')");
		avatarSkriver20b();
	} else if (avatarv == 8) {
		console.log("Humor 8");
		$(".avatarsin").css("background-image", "url('images_sitet/megetglad-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/gglad-01.png')");
		avatarSkriver20b();
	} else {
		console.log("Humor 9");
		$(".avatarsin").css("background-image", "url('images_sitet/ekstatisk-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/gglad-01.png')");
		avatarSkriver29b();
	}
}

function avatarSkriver20b() {
	console.log("avatarSkriver20b");
	$(".motiver").show();
	setTimeout(avatarsarer20b, 1);
}

function avatarsarer20b() {
	console.log("avatarsarer20b");
	$("#modtaget")[0].play();
	$("#modtaget")[0].volume = 0.5;
	$(".motiver").hide(0);
		$("ul").append(s20b);
	setTimeout(v21, 3000); //3000
}

function v21() {
	console.log("v21");
	$(".avatarsar").html("<strong></strong>Jeg har praktikpladser og voksenuddannelse?");
	$(".mulige1").html("<strong></strong>Jeg kan give min arbejdsgiver besked om at der er voksen-uddannelser?");
	$(".mulige2").html("<strong></strong>Jeg kender nogle industriområder, der samarbejder om at få flest gennem uddannelse uanset alder og social status?");
	$(".mulige3").html("<strong></strong>Det er bare at bruge pengene på kriminalforsovnet?");
	$(".v").css("z-index", "25");
	$(".mulige").show(0);
	$(".mulige1").on("click", mulige21a);
	$(".mulige2").on("click", mulige21b);
	$(".mulige3").on("click", mulige21c);
}

function mulige21a() {
	console.log("mulige21a");
	$(".mulige").hide(0);
	$(".v").css("z-index", "10");
	$(".mulige1").off("click", mulige21a);
	$(".mulige2").off("click", mulige21b);
	$(".mulige3").off("click", mulige21c);
	setTimeout(klikkenPåKnap21a, 1); //4600
}

function klikkenPåKnap21a() {
	console.log("klikkenPåKnap21a");
	$(".starter").addClass("klikken");
	$(".starter").on("click", docsarer21a);
	setTimeout(docsarer21a, 1);
}

function docsarer21a() {
	console.log("doc sarer 21a");
	$(".starter").removeClass("klikken");
	$(".starter").off("click", docsarer21a);
	avatarv++;
	$(".info").html("avatar <span>" + avatarv + "</span> Humor");
	$("ul").append(s21a);
	setTimeout(HumorSkift21a, 1); //2000
}

function HumorSkift21a() {

	console.log("Humor skifte1");
	if (avatarv <= 1) {
		console.log("Humor 1");
		$(".avatarsin").css("background-image", "url('images_sitet/sur-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/vand-01.png')");
		avatarSkriver21a();
	} else if (avatarv == 2) {
		console.log("Humor 2");
		$(".avatarsin").css("background-image", "url('images_sitet/megetked-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/vand-01.png')");
		avatarSkriver21a();
	} else if (avatarv == 3) {
		console.log("Humor 3");
		$(".avatarsin").css("background-image", "url('images_sitet/lidtked-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/negativt-01.png')");
		avatarSkriver21a();
	} else if (avatarv == 4) {
		console.log("Humor 4");
		$(".avatarsin").css("background-image", "url('images_sitet/overrasket-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/negativt-01.png')");
		avatarSkriver21a();
	} else if (avatarv == 5) {
		console.log("Humor 5");
		$(".avatarsin").css("background-image", "url('images_sitet/flov-01.png')");
		avatarSkriver21a();
	} else if (avatarv == 6) {
		console.log("Humor 6");
		$(".avatarsin").css("background-image", "url('images_sitet/neutral-01.png')");
		avatarSkriver21a();
	} else if (avatarv == 7) {
		console.log("Humor 7");
		$(".avatarsin").css("background-image", "url('images_sitet/glad-01.png')");
		avatarSkriver21a();
	} else if (avatarv == 8) {
		console.log("Humor 8");
		$(".avatarsin").css("background-image", "url('images_sitet/megetglad-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/gglad-01.png')");
		avatarSkriver21a();
	} else {
		console.log("Humor 9");
		$(".avatarsin").css("background-image", "url('images_sitet/ekstatisk-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/gglad-01.png')");
		avatarSkriver21a();
	}
}

function avatarSkriver21a() {
	console.log("avatarSkriver21a");
	$(".motiver").show();
	setTimeout(avatarsarer21a, 1);
}

function avatarsarer21a() {
	console.log("avatarsarer21a");
	$("#modtaget")[0].play();
	$("#modtaget")[0].volume = 0.5;
	$(".motiver").hide(0);
		$("ul").append(s21a);
	setTimeout(tabEllerVind2a, 1); //3000
}

function tabEllerVind2a() {
	console.log("tabEllerVind");
	if (avatarv <= 1) {
		console.log("Humor 1");
		$(".screenes").css("background-image", "url('images_sitet/taber-01.png')");
		$(".screenes").show(0);
	} else if (avatarv == 2) {
		console.log("Humor 2");
		$(".screenes").css("background-image", "url('images_sitet/taber-01.png')");
		$(".screenes").show(0);
	} else if (avatarv == 3) {
		console.log("Humor 3");
		$(".screenes").show(0);
	} else if (avatarv == 4) {
		console.log("Humor 4");
		$(".screenes").show(0);
	} else if (avatarv == 5) {
		console.log("Humor 5");
		$(".screenes").show(0);
	} else if (avatarv == 6) {
		console.log("Humor 6");
		$(".screenes").show(0);
	} else if (avatarv == 7) {
		console.log("Humor 7");
		$(".screenes").show(0);
	} else if (avatarv == 8) {
		console.log("Humor 8");
		$(".screenes").css("background-image", "url('images_sitet/vinner-01.png')");
		$(".screenes").show(0);
	} else {
		console.log("Humor 9");
		$(".screenes").css("background-image", "url('images_sitet/vinner-01.png')");
		$(".screenes").show(0);
	}
}
////

function mulige21b() {
	console.log("mulige21a");
	$(".mulige").hide(0);
	$(".v").css("z-index", "10");
	$(".mulige1").off("click", mulige21a);
	$(".mulige2").off("click", mulige21b);
	$(".mulige3").off("click", mulige21c);
	setTimeout(klikkenPåKnap21b, 1); //4600
}

function klikkenPåKnap21b() {
	console.log("klikkenPåKnap21b");
	$(".starter").addClass("klikken");
	$(".starter").on("click", docsarer21b);
	setTimeout(docsarer21b, 1);
}

function docsarer21b() {
	console.log("doc sarer 21b");
	$(".starter").removeClass("klikken");
	$(".starter").off("click", docsarer21b);
	avatarv++;
	avatarv++;
	$(".info").html("avatar <span>" + avatarv + "</span> Humor");
	$("ul").append(s21b);
	setTimeout(HumorSkift21b, 1); //2000
}

function HumorSkift21b() {

	console.log("Humor skifte1");
	if (avatarv <= 1) {
		console.log("Humor 1");
		$(".avatarsin").css("background-image", "url('images_sitet/sur-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/vand-01.png')");
		avatarSkriver21b();
	} else if (avatarv == 2) {
		console.log("Humor 2");
		$(".avatarsin").css("background-image", "url('images_sitet/megetked-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/vand-01.png')");
		avatarSkriver21b();
	} else if (avatarv == 3) {
		console.log("Humor 3");
		$(".avatarsin").css("background-image", "url('images_sitet/lidtked-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/negativt-01.png')");
		avatarSkriver21b();
	} else if (avatarv == 4) {
		console.log("Humor 4");
		$(".avatarsin").css("background-image", "url('images_sitet/overrasket-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/negativt-01.png')");
		avatarSkriver21b();
	} else if (avatarv == 5) {
		console.log("Humor 5");
		$(".avatarsin").css("background-image", "url('images_sitet/flov-01.png')");
		avatarSkriver21b();
	} else if (avatarv == 6) {
		console.log("Humor 6");
		$(".avatarsin").css("background-image", "url('images_sitet/neutral-01.png')");
		avatarSkriver21b();
	} else if (avatarv == 7) {
		console.log("Humor 7");
		$(".avatarsin").css("background-image", "url('images_sitet/glad-01.png')");
		avatarSkriver21b();
	} else if (avatarv == 8) {
		console.log("Humor 8");
		$(".avatarsin").css("background-image", "url('images_sitet/megetglad-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/gglad-01.png')");
		avatarSkriver21b();
	} else {
		console.log("Humor 9");
		$(".avatarsin").css("background-image", "url('images_sitet/ekstatisk-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/gglad-01.png')");
		avatarSkriver21b();
	}
}

function avatarSkriver21b() {
	console.log("avatarSkriver21b");
	$(".motiver").show();
	setTimeout(avatarsarer21b, 1);
}

function avatarsarer21b() {
	console.log("avatarsarer21b");
	$("#modtaget")[0].play();
	$("#modtaget")[0].volume = 0.5;
	$(".motiver").hide(0);
		$("ul").append(s21b);
	setTimeout(tabEllerVind2b, 1); //3000
}

function tabEllerVind2b() {
	console.log("tabEllerVind");
	if (avatarv <= 1) {
		console.log("Humor 1");
		$(".screenes").css("background-image", "url('images_sitet/taber-01.png')");
		$(".screenes").show(0);
	} else if (avatarv == 2) {
		console.log("Humor 2");
		$(".screenes").css("background-image", "url('images_sitet/taber-01.png')");
		$(".screenes").show(0);
	} else if (avatarv == 3) {
		console.log("Humor 3");
		$(".screenes").show(0);
	} else if (avatarv == 4) {
		console.log("Humor 4");
		$(".screenes").show(0);
	} else if (avatarv == 5) {
		console.log("Humor 5");
		$(".screenes").show(0);
	} else if (avatarv == 6) {
		console.log("Humor 6");
		$(".screenes").show(0);
	} else if (avatarv == 7) {
		console.log("Humor 7");
		$(".screenes").show(0);
	} else if (avatarv == 8) {
		console.log("Humor 8");
		$(".screenes").css("background-image", "url('images_sitet/vinner-01.png')");
		$(".screenes").show(0);
	} else {
		console.log("Humor 9");
		$(".screenes").css("background-image", "url('images_sitet/vinner-01.png')");
		$(".screenes").show(0);
	}
}

//
function mulige21c() {
	console.log("mulige21a");
	$(".mulige").hide(0);
	$(".v").css("z-index", "10");
	$(".mulige1").off("click", mulige21a);
	$(".mulige2").off("click", mulige21b);
	$(".mulige3").off("click", mulige21c);
	setTimeout(klikkenPåKnap21c, 1); //4600
}

function klikkenPåKnap21c() {
	console.log("klikkenPåKnap21c");
	$(".starter").addClass("klikken");
	$(".starter").on("click", docsarer21c);
	setTimeout(docsarer21c, 1);
}

function docsarer21c() {
	console.log("doc sarer 21c");
	$(".starter").removeClass("klikken");
	$(".starter").off("click", docsarer21c);
	avatarv--;
	$(".info").html("avatar <span>" + avatarv + "</span> Humor");
	$("ul").append(s21c);
	setTimeout(HumorSkift21c, 1); //2000
}

function HumorSkift21c() {

	console.log("Humor skifte1");
	if (avatarv <= 1) {
		console.log("Humor 1");
		$(".avatarsin").css("background-image", "url('images_sitet/gammelsur-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/vand-01.png')");
		avatarSkriver21c();
	} else if (avatarv == 2) {
		console.log("Humor 2");
		$(".avatarsin").css("background-image", "url('images_sitet/gammelmegetked-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/vand-01.png')");
		avatarSkriver21c();
	} else if (avatarv == 3) {
		console.log("Humor 3");
		$(".avatarsin").css("background-image", "url('images_sitet/gammellidtked-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/negativt-01.png')");
		avatarSkriver21c();
	} else if (avatarv == 4) {
		console.log("Humor 4");
		$(".avatarsin").css("background-image", "url('images_sitet/overrasket-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/negativt-01.png')");
		avatarSkriver21c();
	} else if (avatarv == 5) {
		console.log("Humor 5");
		$(".avatarsin").css("background-image", "url('images_sitet/flov-01.png')");
		avatarSkriver21c();
	} else if (avatarv == 6) {
		console.log("Humor 6");
		$(".avatarsin").css("background-image", "url('images_sitet/neutral-01.png')");
		avatarSkriver21c();
	} else if (avatarv == 7) {
		console.log("Humor 7");
		$(".avatarsin").css("background-image", "url('images_sitet/glad-01.png')");
		avatarSkriver21c();
	} else if (avatarv == 8) {
		console.log("Humor 8");
		$(".avatarsin").css("background-image", "url('images_sitet/megetglad-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/gglad-01.png')");
		avatarSkriver21c();
	} else {
		console.log("Humor 9");
		$(".avatarsin").css("background-image", "url('images_sitet/ekstatisk-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/gglad-01.png')");
		avatarSkriver21c();
	}
}

function avatarSkriver21c() {
	console.log("avatarSkriver21a");
	$(".motiver").show();
	setTimeout(avatarsarer21c, 1);
}

function avatarsarer21c() {
	console.log("avatarsarer21c");
	$("#modtaget")[0].play();
	$("#modtaget")[0].volume = 0.5;
	$(".motiver").hide(0);
		$("ul").append(s21c);
	setTimeout(tabEllerVind2c, 1); //3000
}

function tabEllerVind2c() {
	console.log("tabEllerVind");
	if (avatarv <= 1) {
		console.log("Humor 1");
		$(".screenes").css("background-image", "url('images_sitet/taber-01.png')");
		$(".screenes").show(0);
	} else if (avatarv == 2) {
		console.log("Humor 2");
		$(".screenes").css("background-image", "url('images_sitet/taber-01.png')");
		$(".screenes").show(0);
	} else if (avatarv == 3) {
		console.log("Humor 3");
		$(".screenes").show(0);
	} else if (avatarv == 4) {
		console.log("Humor 4");
		$(".screenes").show(0);
	} else if (avatarv == 5) {
		console.log("Humor 5");
		$(".screenes").show(0);
	} else if (avatarv == 6) {
		console.log("Humor 6");
		$(".screenes").show(0);
	} else if (avatarv == 7) {
		console.log("Humor 7");
		$(".screenes").show(0);
	} else if (avatarv == 8) {
		console.log("Humor 8");
		$(".screenes").css("background-image", "url('images_sitet/vinner-01.png')");
		$(".screenes").show(0);
	} else {
		console.log("Humor 9");
		$(".screenes").css("background-image", "url('images_sitet/vinner-01.png')");
		$(".screenes").show(0);
	}
}


///dialog-spor 3

function mulige3() {
	console.log("mulige 3");
	$(".mulige").hide(0);
	$(".v").css("z-index", "10");
	$(".mulige1").off("click", mulige1);
	$(".mulige2").off("click", mulige2);
	$(".mulige3").off("click", mulige3);
		setTimeout(klikkenPåKnap30, 1); //4000
}

function klikkenPåKnap30() {
	console.log("klikkenPåKnap30");
	$(".starter").addClass("klikken");
	$(".starter").on("click", docsarer30);
	setTimeout(docsarer30, 1);
}

function docsarer30() {
	console.log("docsarer30");
	$(".starter").removeClass("klikken");
	$(".starter").off("click", docsarer30);
	avatarv++;
	$(".info").html("avatar <span>" + avatarv + "</span> Humor");
	$("ul").append(s30);
	setTimeout(HumorSkift30, 1); //2000
}

function HumorSkift30() {

	console.log("Humor skifte1");
	if (avatarv <= 1) {
		console.log("Humor 1");
		$(".avatarsin").css("background-image", "url('images_sitet/sur-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/dvand-01.png')");
		avatarSkriver30();
	} else if (avatarv == 2) {
		console.log("Humor 2");
		$(".avatarsin").css("background-image", "url('images_sitet/megetked-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/vand-01.png')");
		avatarSkriver30();
	} else if (avatarv == 3) {
		console.log("Humor 3");
		$(".avatarsin").css("background-image", "url('images_sitet/lidtked-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/negativt-01.png')");
		avatarSkriver30();
	} else if (avatarv == 4) {
		console.log("Humor 4");
		$(".avatarsin").css("background-image", "url('images_sitet/overrasket-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/negativt-01.png')");
		avatarSkriver30();
	} else if (avatarv == 5) {
		console.log("Humor 5");
		$(".avatarsin").css("background-image", "url('images_sitet/flov-01.png')");
		avatarSkriver30();
	} else if (avatarv == 6) {
		console.log("Humor 6");
		$(".avatarsin").css("background-image", "url('images_sitet/neutral-01.png')");
		avatarSkriver30();
	} else if (avatarv == 7) {
		console.log("Humor 7");
		$(".avatarsin").css("background-image", "url('images_sitet/glad-01.png')");
		avatarSkriver30();
	} else if (avatarv == 8) {
		console.log("Humor 8");
		$(".avatarsin").css("background-image", "url('images_sitet/megetglad-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/gglad-01.png')");
		avatarSkriver30();
	} else {
		console.log("Humor 9");
		$(".avatarsin").css("background-image", "url('images_sitet/ekstatisk-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/gglad-01.png')");
		avatarSkriver30();
	}
}

function avatarSkriver30() {
	console.log("avatarSkriver30");
	$(".motiver").show();
	setTimeout(avatarsarer30, 1); //3000
}

function avatarsarer30() {
	console.log("avatarsarer20");
	$("#modtaget")[0].play();
	$("#modtaget")[0].volume = 0.5;
	$(".motiver").hide(0);
		$("ul").append(s1a);
	setTimeout(v30, 3000); //3000
}

function v30() {
	console.log("v30");
	$(".avatarsar").html("<strong></strong>Det kan kun gå for langsomt med flere fritidsordninger og ansatte i institutionerne?");
	$(".mulige1").html("<strong></strong>Det er lige noget for mig, hvor kan jeg skrive mig op?");
	$(".mulige2").html("<strong></strong>Det lyder som om at der skal bygges i fremtiden?");
	$(".mulige3").html("<strong></strong>Sådan er er det ikke hvor jeg kommer fra?");
	$(".v").css("z-index", "25");
	$(".mulige").show(0);
	$(".mulige1").on("click", mulige30a);
	$(".mulige2").on("click", mulige1b);
	$(".mulige3").on("click", mulige1c);
}

function mulige30a() {
	console.log("mulige30a");
	$(".mulige").hide(0);
	$(".v").css("z-index", "10");
	$(".mulige1").off("click", mulige30a);
	$(".mulige2").off("click", mulige1b);
	$(".mulige3").off("click", mulige1c);
	setTimeout(klikkenPåKnap30a, 1);
}

function klikkenPåKnap30a() {
	console.log("klikkenPåKnap30a");
	$(".starter").addClass("klikken");
	$(".starter").on("click", docsarer30a);
	setTimeout(docsarer30a, 1);
}

function docsarer30a() {
	console.log("docsarer30a");
	$(".starter").removeClass("klikken");
	$(".starter").off("click", docsarer30a);
	$("ul").append(s30a);
	setTimeout(HumorSkift30a, 1); //2000
}

function HumorSkift30a() {

	console.log("Humor skifte1");
	if (avatarv <= 1) {
		console.log("Humor 1");
		$(".avatarsin").css("background-image", "url('images_sitet/sur-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/vand-01.png')");
		avatarSkriver30a();
	} else if (avatarv == 2) {
		console.log("Humor 2");
		$(".avatarsin").css("background-image", "url('images_sitet/megetked-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/vand-01.png')");
		avatarSkriver30a();
	} else if (avatarv == 3) {
		console.log("Humor 3");
		$(".avatarsin").css("background-image", "url('images_sitet/lidtked-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/negativt-01.png')");
		avatarSkriver30a();
	} else if (avatarv == 4) {
		console.log("Humor 4");
		$(".avatarsin").css("background-image", "url('images_sitet/overrasket-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/negativt-01.png')");
		avatarSkriver30a();
	} else if (avatarv == 5) {
		console.log("Humor 5");
		$(".avatarsin").css("background-image", "url('images_sitet/flov-01.png')");
		avatarSkriver30a();
	} else if (avatarv == 6) {
		console.log("Humor 6");
		$(".avatarsin").css("background-image", "url('images_sitet/neutral-01.png')");
		avatarSkriver30a();
	} else if (avatarv == 7) {
		console.log("Humor 7");
		$(".avatarsin").css("background-image", "url('images_sitet/glad-01.png')");
		avatarSkriver30a();
	} else if (avatarv == 8) {
		console.log("Humor 8");
		$(".avatarsin").css("background-image", "url('images_sitet/megetglad-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/gglad-01.png')");
		avatarSkriver30a();
	} else {
		console.log("Humor 9");
		$(".avatarsin").css("background-image", "url('images_sitet/ekstatisk-01.png')");
		$(".doctorsen").css("background-image", "url('images_sitet/gglad-01.png')");
		avatarSkriver30a();
	}
}

function avatarSkriver30a() {
	console.log("avatarSkriver30a");
	$(".motiver").show();
	setTimeout(avatarsarer30a, 1); //3000
}

function avatarsarer30a() {
	console.log("avatarsarer30a");
	$("#modtaget")[0].play();
	$("#modtaget")[0].volume = 0.5;
	$(".motiver").hide(0);
		$("ul").append(s30a);
	setTimeout(v31, 3000);
}

function v31() {
	console.log("v31");
	$(".avatarsar").html("<strong></strong>Kommunerne virker kun som en slags bank der vidreformidler og administrere offentlig velfærd");
	$(".mulige1").html("<strong></strong>Her har du alle muligeer, grib changsen og find dit rigtige ståsted på arbejdsmarket");
	$(".mulige2").html("<strong></strong>Det er godt og mindsker burikratiet på kommunalt plan");
	$(".mulige3").html("<strong></strong>Det er meningen at Staten er vores alle sammens økonomi. Det er der for at udliciteringen har været sær at sluge, men når der er konkurrence på området får man også de bedste i ansættelse");
	$(".v").css("z-index", "25");
	$(".mulige").show(0);
	$(".mulige1").on("click", mulige2a);
	$(".mulige2").on("click", mulige2b);
	$(".mulige3").on("click", mulige2c);
}


function getRndInteger(min, max) {
	return Math.floor(Math.random() * 4294967296) + 1;
}
//18446744073709551616
