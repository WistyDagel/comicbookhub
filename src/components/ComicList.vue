<template>
<div class="container">
  <h3 class="warning" v-if="comics.length == 0">Loading comics...</h3>
  <div class="comicList" v-for="comic in comics" :key="comic.id">
    <router-link v-bind:to="'/comic/' + comic.comicId">
      <div class="comicCard">
        <img class="comicCover" v-bind:src="comic.imageUrl"/>
        <h3>{{comic.title}}</h3>
        <h4>#{{comic.issueNumber}}</h4>
        <p>Release Date: {{comic.releaseDate}}</p>
      </div>
    </router-link>
  </div>
</div>
</template>

<script>
import { getComics } from '../api-service';

export default {
    data() {
      return {
        comics: [],
      }
    },
    methods: {
      updateComicsList: async function () {
          this.comics = await getComics();
      }
    },
    created: async function() {
        await this.updateComicsList();
    }
}
</script>

<style scoped>

a {
  color: inherit;
  text-decoration: none;
}

h3 {
  font-size: 18pt;
}

h4 {
  font-size: 14pt;
}

.warning {
  margin-top: 25px;
  color: rgb(204, 20, 20);
}

.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.comicCover {
  height: 250px;
  width: auto;
}

.comicCard {
  margin: 10px;
  border: 2px solid black;
  border-radius: 8px;
  padding: 20px 0;
  text-align: center;
  width: 250px;
  min-height: 300px;
}
</style>