/* script.js */
$(function(){
	// 2단계 메뉴 닫기
	$('.depth2').hide();
	
	// 메뉴 열고 닫기(hover)
	$('.depth1 > li').hover(
		function(){
			$('.depth2')
				.stop()
				.slideDown(200);
		},
		function(){
			$('.depth2')
				.stop()
				.slideUp(200);
		}
	);
	
	// bxslider
	$('.slider').bxSlider({
		auto: true,
		mode: 'horizontal'
		
	});
	
	
	
});
$(document).ready(function(){
	
	/**
	 * MENU OPTIONS (default values in parenthesis)
	 * ------------
	 * div:        Where the slide-menu will go. ("#menu-container")
	 * controls:   Where are the controls for the menu. ("#menu-controls")
	 * loader:     If you are using a loading graphic, the menu will hide it for you once loaded. If not,
	 *               set it to 'false' or ''. (false)
	 * x:          Total width of list item including margins and padding in px. (150)
	 * y:          Total height of list item including margins and padding in px. (150)
	 * start:      Index of <ul> to open first. (0)
	 * speed:      Speed of all animations in ms . (300)
	 * delay:      Delay between list item animations when transitioning in ms. (60)
	 * easing:     Type of easing to use for list item animations, use '' for no easing effect. ('')
	 *               FYI - "easeOutBackSmall" is a custom addition I made for this demo, it is not included in the
	 *               standard set of easing animations.
	 * easeIn:     Type of easing to use for initial drop-in animation, use '' for none. ('')
	 *               This demo includes the jQuery easing plugin: http://gsgd.co.uk/sandbox/jquery/easing/
	 *               Supported easing methods in the plugin are listed and demoed at the above url.
	 * preloadAll: Wait for all menu images to load before animating in, or just the first set? (false)
	 *               By default, with this set to false, the menu will wait until all images in the first menu set are
	 *               loaded before the beginning animation is fired. If set to true, it will wait for all menu images to load.
	 */

	var options = {
		div: "#menu-container",
		controls: "#menu-controls",
		loader: "#loading",
		x: 150,
		y: 200,
		easing: "easeOutBackSmall",
		easeIn: "easeOutBack",
		preloadAll: true
	};
	
	
	var menu = new slideMenu(options);
	
	/*
		The menu will wait until images are loaded before initializing, see "preloadAll" above.
		If you want to wait until EVERYTHING on the page is loaded, simply do this:
		
		$(window).load(function(){
			var menu = new slideMenu(options);
		});
	*/

	
	/*----------------------------------------------------------------------------------
	 * Demo stuff, not required for menu to work
	 *---------------------------------------------------------------------------------*/
	var auto = false, x, inc;
	
	// Toggle auto
	$("#auto a").click(function(){
		toggle_auto();
		return false;
	});

	// If xray enabled on load, make it so!
	
	function toggle_auto(){
		if (auto === false){
			x = $("#menu-controls a.active").data("target");
			auto_advance();
			inc = setInterval(auto_advance, 3000);
			auto = true;
		}
		else{
			clearInterval(inc);
			auto = false;
		}
		$("#auto span").text(auto === true ? 'ON' : 'OFF');
	}
	
	function auto_advance(){
		// Max index is 3, so don't go over
		x = x < 3 ? x + 1 : 0;
		// Using the switchTo method, we can advance the menu to a desired index
		menu.switchTo(x);
	}
		
});


//// sub 2 js


$(function(){
    $(".coffee1").hover({
        "mouseover":function(){
            $(".tiramisu").css({"background-color" : "black"});
        },
        "mouseout":function(){
            $(".tiramisu").css({"background-color" : "none"});
        }
    });

    $(".coffee1").hover(function(){
        $(".tiramisu").css({"background-color": "aqua"});
    }, function(){
        $(".tiramisu").css({"background" : "none"});
    });

});