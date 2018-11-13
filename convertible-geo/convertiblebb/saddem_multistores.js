var Qurl;(function(){"use strict";function t(){var e=window.location.search,t=[],n={};if(!e){return n}e=e.replace("?","");t=e.split("&");t.forEach(function(e){var t=decodeURIComponent(e).split("="),r=t[0],i=t[1];n[r]=i});return n}function n(e,n){var s=t(),o=window.location.search;if(n===false){delete s[e]}else{s[e]=n}r(i(s));return s}function r(e){if(history.pushState){history.pushState({},document.title,e)}}function i(e){var t=[];Object.keys(e).forEach(function(n){if(typeof e[n]==="undefined"){t.push(n)}else{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]||""))}});if(t.length===0){return"?"}else{return"?"+t.join("&")}}var e;Qurl=function(){if(!(this instanceof Qurl)){return new Qurl}};e=Qurl.prototype;e.query=function(e,r){if(!e){return t()}if(e&&typeof r==="undefined"){return t()[e]}if(e&&typeof r!=="undefined"){return n(e,r)}};Qurl.create=Qurl})()

$(document).ready(function(){
url = Qurl.create();

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setPosition,showError);
    } else { 
    }
}

function setPosition(position){
	url.query("lat", position.coords.latitude);
	url.query("long", position.coords.longitude);

	/*if(typeof(timeout) != "undefined"){
		clearTimeout(timeout) ;
	}
	timeout = setTimeout(function(){*/
		updateList(url.query()) ;
	//},2000) ;
}
function showError (error) {
}
//getLocation() ;
function setAllMap(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}


function updateList(params){
	$('#main-page-magasins').html('<img src="'+SITE_URL+'skin/frontend/default/Grafikdev/images/ajax-loader.gif" alt="loading" style="display:block;margin:0 auto;" />');
	$.ajax({
  		url: SITE_URL+"magasins/ajax/magasins",
  		data: params,
  		dataType: "html"
	}).done(function(data){
		if(data.search('Aucune magasin') > -1){
			if ($('.store-alert').length) {
				$('.store-alert').html("<i>!</i> Aucune magasin trouvée");
			}else{
				$('<p>').addClass('store-alert').html("<i>!</i> Aucune magasin trouvée").appendTo('.store-first-bk');
			}
			$("#main-page-magasins").html('');
			return false;
		}
		if(data.search('pas reconnu') > -1){
			if ($('.store-alert').length) {
				$('.store-alert').html("Avez vous bien recherché un code postal ou un numéro de département ?");
			}else{
				$('<p>').addClass('store-alert').html("Avez vous bien recherché un code postal ou un numéro de département ?").appendTo('.store-first-bk');
			}
			$("#main-page-magasins").html('');
			return false;
		}
		if ($('.store-alert').length) {
				$('.store-alert').remove();
			}
		$("#main-page-magasins").html($(data)) ;
		if (url.query("lat")) {
			$('.store-distance').show();
		};
		var h1 = $('.store-col1').height();
	    var h2 = $('.store-col2').height();

	    if (h1 > h2) {
	        $('.store-col2').css('height',h1+'px');
	    };
		setAllMap(null) ;
        var storesdata = [] ;
		$("#main-page-magasins").find('.store-data').each(function( index ) {
		  	storesdata.push([$(this).attr("data-latitude"),$(this).attr("data-longitude"),$(this).attr("data-name")])
			setMarkers(map,storesdata) ;
		}); ;

        function setMarkers(map,storesdata){
            for (var i = 0; i < storesdata.length; i++) {
                var location = storesdata[i];
                var myLatLng = new google.maps.LatLng(location[0], location[1]);
                var marker = new google.maps.Marker({
                    position: myLatLng,
                    map: map,
                    title: location[3]
                });
                markers.push(marker);
          	}
        }
	})
	
}
$(".magasins_filter").change(function(){
	var name = $(this).attr("name") ;
	var val = $(this).val() ;
	var type = $(this).attr("type") ;
	if(type=="checkbox")
	{
		if(this.checked)
			url.query(name, val);
		else 
			url.query(name, false);
	}else {
		if(val.length>=2){
			if(val.length==5){
				url.query(name, val);
			}else{
				url.query(name, val.substr(0,2));
			}
			
		}else{
			url.query(name, false);
		} 
	}
	/*if(typeof(timeout) != "undefined"){
		clearTimeout(timeout) ;
	}
	timeout = setTimeout(function(){*/
		updateList(url.query()) ;
	//},2000) ;
})
}) ;