$(document).ready(function() {
	playGame();
});
	  
function playGame(){
	$('.ryu').mouseenter(function() {
    hideAllRyu();
    $('.ryu-ready').show();

  })
  .mouseleave(function() {
    hideAllRyu();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    // play hadouken sound
    // show hadouken and animate it to the right of the screen
    playHadouken();
   	hideAllRyu();
    $('.ryu-throwing').show();

    //animate hadouken
    //animate({'obj'}, time, callback)
    animateHadouken();	    
  })
  .mouseup(function() {
    // ryu goes back to his ready position
   hideAllRyu();
    $('.ryu-ready').show();
  });


	$(document).keydown(function(e) {
		if (e.keyCode == 88) {
		  playCoolSong();
		  hideAllRyu();
		  $('.ryu-cool').show();
		}   
		}).keyup(function(e) {
		if (e.keyCode == 88) {
		  $('#cool-sound')[0].pause();
		  $('#cool-sound')[0].load();
		  hideAllRyu();
		  $('.ryu-ready').show();
		}
	});

}

function animateHadouken(){
	$('.hadouken').finish().show().animate(
	    	{'left': '1020px'},
	    	500,
	    	function(){
	    		$(this).hide();
	    		$(this).css('left', '520px');
	    	}
	    );	
}



var hadoukenSound = false;
function playHadouken () {
  if (!hadoukenSound) {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
  }
}

var coolSound = false;
function playCoolSong () {
  if (!coolSound) {
    $('#hadouken-sound')[0].pause();
    $('#cool-sound')[0].volume = 0.5;
    $('#cool-sound')[0].play();
  }
}

function hideAllRyu(){
	$('.ryu-cool').hide();
	$('.ryu-ready').hide();
	$('.ryu-still').hide();
	$('.ryu-throwing').hide();
}












	
	// function playHadouken(){
		
	// 		$('#hadouken-sound')[0].volume = 0.5;
	// 		$('#hadouken-sound')[0].load();
	// 		$('#hadouken-sound')[0].play();	
		
	// }
	
	// var coolSound = false;
	// function playCoolSong(){
	// 	if(!coolSound)
	// 	$('#hadouken-sound')[0].pause();
	// 	$('#cool-sound')[0].play();
	// }


	// function stopCoolSong(){
	// 	$('#cool-sound')[0].pause();
	// 	$('#cool-sound')[0].load();
	// }