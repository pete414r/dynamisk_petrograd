
		window.addEventListener("load", run);



		function run() {
			console.log("Start programmet");

			$.getJSON("../json/guider_quiz.json", visPersonListe);
		}

		function visPersonListe(listen) {
			console.table(listen);
			listen.forEach(visPersonInfo);
		}

		function visPersonInfo(person)  {

			var klon = document.querySelector("#personinfo_template").content.cloneNode(true);

			klon.querySelector(".data_spgidm").innerHTML = person.spgidm;

			klon.querySelector(".data_svaridm1").innerHTML = person.svaridm1;

			klon.querySelector(".data_svaridm2").innerHTML = person.svaridm2;

			klon.querySelector(".data_svaridm3").innerHTML = person.svaridm3;

			klon.querySelector(".data_rigtsvaridm").innerHTML = person.rigtsvaridm;
			klon.querySelector(".data_spgid1").innerHTML = person.spgid1;

			klon.querySelector(".data_svarid11").innerHTML = person.svarid11;

			klon.querySelector(".data_svarid12").innerHTML = person.svarid12;

			klon.querySelector(".data_svarid13").innerHTML = person.svarid13;

			klon.querySelector(".data_rigtsvarid1").innerHTML = person.rigtsvarid1;

			klon.querySelector(".data_spgid2").innerHTML = person.spgid2;

			klon.querySelector(".data_svarid21").innerHTML = person.svarid21;

			klon.querySelector(".data_svarid22").innerHTML = person.svarid22;

			klon.querySelector(".data_svarid23").innerHTML = person.svarid23;

			klon.querySelector(".data_rigtsvarid2").innerHTML = person.rigtsvarid2;

			klon.querySelector(".data_spgid3").innerHTML = person.spgid3;

			klon.querySelector(".data_svarid31").innerHTML = person.svarid31;

			klon.querySelector(".data_svarid32").innerHTML = person.svarid32;

			klon.querySelector(".data_svarid33").innerHTML = person.svarid33;

			klon.querySelector(".data_rigtsvarid3").innerHTML = person.rigtsvarid3;

			klon.querySelector(".data_spgid4").innerHTML = person.spgid4;

			klon.querySelector(".data_svarid41").innerHTML = person.svarid41;

			klon.querySelector(".data_svarid42").innerHTML = person.svarid42;

			klon.querySelector(".data_svarid43").innerHTML = person.svarid43;

			klon.querySelector(".data_rigtsvarid4").innerHTML = person.rigtsvarid4;

//			klon.querySelector(".data_spgid5").innerHTML = person.spgid5;
//
//			klon.querySelector(".data_svarid51").innerHTML = person.svarid51;
//
//			klon.querySelector(".data_svarid52").innerHTML = person.svarid52;
//
//			klon.querySelector(".data_svarid53").innerHTML = person.svarid53;
//
//			klon.querySelector(".data_rigtsvarid5").innerHTML = person.rigtsvarid5;
//
//			klon.querySelector(".data_spgid6").innerHTML = person.spgid6;
//
//			klon.querySelector(".data_svarid61").innerHTML = person.svarid61;
//
//			klon.querySelector(".data_svarid62").innerHTML = person.svarid62;
//
//			klon.querySelector(".data_svarid63").innerHTML = person.svarid63;
//
//			klon.querySelector(".data_rigtsvarid6").innerHTML = person.rigtsvarid6;
//
//			klon.querySelector(".data_spgid7").innerHTML = person.spgid7;
//
//			klon.querySelector(".data_svarid71").innerHTML = person.svarid71;
//
//			klon.querySelector(".data_svarid72").innerHTML = person.svarid72;
//
//			klon.querySelector(".data_svarid73").innerHTML = person.svarid73;
//
//			klon.querySelector(".data_rigtsvarid7").innerHTML = person.rigtsvarid7;
//
//			klon.querySelector(".data_spgid8").innerHTML = person.spgid8;
//
//			klon.querySelector(".data_svarid81").innerHTML = person.svarid81;
//
//			klon.querySelector(".data_svarid82").innerHTML = person.svarid82;
//
//			klon.querySelector(".data_svarid83").innerHTML = person.svarid83;
//
//			klon.querySelector(".data_rigtsvarid8").innerHTML = person.rigtsvarid8;
//
//			klon.querySelector(".data_spgid9").innerHTML = person.spgid9;
//
//			klon.querySelector(".data_svarid91").innerHTML = person.svarid91;
//
//			klon.querySelector(".data_svarid92").innerHTML = person.svarid92;
//
//			klon.querySelector(".data_svarid93").innerHTML = person.svarid93;
//
//			klon.querySelector(".data_rigtsvarid9").innerHTML = person.rigtsvarid9;
//
//			klon.querySelector(".data_spgid10").innerHTML = person.spgid10;
//
//			klon.querySelector(".data_svarid101").innerHTML = person.svarid101;
//
//			klon.querySelector(".data_svarid102").innerHTML = person.svarid102;
//
//			klon.querySelector(".data_svarid103").innerHTML = person.svarid103;
//
//			klon.querySelector(".data_rigtsvarid10").innerHTML = person.rigtsvarid10;

			klon.querySelector(".data_guide1navn").innerHTML = person.guide1navn;

			klon.querySelector(".data_guide1posi").innerHTML = person.guide1posi;

			klon.querySelector(".data_guide2navn").innerHTML = person.guide2navn;

			klon.querySelector(".data_guide2posi").innerHTML = person.guide2posi;
			document.querySelector("#person_info").appendChild(klon);
		}


//		var valgte;
//
//		var info;
//
//
//		var aktiv;
//
//
//		$('#turene').load('../images_sitet/cs_infografik_12345.svg', kortHentet);
//		function kortHentet() {
//			$.getJSON('../json/infografik_maps_info.json', dataHentet);
//		};
//		function dataHentet(data) {
//			info = data;
//			$('#turene svg g g').on("mouseenter", onEnter);
//			$('#turene svg g g').on("mouseleave", onOut);
//		}
//		function onEnter(e) {
//			aktiv = $(e.currentTarget).children();
//			valgte = $(e.currentTarget).closest('g').attr('id');
//			console.log(valgte);
//			info.forEach(visTekst);
//		};
//		function onOut() {
//		}
//		function visTekst(val) {
//			if (val.id == valgte) {
//				document.querySelector("#section3 h4").textContent = val.navn;
//				document.querySelector("#section3 h5").textContent = val.beskrivelse;
//			}
//		};
//		$(document).ready(function () {
//			console.log("start");
//			$('.lukkeklik').click(function () {
//				var navbar_toggle = $('.navbar-toggle');
//				if (navbar_toggle.is(':visible')) {
//				navbar_toggle.trigger('click');
//				}
//			});
//		});

//<script>
//	$(document).ready(function() {
//var movementStrength = 55;
//var height = movementStrength / $(window).height();
//var width = movementStrength / $(window).width();
//$("#top-image").mousemove(function(e){
//          var pageX = e.pageX - ($(window).width() / 2);
//          var pageY = e.pageY - ($(window).height() / 2);
//          var newvalueX = width * pageX * -1 - 25;
//          var newvalueY = height * pageY * -1 - 50;
//          $('#top-image').css("background-position", newvalueX+"px     "+newvalueY+"px");
//});
//});
//	</script>
