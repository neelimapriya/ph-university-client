import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";


const Login = () => {
  const dispatch=useAppDispatch()
  const { register, handleSubmit } = useForm();
  const [login,{error}]=useLoginMutation()
  // console.log(data);
  // console.log(error);

  const onSubmit = async(data) => {
    const userInfo={
        id:data.userId,
        password:data.password
    }
    const res=await login(userInfo).unwrap()
    const user=verifyToken(res.data.accessToken)
    console.log(user);
    dispatch(setUser({user:user,token:res.data.accessToken}))
    console.log(res);
  };

  return (
    <form  onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" {...register('userId')}/>
      </div>
      <div>
        <label htmlFor="password">password:</label>
        <input type="text" id="password" {...register('password')}/>
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;
