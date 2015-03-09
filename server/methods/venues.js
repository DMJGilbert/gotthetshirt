var url = "http://ws.audioscrobbler.com/2.0/?method=venue.search&api_key=";
var api_key = "90421c57b8bbfe9010b9b9295ad5d407";

Meteor.methods({
	'Venues.get': function (params) {
		return Meteor.http.call("GET", url+api_key+"&venue="+params.search+"&format=json");
	}
});