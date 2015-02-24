RootController = RouteController.extend({
	layoutTemplate: 'rootLayout'
});

RootController.events({
	'click [data-action=logout]': function () {
		AccountsTemplates.logout();
	},
	"click #menuBtn": function (e, tmpl) {
		if (window.location.pathname == '/') {
			window.location.href = '/app';
		} else {
			var menu = document.getElementById('menu');
			menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
		}
	}
});

RootController.helpers({
	location: function () {
		return window.location.pathname;
	}
})
