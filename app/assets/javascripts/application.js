// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

var x = {
	"picture": {
		"x": 4354,
		"y": 767,
	}
}


$(function() {
	$("img").mousedown(function(e) {
		$(this).css({
			"position": "absolute",
			"top": e.clientY-$(this).height()/2,
			"left": e.clientX-$(this).width()/2
		})

		$.ajax({
		  method: "PATCH",
		  url: $(this).data().url+".json",
		  data: {
			"picture": {
				"x": e.clientX-$(this).width()/2,
				"y":  e.clientY-$(this).height()/2
			}
		  }
		})	


		e.preventDefault();
	})
})
