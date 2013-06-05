$(function() {

	if(window.location.hash == "") {
		loadPage('index');
	} else {
		loadPage(window.location.hash.substr(1))
	}

});

jQuery(window).hashchange(function() {

	if(window.location.hash == "") {
		loadPage('index');
	} else {
		loadPage(window.location.hash.substr(1))
	}

})

function loadPage(pagename) {

	$.get('content/' + pagename + '.html', function(data) {
		$('#content').html(data);
	});

}