<template>
    <div class="container">
        <div class="wrapper">
            <h2>Add a Comic</h2>
            <form @submit.prevent="onSubmit()">
                <input type="text" v-model="comic.title" placeholder="Title...">
                <br/>
                <input type="number" v-model="comic.issueNumber" placeholder="Issue Number...">
                <br/>
                <input type="text" v-model="comic.releaseDate" placeholder="Release Date...">
                <br/>
                <textarea type="text" cols="40" rows="5" v-model="comic.description" placeholder="Description..."></textarea>
                <br/>
                <input type="text" v-model="comic.imageUrl" placeholder="Image Url...">
                <br/>
                <button type="submit" >Create</button>
            </form>
            Form Data: {{comic}}
        </div>
    </div>
</template>

<script>
import { createComic } from '../api-service';
export default {
    name: "AddComic",
    props: {
       data: {} 
    },
    data() {
        return {
            comic: {},
        };
    },
    methods: {
        onSubmit: async function() {
            await createComic(this.comic);
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>
    h2 {
        padding-bottom: 25px;
    }

    .wrapper {
        margin: 15% 25% 0 25%;
        border: 2px solid black;
        border-radius: 8px;
        padding: 20px 0;
        text-align: center;
    }

    input {
        margin-bottom: 10px;
        width: 300px;
    }

    textarea {
        width: 300px;
    }
</style>