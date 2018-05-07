import express from 'express';
import UserService from './services/user';

const app = express();
const userService = new UserService();

app.get('/', (req, res) => {
	userService.getUsers()
		.then( users => res.send({ users }));
});

app.listen(3000, () => console.log('Example app listening on port 3000'));
