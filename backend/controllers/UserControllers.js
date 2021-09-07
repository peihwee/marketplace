
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { UserSchema } from '../models/UserModel.js';
import { generateToken } from '../utils/GenerateToken.js';
//Update
const User = mongoose.model('User', UserSchema);

export const addNewUser = (req, res) => {
    User.findOne(
        {
            'email': req.body.email
        })
        .then(function (user) {
            if (user == null) 
            {
                req.body.password = bcrypt.hashSync(req.body.password, 8);
                let newUser = new User(req.body);

                newUser.save((err, User) => {
                    if(err)
                    {
                        res.send(err);
                    }
                    res.json(User);
                });
            }
            else
            {
                res.json({message: 'This email is already in use'});
            }
        }
    );
    
    
};

export const getUsers = (req, res) => {
    User.find({}, (err, User) => {
        if(err)
        {
            res.send(err);
        }
        res.json(User);
    });
};

export const getUserWithID = (req, res) => {
    User.findById(req.params.userId, (err, User) => {
        if(err)
        {
            res.send(err);
        }
        res.json(User);
    });
};

export const updateUser = (req, res) => {
    User.findOneAndUpdate({_id: req.params.UserId}, req.body, {new: true}, (err, User) => {
        if(err)
        {
            res.send(err);
        }
        res.json(User);
    });
};

export const deleteUser = (req, res) => {
    User.remove({_id: req.params.UserId}, (err, User) => {
        if(err)
        {
            res.send(err);
        }
        res.json({message: 'Successfully deleted User'});
    });
};

export const signInUser = (req, res) => {
    User.findOne(
        {
            'email': req.body.email
        })
        .then(function (user) {
            if (user != null) 
            {
                if(bcrypt.compareSync(req.body.password, user.password))
                {
                    res.send({
                        _id: user._id,
                        name: user.name,
                        email: user.email,
                        isAdmin: user.isAdmin,
                        token: generateToken(user),

                    });
                    return;
                }
                res.status(401).send({message: 'Invalid email or password'});
            }
            else
            {
                res.json({message: 'No such user'});
            }

            if(err)
            {
                res.send(err);
            }
        }
    );
};


