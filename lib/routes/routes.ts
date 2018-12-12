import { Request, Response } from "express";
import { UserController } from "../controllers/users.controller";

export class Routes {

    public userController: UserController = new UserController();

    public routes(app): void {

        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'Server is up :-)'
                })
            })

        // user
        app.route('/api/v1/users')
        // GET endpoint
            .get(this.userController.getUsers)
            // POST endpoint
            .post(this.userController.addNewUser)

        // Contact detail
        app.route('/api/v1/users/:userId')
        // get specific contact
            .get(this.userController.getUserByID)
            .put(this.userController.updateUser)
            .delete(this.userController.deleteUser)
    }
}