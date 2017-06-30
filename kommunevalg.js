
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


		window.addEventListener("load", run);



		function run() {
			console.log("Start programmet");

			$.getJSON("json/guider_quiz.json", visPersonListe);
		}

		function visPersonListe(listen) {
			console.table(listen);
			listen.forEach(visPersonInfo);
		}

		function visPersonInfo(person)  {

			var klon = document.querySelector("#personinfo_template").content.cloneNode(true);

			klon.querySelector(".data_imagesidm").src = person.imagesidm;

			klon.querySelector(".data_svaridm1").innerHTML = person.svaridm1;

			klon.querySelector(".data_svaridm2").innerHTML = person.svaridm2;

			klon.querySelector(".data_svaridm3").innerHTML = person.svaridm3;

			klon.querySelector(".data_rigtsvaridm").innerHTML = person.rigtsvaridm;

			klon.querySelector(".data_imagesid1").src = person.imagesid1;

			klon.querySelector(".data_svarid11").innerHTML = person.svarid11;

			klon.querySelector(".data_svarid12").innerHTML = person.svarid12;

			klon.querySelector(".data_svarid13").innerHTML = person.svarid13;

			klon.querySelector(".data_rigtsvarid1").innerHTML = person.rigtsvarid1;

			klon.querySelector(".data_imagesid2").src = person.imagesid2;

			klon.querySelector(".data_svarid21").innerHTML = person.svarid21;

			klon.querySelector(".data_svarid22").innerHTML = person.svarid22;

			klon.querySelector(".data_svarid23").innerHTML = person.svarid23;

			klon.querySelector(".data_rigtsvarid2").innerHTML = person.rigtsvarid2;

			klon.querySelector(".data_imagesid3").src = person.imagesid3;

			klon.querySelector(".data_svarid31").innerHTML = person.svarid31;

			klon.querySelector(".data_svarid32").innerHTML = person.svarid32;

			klon.querySelector(".data_svarid33").innerHTML = person.svarid33;

			klon.querySelector(".data_rigtsvarid3").innerHTML = person.rigtsvarid3;

			klon.querySelector(".data_imagesid4").src = person.imagesid4;

			klon.querySelector(".data_svarid41").innerHTML = person.svarid41;

			klon.querySelector(".data_svarid42").innerHTML = person.svarid42;

			klon.querySelector(".data_svarid43").innerHTML = person.svarid43;

			klon.querySelector(".data_rigtsvarid4").innerHTML = person.rigtsvarid4;

			klon.querySelector(".data_guide1navn").innerHTML = person.guide1navn;

			klon.querySelector(".data_guide1posi").innerHTML = person.guide1posi;

			klon.querySelector(".data_guide2navn").innerHTML = person.guide2navn;

			klon.querySelector(".data_guide2posi").innerHTML = person.guide2posi;
			document.querySelector("#person_info").appendChild(klon);
		}

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
	$.getJSON("json/ture_maps_info.json", visKort);
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
		north: 58.117764258222024,
		south: 54.373327731522416,
		east: 13.929399559375042,
		west: 7.183794090625042
	}
	var overlay = new google.maps.GroundOverlay("images_turen/kort_kbhture_A12-01.svg", bounds);
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
			title: "Husk at stemme til kommunalvalget",
			animation: google.maps.Animation.DROP,
			icon: punkt.icon
		});
		var infowindow = new google.maps.InfoWindow({
			maxWidth: 500
		});
		m.addListener("click", visinfo);
		function visinfo() {
			var tempinfo =
				document.querySelector("#kort").content.cloneNode(true);
			tempinfo.querySelector(".h2class").innerHTML = punkt.id;
			tempinfo.querySelector(".re-responsive").src = punkt.video;
			tempinfo.querySelector(".r-responsive").src = punkt.images;
			tempinfo.querySelector(".res-responsive").src = punkt.images1;
			tempinfo.querySelector(".h1class").innerHTML = punkt.txt;
			tempinfo.querySelector(".pclass").innerHTML = punkt.title;
			infowindow.setContent(tempinfo);
			infowindow.open(map, m);
		}
	}
	}
		var valgte;
		var info;
		var aktiv;
		$('#valgturen').load("images_sitet/cs_infografik_12345.svg", kortHentet);
		function kortHentet() {
			$.getJSON("json/infografik_maps_info.json", dataHentet);
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
		$(document).ready(function () {
			console.log("start");
			$(".lukkeklik").click(function () {
				var navbar_toggle = $('.navbar-toggle');
				if (navbar_toggle.is(':visible')) {
				navbar_toggle.trigger('click');
				}
			});
		});
