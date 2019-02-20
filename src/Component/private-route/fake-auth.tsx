const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb: any) {
        this.isAuthenticated = true;
    },
    signout(cb: any) {
        this.isAuthenticated = false;
    },
    getValue() {
        return this.isAuthenticated;
    }
};

export default fakeAuth;