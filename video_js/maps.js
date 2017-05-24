var map;

window.addEventListener("load", initMap);

function initMap() {
	var center = {
		lat: 55.689056,
		lng: 12.597405




	};
	map = new google.maps.Map(document.getElementById("map"), {
		zoom: 19,
		center: center

	});
	$.getJSON("json/ture_maps_info.json", visKort);

	var mig = new google.maps.Marker({
		map: map,
		icon: "images_turen/pointer_5turen.png",
		title: "Hej til Københavnerture. Smil til verden, du er her"

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
		north: 55.695646,
		south: 55.674656,
		east: 12.621274,
		west: 12.560273

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
			title: "hej til Københavnerture",
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
			tempinfo.querySelector(".pclass").innerHTML = punkt.txt;
			tempinfo.querySelector(".h1class").innerHTML = punkt.title;
			infowindow.setContent(tempinfo);
			infowindow.open(map, m);
		}

	}
}
