import { Session } from "inspector";

const axios = require("axios");
const Auth = {

    isAuthenticated: false,
    
    authenticate(user: any) {
    axios.post('https://localhost:44310/api/users/login', user )
        .then((response : any) => { 
            console.log(response)
            var token = response.data;
            if(token) {
                this.isAuthenticated = true;
                sessionStorage.setItem('token', token)
               
            }
        })
        .catch((error : any) => {
            console.log(error)
        })
     },
    signout(cb: any) {
        
        this.isAuthenticated = false;
        sessionStorage.removeItem('token')
    },
    getValue() {
        return this.isAuthenticated;
    }
};

export default Auth;