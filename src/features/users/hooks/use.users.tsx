import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../core/store/store";
import { User } from "../models/user.model";
import { setError } from "../../../reducer/error.slice";
import { login } from "../reducer/user.slice";
import { UsersApiRepo } from "../services/users.api.repo";

export function useUsers(repo: UsersApiRepo) {
  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch<AppDispatch>();
  const loginUser = async (info: Partial<User>) => {
    try {
      const data = await repo.loginUserRepo(info);
      dispatch(login(data.results[0]));
    } catch (error) {
      dispatch(setError((error as Error).message));
    }
  };
  const register = async (info: Partial<User>) => {
    try {
      await repo.registerUserRepo(info);
    } catch (error) {
      dispatch(setError((error as Error).message));
    }
  };

  return {
    users,
    loginUser,
    register,
  };
}
