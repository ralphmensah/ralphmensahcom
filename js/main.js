let modal = document.getElementById('simpleModal');
let modalBtn = document.getElementById('modalbtn');
let closeBtn = document.getElementsByClassName('closeBtn')[0];

modalBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', outSideClick);

// Function to open modal
function openModal(){
modal.style.display = 'block';
}

// Function to close modal
function closeModal(){
    modal.style.display = 'none';
}

//function to close if click outside
function outSideClick(e){
    if(e.target ===  modal){
        modal.style.display = 'none';
    }
}




!(function (e) {
	"use strict";
	e(window).load(function () {
		e("#loader").fadeOut("slow", function () {
			e("#preloader").delay(100).fadeOut("slow");
		});
	}),
		setTimeout(function () {
			e("#intro h1").fitText(1, {
				minFontSize: "42px",
				maxFontSize: "84px",
			});
		}, 100),
		e(".fluid-video-wrapper").fitVids(),
		e("#owl-slider").owlCarousel({
			navigation: !1,
			pagination: !0,
			itemsCustom: [
				[0, 1],
				[700, 2],
				[960, 3],
			],
			navigationText: !1,
		}),
		e(".alert-box").on("click", ".close", function () {
			e(this).parent().fadeOut(500);
		});
	var n = e("#stats"),
		t = e(".stat-count");
	n.waypoint({
		handler: function (n) {
			"down" === n &&
				t.each(function () {
					var n = e(this);
					e({ Counter: 0 }).animate(
						{ Counter: n.text() },
						{
							duration: 4e3,
							easing: "swing",
							step: function (e) {
								n.text(Math.ceil(e));
							},
						}
					);
				}),
				this.destroy();
		},
		offset: "90%",
	});
	var a = e("#folio-wrapper");
	a.imagesLoaded(function () {
		a.masonry({ itemSelector: ".folio-item", resize: !0 });
	}),
		e(".item-wrap a").magnificPopup({
			type: "inline",
			fixedContentPos: !1,
			removalDelay: 300,
			showCloseBtn: !1,
			mainClass: "mfp-fade",
		}),
		e(document).on("click", ".popup-modal-dismiss", function (n) {
			n.preventDefault(), e.magnificPopup.close();
		});
	var i = e(".menu-toggle"),
		o = e(".main-navigation");
	i.on("click", function (e) {
		e.preventDefault(), i.toggleClass("is-clicked"), o.slideToggle();
	}),
		o.find("li a").on("click", function () {
			i.toggleClass("is-clicked"), o.fadeOut();
		});
	var s = e("section"),
		r = e("#main-nav-wrap li a");
	s.waypoint({
		handler: function (n) {
			var t;
			(t = e("section#" + this.element.id)), "up" === n && (t = t.prev());
			var a = e('#main-nav-wrap a[href="#' + t.attr("id") + '"]');
			r.parent().removeClass("current"), a.parent().addClass("current");
		},
		offset: "25%",
	}),
		e(".smoothscroll").on("click", function (n) {
			n.preventDefault();
			var t = this.hash,
				a = e(t);
			e("html, body")
				.stop()
				.animate(
					{ scrollTop: a.offset().top },
					800,
					"swing",
					function () {
						window.location.hash = t;
					}
				);
		}),
		e("input, textarea, select").placeholder(),
		e("#contactForm").validate({
			submitHandler: function (n) {
				var t = e("#submit-loader");
				e.ajax({
					type: "POST",
					url: "inc/sendEmail.php",
					data: e(n).serialize(),
					beforeSend: function () {
						t.fadeIn();
					},
					success: function (n) {
						"OK" == n
							? (t.fadeOut(),
							  e("#message-warning").hide(),
							  e("#contactForm").fadeOut(),
							  e("#message-success").fadeIn())
							: (t.fadeOut(),
							  e("#message-warning").html(n),
							  e("#message-warning").fadeIn());
					},
					error: function () {
						t.fadeOut(),
							e("#message-warning").html(
								"Something went wrong. Please try again."
							),
							e("#message-warning").fadeIn();
					},
				});
			},
		});
	jQuery(window).scroll(function () {
		e("#header-search").hasClass("is-visible") ||
			(jQuery(window).scrollTop() >= 300
				? jQuery("#go-top").fadeIn(400)
				: jQuery("#go-top").fadeOut(400));
	});
})(jQuery);
