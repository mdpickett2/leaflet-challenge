//  create map object  

var myMap = L.map("map", {
  center: [41.87, -87.63],
  zoom: 18,

});
console.log("myMap object online")


// creating layer for map

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 16,
  id: 'mapbox.streets',
  accessToken: api_key,
  
  
}).addTo(myMap);

// reference the api endpoint inside url

var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";


//make the geojson call to retrieve data

d3.json(url, function(data) {
    
  
  var feature = data.features;
  
  //for loop to move through function and append markers

  for(var i = 0; i < feature.length; i++) {

  var locationData = feature[i].geometry;

    L.circle([locationData.coordinates[1], locationData.coordinates[0]], {
      color: "red",
      fillColor: "orange",
      fillOpacity: 0.6,
      radius: 50).addTo(myMap);
    }

  
  
  }



});
  





