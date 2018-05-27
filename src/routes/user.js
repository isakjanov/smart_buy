import express from 'express';
import UserService from '../services/user';

const userService = new UserService();
const router = express.Router();

router.get('/', (req, res) => {
	userService.getUsers()
		.then(users => res.send({ users }));
});

router.post('/create', (req, res) => {
	const {email, name, password} = req.body;

	console.log(req.body);

	userService.createUser({email, name, password})
		.then(result => res.send({ result }))
		.catch(error => res.send(error));
});

export { router as userRouter };
