import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var google;
declare var marker;
declare var placeSearch, autocomplete;
var componentForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  country: 'long_name',
  postal_code: 'short_name'
};
@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  map:any;
  placeSearch:any;
  autocomplete:any;
  componentForm:any = {
    street_number: 'short_name',
    route: 'long_name',
    locality: 'long_name',
    administrative_area_level_1: 'short_name',
    country: 'long_name',
    postal_code: 'short_name'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    this.initMap();
    this.addMarkers();
    this.initAutocomplete();
  }

  initMap(){
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }

  addMarkers(){
    var locations = [
          ['Title A', 3.180967,101.715546, 1],
          ['Title B', 3.200848,101.616669, 2],
          ['Title C', 3.147372,101.597443, 3],
          ['Title D', 3.19125,101.710052, 4]
    ];

    var infowindow = new google.maps.InfoWindow;

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: this.map
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(this.map, marker);

                if (marker.getAnimation() !== null) {
                  marker.setAnimation(null);
                } else {
                  marker.setAnimation(google.maps.Animation.BOUNCE);
                }
            }
        })(marker, i));
    }
  }

  initAutocomplete() {
    // // Create the autocomplete object, restricting the search to geographical
    // // location types.
    // let input_from = (<HTMLInputElement>document.getElementById("autocomplete"));
    // autocomplete = new google.maps.places.Autocomplete(
    //     /** @type {!HTMLInputElement} */input_from,
    //     {types: ['']});

    // // When the user selects an address from the dropdown, populate the address
    // // fields in the form.
    // autocomplete.addListener('place_changed', this.fillInAddress);


    // Script work
    let input_from = (<HTMLInputElement>document.getElementById("autocomplete"));

    let options = {
      types: []
    };

    let autocomplete = new google.maps.places.Autocomplete(input_from, options);
   
    autocomplete.addListener(autocomplete, 'place_changed', function() {

      let place = autocomplete.getPlace();
      let geometry = place.geometry;

      if ((geometry) !== undefined) {
        console.log(place.name);
        console.log(geometry.location.lng());
        console.log(geometry.location.lat());
      } else {
        console.log({name:"",latitude:0,longitude:0});
      }

    });

  }

  fillInAddress() {
    // Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();

    for (var component in componentForm) {
      (<HTMLInputElement>document.getElementById(component)).value = '';
      (<HTMLInputElement>document.getElementById(component)).disabled = false;
    }

    // Get each component of the address from the place details
    // and fill the corresponding field on the form.
    for (var i = 0; i < place.address_components.length; i++) {
      var addressType = place.address_components[i].types[0];
      if (componentForm[addressType]) {
        var val = place.address_components[i][componentForm[addressType]];
        (<HTMLInputElement>document.getElementById(addressType)).value = val;
      }
    }
  }

  localiseme(){
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 6
    });
    var infoWindow = new google.maps.InfoWindow({map: map});

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        map.setCenter(pos);
      }, function() {
        this.handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      this.handleLocationError(false, infoWindow, map.getCenter());
    }
  }

  handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
  }

  drawPath(){
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();
    var haight = new google.maps.LatLng(3.180967, 101.715546);
    var oceanBeach = new google.maps.LatLng(3.200848, 101.616669);
    var mapOptions = {
      zoom: 14,
      center: haight
    }
    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    directionsDisplay.setMap(this.map);

    var request = {
        origin: haight,
        destination: oceanBeach,
        provideRouteAlternatives: true,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };
    
    directionsService.route(request, function(response, status) {
      if (status == 'OK') {
        directionsDisplay.setDirections(response);
      }
    });
  }
}
