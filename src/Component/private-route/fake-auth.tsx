import { Session } from "inspector";

const axios = require("axios");
const Auth = {

    isAuthenticated: false,
    authenticate(user: any) {
         console.log(user)
    axios.post('https://localhost:44310/api/Users/login', user )
        .then((response : any) => { 
           
            console.log( response)
            this.isAuthenticated = true;
            //if() isAuthenticated = true
        })
        .catch((error : any) => {
            console.log(error)
        })
     },
    signout(cb: any) {
        // clear sesion
        this.isAuthenticated = false;
    },
    getValue() {
        return this.isAuthenticated;
    }
};

export default Auth;