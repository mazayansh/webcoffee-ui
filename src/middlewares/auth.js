// import User from "../services/user.js"
// import store from "../store/index.js"

// const authCheck = (next, roles = null) => {
//     User.auth()
//         .then(response => {
//             if(Object.keys(store.user).length === 0) {
//                 store.user = response.data;
//             }

//             if (roles != null) {
//                 if (roles.includes(response.data.role_label)) {
//                     return next();
//                 }
//                 else {
//                     return next({
//                         path: '/forbidden'
//                     });
//                 }
//             }
//             else {
//                 return next();
//             }
//         })
//         .catch(() => {
//             return next({
//                 name: "Login"
//             });
//         });
// }

// const guestCheck = (next) => {
//     User.auth()
//         .then(response => {
//             return next({
//                 name: "Dashboard"
//             });
//         })
//         .catch(() => {
//             return next();
//         });
// }

// export { authCheck, guestCheck }