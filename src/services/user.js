import api from "./api.js"

export default {
	register(form) {
        return api.post("/auth/register", form);
    },
    login(form) {
        return api.post("/auth/login", form);
    },
    // updatePassword(form) {
    //     return api.patch('/account/password', form)
    // },
    logout() {
        return api.post("/auth/logout");
    },
    // profile() {
    //     return api.get("/user-profile");
    // },
}
