$(document).ready(function() {

	var ascensor = $('#sections').ascensor({
		ascensorFloorName: ['home', 'crew', 'yachts', 'travel','contacts']
	});

	var ascensorInstance = ascensor.data('ascensor');

	$(window).bind('mousewheel DOMMouseScroll', function(event){
	    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
	        ascensorInstance.prev();
	    }
	    else {
	        ascensorInstance.next();
	    }
	});

	// var memberPhoto = $(document).find('.member__photo');
	
	// function setTitle() {
	// 	this.attr('title', this.siblings('.member__name').text());
	// }

	// memberPhoto.setTitle();

});