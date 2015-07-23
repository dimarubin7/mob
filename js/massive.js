  function initialize() {
            var myLatlng = new google.maps.LatLng(49.4310655,32.0487045,12);
            	var marker1 = new google.maps.LatLng(48.5181587, 35.0031031,12);
            	var marker2 = new google.maps.LatLng(49.832689, 24.0122355,12);
            	var marker3 = new google.maps.LatLng(46.459972, 30.7117875,11);
            	var marker4 = new google.maps.LatLng(49.9945914, 36.2858247,11);
            	var marker5 = new google.maps.LatLng(47.9901174, 37.7615206,11);
            	var marker6 = new google.maps.LatLng(47.8556705, 35.1753535,11);
            	var marker7 = new google.maps.LatLng(46.9330645, 32.007997,11);
            	var marker8 = new google.maps.LatLng(49.4105519, 26.9952585,12);
            	var marker9 = new google.maps.LatLng(50.4020355, 30.5326905,10);
            	var marker10 = new google.maps.LatLng(49.234734, 28.4696339,12);
									
            var mapOptions = {

                zoom: 6,
                center: myLatlng,//позиция маркера
                mapTypeId: google.maps.MapTypeId.HYBRID ,
                scrollwheel: true
                //cursor: 'http://maps.gstatic.com/mapfiles/openhand_8_8.cur'
            };

            var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

            var companyPos = new google.maps.LatLng(49.4310655,32.0487045,12);
            var companyMarker = new google.maps.Marker({
                position: companyPos,
                map: map,
                title:"нажми на меня",
                icon:"images/star.png"
            });

            

            var marker = new google.maps.Marker({
			      position:  marker1,
			      map: map,
			      title: '',
			      icon:"images/star.png"
  				});
				
  				var marker = new google.maps.Marker({
			      position:  marker2,
			      map: map,
			      title: 'sfgnsfgnsfgn',
			      icon:"images/star.png"
  				});

  				var marker = new google.maps.Marker({
			      position:  marker3,
			      map: map,
			      title: '',
			      icon:"images/star.png"
  				});
  				var marker = new google.maps.Marker({
			      position:  marker4,
			      map: map,
			      title: '',
			      icon:"images/star.png"
  				});
  				var marker = new google.maps.Marker({
			      position:  marker5,
			      map: map,
			      title: '',
			      icon:"images/star.png"
  				});
  				var marker = new google.maps.Marker({
			      position:  marker6,
			      map: map,
			      title: '',
			      icon:"images/star.png"
  				});
  				var marker = new google.maps.Marker({
			      position:  marker7,
			      map: map,
			      title: '',
			      icon:"images/star.png"
  				});
  				var marker = new google.maps.Marker({
			      position:  marker8,
			      map: map,
			      title: '',
			      icon:"images/star.png"
  				});
  				var marker = new google.maps.Marker({
			      position:  marker9,
			      map: map,
			      title: '',
			      icon:"images/star.png"
  				});
  				var marker = new google.maps.Marker({
			      position:  marker10,
			      map: map,
			      title: '',
			      icon:"images/star.png"
  				});
        }
        google.maps.event.addDomListener(window, 'load', initialize);