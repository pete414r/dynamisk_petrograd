var videoid = document.querySelector('radissonvideo');
		var popcornvideo = Popcorn(videoid);
		videoid.addEventListener("ended", function (e) {
			$('#endcredits').show();

		});

		loop = setInterval(status, 1000);


		function status() {
			// console.log("tid er "+videoid.currentTime);
			if (videoid.currentTime >= 7) {
				$('#endcredits').show();
				clearInterval(loop);
			}

		}

		popcornvideo.play();

		popcornvideo.footnote({
			start: 0,
			end: 118,
			text: "-Call to action på skærmen!-",

			target: "annotation"
		});
