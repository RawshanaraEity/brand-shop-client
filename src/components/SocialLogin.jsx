
// import { useContext } from "react";
// import { AuthContext } from "../Provider/AuthProvider";



const SocialLogin = () => {
    // const {googleLogin} = useContext(AuthContext)
  

    const handleGoogleLogin = () =>{
        // googleLogin()
        // .then(result => {
        //     console.log(result);
        // }
        //     )
        // .catch(error => console.log(error))
        console.log('login')
    }

    return (
        <div className="p-5">
            <button onClick={handleGoogleLogin} className="btn btn-neutral btn-sm">Login with Google</button>
        </div>
    );
};

export default SocialLogin;