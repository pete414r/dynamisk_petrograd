
		var valgte;

		var info;


		var aktiv;


		$('#turene').load('images_sitet/cs_regionsguide.svg', kortHentet);
		function kortHentet() {
			$.getJSON('json/ture_maps_info.json', dataHentet);
		};
		function dataHentet(data) {
			info = data;
			$('#turene svg g g').on("mouseenter", onEnter);
			$('#turene svg g g').on("mouseleave", onOut);
		}
		function onEnter(e) {
			aktiv = $(e.currentTarget).children();
			valgte = $(e.currentTarget).closest('g').attr('id');
			console.log(valgte);
			info.forEach(visTekst);
		};
		function onOut() {
		}
		function visTekst(val) {
			if (val.id == valgte) {
				document.querySelector("#section3 h4").textContent = val.navn;
				document.querySelector("#section3 h5").textContent = val.beskrivelse;
			}
		};
		$(document).ready(function () {
			console.log("start");
			$('.lukkeklik').click(function () {
				var navbar_toggle = $('.navbar-toggle');
				if (navbar_toggle.is(':visible')) {
				navbar_toggle.trigger('click');
				}
			});
		});
