import VueRouter from 'vue-router';
import AddComic from '../components/AddComic.vue';
import Library from '../components/Library';
import ComicList from '../components/ComicList.vue';
import Register from '../components/Register.vue';
import Login from '../components/Login.vue';
import Comic from '../components/Comic.vue';

export default new VueRouter({
    routes: [
        {
            path: "/",
            component: ComicList 
        },
        {
            path: "/addcomic",
            component: AddComic
        },
        {
            path: "/comic/:comicId",
            component: Comic
        },
        {
            path: "/library/",
            component: Library
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: "/signout",
            component: AddComic
        },
    ],
    mode: "history"
})