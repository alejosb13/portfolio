$(document).ready(function () {
	$(document).on("scroll", onScroll);
	menu_animation()
	textType()
	eventFlipCards()
	MenuAnimation()
	backTop()
});

function menu_animation() {
		//Menu animation icon
	let McButton = $("[data=hamburger-menu]");
	let McBar1 = McButton.find("b:nth-child(1)");
	let McBar2 = McButton.find("b:nth-child(2)");
	let McBar3 = McButton.find("b:nth-child(3)");

	McButton.click( function() {
        var element = document.getElementById("header");
        element.classList.toggle("menu-active");
        
		$(this).toggleClass("active");
		
		if (McButton.hasClass("active")) {
			McBar1.velocity({ top: "50%" }, {duration: 200, easing: "swing"});
			McBar3.velocity({ top: "50%" }, {duration: 200, easing: "swing"})
				.velocity({rotateZ:"90deg"}, {duration: 800, delay: 200, easing: [500,20] });
			McButton.velocity({rotateZ:"135deg"}, {duration: 400, delay: 200, easing: [500,20] });
		} else {
			McButton.velocity("reverse");
			McBar3.velocity({rotateZ:"0deg"}, {duration: 200, easing: [500,20] })
				.velocity({ top: "100%" }, {duration: 100, easing: "swing"});
			McBar1.velocity("reverse", {delay: 800});
		}
	});
}

function textType() {
	let elementKeywords = document.querySelector("[data-text-type]")
	let keywords = elementKeywords.dataset.textType.split(",")
	
	new Typed('#text-type', {
		strings: keywords,
		typeSpeed: 130,
		backSpeed: 0,
		fadeOut: true,
		loop: true
	});
}

function eventFlipCards() {
	let currentElem = null;
	let padreCards = document.getElementById('comten-scene')

	padreCards.onmouseover = (event)=>{
		// valido  
		if (currentElem) return;

		let target = event.target.closest('.scene');
		
		if (!target) return;

		if (!padreCards.contains(target)) return;
		currentElem = target;

		let cardChild = currentElem.querySelector(".card")
		cardChild.classList.add("is-flipped");
	}


	padreCards.onmouseout = function(event) {
		// if we're outside of any <td> now, then ignore the event
		// that's probably a move inside the table, but out of <td>,
		// e.g. from <tr> to another <tr>
		if (!currentElem) return;
	  
		// we're leaving the element – where to? Maybe to a descendant?
		let relatedTarget = event.relatedTarget;
	  
		while (relatedTarget) {
		  // go up the parent chain and check – if we're still inside currentElem
		  // then that's an internal transition – ignore it
		  if (relatedTarget == currentElem) return;
	  
		  relatedTarget = relatedTarget.parentNode;
		}
	  
		// we left the <td>. really.

		// console.log(currentElem);

		let cardChild = currentElem.querySelector(".card")
		cardChild.classList.remove("is-flipped");

		currentElem = null;
	};

}

function MenuAnimation() {
	$(".nav-menu a").click(function (e) { 
		e.preventDefault();
        $(document).off("scroll");
        
		$('.nav-menu .active').removeClass('active');
		$(this).parent().addClass("active");

        let target = this.hash
		let $target = $(target);
		
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 600, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
		
	});


}
function onScroll(){
	var scrollPos = $(document).scrollTop();
	// console.log(scrollPos);
    $('.nav-menu a').each(function () {
        var currLink = $(this);
		var refElement = $(currLink.attr("href"));


        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
			$('.nav-menu .active').removeClass('active');
			currLink.parent().addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

function backTop (params) {

	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	});
	
	$('.back-to-top').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 1500, 'swing');
		return false;
	});
	
}