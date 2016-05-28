function rekindle(from, rFactor) {

	var login = require("facebook-chat-api");
	var count = 0;

	login({email: "FB EMAIL", password: "FB PASSWORD"}, function callback (err, api) {
	    if(err) return console.error(err);
	    
	    api.getThreadList(from, from + 10 + rFactor, function callback (err, arr) {
	    	for (var i = 0; count < rFactor; i++)  {
	    		if (arr[i].hasOwnProperty('participants') && arr[i].formerParticipants.length == 0 && arr[i].participants.length > 2) {
	    			continue;
	    		}
	    		count = count + 1;
	    		var friendID = arr[i].participants[0];
	    		var timestamp = arr[i].timestamp;
	    		api.getUserInfo(friendID, function callback (err, ret) {
	    			if (err) console.error(err);
	    			
	    			for (var prop in ret) {
	    				if (ret.hasOwnProperty(prop)) {
	    					console.log(ret[prop]['name']);
	    				}
	    			}
	    		});
	    	}
	    });
	});
	
}

var start = Math.round(Math.random() * (250 - 100) + 100);
var numFriends = 10;
rekindle(start, numFriends);