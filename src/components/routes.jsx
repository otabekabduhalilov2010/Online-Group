import { CHAT_ROUTE, LOGIN_ROUTE } from "./utils/consts";
// import Login from "../Login"; // если файл в родительской папке
import Login from "./Login/Login"; // если в подпапке Login

import Chat from "./Chat/Chat";

export const publicRoutes = [
    {
     path: LOGIN_ROUTE,
     Component: Login
    }
]
export const privateRoutes = [
    {
     path: CHAT_ROUTE,
     Component: Chat
    }
]