
		var vid = document.getElementById("radissonvideo");

		function enableMute() {
			vid.muted = true;
		}

		function disableMute() {
			vid.muted = false;
		}

		function checkMute() {
			alert(vid.muted);
		}
		function enablePlay() {
			vid.play = true;
		}

		function disablePlay() {
			vid.play = false;
		}
		function checkPlay() {
			alert(vid.play);
		}
