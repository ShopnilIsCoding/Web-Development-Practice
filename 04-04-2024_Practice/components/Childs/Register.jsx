import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../src/firebase.config";
import { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoIosEyeOff } from "react-icons/io";
import { toast } from "react-toastify";

const Register = (e) => {

    const [length,setLength]=useState('');
    const[visible,setVisible]=useState(false);

    const validation=(e)=>
    {
        setLength(e.target.value.length);
    }


    const handleRegister=(e) => {
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        const accepted=e.target.check.checked;
        console.log('submitted', email,password);
        if(length<6)
        {
            toast.warning('Password must be at least 6 characters');
            return;
        }
        if(!accepted)
        {
            toast.error("Please accept the terms and conditions");
            return;
        }
        createUserWithEmailAndPassword(auth,email,password)
        .then((res) =>{
            toast.success("Successfully Registered");
        })
        .catch((err) =>{
            toast.error(err.message);
        })
    };
    return (
        <div>
            <div className="hero min-h-[90vh] rounded-b-xl bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="relative">
          <input type={visible? "text":"password"} onChange={validation} name="password" placeholder="password" className="input input-bordered w-full" required />
          
          <span className="absolute text-xl  right-1 top-[50%] -translate-y-[50%] cursor-pointer" onClick={()=>{setVisible(!visible)}}>{visible? <IoIosEyeOff /> : <IoEye />}</span>
          </div>
          
          <div className="flex items-center justify-between w-full">
          <label className="label flex-1">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          {
            length<6 &&length>0 && <p className=" text-sm  text-end"><span className="text-red-600"> Weak</span></p>
          }
          {
            length>=6 &&  length<8 && <p className=" text-sm text-end"> <span className="text-yellow-500"> Good</span></p>
          }
          {
            length>=8 && <p className=" text-sm  text-end"> <span className="text-green-500"> Strong</span></p>
          }
          
          </div>
          <div>
            <input className="mr-1" type="checkbox" name="check" id="check" />
            <label htmlFor="check">Accept Our Terms & Conditions</label>
          </div>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;