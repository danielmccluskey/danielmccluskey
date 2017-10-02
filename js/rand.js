

var imgsArray = [
	["Georgopol", "https://pubg.gamepedia.com/Georgopol", "images/maps/Georgopol.png"],
	["Mylta", "https://pubg.gamepedia.com/Mylta", "images/maps/Mylta.png"],
	["Pochinki", "https://pubg.gamepedia.com/Pochinki", "images/maps/Pochinki.png"],
	["Yasnaya Polyana", "https://pubg.gamepedia.com/Yasnaya_Polyana", "images/maps/Yasnaya.png"],
	["Gatka", "https://pubg.gamepedia.com/Gatka", "images/maps/Gatka.png"],
	["Kameshki", "https://pubg.gamepedia.com/Kameshki", "images/maps/Kameshki.png"],
	["Lipovka", "https://pubg.gamepedia.com/Lipovka", "images/maps/Lipovka.png"],
	["Mylta Power", "https://pubg.gamepedia.com/Mylta_Power", "images/maps/Mylta.png"],
	["Novorepnoye", "https://pubg.gamepedia.com/Novorepnoye", "images/maps/Novorepnoye.png"],
	["Primorsk", "https://pubg.gamepedia.com/Primorsk", "images/maps/Primorsk.png"],
	["Rozhok", "https://pubg.gamepedia.com/Rozhok", "images/maps/Rozhok.png"],
	["Severny", "https://pubg.gamepedia.com/Severny", "images/maps/Severny.png"],
	["Stalber", "https://pubg.gamepedia.com/Stalber", "images/maps/Stalber.png"],
	["Zharki", "https://pubg.gamepedia.com/Zharki", "images/maps/Zharki.png"],
	["Sosnovka Military Base", "https://pubg.gamepedia.com/Sosnovka_Military_Base", "images/maps/Military.png"]
];

function RandomCity(){	
	$(".a").hide();
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

function ayy() {
	$(".a").show();
	$(".image").width('');
	$(".image").height('100vh');
	
	$(".RandomCityBox").hide();
	$(".image").attr('src', 'images/map.jpg');
	$( '.a' ).each(function( index ) {
	  $(this).animate({
		left : $(window).width() * .26 + (Math.random() * ($('.rightcol').width() - $(this).width())),
		top : Math.random() * ($('.rightcol').height() - $(this).height())
	  });
	});
	
};