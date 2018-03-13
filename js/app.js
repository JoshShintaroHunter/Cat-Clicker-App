let clicks1 = 0;

var cats = [ 

	{
		type:'cat1',
		name:'Gary',
		clicks: 0,
		pic: "img/Cat.jpg"
	},

	{
		type:'cat2',
		name: "Lary",
		clicks: 0,
		pic : "img/Cat2.jpg"
	},

	{
		type:'cat3',
		name: "Jerry",
		clicks: 0,
		pic : "img/Cat3.jpg"
	},

	{
		type:'cat4',
		name: "Mary",
		clicks: 0,
		pic : "img/Cat2.jpg"
	},

	{
		type:'cat5',
		name: "Gerry",
		clicks: 0,
		pic : "img/Cat2.jpg"
	}

];

function catList(){
	var startList = "";
	$.each(cats,function(catIndex,cat){
		startList += "<li class= 'cat'>" + cat.name + "</li>";
	});
	$("#list").append("<ul class='cat'>" + startList + "</ul>");
}

function displayCat(id) {
	$("#display").empty();
	cat = cats[id];
	var toDisplay = "<div class='container'><div class='name'>" + cat.name + "</div><img src='" + cat.pic + "' class='clickable'/><div id='" + id.toString() + "' class='count'>" + cat.clicks.toString() + "</div></div>";
	$("#display").append(toDisplay);
	$(".clickable").click(function(object) {
		var elem = object.target.parentElement.childNodes[2];
		cats[elem.id].clicks += 1;
		$("#" + elem.id).text(cats[elem.id].clicks);
	});	
}

$(document).ready(function() {
	catList();
	$(".cat").click(function(obj) {
		id = cats.indexOf(cats.filter(function(a){ return a.name == obj.target.innerHTML; })[0]);
		displayCat(id);
	});
});
