(function ($) {
	//
	// App
	window.App = function(){ 	

		var onTabSwipe = function(evt){
			var $tabCtrl = $(evt.delegateTarget).prev('.nav.nav-tabs');

			switch(evt.type){
				case 'swipeleft':
					evt.gesture.preventDefault();
					$tabCtrl.find('li.active').next().find('a').tab('show');
					evt.gesture.stopDetect();
					break;
				case 'swiperight':
					evt.gesture.preventDefault();
					$tabCtrl.find('li.active').prev().find('a').tab('show');
					evt.gesture.stopDetect();
					break;
			}
		};

		var init = function(){
			//
			// bind events
			$('.tab-content').hammer().on('swipeleft swiperight','.tab-pane.active', onTabSwipe);	
		};

		return {
			init : init
		};

	}; // window.App


	$(function (){
		var app = new App();
		app.init();
	});
}(jQuery));