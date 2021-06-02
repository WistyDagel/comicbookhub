<template>
  <div>
    <h1>Library</h1>
    <div class="container">
      <h3 class="warning" v-if="comics.length == 0">Your library is empty... D:</h3>
      <div class="comicList" v-for="comic in comics" :key="comic.id">
          <div class="comicCard">
            <button class="remove" v-on:click="remove(comic)">X</button>
            <router-link v-bind:to="'/comic/' + comic.comicId">
            <img class="comicCover" v-bind:src="comic.imageUrl"/>
            <h3>{{comic.title}}</h3>
            <h4>#{{comic.issueNumber}}</h4>
            <p>Release Date: {{comic.releaseDate}}</p>
            </router-link>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Library",
    data() {
        return {
          comics: JSON.parse(sessionStorage.getItem('library')),
          userId: this.$route.params.userId
        }
    },
    methods: {
      remove(comic) {
        for (let i = 0; i < this.comics.length; i++) {
          if(this.comics[i] == comic){
            this.comics = this.comics.slice(0, i);
            sessionStorage.setItem('library', JSON.stringify(this.comics));
          }          
        }
      }
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

.remove {
  position: absolute;
  margin: -15px -30px;
  border: 2px solid black;
  background-color: white;
  color: rgb(204, 20, 20);
  font-size: 14pt;
  border-radius: 8px;
}

.remove:hover {
  background-color: rgb(204, 20, 20);
  color: white;
}

.warning {
  margin-top: 25px;
  color: rgb(204, 20, 20);
}

.container {
  display: flex;
  flex-direction: row;
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