	window.addEventListener("load", animElement);
	window.addEventListener("scroll",animElement);

	function animElement() {
	var toAnimate = document.getElementsByClassName("toAnimate");

	var scrollPos = window.document.documentElement.scrollTop;
	var screenHeight = window.document.documentElement.clientHeight;
	var finalPos = scrollPos + screenHeight;

	for (var i = 0; i < toAnimate.length; i++) {
		var elemTopPos = toAnimate[i].getBoundingClientRect().top + window.pageYOffset + document.documentElement.clientTop;
		//getOffsetTop(toAnimate[i]);
		if(elemTopPos < finalPos && !ifAlreadyAnimated(i)) {
			var elem = toAnimate[i];
			var child = elem.cloneNode(true);
			elem.parentNode.replaceChild(child, elem);
			child.classList.add("animated");
			child.style.visibility = "visible";
		}else if(elemTopPos > finalPos){
			toAnimate[i].classList.remove("animated");
			toAnimate[i].style.visibility ="hidden";
		}
	}

	function ifAlreadyAnimated(id) {
		for (var i = toAnimate[id].classList.length - 1; i >= 0; i--) {
			if (toAnimate[id].classList[i] == "animated") return true;
			return false;
		}
	}

	/*function getOffsetTop( elem )
	{
	    var offsetTop = 0;
	    do {
	      if ( !isNaN( elem.offsetTop ) )
	      {
	          offsetTop += elem.offsetTop;
	      }
	    } while( elem = elem.offsetParent );
	    return offsetTop;
	}*/

}