import { FcGoogle } from "react-icons/fc"
import { signInWithGoogle } from "../firebase"
import { Helmet } from "react-helmet"
import { useState } from "react"
import { Link } from "react-router-dom"

const Register = () => {

    const [showPassword, setShowPassword] = useState<boolean>(false)

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }

    return (<div className="bg-slate-800 h-screen text-gray-300 p-3 flex items-center justify-center">
        <Helmet>
            <meta charSet="utf-8" />
            <title>Register</title>
        </Helmet>
        <div className="w-3/12 p-4 border-slate-700 rounded-lg border-2 ">
            <div className="text-center mb-4 text-2xl">Register</div>
            <div className="">
                <input type="text" placeholder="Email" className="h-10 w-full bg-slate-800
                     outline-none  border-slate-700 rounded-lg border-2 px-4 " />
                <input type="text" placeholder="Email" className="h-10 w-full bg-slate-800
                     mt-3 outline-none  border-slate-700 rounded-lg border-2 px-4 " />
                <input type="password" placeholder="Password" className="h-10 w-full bg-slate-800  mt-3 border-slate-700 rounded-lg border-2 px-4 " />
                <input type="password" placeholder="Password" className="h-10 w-full bg-slate-800  mt-3 border-slate-700 rounded-lg border-2 px-4 " />
                <div className="flex items-center justify-center">
                    <button className="h-10 bg-slate-900 px-4 rounded-lg mt-3 ">Login</button>
                </div>
                <div className="text-xs my-2 text-right ">
                    Have account?
                    <Link to="/login">
                        <a href="#" className="ml-1">
                            Login
                        </a>
                    </Link>
                </div>
                <div className="flex gap-8" >
                    <div className="w-5/12">
                        <hr className="h-px my-4 bg-slate-700 border-0 dark:bg-slate-700" />
                    </div>
                    <div className="w-5/12">
                        <hr className="h-px my-4 bg-slate-700 border-0 dark:bg-slate-700" />
                    </div>
                </div>
                <p className="text-center -mt-8">
                    or
                </p>

                {/* Google Login */}
                <div className=" flex p-2 gap-2  bg-slate-900 mt-3 rounded-lg" onClick={signInWithGoogle}>
                    <div className="">
                        <FcGoogle fontSize={"22px"} />
                    </div>
                    <div className="flex items-center justify-center -ml-7 w-full">
                        Google
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Register