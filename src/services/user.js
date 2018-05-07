import UserRepository from '../repository/user';

export default class UserService {
	
	constructor() {
		this.userRepository = new UserRepository();
	}

	getUsers() {
		return this.userRepository.getUsers();
	}
}
