/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Row } from "antd";
import { FieldValues, useForm, useFormContext } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHInput from "../components/form/PHInput";
import PHForm from "../components/form/PHForm";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const { register, handleSubmit } = useForm();
  const [login]=useLoginMutation()

  // const { register } = useFormContext();
  const onSubmit = async (data: FieldValues) => {
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
    console.log(data);
  };

  return (
    <Row justify={"center"} align={"middle"} style={{height:"100vh"}}>
    <PHForm onSubmit={onSubmit} >
      <PHInput type="text" name="userId" label={"ID"} />

      <PHInput type="text" name="password" label={"Password"} />

      <Button htmlType="submit">Login</Button>
    </PHForm>
    </Row>
  );
};

export default Login;
