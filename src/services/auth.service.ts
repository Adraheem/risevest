import apiInstance, {setAuthToken} from "@/services/api";
import {LoginType, SignupType, User} from "@/types/auth";
import {AxiosResponse} from "axios";
import {store} from "@/redux/store";
import {authActions} from "@/redux/slices/authSlice";

class AuthService {
  public signup(data: SignupType) {
    return new Promise((resolve, reject) => {
      apiInstance.post("/users", data)
        .then(() => {
          resolve(true);
        })
        .catch(err => reject(err));
    })
  }

  public login(data: LoginType) {
    return new Promise((resolve, reject) => {
      apiInstance.post("/sessions", data)
        .then(async (res: AxiosResponse<User>) => {
          setAuthToken(res.data.token);
          store.dispatch(authActions.login());
          resolve(res.data);
        })
        .catch(err => reject(err));
    })
  }

  public getSession(): Promise<User> {
    return new Promise((resolve, reject) => {
      apiInstance.get("/sessions")
        .then(async (res: AxiosResponse<Omit<User, "token">>) => {
          store.dispatch(authActions.login());
          resolve(res.data);
        })
        .catch(err => reject(err));
    })
  }

  public logout() {
    setAuthToken();
    store.dispatch(authActions.logout());
  }

}

const authService = new AuthService();
export default authService;
