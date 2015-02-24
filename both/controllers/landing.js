LandingController = RootController.extend({
	data: {

	}
});

//Template.landing.rendered(function () {
//	var menu = document.getElementById('menu');
//	if(menu){
//		menu.style.display = 'none';
//	}
//	this.next();
//});

Router.onBeforeAction(function () {
	var menu = document.getElementById('menu');
	if(menu){
		menu.style.display = 'none';
	}
	this.next();
}, {
	only: ['landing', 'signin']
});

LandingController.events({
	"submit form#subscribe": function (e, tmpl) {
		e.preventDefault();
		var target = e.target;
		var email = $(target).find('input[type=email]').val(); // fetch the input value
		console.log(email)
		Meteor.call('insertSubscriber', email, function (err, id) {
			if (err) {
				//TODO
			} else {
				$(target).find('input[type=email]').val("");
			}
		})
	}
});
