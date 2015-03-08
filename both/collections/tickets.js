Tickets = new Mongo.Collection('tickets');

Tickets.helpers({

});

Tickets.before.insert(function (userId, doc) {
	doc.userId = userId;
	doc.createdAt = moment().toDate();
});
