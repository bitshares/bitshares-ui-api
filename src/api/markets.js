import resource from 'resource-router-middleware';
import { marketsByChain } from '../models/markets';

export default ({ config, db }) => resource({

	/** Property name to store preloaded entity on `request`. */
	id : 'market',

	/** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */
	load(req, id, callback) {
		let market = marketsByChain[id];
		let err = market ? null : 'Not found';
		callback(err, market);
	},

	// /** GET / - List all entities */
	// index({ params }, res) {
	// 	console.log("get /", params);
	// 	res.json(markets);
	// },

	/** GET /:id - chain_id.substr(0, 10) used to identify the chain */
	read({ market }, res) {
		res.json(market);
	}
});
