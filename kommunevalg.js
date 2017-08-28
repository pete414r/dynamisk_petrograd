/**************FLOWDING**BACKGROUND******************/

	$(document).ready(function() {
var movementStrength = 50000;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();
$("#top-image").mousemove(function(e){
          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 2);
          var newvalueX = width * pageX * -1 - 25000;
          var newvalueY = height * pageY * -1 - 50000;
          $('#top-image').css("background-position", newvalueX+"px     "+newvalueY+"px");
});
});

/**************FLOWDING**BACKGROUND**SLUT****************/

/**************PERSONA**REGIONER**TOKOMMUNER**************/
//
//		window.addEventListener("load", run);
//
//
//
//		function run() {
//			console.log("Start programmet");
//
//			$.getJSON("json/persona_info.json", visPersonListe);
//		}
//
//		function visPersonListe(listen) {
//			console.table(listen);
//			listen.forEach(visPersonInfo);
//		}
//
//		function visPersonInfo(person)  {
//
//			var klon = document.querySelector("#personinfo_template").content.cloneNode(true);
//
//			klon.querySelector(".data_imagesidm").src = person.imagesidm;
//
//			klon.querySelector(".data_svaridm1").innerHTML = person.svaridm1;
//
//			klon.querySelector(".data_svaridm2").innerHTML = person.svaridm2;
//
//			klon.querySelector(".data_svaridm3").innerHTML = person.svaridm3;
//
//			klon.querySelector(".data_rigtsvaridm").innerHTML = person.rigtsvaridm;
//
//			klon.querySelector(".data_imagesid1").src = person.imagesid1;
//
//			klon.querySelector(".data_svarid11").innerHTML = person.svarid11;
//
//			klon.querySelector(".data_svarid12").innerHTML = person.svarid12;
//
//			klon.querySelector(".data_svarid13").innerHTML = person.svarid13;
//
//			klon.querySelector(".data_rigtsvarid1").innerHTML = person.rigtsvarid1;
//
//			klon.querySelector(".data_imagesid2").src = person.imagesid2;
//
//			klon.querySelector(".data_svarid21").innerHTML = person.svarid21;
//
//			klon.querySelector(".data_svarid22").innerHTML = person.svarid22;
//
//			klon.querySelector(".data_svarid23").innerHTML = person.svarid23;
//
//			klon.querySelector(".data_rigtsvarid2").innerHTML = person.rigtsvarid2;
//
//			klon.querySelector(".data_imagesid3").src = person.imagesid3;
//
//			klon.querySelector(".data_svarid31").innerHTML = person.svarid31;
//
//			klon.querySelector(".data_svarid32").innerHTML = person.svarid32;
//
//			klon.querySelector(".data_svarid33").innerHTML = person.svarid33;
//
//			klon.querySelector(".data_rigtsvarid3").innerHTML = person.rigtsvarid3;
//
//			klon.querySelector(".data_imagesid4").src = person.imagesid4;
//
//			klon.querySelector(".data_svarid41").innerHTML = person.svarid41;
//
//			klon.querySelector(".data_svarid42").innerHTML = person.svarid42;
//
//			klon.querySelector(".data_svarid43").innerHTML = person.svarid43;
//
//			klon.querySelector(".data_rigtsvarid4").innerHTML = person.rigtsvarid4;
//
//			klon.querySelector(".data_kommuner1navn").innerHTML = person.kommuner1navn;
//
//			klon.querySelector(".data_kommuner1posi").innerHTML = person.kommuner1posi;
//
//			klon.querySelector(".data_kommuner2navn").innerHTML = person.kommuner2navn;
//
//			klon.querySelector(".data_kommuner2posi").innerHTML = person.kommuner2posi;
//			document.querySelector("#person_info").appendChild(klon);
//		}

/**************PERSONA**REGIONER**TOKOMMUNER**SLUT************/

/**************KORT**INFOVINDUE************/

	var map;

window.addEventListener("load", initMap);

function initMap() {
	var center = {
		lat: 55.689056,
		lng: 12.597405
	};
	map = new google.maps.Map(document.getElementById("map"), {
		zoom: 6,
		center: center
	});
	$.getJSON("json/maps_info.json", visKort);
	var mig = new google.maps.Marker({
		map: map,
		icon: "images_turen/pointer_5turen.png",
		title: "Husk at stemme"
	});
	if (navigator.geolocation) {
		navigator.geolocation.watchPosition(function (position) {
			console.log("SE DIN POSITION");
			var minPos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			map.setCenter(minPos);
			mig.setPosition(minPos);
		});
	} else {
		alert("Geolocation NOT");
	}
	function visKort(listen)  {
		console.log(listen);
		listen.forEach(visPunktInfo);
	}
	var bounds = {
		north: 58.63008937645516,
		south: 53.53147389661579,
		east: 16.152013687499942,
		west: 7.121950187499942
	}
	var overlay = new google.maps.GroundOverlay("images_turen/kort_kbhture_A12-01-01.svg", bounds);
	overlay.setMap(map);
	function visPunktInfo(punkt) {
		console.log("Vis info");
		console.log("id: " + punkt.id);
		console.log("lat: " + punkt.lat);
		console.log("lng: " + punkt.lng);
		var ll = new google.maps.LatLng(punkt.lat, punkt.lng);
		var m = new google.maps.Marker({
			position: ll,
			map: map,
			icon: "images_turen/pointer_5turen.png",
			title: "Her finder du regioner og kommuner, hvor de unge bor",
			animation: google.maps.Animation.DROP,
			icon: punkt.icon
		});
		var infowindow = new google.maps.InfoWindow({
			maxWidth: 320});
		m.addListener("click", visinfo);
		function visinfo() {
			var tempinfo =
				document.querySelector("#kort").content.cloneNode(true);
			tempinfo.querySelector(".h2class").innerHTML = punkt.id;
			tempinfo.querySelector(".re-responsive").src = punkt.video;
			tempinfo.querySelector(".r-responsive").src = punkt.images;
			tempinfo.querySelector(".res-responsive").src = punkt.images1;
			tempinfo.querySelector(".aclass").href = punkt.txt;
			tempinfo.querySelector(".aclass").innerHTML = punkt.txt;
			tempinfo.querySelector(".aclass").target = "_blank";
			tempinfo.querySelector(".pclass").innerHTML = punkt.title;


			infowindow.setContent(tempinfo);
			infowindow.open(map, m);
		}
	}
	}

/**************KORT**INFOVINDUE**SLUT**********/

/**************INFOGRAFIK**VALGTUREN**********/

		var valgte;
		var info;
		var aktiv;
		$('#valgturen').load("images_sitet/cs_infografik_12345.svg", kortHentet);
		function kortHentet() {
			$.getJSON("json/grafik_info.json", dataHentet);
		};
		function dataHentet(data) {
			info = data;
			$("#valgturen svg g g").on("mouseenter", onEnter);
			$("#valgturen svg g g").on("mouseleave", onOut);
		}
		function onEnter(e) {
			aktiv = $(e.currentTarget).children();
			valgte = $(e.currentTarget).closest("g").attr("id");
			console.log(valgte);
			info.forEach(visTekst);
		};
		function onOut() {
		}
		function visTekst(val) {
			if (val.id == valgte) {
				document.querySelector("#section3 h4").textContent = val.sted;
				document.querySelector("#section3 h5").textContent = val.beskrivelse;
			}
		};

/**************INFOGRAFIK**VALGTUREN**SLUT********/

/************Dynamisk**parti**TESTTESTTESTTESTTESTTESTTEST**********************/


/**************PARTIINFO**MODAL********/
//*******TODO ME
//window.addEventListener("load", sidenVises);
//
//function sidenVises() {
//    console.log("Siden vises");
//    //læs produktliste
//
//    $.getJSON("json/parti_info.json", visProduktListe);
//    // visProdukt();
//
//}
//
//document.querySelector(".filterknap_sjaelland").addEventListener("click", filtrersjaelland);
//
//document.querySelector(".filterknap_fyn").addEventListener("click", filterfyn);
//
//document.querySelector(".filterknap_jylland").addEventListener("click", filtrerjylland);
//
////SORTER FUNKTIONER
//document.querySelector(".sorter_storst").addEventListener("click", sorterstorst);
//
//document.querySelector(".sorter_mindst").addEventListener("click", sortermindst);
//
//
////*******
////************
//function filtrersjaelland(event) {
//    console.log("Klik på sjaelland-filter");
//    //find alle
//
//    var liste = document.querySelectorAll(".produkt:not(.sjaelland)");
//    //skjul all
//
//    liste.forEach(div => div.classList.toggle("hide"));
//    event.preventDefault();
//    //  event.preventDefault();
//
//}
////************
//
//
////***************
//
//function filterfyn(event) {
//    console.log("Klik på fyn-filter");
//    var liste = document.querySelectorAll(".produkt:not(.fyn)");
//    liste.forEach(div => div.classList.toggle("hide"));
//    event.preventDefault();
//}
//
//function filtrerjylland(event) {
//    console.log("Klik på jylland-filter");
//    var liste = document.querySelectorAll(".produkt:not(.jylland)");
//    liste.forEach(div => div.classList.toggle("hide"));
//    event.preventDefault();
//}
//
//function sorterstorst(listen) {
//
//    console.log("Klik på sorter storst");
//    var liste = document.querySelectorAll(".produkt:<(.produkt)");
//    liste.forEach(div => div.classList.toggle("hide"));
//    event.preventDefault();
//
//}
//
//function sortermindst(listen) {
//
//    console.log("Klik på sorter storst");
//    var liste = document.querySelectorAll(".produkt:>(.produkt)");
//    liste.forEach(div => div.classList.toggle("hide"));
//    event.preventDefault();
//
//}
//
//function visProduktListe(listen) {
//    console.log(listen);
//    //filtrer bornehavere produkter fra
//    //  listen = listen.filter(fjernbornehavere);
//
//    listen = listen.filter(produkt => !produkt.bornehaver);
//
//    listen.forEach(visProdukt);
//}
////**************
//
////    listen=listen.filter( function (produkt) {
////          return produkt.bornehaver;){};
////    listen.forEach(visProdukt);
////
////    var fjernbornehavere =
////      function fjernbornehavere = function (produkt) {
////          return produkt.bornehaver;
////     }
////  }
////********
//function visProdukt(produkt) {
//    console.log(produkt);
//
//    var klon = document.querySelector("#produkt_template").content.cloneNode(true);
//
//    if (produkt.sjaelland) {
//        klon.querySelector(".produkt").classList.add("sjaelland");
//    }
//    if (produkt.rabatsats) {
//        klon.querySelector(".produkt").classList.add("fyn");
//    }
//    if (produkt.jyllandprocent) {
//        klon.querySelector(".produkt").classList.add("jylland");
//    }
//
//    klon.querySelector(".data_navn").innerHTML = produkt.navn;
//    klon.querySelector(".data_kortbeskrivelse").innerHTML = produkt.kortbeskrivelse;
//    klon.querySelector(".data_befolkning").innerHTML = produkt.befolkning;
//
//    var skoler = Math.ceil(produkt.befolkning - (produkt.befolkning * produkt.rabatsats / 100));
//
//    klon.querySelector(".data_skoler").innerHTML = skoler;
//
//    klon.querySelector(".data_billede").src = "images_turen/small/" + produkt.billede + "-sm.jpg";
//
//    if (produkt.bornehaver == false) {
//        var bornehavertekst = klon.querySelector(".bornehavertekst");
//        bornehavertekst.parentNode.removeChild(bornehavertekst);
//
//    } else {
//        klon.querySelector(".befolkning").classList.add("bornehaver");
//    }
//
//    if (produkt.rabatsats == 0) {
//        var skoler = klon.querySelector(".skoler");
//        skoler.parentNode.removeChild(skoler);
//    } else {
//        klon.querySelector(".befolkning").classList.add("rabat");
//    }
//
//    klon.querySelector(".modalknap").dataset.produkt = produkt.id;
//
//    klon.querySelector(".modalknap").addEventListener("click", modalKnapKlik);
//
//
//    if (produkt.kategori == "regioner") {
//        document.querySelector(".regioner").appendChild(klon);
//
//    } else if (produkt.kategori == "kommuner") {
//        document.querySelector(".kommuner").appendChild(klon);
//
//    } else if (produkt.kategori == "partier") {
//        document.querySelector(".partier").appendChild(klon);
//
//        //    } else if (produkt.kategori == "personer") {
//        //        document.querySelector(".personerr").appendChild(klon);
//    } else {
//        document.querySelector(".personer").appendChild(klon);
//    }
//}
//
////MODAL
//function modalKnapKlik(event) {
//    console.log("knapklik", event);
//
//    var produktId = event.target.dataset.produkt;
//    console.log("klik på produkt: ", produktId);
//
//    $.getJSON("json/parti_info.json", {
//        id: produktId
//    }, visModalProdukt);
//}
//
//function visModalProdukt(produkt) {
//
//    console.log("vis modal for ", produkt);
//
//    var klon = document.querySelector("#modal_template").content.cloneNode(true);
//
//    if (produkt.rabatsats) {
//        klon.querySelector(".befolkning").classList.add("rabat");
//    } else if (produkt.rabatsats == false) {
//        klon.querySelector(".skoler").classList.add("ingenrabat");
//    }
//
//    klon.querySelector(".data_navn").innerHTML = produkt.navn;
//
//    klon.querySelector(".data_befolkning").innerHTML = produkt.befolkning;
//
//    klon.querySelector(".data_skoler").innerHTML = Math.ceil(produkt.befolkning - (produkt.befolkning * produkt.rabatsats / 100));
//
//    klon.querySelector(".data_billede").src = "images_turen/medium/" + produkt.billede + "-md.jpg";
//
//    klon.querySelector(".data_langbeskrivelse").innerHTML = produkt.langbeskrivelse;
//
//    klon.querySelector(".data_oprindelsesregion").innerHTML = produkt.oprindelsesregion;
//
//    klon.querySelector(".data_allergener").innerHTML = produkt.allergener;
//
//    klon.querySelector(".data_jyllandprocent").innerHTML = produkt.jyllandprocent;
//
//    klon.querySelector(".data_stjerner").innerHTML = produkt.stjerner;
//
//    document.querySelector(".modal-content").innerHTML = "";
//
//    document.querySelector(".modal-content").appendChild(klon);
//
//}
//******
//
//
////$(document).ready(function () {
////    console.log("start");
////    $('.lukkeklik').click(function () {
////        var navbar_toggle = $('.navbar-toggle');
////        if (navbar_toggle.is(':visible')) {
////            navbar_toggle.trigger('click');
////        }
////    });
////
////});
//
////*******TODO ME
//window.addEventListener("load", sidenVises);
//
//function sidenVises() {
//    console.log("siden vises");
//    //læs produktliste
//    $.getJSON("personer.json", visProduktListe);
//    // visProdukt();
//    document.querySelector(".vegetarknap_vegetar").addEventListener("click", filtrerVegetar);
//}
////*******
////************
//function filtrerVegetar(event) {
//    console.log("klik på vegetar-filter");
//    //find alle
//    var liste = document.querySelectorAll(".produkt:not(.vegetar)");
//    //skjul all
//    liste.forEach(div => div.classList.toggle("hide"));
//    //  event.preventDefault();
//}
////************
//
//
////***************
//function visProduktListe(listen) {
//    console.table(Listen);
//    //filtrer udsolgte produkter fra
//    //  listen = listen.filter(fjernUdsolgte);
//    listen.forEach(visProdukt);
//
//    function fjernUdsolgte(produkt) {
//        if (produkt.udsolgt == true) {
//            return false;
//        } else {
//            return true;
//
//        }
//    }
//    listen = listen.filter(produkt => !produkt.udsolgt);
//    listen.forEach(visProdukt);
//}
////**************
//
////    listen=listen.filter( function (produkt) {
////          return produkt.udsolgt;){};
////    listen.forEach(visProdukt);
////
////    var fjernUdsolgte =
////      function fjernudsolgte = function (produkt) {
////          return produkt.udsolgt;
////     }
////  }
////********
//function visProdukt(produkt) {
//    console.log("produkt", produkt);
//    var klon = document.querySelector("#produkt_template").content.cloneNode(true);
//
//    klon.querySelector(".data_navn").textContent = produkt.navn;
//    klon.querySelector(".data_pris").innerHTML = produkt.pris;
//
//    var rabatpris = Math.ceil(produkt.pris - (produkt.pris * produkt.rabatsats / 100));
//    klon.querySelector(".data_rabatpris").innerHTML = rabatpris;
//
//    klon.querySelector(".date_billede").src = "imgs/small/" + produkt.billede + "-sm.jpg";
//}
////******
//
//
//
//
////    if (produkt.udsolgt == false) {
////        var udsolgttekst = klon.querySelector(".udsolgttekst");
////        udsolgttekst.parentNode.removeChild(udsolgttekst);
////    } else {
////        klon.querySelector(".pris").classList.add("udsolgt");
////
////    if (produkt.vegetar == true) {
////        document.querySelector(".produkt").classList.add("vegetar");
////        {
////    if (produkt.udsolgt) {
////        document.querySelector(".produkt").classList.add("udsolgt");
////        {
////    if (produkt.rabatsats > 0) {
////        document.querySelector(".produkt").classList.add("tilbud");
////        {
////    if (produkt.alkoholdprocent > 0) {
////        document.querySelector(".produkt").classList.add("alkohol");
////        {
//
//
//
////******produkt id
//klon.querySelector(".modalknap").dataset.produkt = produkt.id;
////******registrer klik
//
//klon.querySelector(".modalknap") addEventListener("click", modalknapklik);
////******append .produktliste
//
//dokument.querySelector(".produktliste").appendChild(klon);
////******
//
////document.querySelector(".produktliste").appendChild(klon);
//if (produkt.kategori == "forretter") {
//    document.querySelector(".forretliste").appendChild(klon);
//} else if (produkt_kategori == "hovedretter") {
//    dokument.querySelector(".hovedretliste").appendChild(klon);
//} else if (produkt_kategori == "hovedretter") {
//    dokument.querySelector(".desertliste").appendChild(klon);
//} else if (produkt_kategori == "hovedretter") {
//    dokument.querySelector(".drikkevareliste").appendChild(klon);
//} else if (produkt_kategori == "hovedretter") {
//    dokument.querySelector(".sideordreliste").appendChild(klon);
//}
//
////******
//
////******
////******
//
//if (produkt.udsolgt == true || produkt.rabatsats == 0) {
//    var rabatpris = klon.querySelector(".rabatpris");
//    rabatpris.parentNode.removeChild(rabatpris);
//} else {
//    klon.querySelector(".pris").classList.add("rabat");
//}
//if (produkt.vegetar == true) {
//    klon.querySelector("produkt").classList.add("vegetar");
//}
//if (produkt.udsolgt) {
//    klon.querySelector("produkt").classList.add("udsolgt");
//}
//if (produkt.udsolgt) {
//    klon.querySelector("produkt").classList.add("tilbud");
//}
//if (produkt.rabatsats > = 0) {
//    klon.querySelector("produkt").classList.add("alkohol");
//}
////    if (produkt.alkoholprocent > 0) {
////        klon.querySelector("produkt").classList.add("alkohol");
////    }
////******
//
//
//
//
//
//
//// hvis kattegori var forret append til forretliste
//
//
//
//
//
//// hvis kategori var hovedret append til hovedret
//
//
//
//
//////$(document).on("load", start);
/////*
////window.addEventListener("load", start);
////
////
////
////function start() {
////    console.log("Start programmet");
////
////    $.getJSON("personer.json", visPersonListen);
////
////}
////
////function visPersonInfo(listen)  {
////    console.log(listen);
////    // klon person-info templaten
////    function visPersonInfo(person)  {
////        var klon = document.querySelector("#personinfo_template").content.cloneNode(true);
////
////        // sæt data ind i klonen
////        klon.querySelector(".data_fornavn").innerHTML = person.fornavn;
////        klon.querySelector(".data_efternavn").innerHTML = person.efternavn;
////
////        //-----
////        //$(document).on("load", start);
////window.addEventListener("load", start);
////*/
////
////
////
//////$(document).on("load", start);
////window.addEventListener("load", start);
////
////
////
////function start() {
////    console.log("Start programmet");
////
////    $.getJSON("personer.json", visPersonListe);
////}
////
////function visPersonListe(listen) {
////    console.table(listen);
////
////    // gå igennem listen, og kald visPersonInfo for hver person
////    listen.forEach(visPersonInfo);
////}
////
////function visPersonInfo(person)  {
////    // klon person-info templaten
////
////    var klon = document.querySelector("#produkt_template").content.cloneNode(true);
////
////    // sæt data ind i klonen
////    klon.querySelector(".data_kategori").innerHTML = person.kategori;
////    klon.querySelector(".data_navn").innerHTML = person.navn;
////
////    klon.querySelector(".data_pris").innerHTML = person.pris;
////
////    klon.querySelector(".data_rabatpris").innerHTML = person.rabatpris;
////    //    klon.querySelector(".data_stjerner").innerHTML = person.stjerner;
////    //
////    //
////    //    klon.querySelector(".data_yndlingsfarve").style.backgroundColor = person.yndlingsfarve;
////    /*
////            klon.querySelector(".data_beskæftigelse").innerHTML = person.beskæftigelse;
////            klon.querySelector(".data_vægt").innerHTML = person.vægt;
////            klon.querySelector(".data_højde").innerHTML = person.højde;
////            klon.querySelector(".data_øjenfarve").style.backgroundColor = person.øjenfarve;
////            console.log("Vis info");
////            console.log("fornavn: " + person.fornavn);
////            console.log("efternavn: " + person.efternavn);
////            console.log("stjernetegn: " + person.stjernetegn);
////            console.log("yndlingsfarve: " + person.yndlingsfarve);
////            console.log("øjenfarve: " + person.øjenfarve);
////            console.log("beskæftigelse: " + person.beskæftigelse);
////            console.log("vægt: " + person.vægt);
////            console.log("højde: " + person.højde);*/
////
////    klon.querySelector(".modal").id = "modal" + person.id;
////    klon.querySelector(".modalknap").dataset.target = "#modal" + person.id;
////
////    // sæt klonen ind i person-info div
////    document.querySelector("#person_info").appendChild(klon);
////}
//function givEtNavn({
//        return "Peter"
//    }
//
//    function udskriv({
//            var navn = givEtNavn();
//            alert("Jeg fik navnet! " + navn);
//        }

window.addEventListener("load", start);



function start() {
    console.log("Start programmet");

    $.getJSON("json/parti_info.json", vistekstLuften);

}



function vistekstLuften(listen) {
    console.table(listen);
    listen.forEach(vistekstUnion);
}

function vistekstUnion(tekst)  {
    // teksten tekst templ

    var teksten = document.querySelector("#tekstenunion_template").content.cloneNode(true);

    // til teksten
    teksten.querySelector(".data_fornavn").innerHTML = tekst.fornavn;
    teksten.querySelector(".data_efternavn").innerHTML = tekst.efternavn;
    teksten.querySelector(".data_fornavn2").innerHTML = tekst.fornavn;
    teksten.querySelector(".data_efternavn2").innerHTML = tekst.efternavn;
    teksten.querySelector(".data_alder").innerHTML = tekst.alder;

    teksten.querySelector(".data_yndlingsfarve").style.backgroundColor = tekst.yndlingsfarve;

    teksten.querySelector(".data_bopæl").innerHTML = tekst.bopæl;
    teksten.querySelector(".data_vægt").innerHTML = tekst.vægt;
    teksten.querySelector(".data_højde").innerHTML = tekst.højde;
    teksten.querySelector(".data_uddannelse").innerHTML = tekst.uddannelse;
    teksten.querySelector(".data_idol").innerHTML = tekst.idol;
    teksten.querySelector(".data_kæledyr").innerHTML = tekst.kæledyr;

    console.log("Vis info");
    console.log("fornavn: " + tekst.fornavn);
    console.log("efternavn: " + tekst.efternavn);
    console.log("stjernetegn: " + tekst.stjernetegn);
    console.log("yndlingsfarve: " + tekst.yndlingsfarve);
    console.log("bopæl: " + tekst.bopæl);
    console.log("vægt: " + tekst.vægt);
    console.log("højde: " + tekst.højde);
    console.log("uddannelse: " + tekst.uddannelse);
    console.log("idol: " + tekst.idol);
    console.log("kæledyr: " + tekst.kæledyr);

    teksten.querySelector(".modal").id = "modal" + tekst.id;
    teksten.querySelector(".modalknap").dataset.target = "#modal" + tekst.id;

    // teksten til tekst div
    document.querySelector("#teksten_union").appendChild(teksten);
}
/**************PARTIINFO**MODAL**SLUT***********************/

/************Dynamisk**parti**TESTTESTTESTTESTTESTTESTTEST**********************/

/**************LUKKEKLIK**BURGERBAR********/

		$(document).ready(function () {
			console.log("start");
			$(".lukkeklik").click(function () {
				var navbar_toggle = $('.navbar-toggle');
				if (navbar_toggle.is(':visible')) {
				navbar_toggle.trigger('click');
				}
			});
		});

/**************LUKKEKLIK**BURGERBAR**SLUT******/
