import { Session } from "inspector";
import { Redirect } from "react-router-dom";

const axios = require("axios");
const Auth = {

    isAuthenticated: false,
    signout(cb: any) {
        this.isAuthenticated = false;
        sessionStorage.removeItem('token')
    },
    getValue() {
        return this.isAuthenticated;
    }
};

export default Auth;