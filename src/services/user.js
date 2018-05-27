import UserRepository from '../repository/user';

export default class UserService {
	
	constructor() {
		this.userRepository = new UserRepository();
	}

	getUsers() {
		return this.userRepository.getUsers();
	}

	createUser({email, name, password}) {
		if (!email || !name || !password) {
			throw new Error('Wrong input parameters');
		}

		return this.userRepository.createUser({email, name, password});
	}
}
