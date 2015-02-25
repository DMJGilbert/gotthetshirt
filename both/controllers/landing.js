LandingController = RootController.extend({
	data: {

	}
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
