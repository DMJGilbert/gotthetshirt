SigninController = RootController.extend({
  data: {

  }
});

SigninController.events({
    "click #facebook": function (e, tmpl) {
        Meteor.loginWithFacebook({

        }, function () {

        });
    },
    "click #twitter": function (e, tmpl) {
        Meteor.loginWithTwitter({

        }, function () {

        });
    },
    "click #google": function (e, tmpl) {
        Meteor.loginWithGoogle({

        }, function () {

        });
    },
	"click #weibo": function (e, tmpl) {
        Meteor.loginWithWeibo({

        }, function () {

        });
    }
});
