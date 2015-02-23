Router.route('/', {
    name: 'landing'
});

Router.onBeforeAction(function () {
    if (Meteor.isCordova) {
        if (!Meteor.user() && this.ready()) {
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
    if (!Meteor.user() && this.ready()) {
        return this.redirect('/signin');
    } else {
        return this.next();
    }
}, {
    except: ['signin', 'landing']
});
Router.route('/signin');
Router.route('/app');
