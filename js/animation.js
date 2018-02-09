	window.addEventListener("load", animElement);
	window.addEventListener("scroll",animElement);

	function animElement() {
	var toAnimate = document.getElementsByClassName("toAnimate");
	var boxHeight = toAnimate[0].clientHeight;

	var scrollPos = window.document.documentElement.scrollTop;
	var screenHeight = window.document.documentElement.clientHeight;
	var finalPos = scrollPos + screenHeight;

	for (var i = 0; i < toAnimate.length; i++) {
		var elemTopPos = getOffsetTop(toAnimate[i]);
		console.log(elemTopPos);
		if(elemTopPos < finalPos && !ifAlreadyAnimated(i)) {
			var elem = toAnimate[i];
			var child = elem.cloneNode(true);
			elem.parentNode.replaceChild(child, elem);
			child.classList.add("animated");
		}else if(elemTopPos > finalPos){
			toAnimate[i].classList.remove("animated");
		}
	}

	function ifAlreadyAnimated(id) {
		for (var i = toAnimate[id].classList.length - 1; i >= 0; i--) {
			if (toAnimate[id].classList[i] == "animated") return true;
			return false;
		}
	}

	function getOffsetTop( elem )
	{
	    var offsetTop = 0;
	    do {
	      if ( !isNaN( elem.offsetTop ) )
	      {
	          offsetTop += elem.offsetTop;
	      }
	    } while( elem = elem.offsetParent );
	    return offsetTop;
	}

}