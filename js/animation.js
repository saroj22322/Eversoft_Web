
	window.addEventListener("load", animElement);
	window.addEventListener("scroll",animElement);
	window.addEventListener("resize",animElement);

	function animElement() {

	if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
    {
      if(document.documentElement.clientWidth <= 576) {
      	var arrows = document.getElementsByClassName('arrow-left');
      	for (var i = arrows.length - 1; i >= 0; i--) {
      		arrows[i].style.display = 'none';
      	}

      	var arrows = document.getElementsByClassName('arrow-right');
      	for (var i = arrows.length - 1; i >= 0; i--) {
      		arrows[i].style.display = 'none';
      	}

      }
      return;
    } else {
	var toAnimate = document.getElementsByClassName("toAnimate");

	var scrollPos = (window.document.documentElement.scrollTop > 0) ? window.document.documentElement.scrollTop : window.document.body.scrollTop;
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