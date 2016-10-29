mongo.connect(mongoURL, function(){
		console.log('Connected to mongo at: ' + mongoURL);
		var coll = mongo.collection('sell');

		coll.find({}).toArray(function(err, results){
			if (results) {
				logger.log('info','Selected Item exists in cart already!');
				var current_qty = results[0].qty;
				var new_qty = qty + current_qty;

			} else {
				logger.log('info','no items found in items table!');
			}
		});
	});

var transection_id = uuid.v1();