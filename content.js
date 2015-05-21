InboxSDK.load(1.0, 'search-example').then(function(inboxSDK){
	inboxSDK.Router.handleListRoute(inboxSDK.Router.NativeRouteIDs.SEARCH, function(listRouteView){
		var section = listRouteView.addCollapsibleSection({
			title: 'Example App Results',
			tableRows: [
				{
					title: 'You searched for: ' + listRouteView.getParams().query,
					body: 'body',
					shortDetailText: 'extra',
					onClick: function(){
						console.log('hi');
					}
				},
				{
					title: 'Go back to inbox',
					routeID: inboxSDK.Router.NativeRouteIDs.INBOX
				}
			]
		});
	});

});
