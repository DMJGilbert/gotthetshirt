LandingController = RouteController.extend({
    layoutTemplate: 'landing'
});

LandingController.events({
    "submit form#subscribe": function (e, tmpl) {
        e.preventDefault();
        var target = e.target;
        var email = $(target).find('input[type=email]').val(); // fetch the input value
        console.log(email)
        Meteor.call('insertSubscriber', email, function (err, id) {
            if (err) {
                Session.set('subscribeStatus', {
                    message: err.reason,
                    class: 'alert-danger'
                })
                console.log(err)
            } else {
                $(target).find('input[type=email]').val("");
                Session.set('subscribeStatus', {
                    message: 'Good call <b>champ</b>! We\'ll keep you updated.',
                    class: 'alert-success'
                })
            }
        })
    }
});
