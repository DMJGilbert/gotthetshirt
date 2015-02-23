Subscribers = new Meteor.Collection('subscribers');

Meteor.methods({
    insertSubscriber: function (email) {
        var reg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
        if (reg.test(email)) {
            if (Subscribers.find({
                email: email.toLowerCase()
            }).count() == 0) {
                var date = new Date().getTime();
                return Subscribers.insert({
                    email: email.toLowerCase(),
                    joined: date
                });
            }else{
                throw new Meteor.Error(422, 'Email already subscribed.')
            }
        } else {
            throw new Meteor.Error(422, 'Invalid Email. Please try again.')
        }
    }
})
