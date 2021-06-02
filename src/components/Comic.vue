<template>
<div class="container">
    <div class="comicCard">
        <div class="col">
            <img class="comicCover" v-bind:src="comic.imageUrl"/>
        </div>
        <div class="col">
            <div class="row">
                <h3 class="title">{{comic.title}}</h3>
                <h4 class="issueNumber">#{{comic.issueNumber}}</h4>
            </div>
            <h4 class="releaseDate">Release Date: {{comic.releaseDate}}</h4>
            <p>{{comic.description}}</p>
            <button class="addComic" v-if="user" v-on:click="addComic()">Store Comic in Library</button>
        </div>
    </div>
</div>
</template>

<script>
import { createLibrary, getComic } from '../api-service';

export default {
    data() {
      return {
        comic: null,
        comicId: this.$route.params.comicId,
        user: null
      }
    },
    mounted() {
        if(sessionStorage.getItem('user')){
            this.user = sessionStorage.getItem('user');
        }
    },
    methods: {
      displayComic: async function () {
        this.comic = await getComic(this.comicId);
      },
      addComic: async function () {
          let library = JSON.parse(sessionStorage.getItem('library'));
          let object = {"userId": this.user, "library": library};
        //   console.log(library);
          await library.push(this.comic);
          await sessionStorage.setItem('library', JSON.stringify(library));
          await createLibrary(object);
          await window.location.reload();
          await alert('Comic added to user library');
      }
    },
    created: async function() {
        await this.displayComic();
    }
}
</script>

<style scoped>
.comicCover {
    height: 400px;
    width: auto;
}

.comicCard {
    display: flex;
    margin: 50px 0;
    border: 2px solid black;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    width: 100%;
    min-height: 300px;
}

.row, .releaseDate{
    margin-bottom: 40px;
}

.addComic {
    margin-top: 25px;
    padding: 10px;
    border-radius: 8px;
    border: none;
    background-color: rgb(0, 174, 255);
    color: white;
}

.addComic:hover {
    background-color: rgb(0, 147, 216);
}

</style>