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
		$('#valgturen').load("images_turen/cs_infografik_12345.svg", kortHentet);
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
    teksten.querySelector(".data_fornavn2").innerHTML = tekst.fornavn;
    teksten.querySelector(".data_efternavn2").innerHTML = tekst.efternavn;
    teksten.querySelector(".data_alder").innerHTML = tekst.alder;

	teksten.querySelector(".data_billede").src = "images_turen/small/" + tekst.billede + "-sm.svg";

    teksten.querySelector(".data_yndlingsfarve").style.backgroundColor = tekst.yndlingsfarve;
    teksten.querySelector(".data_bopæl").innerHTML = tekst.bopæl;
	 teksten.querySelector(".data_vægttekst").innerHTML = tekst.vægttekst;
    teksten.querySelector(".data_vægt").innerHTML = tekst.vægt;
	 teksten.querySelector(".data_højdetekst").innerHTML = tekst.højdetekst;
    teksten.querySelector(".data_højde").innerHTML = tekst.højde;
    teksten.querySelector(".data_uddannelse").innerHTML = tekst.uddannelse;
    teksten.querySelector(".data_idol").innerHTML = tekst.idol;
    teksten.querySelector(".data_kæledyr").innerHTML = tekst.kæledyr;
    teksten.querySelector(".data_langbeskrivelse").innerHTML = tekst.langbeskrivelse;
	teksten.querySelector(".data_hobby").innerHTML = tekst.hobby;
	teksten.querySelector(".aclass").href = tekst.kortbeskrivelse;
	teksten.querySelector(".aclass").target = "_blank";
	teksten.querySelector(".aclass").innerHTML = tekst.kortbeskrivelse;
	teksten.querySelector(".aclass_øjenfarve").href = tekst.kortbeskrivelse;
	teksten.querySelector(".aclass_øjenfarve").target = "_blank";
	teksten.querySelector(".aclass_øjenfarve").innerHTML = tekst.øjenfarve;
	teksten.querySelector(".aclass_hårfarve").href = tekst.kortbeskrivelse;
	teksten.querySelector(".aclass_hårfarve").target = "_blank";
	teksten.querySelector(".aclass_hårfarve").innerHTML = tekst.hårfarve;
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
