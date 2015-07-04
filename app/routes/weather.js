import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var APIKEY = "8b998d2998299c74dac89a3e4d264972";
    var forecastAPI = "https://api.forecast.io/forecast/" + APIKEY + "/" + "34.852244,-82.399994";

    Ember.$.ajax({
      url: forecastAPI,
      dataType: "jsonp"
      }).done(function( data ) {
        console.log(data);
    });

    //https://api.forecast.io/forecast/APIKEY/LATITUDE,LONGITUDE
    //"http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"
  }

   // serialize: function(model) {
   //  var location = '34.852244,-82.399994';
   //   return location;
  //{ location_id: model.latitude + "," + model.longitude };
   //}
});

//var forecastKey = '8b998d2998299c74dac89a3e4d264972';
//var var forecastUrl = "https://api.forecast.io/forecast/" + forecastKey + "/LATITUDE,LONGITUDE";
// query for time: https://api.forecast.io/forecast/APIKEY/LATITUDE,LONGITUDE,TIME
// time format: [YYYY]-[MM]-[DD]T[HH]:[MM]:[SS](optional: z(GMT) or {+,-}[HH][MM] offset)


// $.ajax({
//     url: 'forecastUrl,
//     method: 'POST',
//     dataType: 'jsonp',
//     success: function(data){
//       console.log('success: '+ data);
//     }
//   });


  // var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  // $.getJSON( flickerAPI, {
  //   tags: "mount rainier",
  //   tagmode: "any",
  //   format: "json"
  // })
  //   .done(function( data ) {

  //   });

