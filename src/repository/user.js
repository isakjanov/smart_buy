import db from '../utils/db';

export default class UserRepository {
	
	getUsers() {
		return db.any('SELECT * FROM users');
	}

	createUser({email, name, password}) {
		return db.query('INSERT INTO users(email, name, password) VALUES($1, $2, $3) RETURNING id', [email, name, password])
	}
}
