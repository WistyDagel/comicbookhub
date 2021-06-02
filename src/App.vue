<template>
    <div>
        <nav-bar
        :user="user"
        @signout="signOut()"
        />
        <router-view/>
    </div>
</template>

<script>
import { createComic, deleteComic, getComics, getComic, updateComic } from './api-service';
// import ComicList from './components/ComicList.vue';
// import CreateComic from './components/AddComic.vue';
import NavBar from './components/NavBar.vue';
import Auth from 'aws-amplify';

export default {
    name: "Home",
    components: {NavBar},
    data() {
        return {
            comics: [],
            comic: null,
            user: null
        }
    },
    mounted() {
        if(sessionStorage.getItem('user')){
            this.user = sessionStorage.getItem('user');
        }
    },
    watch: {
        user(newUser) {
            sessionStorage.setItem('user', newUser);
        }
    },
    methods: {
        updateComicsList: async function () {
            this.comics = await getComics();
        },
        onSubmit: async function (comic) {
            if (this.comic) {
                await updateComic(comic);
                this.comic = null;
            } else {
                await createComic(comic);
            }
            await this.updateComicsList();
        },
        deleteComic: async function (comicId) {
            await deleteComic(comicId);
            await this.updateComicsList();
        },
        onEdit: async function (comicId) {
            this.comic = await getComic(comicId);
        },
        signOut: async function() {
            window.sessionStorage.clear();
            await window.location.reload();
            try {
                await Auth.signOut();
            } catch (error) {
                alert(error.message);
            }
        },
    },
    created: async function() {
        await this.updateComicsList();
    }
};
</script>

<style scoped>
    
</style>