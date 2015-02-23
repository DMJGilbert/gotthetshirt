SigninController = RootController.extend({
  data: {

  }
});

SigninController.events({
    "click #facebook": function (e, tmpl) {
        Meteor.loginWithFacebook();
    },
    "click #twitter": function (e, tmpl) {
        Meteor.loginWithTwitter();
    },
    "click #google": function (e, tmpl) {
        Meteor.loginWithGoogle();
    },
	"click #weibo": function (e, tmpl) {
        Meteor.loginWithWeibo();
    }
});
