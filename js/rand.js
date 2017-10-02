

var imgsArray = [
	["Zharki", 60, 70],
	["Severny", 300, 30],
	["Kameshki", 800, 30],
	["Stalber", 120, 30],
	["Stalber", 345, 30],
	["Stalber", 679, 30]
];

function RandomCity(){
    var newq = generateRandomForArray(0,5);
	
	var a = newq[0];
	var b = newq[1];
    $('.a').animate({ top: imgsArray[newq][1], left: (($(window).width() * .26)+(imgsArray[newq][2]))});
    
};


function generateRandomForArray(min, max) {
  var num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

function ayy() {
	$( '.a' ).each(function( index ) {
	  $(this).animate({
		left : $(window).width() * .26 + (Math.random() * ($('.rightcol').width() - $(this).width())),
		top : Math.random() * ($('.rightcol').height() - $(this).height())
	  });
	});
	
};