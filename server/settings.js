ServiceConfiguration.configurations.remove({
    service: 'facebook'
});
ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: Meteor.settings.facebook.appId,
    secret: Meteor.settings.facebook.secret
});

ServiceConfiguration.configurations.remove({
    service: 'twitter'
});
ServiceConfiguration.configurations.insert({
    service: 'twitter',
    consumerKey: Meteor.settings.twitter.consumerKey,
    secret: Meteor.settings.twitter.secret
});

ServiceConfiguration.configurations.remove({
    service: 'google'
});
ServiceConfiguration.configurations.insert({
    service: 'google',
    clientId: Meteor.settings.google.clientId,
    secret: Meteor.settings.google.secret
});

ServiceConfiguration.configurations.remove({
    service: 'weibo'
});
ServiceConfiguration.configurations.insert({
    service: 'weibo',
    clientId: Meteor.settings.weibo.clientId,
    secret: Meteor.settings.weibo.secret
});
