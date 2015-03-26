Router.route('/', {name: 'landing'});
Router.route('/signin');
Router.route('/app');
Router.route('/addTicket');

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
    only: ['signin', 'landing']
});

Router.onBeforeAction(function () {
	var menu = document.getElementById('menu');
	if(menu){
		menu.style.display = 'none';
	}
    if (!Meteor.userId()) {
        return this.redirect('/signin');
    } else {
        return this.next();
    }
}, {
    except: ['signin', 'landing']
});
