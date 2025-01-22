import {useState,useRef} from "react";
import Header from "./Header";
import { validation } from "../utils/validation";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../utils/firebase';
import { adduser } from "../utils/Userslice";
import { useDispatch } from "react-redux";
import { updateProfile } from "firebase/auth";
import {AVATAR_LOGO} from "../utils/constants";
const Login = ()=>
{
    const [togglesigninform,settogglesigninform] = useState(true);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const [errormsg,seterrormsg] = useState(null);
    const dispatch = useDispatch();


    const handelBtn = () =>
    {
        //vallidation:-
        console.log(email);
        console.log(password);
        seterrormsg(validation(email.current.value,password.current.value));
        console.log(errormsg);

        //Authentication:-

        if(errormsg) return;
         
        if(!togglesigninform)
        {
            //code for signUp :-
            createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
            .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            //updating
            updateProfile(user, {
                displayName: name.current.value , photoURL: {AVATAR_LOGO}
              }).then(() => {
                const {uid , email , displayName , photoURL} = auth.currentUser;
                dispatch(adduser(
                    {
                        uid:uid , email : email , name : displayName , photoURL : photoURL
                    }
                ))
                console.log(user);
              }).catch((error) => {
                console.log("error in updating user profile..!");
              });
           
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
           seterrormsg("user already exist.");
            });  
        }
        else
        {
            // code for signIn :-
            signInWithEmailAndPassword(auth,email.current.value,password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log(user);
              console.log("loggedin :  "+user.email);

            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log("error loggingin : "+errorMessage);
              seterrormsg("Inalid user login attempt..!");

            });            

        }


    }

    return(
            <div>
                <Header/>
                <div className="absolute">
                <img  alt="bg-img" src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_small.jpg"/>

                </div>
                
                <form onSubmit={(e)=>e.preventDefault()}  className="p-10 bg-black absolute text-white w-3/12 mt-40 mx-auto left-0 right-0  bg-opacity-75">
                <h1 className="text-white font-bold text-4xl mb-6">{togglesigninform?"Sign In":"Sign Up"}</h1>
                {
                    !(togglesigninform) && (<input  type="text" ref={name} placeholder="Full Name" className="p-3 my-3 w-full bg-gray-400 bg-opacity-50"/>)
                }
                    <input ref = {email} type="text" placeholder="Enter email" className="p-3 my-3 w-full bg-gray-400 bg-opacity-50"/>
                    <input ref = {password} type="password" placeholder="Enter password" className="p-3 my-3 w-full  bg-gray-400 bg-opacity-50"/>
                    <p className="my-3 w-full p-2 text-red-400 font-bold">{errormsg}</p>
                    <button className="my-8 w-full p-3 text-white bg-red-700 cursor-pointer" onClick={()=>handelBtn()}>{togglesigninform?"Sign In":"Sign Up"}</button>
                    <p className="my-2 w-full p-3 text-white cursor-pointer" onClick={()=>{togglesigninform?settogglesigninform(false):settogglesigninform(true) ; seterrormsg(null)}}>
                        {togglesigninform?"New User ? Sign Up Now.":"Already a user ? Sign In"}
                    </p>
                </form>
            </div>
    )
};

export default Login;