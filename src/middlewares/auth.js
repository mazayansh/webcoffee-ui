import userApi from "@/services/user.js"
import { useUserStore } from "@/stores/user.js"
// import { useRouter } from "vue-router"

// const router = useRouter()

const authCheck = (next) => {
    userApi.profile()
        .then(response => {
            if(Object.keys(useUserStore().user).length === 0) {
                useUserStore().user = response.data;
            }

            return next();
        })
        .catch(() => {
            return next({
                name: "login"
            });
        });
}

const guestCheck = (next) => {
    userApi.profile()
        .then(response => {
            return next({
                name: "home"
            });
        })
        .catch(() => {
            return next();
        });
}

export { authCheck, guestCheck }