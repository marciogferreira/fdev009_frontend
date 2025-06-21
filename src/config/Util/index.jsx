const Util = {
    redirect: () => {
        // location.reload();
    },
    removeToken: () => {
        localStorage.removeItem("SYS@APP");
    },
    setToken: (token) => {
        localStorage.setItem("SYS@APP", token);
    },
    getToken: () => {
        const value = localStorage.getItem("SYS@APP");
        return value;
    },
    getTokenBearer: () => {
        
    },
    setUser: (token) => {
        localStorage.setItem("SYS@APP_USER", JSON.stringify(token));
    },
    getUser: () => {
        const value = localStorage.getItem("SYS@APP_USER");
        return JSON.parse(value);
    },
    removeUser: () => {
        localStorage.removeItem("SYS@APP_USER");
    },  
};

export default Util;