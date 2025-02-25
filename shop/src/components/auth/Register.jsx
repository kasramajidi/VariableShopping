import { useForm } from "react-hook-form"
import * as yup from "yup"
import { Link } from "react-router-dom"; 
import { yupResolver } from "@hookform/resolvers/yup"
import { AiOutlineSwapRight } from "react-icons/ai";
import { Client } from "../../../lib/axois"
export default function Register() {
  const schema = yup.object({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required()
  })
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur'
  })

  const submitForm = async (user) => {
    try {
      const response = await Client.post("/auth/local/register", user)
      localStorage.setItem("token", response.data.jwt)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <main className="bg-[#FFFFFF] shadow-[0px_19px_40px_0px_rgba(0, 0, 0, 0.05)] rounded-[20px] my-[37px] max-w-2xl mx-auto px-[56px] pb-[44px] flex flex-col">
      <div className="flex items-center justify-between">
        <h1 className="text-black font-semibold text-[56px] self-end">Sign in</h1>
        <img src="../../../public/img/Group 2015.png" alt="login" />
      </div>
      <form className="flex flex-col gap-5 mt-3 text-sm" onSubmit={handleSubmit(submitForm)}>
        <label htmlFor="username" className="text-[16px] font-[Poppins]">User Nmae</label>
        <input {...register("username")} type="text" name="username" id="username" placeholder="test1" className="rounded-sm bg-[#FFF6F4] py-[13px] pl-2.5 text-[#000000]" />
        {errors?.username ? (<span>{errors.username.message}</span>) : null}
        <label htmlFor="email" className="text-[16px] font-[Poppins]">Email</label>
        <input {...register("email")} type="email" name="email" id="email" placeholder="test1@gmail.com" className="rounded-sm bg-[#FFF6F4] py-[13px] pl-2.5 text-[#000000]" />
        {errors?.email ? (<span>{errors.email.message}</span>) : null}
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="text-[16px] font-[Poppins]">Password</label>
          <Link to={"/login"}>Forgot Password ?</Link>
        </div>
        <input {...register("password")} type="password" name="password" id="password" placeholder="**********" className="rounded-sm bg-[#FFF6F4] py-[13px] pl-2.5 text-[#000000]" />
        {errors?.password ? (<span>{errors.password.message}</span>) : null}
        <button className="flex items-center cursor-pointer mt-[30px] self-center bg-[#F47458] gap-[18px] text-[#FFFFFF] text-[16px] rounded-3xl py-[11px] px-[22px]" type="submit">
          Sing in
          <AiOutlineSwapRight />
        </button>
      </form>
      <div className="flex mt-[16px] items-center justify-center font-[Poppins] gap-3 text-[#00000033]">
        <span>Already have an account ?</span>
        <Link to={"/login"} className="text-[#F47458]">Login</Link>
      </div>
    </main>
  )
}