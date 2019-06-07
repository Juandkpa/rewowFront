export class User {
    public name: string;
    public email: string;

    constructor(
        user ?: User
    ) {
        Object.assign(this, user);
    }

}