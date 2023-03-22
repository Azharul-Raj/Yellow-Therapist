
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
export default function Nav() {
  return (
    <div>
        {/* logo part */}
        <div className="">
            <img src={logo} alt="" />
        </div>
        {/*  */}
        <div className="">
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Services</Link>
        </div>
    </div>
  )
}
