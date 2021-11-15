class UserModel {
    public email: string;

    constructor(payload: { email: string }) {
        this.email = payload?.email;
    }
}

export default UserModel;
