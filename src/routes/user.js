import express from 'express';
import UserService from '../services/user';

const userService = new UserService();
const router = express.Router();

router.get('/', (req, res) => {
	userService.getUsers()
		.then(users => res.send({ users }));
});

router.post('/create', (req, res) => {
	res.send({ action: 'create user'});
});

export { router as userRouter };
