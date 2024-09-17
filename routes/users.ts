import express, {Router} from 'express';

import {
    getUsers,
    getUsersById,
    createUser,
    updateUser,
    deleteUser,
} from '../controllers/users';

const router: Router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUsersById); 
router.post('/', createUser); 
router.put('/:id', updateUser); 
router.delete('/:id', deleteUser); 

export default router;