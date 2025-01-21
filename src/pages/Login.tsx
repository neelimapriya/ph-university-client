/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";


const Login = () => {
  const navigate=useNavigate()
  const dispatch=useAppDispatch()
  const { register, handleSubmit } = useForm();
  const [login]=useLoginMutation()
  // console.log(data);
  // console.log(error);

  const onSubmit = async(data:FieldValues) => {
   const toastId= toast.loading('Logging in')
   try{
    const userInfo={
      id:data.userId,
      password:data.password
  }
  const res=await login(userInfo).unwrap()
  const user=verifyToken(res.data.accessToken) as TUser
  console.log(user);
  dispatch(setUser({user:user,token:res.data.accessToken}))
  console.log(res);
  toast.success("Logged in",{id:toastId, duration:2000})
  navigate(`/${user.role}/dashboard`)
   }catch(err){
    toast.error("something went wrong",{id:toastId, duration:2000})
   }
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
