Meteor.publishComposite("tickets", function () {
	return {
		find: function () {
			return Tickets.find({
				userId: this.userId
			});
		}
	}
});
