Package.describe({
	name: 'konecty:user-presence',
	summary: 'Track user status',
	version: '2.2.0',
	git: 'https://github.com/Konecty/meteor-user-presence'
});

Package.onUse(function(api) {
	api.versionsFrom('1.0.2.1');

	api.use('nooitaf:colors@1.1.2_1');
	api.use('underscore');
	api.use('tracker');

	api.addFiles('common/common.js');
	api.addFiles('server/server.js', ['server']);
	api.addFiles('server/monitor.js', ['server']);
	api.addFiles('client/client.js', ['client']);

	api.export(['UserPresence'], ['server', 'client']);
	api.export(['UserPresenceMonitor', 'UserPresenceEvents'], ['server']);
});

Package.onTest(function(api) {
	api.use('tinytest');
	api.use('konecty:user-presence');
	api.addFiles('konecty:user-presence-tests.js');
});
