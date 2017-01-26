import { version } from '../../package.json';
import { Router } from 'express';
import markets from './markets';

export default ({ config, db }) => {
	let api = Router();

	// mount the markets resource
	api.use('/markets', markets({ config, db }));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
