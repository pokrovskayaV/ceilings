
 $(".quiz .step__next").on("click", function(e) {
	 e.preventDefault();
	if ($(".quiz").hasClass("quiz4")) {
			$(".step4 input").each(function() {
					if ($(this).prop("checked")) {
							removeSteps();
							$(".quiz").addClass("itog");
							goTop();
			
					}
			});
	}
	if ($(".quiz").hasClass("quiz3")) {
			$(".step3 input").each(function() {
					if ($(this).prop("checked")) {
							removeSteps();
							$(".quiz").addClass("quiz4");
							goTop();
			
					}
			});
	}
	if ($(".quiz").hasClass("quiz2")) {
		$(".step2 input").each(function() {
					if($(this).prop('checked')) {
							removeSteps();
							$(".quiz").addClass("quiz3");
							goTop();
			
					}
			});
	}
	if ($(".quiz").hasClass("quiz1")) {
			$(".step1 input").each(function() {
					if($(this).prop('checked')) {
							removeSteps();
							$(".quiz").addClass("quiz2");	
							goTop();
					}
			});
	}
});


$(".step1 input").change(function() {
	setTimeout(load, 500);
	function load () {
	removeSteps();
	$(".quiz").addClass("quiz2");
	goTop();
	}
});

$(".step2 input").change(function() {
	setTimeout(load, 500);
	function load () {
	removeSteps();
	$(".quiz").addClass("quiz3");
	goTop();
	}
});

$(".step4 input").change(function() {
	setTimeout(load, 500);
	function load () {
	removeSteps();
	$(".quiz").addClass("itog");
	goTop();
	}
});




$(".quiz .prev__btn").on("click", function(e) {
	e.preventDefault();
	if ($(".quiz").hasClass("quiz2")) {
			removeSteps();
			$(".quiz").addClass("quiz1");
			$(".step2 input").each(function() {
					$(this).val('');
			});
			goTop();
	}
	if ($(".quiz").hasClass("quiz3")) {
			removeSteps();
			$(".quiz").addClass("quiz2");
			goTop();
	}
	if ($(".quiz").hasClass("quiz4")) {
			removeSteps();
			$(".quiz").addClass("quiz3");
			goTop();
	}
	if ($(".quiz").hasClass("itog")) {
			removeSteps();
			$(".quiz").addClass("quiz4");
			goTop();
	}

});

function goTop() {
	if ($(window).width() <= "860") {
	var offset = $('#top').offset().top - 50;
	} else {
		return;
	}
	$('html, body').animate({
		scrollTop: offset
	});
}

function removeSteps() {
	$(".quiz").removeClass("quiz1").removeClass("quiz2").removeClass("quiz3").removeClass("quiz4").removeClass("quiz5").removeClass("quiz6").removeClass("itog");
}



$('.step3 input[type="checkbox"]').change(function() {
	$(this).parents('.question__item').toggleClass("active");
});



$('.step1 input[type="radio"]').change(function() {
	$('.step1 .question__item').removeClass("active");
	$(this).parents('.question__item').addClass("active");
});

$('.step2 input[type="radio"]').change(function() {
	$('.step2 .question__item').removeClass("active");
	$(this).parents('.question__item').addClass("active");
});

$('.step4 input[type="radio"]').change(function() {
	$('.step4 .question__item').removeClass("active");
	$(this).parents('.question__item').addClass("active");
});

function checkEmpty() {
	if($('.step input[type="radio"]').prop('checked')==false || $('.step input[type="checkbox"]').prop('checked')==false || $('.step input[type="number"]').val()=='') {
			console.log($(this).parents(".step"));
			$(this).parents(".step").addClass("error");
			}
}



