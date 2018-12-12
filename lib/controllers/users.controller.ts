import { Document, Schema, Model, model } from 'mongoose';
import { Request, Response } from 'express';
import { UserInterface } from "../interfaces/user.interface";
import { UsersUtils } from "../utils/users.utils";
import { UserSchema } from "../models/user.model";

const User: Model<UserInterface> = model<UserInterface>('Users', UserSchema);
export class UserController {

    public addNewUser(req: Request, res: Response) {
        let newUser = new User(req.body);

        if (!UsersUtils.validateUser(newUser)) {
            res.send('Validation failed');
            return;
        }

        newUser.save((err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }

    public getUsers (req: Request, res: Response) {
        User.find({}, (err, user) => {
            if(err){
                res.send(err);
            }
            res.json(user);
        });
    }

    public getUserByID (req: Request, res: Response) {
        User.findById(req.params.userId, (err, user) => {
            if(err){
                res.send(err);
            }
            res.json(user);
        });
    }

    public updateUser (req: Request, res: Response) {
        User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, (err, user) => {
            if(err){
                res.send(err);
            }
            res.json(user);
        });
    }

    public deleteUser (req: Request, res: Response) {
        User.remove({ _id: req.params.userId }, (err, user) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted user!'});
        });
    }

}