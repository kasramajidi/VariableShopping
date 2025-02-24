import { Link } from "react-router"
import { NavLink } from "react-router";
import { RiShoppingCartFill } from "react-icons/ri";

export default function Header() {
  return (
    <header className="max-w-7xl mx-auto mt-[42px] flex items-center justify-between rounded-2xl py-2 px-6 bg-[#FFFFFF] shadow-[0px_12px_40px_0px_rgba(30,41,59,0.04)]">
      <Link to={"/"} className="bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent text-2xl font-bold">Shopedia</Link>
      <span></span>
      <div className="flex items-center gap-4 text-xl font-bold">
        <NavLink  to={"/"} className={({isActive}) => isActive ? "text-[#F06908]" : "text-[#1E293B]"}>Sign up</NavLink>
        <NavLink  to={"/login"}  className={({isActive}) => isActive ? "text-[#F06908]" : "text-[#1E293B]"}>Login</NavLink>
        <NavLink  to={"/products"} className={({isActive}) => isActive ? "text-[#F06908]" : "text-[#1E293B]"}>Products</NavLink>
      </div>
      <div className="relative flex items-center">
        <RiShoppingCartFill className="text-[#64748B] w-[24px] h-[24px]"/>
        <span className="absolute -top-2 -right-4 text-[#FFFFFF] bg-[#EF4444] rounded-[100%] px-[5px] text-[13px]">4</span>
      </div>
    </header>
  )
}
