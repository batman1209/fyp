import { Session } from "inspector";
import * as React from 'react';

const axios = require("axios");
const Auth = {

    isAuthenticated: false,
    authenticate(user: any) {
    axios.post('https://localhost:44310/api/users/login', user )
        .then((response : any) => { 
           
            console.log( response)
            var token = response.data
            console.log(token)
            // this.isAuthenticated = true;
            if(token) {
               this.isAuthenticated = true;
               sessionStorage.setItem('token', token)
           // window.location.href = '/'
        //    this.props.history.push('/')
            
            }
        })
        .catch((error : any) => {
            console.log(error)
        })
     },
    signout(cb: any) {
        // clear sesion
        this.isAuthenticated = false;
        sessionStorage.removeItem('token');
    },
    getValue() {
        return this.isAuthenticated;
    }
};

export default Auth;