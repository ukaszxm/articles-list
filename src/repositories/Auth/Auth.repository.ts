import AuthEndpoints from 'api/endpoints/internal.endpoints';
import { ILogin } from 'shared/interface/login.interface';
import { showNotification } from 'utils/showNotification/showNotification';
import UserModel from 'models/Auth/User.model';
import { IUser } from 'shared/interface/user.interface';
import Cookies from 'universal-cookie';

class AuthRepository {
    private cookies: Cookies;

    constructor() {
        this.cookies = new Cookies();
    }

    login = (params: ILogin): Promise<IUser> => {
        return new Promise((resolve, reject) => {
            AuthEndpoints.login(params)
                .then(({ data }) => {
                    const userModel = new UserModel(data);

                    this.cookies.set('user', userModel);

                    showNotification(data.messages, 'success');
                    resolve(userModel);
                })
                .catch(({ response }) => {
                    showNotification(response.data.messages, 'error');
                    reject(new Error(response.data.messages));
                });
        });
    };

    logout = (): Promise<boolean> => {
        return new Promise((resolve, reject) => {
            AuthEndpoints.logout()
                .then(({ data }) => {
                    this.cookies.remove('user');

                    showNotification(data.messages, 'success');
                    resolve(true);
                })
                .catch(({ response }) => {
                    showNotification(response.data.messages, 'error');
                    reject(new Error(response.data.messages));
                });
        });
    };
}

export default new AuthRepository();
