RootController = RouteController.extend({
    layoutTemplate: 'rootLayout'
});

RootController.events({
    'click [data-action=logout]': function () {
        AccountsTemplates.logout();
    }
});
