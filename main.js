window.onload = function() {
	timer = setInterval(blurHeader, 100);
};

function blurHeader(y)
{
	scroll = true;
	var y = window.pageYOffset;
	var brightness;
	var blur;
	if (y < 550) 
	{
		brightness = 100 - (y / 1100);
		blur = y / 55;
	} else 
	{
		brightness = 50;
		blur = 10;
	}

	var filter = 'brightness(' + brightness + '%) blur(' + blur + 'px)';
	var elem = document.getElementById("header");

	elem.style.webkitFilter = filter;       //for Chrome
	elem.style.filter = filter;             //for others
}

