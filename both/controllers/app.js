AppController = RootController.extend({
	waitOn: function () {
		return this.subscribe('tickets');
	},
	data: {
		tickets: Tickets.find({})
	}
});

AppController.events({
	"click #menuBtn": function (e, tmpl) {
		if (window.location.pathname == '/') {
			window.location.href = '/app';
		}
		var menu = document.getElementById('menu');
		menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
	}
});

if (Meteor.isClient) {
	Template.app.helpers({
		mapOptions: function () {
			// Make sure the maps API has loaded
			if (GoogleMaps.loaded()) {
				// Map initialization options
				return {
					center: new google.maps.LatLng(51.41604, -0.75398),
					zoom: 8,
					disableDefaultUI: true
				};
			}
		}
	});
}

Router.onBeforeAction(function () {
	GoogleMaps.load();
	this.next();
}, {
	only: ['app']
});
