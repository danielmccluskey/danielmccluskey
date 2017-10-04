

var imgsArray = [
	["Georgopol", "https://pubg.gamepedia.com/Georgopol", "images/maps/Georgopol.jpg"],
	["Mylta", "https://pubg.gamepedia.com/Mylta", "images/maps/Mylta.jpg"],
	["Pochinki", "https://pubg.gamepedia.com/Pochinki", "images/maps/Pochinki.jpg"],
	["Yasnaya Polyana", "https://pubg.gamepedia.com/Yasnaya_Polyana", "images/maps/Yasnaya.jpg"],
	["Gatka", "https://pubg.gamepedia.com/Gatka", "images/maps/Gatka.jpg"],
	["Kameshki", "https://pubg.gamepedia.com/Kameshki", "images/maps/Kameshki.jpg"],
	["Lipovka", "https://pubg.gamepedia.com/Lipovka", "images/maps/Lipovka.jpg"],
	["Mylta Power", "https://pubg.gamepedia.com/Mylta_Power", "images/maps/Mylta.jpg"],
	["Novorepnoye", "https://pubg.gamepedia.com/Novorepnoye", "images/maps/Novorepnoye.jpg"],
	["Primorsk", "https://pubg.gamepedia.com/Primorsk", "images/maps/Primorsk.jpg"],
	["Rozhok", "https://pubg.gamepedia.com/Rozhok", "images/maps/Rozhok.jpg"],
	["Severny", "https://pubg.gamepedia.com/Severny", "images/maps/Severny.jpg"],
	["Stalber", "https://pubg.gamepedia.com/Stalber", "images/maps/Stalber.jpg"],
	["Zharki", "https://pubg.gamepedia.com/Zharki", "images/maps/Zharki.jpg"],
	["Sosnovka Military Base", "https://pubg.gamepedia.com/Sosnovka_Military_Base", "images/maps/Military.jpg"]
];

function RandomCity(){	
	$(".a").hide();
	$(".RandomQuadBox").hide();
	$(".RandomCityBox").show();
    var newq = generateRandomForArray(0,14);
	$(".image").attr('src', imgsArray[newq][2]);
	$(".image").width('100%');
	$(".image").height('');
	$(".TownName").attr('href', imgsArray[newq][1]);
	//$(".TownName").attr('innerHTML', imgsArray[newq][0]);

	document.getElementById('TownNameSpan').innerHTML = imgsArray[newq][0];
};






function generateRandomForArray(min, max) {
  var num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

var HorizontalQuad = ["A","B","C","D","E","F","G","H"];
var VerticalQuad = ["I","J","K","L","M","N","O","P"];

function RandomQuadrant()
{
	var first = generateRandomForArray(0,7);
	var second = generateRandomForArray(0,7);
	
	var combo = HorizontalQuad[first] + VerticalQuad[second];
	
	var ImageLink = "https://pubg.gamepedia.com/" + combo + "_(Map_Section)";
	
	var MapNum = ((8*second)+first)+1;
	
	if (MapNum < 10)
	{
		MapNum = "0" + String(MapNum);
	}

	
	var ImageDir = 'images/maps/quads/images/Map_' + MapNum + '.gif';
	
	$(".a").hide();
	$(".RandomCityBox").hide();
	$(".RandomQuadBox").show();
	
	$(".image").attr('src', ImageDir);
	$(".image").width('100%');
	$(".image").height('');
	$(".TownName").attr('href', ImageLink);
	//$(".TownName").attr('innerHTML', imgsArray[newq][0]);

	document.getElementById('QuadNameSpan').innerHTML = combo;
	
}

function ayy() {
	$(".a").show();
	$(".image").width('');
	$(".image").height('90vh');
	
	$(".RandomCityBox").hide();
	$(".RandomQuadBox").hide();
	
	$(".image").attr('src', 'images/map.jpg');
	$( '.a' ).each(function( index ) {
	  $(this).animate({
		left : $(window).width() * .26 + (Math.random() * ($('.rightcol').width() - $(this).width())),
		top : Math.random() * ($('.rightcol').height() - $(this).height())
	  });
	});
	
};
