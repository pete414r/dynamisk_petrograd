
//	$(document).ready(function() {
//var movementStrength = 50000;
//var height = movementStrength / $(window).height();
//var width = movementStrength / $(window).width();
//$("#top-image").mousemove(function(e){
//          var pageX = e.pageX - ($(window).width() / 2);
//          var pageY = e.pageY - ($(window).height() / 2);
//          var newvalueX = width * pageX * -1 - 25000;
//          var newvalueY = height * pageY * -1 - 50000;
//          $('#top-image').css("background-position", newvalueX+"px     "+newvalueY+"px");
//});
//});


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




			klon.querySelector(".data_guide1navn").innerHTML = person.guide1navn;

			klon.querySelector(".data_guide1posi").innerHTML = person.guide1posi;

			klon.querySelector(".data_guide2navn").innerHTML = person.guide2navn;

			klon.querySelector(".data_guide2posi").innerHTML = person.guide2posi;
			document.querySelector("#person_info").appendChild(klon);
		}

