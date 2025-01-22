import { signOut , onAuthStateChanged} from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {adduser , removeuser} from "../utils/Userslice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {LOGO} from "../utils/constants";


const Header = ()=>
{
    const user = useSelector(store=>store.user);
   const navigate = useNavigate();
   const dispatch = useDispatch();

const handlesignOut = ()=>
{

    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {  
      console.log("error in logOut ",error);
    });
}


useEffect(()=>
    {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in
          const {uid , email , displayName , photoURL} = user;
          dispatch(adduser({uid:uid , email : email , name : displayName , photoURL : photoURL}));
         navigate("/browse");
         
        } else {
          // User is signed out
          dispatch(removeuser());
          navigate("/");

        }
      });
    },[]);


    return (
        
        <div className=" absolute w-screen mt-28 px-3 py-3 bg-gradient-to-b from-black z-10 flex justify-between items-center">
        <div>
        <img className="w-44" src = {LOGO}/>
            </div>

      {user && (<div className="flex flex-row">
        <img className=" w-14 h-14 p-2 rounded-full" src={user.photoURL}/>
    <button onClick={handlesignOut} className="font-semibold text-white" >(Sign Out)</button>
    </div>)}
</div>    
       
    )
}

export default Header;

// "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnnv6DjrIGcuGgyJfmvstqYQQ8BZC1OOhNwA&s"