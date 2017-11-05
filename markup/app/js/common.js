$(function () {

	//SVG Fallback
	if (!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function () {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};
	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if ($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch (err) {

	};

	$("img, a").on("dragstart", function (event) { event.preventDefault(); });
	//maginfic po-up
	$(".popup").magnificPopup({ type: "image" });
	$(".popup_content").magnificPopup({
		type: "inline",
		midClick: true
	});
	// cart 
	$('.icon_cart, .close_cart').click(function () {
		$('.cart_tovar_holder').slideToggle();
	});
	// tabu form
	$('.form_tabs ul').on('click', 'li:not(.active_tabs)', function () {
		$(this)
			.addClass('active_tabs').siblings().removeClass('active_tabs')
			.closest('.form_wrapp').find('div.form_tabs_wrap_box').removeClass('active_tabs').eq($(this).index()).addClass('active_tabs');
		$('.get_social p').toggleClass('active_tabs');
	});
	$('.product_holder, .close_icon ').click(function () {
		$(this).toggleClass('hover_active');
		if ($(this).hasClass('hover_active')) {
			$('.box_descr_more').fadeToggle();
		}

	});
	// drop down mnu

	$(window).ready(function () {
		width = $(window).width();
		if (width >= 991) {
			$('.header_nav ul.top_mnu li').hover(function () {
				$(this).toggleClass('active');
			});
		} if (width <= 768) {
			$('ul.top_mnu li').click(function () {
				$('.header_nav ul.top_mnu').find(this).toggleClass('active');
			});
		}
	});

	// slider index
	$(".slider_holder").owlCarousel({
		autoPlay: 5000,
		navigation: true,
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true,
		items: 1,
		navigationText: ['<span class="prev_button"></span>', '<span class="next_button"></span>']
	});
	$(".slider_hot_sell_wrap").owlCarousel({
		autoPlay: 5000,
		navigation: true,
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: false,
		items: 4,
		navigationText: ['<span class="prev_button"></span>', '<span class="next_button"></span>']
	});
	$(".reviews_persons_holder_slider").owlCarousel({
		autoPlay: 5000,
		navigation: true,
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true,
		items: 1,
		navigationText: ['<span class="prev_button"></span>', '<span class="next_button"></span>']
	});
	$(".clients_slider").owlCarousel({
		autoPlay: 5000,
		navigation: true,
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: false,
		items: 4,
		navigationText: ['<span class="prev_button"></span>', '<span class="next_button"></span>']
	});
	$(".slider_conntent").owlCarousel({
		autoPlay: false,
		navigation: true,
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true,
		mouseDrag: false,
		touchDrag: false,
		items: 1,
		navigationText: ['<span class="prev_button"></span>', '<span class="next_button"></span>']
	});

	/*
		$(function () {
			var owl = $('.slider_conntent');
			owl.owlCarousel({
				autoPlay: false,
				navigation: true,
				slideSpeed: 300,
				paginationSpeed: 400,
				singleItem: true,
				mouseDrag: false,
				touchDrag: false,
				items: 1,
				navigationText: ['<span class="prev_button"></span>', '<span class="next_button"></span>'],
				onInitialized: counter, //When the plugin has initialized.
				onTranslated: counter //When the translation of the stage has finished.	
			});
		
			function counter(event) {
				var element = event.target;         // DOM element, in this example .owl-carousel
				var items = event.item.count;     // Number of items
				var item = event.item.index + 1;     // Position of the current item
				$('.currrent').html("item " + item + " of " + items)
			}
		});
		*/

	var divs = $('.box_holder').length;
	$('.all_boxes input').val(divs);
	var boxes = $('.curent_boxes');
	var index = 0;

	$('.slider_conntent .prev_button').click(function () {
		var $input = $(boxes).find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.slider_conntent .next_button').click(function () {
		var $input = $(boxes).find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		++index;
		if (index >= divs) {
			$('.curent_boxes input').val(1);
			index = 0;
		}
		return false;
	});


	$(function ($) {
		var allAccordions = $('.accordion div.data');
		var allAccordionItems = $('.accordion .accordion-item');
		$('.accordion > .accordion-item').click(function () {
			if ($(this).hasClass('open')) {
				$(this).removeClass('open');
				$(this).next().slideUp("slow");
			}
			else {
				allAccordions.slideUp("slow");
				allAccordionItems.removeClass('open');
				$(this).addClass('open');
				$(this).next().slideDown("slow");
				return false;
			}
		});
	});

	// filter sidebar
	$(function () {
		$("#range_piecker").slider({
			range: true,
			min: 0,
			max: 3000,
			values: [1200, 1800],
			slide: function (event, ui) {
				$(".ui-slider-handle:nth-child(2) .amount_holder input").val(ui.values[0]);
				$(".ui-slider-handle:last-child .amount_holder input").val(ui.values[1]);
			}
		});
		$(".amount_holder input").val($("#range_piecker").slider("values", 0) + $("#range_piecker").slider("values", 1));
		$('.ui-slider-handle').append('<i class="amount_holder"><input type="text" readonly></i>');
	});

	// counts index

	$(document).ready(function () {

		var show = true;
		var countbox = "#counts";
		$(window).on("scroll load resize", function () {

			if (!show) return false;

			var w_top = $(window).scrollTop();

			var w_height = $(window).height();
			var d_height = $(document).height();

			var e_height = $(countbox).outerHeight();

			if (w_top + 200 || w_height + w_top == d_height || e_height < w_height) {
				$(".spincrement").spincrement({
					thousandSeparator: "",
					duration: 12000
				});

				show = false;
			}
		});
	});
});

/**
 * jQuery Spincrement plugin
 *
 * Plugin structure based on: http://blog.jeremymartin.name/2008/02/building-your-first-jquery-plugin-that.html
 * Leveraging of jQuery animate() based on: http://www.bennadel.com/blog/2007-Using-jQuery-s-animate-Method-To-Power-Easing-Based-Iteration.htm
 * Easing function from jQuery Easing plugin: http://gsgd.co.uk/sandbox/jquery/easing/
 * Thousands separator code: http://www.webmasterworld.com/forum91/8.htm
 *
 * @author John J. Camilleri
 * @version 0.1
 */

(function ($) {

	// Custom easing function
	$.extend($.easing, {
		// This is ripped directly from the jQuery easing plugin (easeOutExpo), from: http://gsgd.co.uk/sandbox/jquery/easing/
		spincrementEasing: function (x, t, b, c, d) {
			return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
		}
	});

	// Spincrement function
	$.fn.spincrement = function (opts) {

		// Default values
		var defaults = {
			from: 0,
			to: false,
			decimalPlaces: 0,
			decimalPoint: '.',
			thousandSeparator: ',',
			duration: 10000, // ms; TOTAL length animation
			leeway: 50, // percent of duraion
			easing: 'spincrementEasing',
			fade: true
		};
		var options = $.extend(defaults, opts);

		// Function for formatting number
		var re_thouSep = new RegExp(/^(-?[0-9]+)([0-9]{3})/);
		function format(num) {
			num = num.toFixed(options.decimalPlaces); // converts to string!

			// Non "." decimal point
			if ((options.decimalPlaces > 0) && (options.decimalPoint != '.')) {
				num = num.replace('.', options.decimalPoint);
			}

			// Thousands separator
			if (options.thousandSeparator) {
				while (re_thouSep.test(num)) {
					num = num.replace(re_thouSep, '$1' + options.thousandSeparator + '$2');
				}
			}
			return num;
		}

		// Apply to each matching item
		return this.each(function () {

			// Get handle on current obj
			var obj = $(this);

			// Set params FOR THIS ELEM
			var from = options.from;
			var to = (options.to != false) ? options.to : parseFloat(obj.html()); // If no to is set, get value from elem itself
			//var to = parseFloat(obj.html()); // If no to is set, get value from elem itself
			var duration = options.duration;
			if (options.leeway) {
				// If leeway is set, randomise duration a little
				duration += Math.round(options.duration * (((Math.random() * 2) - 1) * (options.leeway) / 100));
			}

			// DEBUG
			//obj.html(to); return;

			// Start
			obj.css('counter', from);
			if (options.fade) obj.css('opacity', 0);
			obj.animate(
				{ counter: to, opacity: 1 },
				{
					easing: options.easing,
					duration: duration,

					// Invoke the callback for each step.
					step: function (progress) {
						obj.css('visibility', 'visible'); // Make sure it's visible
						obj.html(format(progress * to));
					},
					complete: function () {
						// Cleanup
						obj.css('counter', null);
						obj.html(format(to));
					}
				}
			);
		});

	};
})(jQuery);
$('.minus').click(function () {
	var $input = $(this).parent().find('input');
	var count = parseInt($input.val()) - 1;
	count = count < 1 ? 1 : count;
	$input.val(count);
	$input.change();
	return false;
});
$('.plus').click(function () {
	var $input = $(this).parent().find('input');
	$input.val(parseInt($input.val()) + 1);
	$input.change();
	return false;
});
$('.icon_zoom').trigger('li.lslide.active a');

$(document).ready(function () {
	$('#imageGallery').lightSlider({
		gallery: true,
		item: 1,
		loop: true,
		thumbItem: 3,
		slideMargin: 0,
		enableDrag: false,
		currentPagerPosition: 'left',
	});
});
jQuery(document).ready(function ($) {
	$(".fancybox").fancybox();
});


// mobile mnu

!function (a, b, c, d) { "use strict"; a.fn.slideAndSwipe = function (b) { function g(a, b, g, h) { "start" == b && (e = c.hasClass("ssm-nav-visible") ? 0 : d); var i; "move" == b && "left" == g ? (i = e < 0 ? e - h : -h, j(i, 0)) : "move" == b && "right" == g ? (i = e < 0 ? e + h : h, j(i, 0)) : "cancel" == b && "left" == g && 0 === e ? j(0, f.speed) : "end" == b && "left" == g ? k() : "end" != b && "cancel" != b || "right" != g || console.log("end") } function h() { return /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor) } function i() { return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor) } function j(b, e) { c.css("transition-duration", (e / 1e3).toFixed(1) + "s"), b >= 0 && (b = 0), b <= d && (b = d), h() || i() ? c.css("-webkit-transform", "translate(" + b + "px,0)") : c.css("transform", "translate(" + b + "px,0)"), "0" == b && (a(".ssm-toggle-nav").addClass("ssm-nav-visible"), a("html").addClass("is-navOpen"), a(".ssm-overlay").fadeIn()) } var c = a(this), d = -c.outerWidth(), e = d, f = a.extend({ triggerOnTouchEnd: !0, swipeStatus: g, allowPageScroll: "vertical", threshold: 100, excludedElements: "label, button, input, select, textarea, .noSwipe", speed: 250 }, b); c.swipe(f); var k = function () { c.removeClass("ssm-nav-visible"), j(d, f.speed), a("html").removeClass("is-navOpen"), a(".ssm-overlay").fadeOut() }, l = function () { c.addClass("ssm-nav-visible"), j(0, f.speed) }; a(".ssm-toggle-nav").click(function (a) { c.hasClass("ssm-nav-visible") ? k() : l(), a.preventDefault() }) } }(window.jQuery || window.$, document, window), "undefined" != typeof module && module.exports && (module.exports = slideAndSwipe);

$(document).ready(function () {
	var windowWidth = $(window).width();
	if (windowWidth < 992) {
		$('.header_nav').slideAndSwipe();
	};
	$('.close_icon').click(function () {
		if ($('.header_nav').hasClass('ssm-nav-visible')) {
			$('.header_nav').removeClass("ssm-nav-visible");
			$('.header_nav').css("transform", "translate(-280px,0)");
		}

	});
});
/*!
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.17
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 * @license
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
!function (factory) { "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], factory) : factory("undefined" != typeof module && module.exports ? require("jquery") : jQuery) }(function ($) { "use strict"; function init(options) { return !options || void 0 !== options.allowPageScroll || void 0 === options.swipe && void 0 === options.swipeStatus || (options.allowPageScroll = NONE), void 0 !== options.click && void 0 === options.tap && (options.tap = options.click), options || (options = {}), options = $.extend({}, $.fn.swipe.defaults, options), this.each(function () { var $this = $(this), plugin = $this.data(PLUGIN_NS); plugin || (plugin = new TouchSwipe(this, options), $this.data(PLUGIN_NS, plugin)) }) } function TouchSwipe(element, options) { function touchStart(jqEvent) { if (!(getTouchInProgress() || $(jqEvent.target).closest(options.excludedElements, $element).length > 0)) { var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent; if (!event.pointerType || "mouse" != event.pointerType || 0 != options.fallbackToMouseEvents) { var ret, touches = event.touches, evt = touches ? touches[0] : event; return phase = PHASE_START, touches ? fingerCount = touches.length : options.preventDefaultEvents !== !1 && jqEvent.preventDefault(), distance = 0, direction = null, currentDirection = null, pinchDirection = null, duration = 0, startTouchesDistance = 0, endTouchesDistance = 0, pinchZoom = 1, pinchDistance = 0, maximumsMap = createMaximumsData(), cancelMultiFingerRelease(), createFingerData(0, evt), !touches || fingerCount === options.fingers || options.fingers === ALL_FINGERS || hasPinches() ? (startTime = getTimeStamp(), 2 == fingerCount && (createFingerData(1, touches[1]), startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start)), (options.swipeStatus || options.pinchStatus) && (ret = triggerHandler(event, phase))) : ret = !1, ret === !1 ? (phase = PHASE_CANCEL, triggerHandler(event, phase), ret) : (options.hold && (holdTimeout = setTimeout($.proxy(function () { $element.trigger("hold", [event.target]), options.hold && (ret = options.hold.call($element, event, event.target)) }, this), options.longTapThreshold)), setTouchInProgress(!0), null) } } } function touchMove(jqEvent) { var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent; if (phase !== PHASE_END && phase !== PHASE_CANCEL && !inMultiFingerRelease()) { var ret, touches = event.touches, evt = touches ? touches[0] : event, currentFinger = updateFingerData(evt); if (endTime = getTimeStamp(), touches && (fingerCount = touches.length), options.hold && clearTimeout(holdTimeout), phase = PHASE_MOVE, 2 == fingerCount && (0 == startTouchesDistance ? (createFingerData(1, touches[1]), startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start)) : (updateFingerData(touches[1]), endTouchesDistance = calculateTouchesDistance(fingerData[0].end, fingerData[1].end), pinchDirection = calculatePinchDirection(fingerData[0].end, fingerData[1].end)), pinchZoom = calculatePinchZoom(startTouchesDistance, endTouchesDistance), pinchDistance = Math.abs(startTouchesDistance - endTouchesDistance)), fingerCount === options.fingers || options.fingers === ALL_FINGERS || !touches || hasPinches()) { if (direction = calculateDirection(currentFinger.start, currentFinger.end), currentDirection = calculateDirection(currentFinger.last, currentFinger.end), validateDefaultEvent(jqEvent, currentDirection), distance = calculateDistance(currentFinger.start, currentFinger.end), duration = calculateDuration(), setMaxDistance(direction, distance), ret = triggerHandler(event, phase), !options.triggerOnTouchEnd || options.triggerOnTouchLeave) { var inBounds = !0; if (options.triggerOnTouchLeave) { var bounds = getbounds(this); inBounds = isInBounds(currentFinger.end, bounds) } !options.triggerOnTouchEnd && inBounds ? phase = getNextPhase(PHASE_MOVE) : options.triggerOnTouchLeave && !inBounds && (phase = getNextPhase(PHASE_END)), phase != PHASE_CANCEL && phase != PHASE_END || triggerHandler(event, phase) } } else phase = PHASE_CANCEL, triggerHandler(event, phase); ret === !1 && (phase = PHASE_CANCEL, triggerHandler(event, phase)) } } function touchEnd(jqEvent) { var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent, touches = event.touches; if (touches) { if (touches.length && !inMultiFingerRelease()) return startMultiFingerRelease(event), !0; if (touches.length && inMultiFingerRelease()) return !0 } return inMultiFingerRelease() && (fingerCount = fingerCountAtRelease), endTime = getTimeStamp(), duration = calculateDuration(), didSwipeBackToCancel() || !validateSwipeDistance() ? (phase = PHASE_CANCEL, triggerHandler(event, phase)) : options.triggerOnTouchEnd || options.triggerOnTouchEnd === !1 && phase === PHASE_MOVE ? (options.preventDefaultEvents !== !1 && jqEvent.preventDefault(), phase = PHASE_END, triggerHandler(event, phase)) : !options.triggerOnTouchEnd && hasTap() ? (phase = PHASE_END, triggerHandlerForGesture(event, phase, TAP)) : phase === PHASE_MOVE && (phase = PHASE_CANCEL, triggerHandler(event, phase)), setTouchInProgress(!1), null } function touchCancel() { fingerCount = 0, endTime = 0, startTime = 0, startTouchesDistance = 0, endTouchesDistance = 0, pinchZoom = 1, cancelMultiFingerRelease(), setTouchInProgress(!1) } function touchLeave(jqEvent) { var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent; options.triggerOnTouchLeave && (phase = getNextPhase(PHASE_END), triggerHandler(event, phase)) } function removeListeners() { $element.unbind(START_EV, touchStart), $element.unbind(CANCEL_EV, touchCancel), $element.unbind(MOVE_EV, touchMove), $element.unbind(END_EV, touchEnd), LEAVE_EV && $element.unbind(LEAVE_EV, touchLeave), setTouchInProgress(!1) } function getNextPhase(currentPhase) { var nextPhase = currentPhase, validTime = validateSwipeTime(), validDistance = validateSwipeDistance(), didCancel = didSwipeBackToCancel(); return !validTime || didCancel ? nextPhase = PHASE_CANCEL : !validDistance || currentPhase != PHASE_MOVE || options.triggerOnTouchEnd && !options.triggerOnTouchLeave ? !validDistance && currentPhase == PHASE_END && options.triggerOnTouchLeave && (nextPhase = PHASE_CANCEL) : nextPhase = PHASE_END, nextPhase } function triggerHandler(event, phase) { var ret, touches = event.touches; return (didSwipe() || hasSwipes()) && (ret = triggerHandlerForGesture(event, phase, SWIPE)), (didPinch() || hasPinches()) && ret !== !1 && (ret = triggerHandlerForGesture(event, phase, PINCH)), didDoubleTap() && ret !== !1 ? ret = triggerHandlerForGesture(event, phase, DOUBLE_TAP) : didLongTap() && ret !== !1 ? ret = triggerHandlerForGesture(event, phase, LONG_TAP) : didTap() && ret !== !1 && (ret = triggerHandlerForGesture(event, phase, TAP)), phase === PHASE_CANCEL && touchCancel(event), phase === PHASE_END && (touches ? touches.length || touchCancel(event) : touchCancel(event)), ret } function triggerHandlerForGesture(event, phase, gesture) { var ret; if (gesture == SWIPE) { if ($element.trigger("swipeStatus", [phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData, currentDirection]), options.swipeStatus && (ret = options.swipeStatus.call($element, event, phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData, currentDirection), ret === !1)) return !1; if (phase == PHASE_END && validateSwipe()) { if (clearTimeout(singleTapTimeout), clearTimeout(holdTimeout), $element.trigger("swipe", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipe && (ret = options.swipe.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection), ret === !1)) return !1; switch (direction) { case LEFT: $element.trigger("swipeLeft", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeLeft && (ret = options.swipeLeft.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection)); break; case RIGHT: $element.trigger("swipeRight", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeRight && (ret = options.swipeRight.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection)); break; case UP: $element.trigger("swipeUp", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeUp && (ret = options.swipeUp.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection)); break; case DOWN: $element.trigger("swipeDown", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeDown && (ret = options.swipeDown.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection)) } } } if (gesture == PINCH) { if ($element.trigger("pinchStatus", [phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]), options.pinchStatus && (ret = options.pinchStatus.call($element, event, phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData), ret === !1)) return !1; if (phase == PHASE_END && validatePinch()) switch (pinchDirection) { case IN: $element.trigger("pinchIn", [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]), options.pinchIn && (ret = options.pinchIn.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData)); break; case OUT: $element.trigger("pinchOut", [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]), options.pinchOut && (ret = options.pinchOut.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData)) } } return gesture == TAP ? phase !== PHASE_CANCEL && phase !== PHASE_END || (clearTimeout(singleTapTimeout), clearTimeout(holdTimeout), hasDoubleTap() && !inDoubleTap() ? (doubleTapStartTime = getTimeStamp(), singleTapTimeout = setTimeout($.proxy(function () { doubleTapStartTime = null, $element.trigger("tap", [event.target]), options.tap && (ret = options.tap.call($element, event, event.target)) }, this), options.doubleTapThreshold)) : (doubleTapStartTime = null, $element.trigger("tap", [event.target]), options.tap && (ret = options.tap.call($element, event, event.target)))) : gesture == DOUBLE_TAP ? phase !== PHASE_CANCEL && phase !== PHASE_END || (clearTimeout(singleTapTimeout), clearTimeout(holdTimeout), doubleTapStartTime = null, $element.trigger("doubletap", [event.target]), options.doubleTap && (ret = options.doubleTap.call($element, event, event.target))) : gesture == LONG_TAP && (phase !== PHASE_CANCEL && phase !== PHASE_END || (clearTimeout(singleTapTimeout), doubleTapStartTime = null, $element.trigger("longtap", [event.target]), options.longTap && (ret = options.longTap.call($element, event, event.target)))), ret } function validateSwipeDistance() { var valid = !0; return null !== options.threshold && (valid = distance >= options.threshold), valid } function didSwipeBackToCancel() { var cancelled = !1; return null !== options.cancelThreshold && null !== direction && (cancelled = getMaxDistance(direction) - distance >= options.cancelThreshold), cancelled } function validatePinchDistance() { return null !== options.pinchThreshold ? pinchDistance >= options.pinchThreshold : !0 } function validateSwipeTime() { var result; return result = options.maxTimeThreshold ? !(duration >= options.maxTimeThreshold) : !0 } function validateDefaultEvent(jqEvent, direction) { if (options.preventDefaultEvents !== !1) if (options.allowPageScroll === NONE) jqEvent.preventDefault(); else { var auto = options.allowPageScroll === AUTO; switch (direction) { case LEFT: (options.swipeLeft && auto || !auto && options.allowPageScroll != HORIZONTAL) && jqEvent.preventDefault(); break; case RIGHT: (options.swipeRight && auto || !auto && options.allowPageScroll != HORIZONTAL) && jqEvent.preventDefault(); break; case UP: (options.swipeUp && auto || !auto && options.allowPageScroll != VERTICAL) && jqEvent.preventDefault(); break; case DOWN: (options.swipeDown && auto || !auto && options.allowPageScroll != VERTICAL) && jqEvent.preventDefault(); break; case NONE: } } } function validatePinch() { var hasCorrectFingerCount = validateFingers(), hasEndPoint = validateEndPoint(), hasCorrectDistance = validatePinchDistance(); return hasCorrectFingerCount && hasEndPoint && hasCorrectDistance } function hasPinches() { return !!(options.pinchStatus || options.pinchIn || options.pinchOut) } function didPinch() { return !(!validatePinch() || !hasPinches()) } function validateSwipe() { var hasValidTime = validateSwipeTime(), hasValidDistance = validateSwipeDistance(), hasCorrectFingerCount = validateFingers(), hasEndPoint = validateEndPoint(), didCancel = didSwipeBackToCancel(), valid = !didCancel && hasEndPoint && hasCorrectFingerCount && hasValidDistance && hasValidTime; return valid } function hasSwipes() { return !!(options.swipe || options.swipeStatus || options.swipeLeft || options.swipeRight || options.swipeUp || options.swipeDown) } function didSwipe() { return !(!validateSwipe() || !hasSwipes()) } function validateFingers() { return fingerCount === options.fingers || options.fingers === ALL_FINGERS || !SUPPORTS_TOUCH } function validateEndPoint() { return 0 !== fingerData[0].end.x } function hasTap() { return !!options.tap } function hasDoubleTap() { return !!options.doubleTap } function hasLongTap() { return !!options.longTap } function validateDoubleTap() { if (null == doubleTapStartTime) return !1; var now = getTimeStamp(); return hasDoubleTap() && now - doubleTapStartTime <= options.doubleTapThreshold } function inDoubleTap() { return validateDoubleTap() } function validateTap() { return (1 === fingerCount || !SUPPORTS_TOUCH) && (isNaN(distance) || distance < options.threshold) } function validateLongTap() { return duration > options.longTapThreshold && DOUBLE_TAP_THRESHOLD > distance } function didTap() { return !(!validateTap() || !hasTap()) } function didDoubleTap() { return !(!validateDoubleTap() || !hasDoubleTap()) } function didLongTap() { return !(!validateLongTap() || !hasLongTap()) } function startMultiFingerRelease(event) { previousTouchEndTime = getTimeStamp(), fingerCountAtRelease = event.touches.length + 1 } function cancelMultiFingerRelease() { previousTouchEndTime = 0, fingerCountAtRelease = 0 } function inMultiFingerRelease() { var withinThreshold = !1; if (previousTouchEndTime) { var diff = getTimeStamp() - previousTouchEndTime; diff <= options.fingerReleaseThreshold && (withinThreshold = !0) } return withinThreshold } function getTouchInProgress() { return !($element.data(PLUGIN_NS + "_intouch") !== !0) } function setTouchInProgress(val) { $element && (val === !0 ? ($element.bind(MOVE_EV, touchMove), $element.bind(END_EV, touchEnd), LEAVE_EV && $element.bind(LEAVE_EV, touchLeave)) : ($element.unbind(MOVE_EV, touchMove, !1), $element.unbind(END_EV, touchEnd, !1), LEAVE_EV && $element.unbind(LEAVE_EV, touchLeave, !1)), $element.data(PLUGIN_NS + "_intouch", val === !0)) } function createFingerData(id, evt) { var f = { start: { x: 0, y: 0 }, last: { x: 0, y: 0 }, end: { x: 0, y: 0 } }; return f.start.x = f.last.x = f.end.x = evt.pageX || evt.clientX, f.start.y = f.last.y = f.end.y = evt.pageY || evt.clientY, fingerData[id] = f, f } function updateFingerData(evt) { var id = void 0 !== evt.identifier ? evt.identifier : 0, f = getFingerData(id); return null === f && (f = createFingerData(id, evt)), f.last.x = f.end.x, f.last.y = f.end.y, f.end.x = evt.pageX || evt.clientX, f.end.y = evt.pageY || evt.clientY, f } function getFingerData(id) { return fingerData[id] || null } function setMaxDistance(direction, distance) { direction != NONE && (distance = Math.max(distance, getMaxDistance(direction)), maximumsMap[direction].distance = distance) } function getMaxDistance(direction) { return maximumsMap[direction] ? maximumsMap[direction].distance : void 0 } function createMaximumsData() { var maxData = {}; return maxData[LEFT] = createMaximumVO(LEFT), maxData[RIGHT] = createMaximumVO(RIGHT), maxData[UP] = createMaximumVO(UP), maxData[DOWN] = createMaximumVO(DOWN), maxData } function createMaximumVO(dir) { return { direction: dir, distance: 0 } } function calculateDuration() { return endTime - startTime } function calculateTouchesDistance(startPoint, endPoint) { var diffX = Math.abs(startPoint.x - endPoint.x), diffY = Math.abs(startPoint.y - endPoint.y); return Math.round(Math.sqrt(diffX * diffX + diffY * diffY)) } function calculatePinchZoom(startDistance, endDistance) { var percent = endDistance / startDistance * 1; return percent.toFixed(2) } function calculatePinchDirection() { return 1 > pinchZoom ? OUT : IN } function calculateDistance(startPoint, endPoint) { return Math.round(Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2))) } function calculateAngle(startPoint, endPoint) { var x = startPoint.x - endPoint.x, y = endPoint.y - startPoint.y, r = Math.atan2(y, x), angle = Math.round(180 * r / Math.PI); return 0 > angle && (angle = 360 - Math.abs(angle)), angle } function calculateDirection(startPoint, endPoint) { if (comparePoints(startPoint, endPoint)) return NONE; var angle = calculateAngle(startPoint, endPoint); return 45 >= angle && angle >= 0 ? LEFT : 360 >= angle && angle >= 315 ? LEFT : angle >= 135 && 225 >= angle ? RIGHT : angle > 45 && 135 > angle ? DOWN : UP } function getTimeStamp() { var now = new Date; return now.getTime() } function getbounds(el) { el = $(el); var offset = el.offset(), bounds = { left: offset.left, right: offset.left + el.outerWidth(), top: offset.top, bottom: offset.top + el.outerHeight() }; return bounds } function isInBounds(point, bounds) { return point.x > bounds.left && point.x < bounds.right && point.y > bounds.top && point.y < bounds.bottom } function comparePoints(pointA, pointB) { return pointA.x == pointB.x && pointA.y == pointB.y } var options = $.extend({}, options), useTouchEvents = SUPPORTS_TOUCH || SUPPORTS_POINTER || !options.fallbackToMouseEvents, START_EV = useTouchEvents ? SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown", MOVE_EV = useTouchEvents ? SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove", END_EV = useTouchEvents ? SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup", LEAVE_EV = useTouchEvents ? SUPPORTS_POINTER ? "mouseleave" : null : "mouseleave", CANCEL_EV = SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerCancel" : "pointercancel" : "touchcancel", distance = 0, direction = null, currentDirection = null, duration = 0, startTouchesDistance = 0, endTouchesDistance = 0, pinchZoom = 1, pinchDistance = 0, pinchDirection = 0, maximumsMap = null, $element = $(element), phase = "start", fingerCount = 0, fingerData = {}, startTime = 0, endTime = 0, previousTouchEndTime = 0, fingerCountAtRelease = 0, doubleTapStartTime = 0, singleTapTimeout = null, holdTimeout = null; try { $element.bind(START_EV, touchStart), $element.bind(CANCEL_EV, touchCancel) } catch (e) { $.error("events not supported " + START_EV + "," + CANCEL_EV + " on jQuery.swipe") } this.enable = function () { return this.disable(), $element.bind(START_EV, touchStart), $element.bind(CANCEL_EV, touchCancel), $element }, this.disable = function () { return removeListeners(), $element }, this.destroy = function () { removeListeners(), $element.data(PLUGIN_NS, null), $element = null }, this.option = function (property, value) { if ("object" == typeof property) options = $.extend(options, property); else if (void 0 !== options[property]) { if (void 0 === value) return options[property]; options[property] = value } else { if (!property) return options; $.error("Option " + property + " does not exist on jQuery.swipe.options") } return null } } var VERSION = "1.6.17", LEFT = "left", RIGHT = "right", UP = "up", DOWN = "down", IN = "in", OUT = "out", NONE = "none", AUTO = "auto", SWIPE = "swipe", PINCH = "pinch", TAP = "tap", DOUBLE_TAP = "doubletap", LONG_TAP = "longtap", HORIZONTAL = "horizontal", VERTICAL = "vertical", ALL_FINGERS = "all", DOUBLE_TAP_THRESHOLD = 10, PHASE_START = "start", PHASE_MOVE = "move", PHASE_END = "end", PHASE_CANCEL = "cancel", SUPPORTS_TOUCH = "ontouchstart" in window, SUPPORTS_POINTER_IE10 = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !SUPPORTS_TOUCH, SUPPORTS_POINTER = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !SUPPORTS_TOUCH, PLUGIN_NS = "TouchSwipe", defaults = { fingers: 1, threshold: 75, cancelThreshold: null, pinchThreshold: 20, maxTimeThreshold: null, fingerReleaseThreshold: 250, longTapThreshold: 500, doubleTapThreshold: 200, swipe: null, swipeLeft: null, swipeRight: null, swipeUp: null, swipeDown: null, swipeStatus: null, pinchIn: null, pinchOut: null, pinchStatus: null, click: null, tap: null, doubleTap: null, longTap: null, hold: null, triggerOnTouchEnd: !0, triggerOnTouchLeave: !1, allowPageScroll: "auto", fallbackToMouseEvents: !0, excludedElements: ".noSwipe", preventDefaultEvents: !0 }; $.fn.swipe = function (method) { var $this = $(this), plugin = $this.data(PLUGIN_NS); if (plugin && "string" == typeof method) { if (plugin[method]) return plugin[method].apply(plugin, Array.prototype.slice.call(arguments, 1)); $.error("Method " + method + " does not exist on jQuery.swipe") } else if (plugin && "object" == typeof method) plugin.option.apply(plugin, arguments); else if (!(plugin || "object" != typeof method && method)) return init.apply(this, arguments); return $this }, $.fn.swipe.version = VERSION, $.fn.swipe.defaults = defaults, $.fn.swipe.phases = { PHASE_START: PHASE_START, PHASE_MOVE: PHASE_MOVE, PHASE_END: PHASE_END, PHASE_CANCEL: PHASE_CANCEL }, $.fn.swipe.directions = { LEFT: LEFT, RIGHT: RIGHT, UP: UP, DOWN: DOWN, IN: IN, OUT: OUT }, $.fn.swipe.pageScroll = { NONE: NONE, HORIZONTAL: HORIZONTAL, VERTICAL: VERTICAL, AUTO: AUTO }, $.fn.swipe.fingers = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5, ALL: ALL_FINGERS } });


