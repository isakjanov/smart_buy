import db from '../utils/db';

export default class UserRepository {
	
	getUsers() {
		return db.any('SELECT * FROM users');
	}
}
