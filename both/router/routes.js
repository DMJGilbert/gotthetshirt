Router.route('/', {
    name: 'landing'
});

Router.onBeforeAction(function () {
    if (Meteor.isCordova) {
        if (!Meteor.userId()) {
            return this.redirect('/signin');
        } else {
            return this.redirect('/app');
        }
    } else {
        return this.next();
    }
}, {
    only: ['landing']
});

Router.onBeforeAction(function () {
    if (Meteor.userId()) {
        return this.redirect('/app');
    } else {
        return this.next();
    }
}, {
    only: ['signin']
});

Router.onBeforeAction(function () {
    if (!Meteor.userId()) {
        console.log("Please signin to view this page")
        return this.redirect('/signin');
    } else {
        return this.next();
    }
}, {
    except: ['signin', 'landing']
});
Router.route('/signin');
Router.route('/app');
