
$(document).ready(function(e){



var tpl = _.template("<h2>Hello, my name is <%= name %>. My favorite movie is <%= movie %>, my favorite city is <%= city %>, and I love WDI because <%= wdiLove %>.")

var data = {
	name: "Jake",
	movie: "Blow",
	city: "Chicago",
	wdiLove: "because its great"
}

$('body').html(tpl(data));

var data = {
	name: "Ekaj",
	movie: "Wolb",
	city: "Idaho",
	wdiLove: "fun"
}

$('body').append(tpl(data));

var data = {
	name: "Will Smith",
	movie: "Wild Wild West",
	city: "Philadelphia",
	wdiLove: "west Philadelphia born and raised"
}

$('body').append(tpl(data));

})