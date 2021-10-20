<template>
  <div class="movies">
    <div class="header">
      <div class="header-menu">
        <router-link to="/">
          <img src="../assets/netflix-logo-5.png" alt="" class="logo" />
        </router-link>
        <div class="header-items"></div>
      </div>
    </div>
    <div class="container">
      <div class="movie-background">
        <div class="img-background">
          <div class="img-background-gradient">
            <img src="../assets/teste.jpg" alt="" class="background" />
            <div class="background-gradient"></div>
          </div>
        </div>
        <div class="movie-info">
          <h1>Venom: Tempo de Carnificina</h1>
          <p>
            O relacionamento entre Eddie e Venom (Tom Hardy) está evoluindo.
            Buscando a melhor forma de lidar com a inevitável simbiose, esse
            dois lados descobrem como viver juntos e, de alguma forma, se
            tornarem melhores juntos do que separados.
          </p>
          <button class="play">▶&nbsp;&nbsp;Assistir</button>
          <button class="more-info">ⓘ&nbsp;&nbsp;Mais informações</button>
        </div>
      </div>
      <div class="movies-list">
        <h1>Populares</h1>
        <VueSlickCarousel
          v-bind="settings"
          class="carousel"
          v-if="popularMovies.length"
        >
          <div :key="movie.id" v-for="movie in popularMovies">
            <img
              :src="imgURL + movie.poster_path"
              :alt="movie.title"
              :title="movie.title"
              @click="abrirModal(movie.id)"
            />
          </div>
        </VueSlickCarousel>
        <h1>Bem avaliados</h1>
        <VueSlickCarousel
          v-bind="settings"
          class="carousel"
          v-if="topRatedMovies.length"
        >
          <div :key="movie.id" v-for="movie in topRatedMovies">
            <img
              :src="imgURL + movie.poster_path"
              :alt="movie.title"
              :title="movie.title"
              @click="abrirModal(movie.id)"
            />
          </div>
        </VueSlickCarousel>
        <h1>Lançamentos</h1>
        <VueSlickCarousel
          v-bind="settings"
          class="carousel"
          v-if="upcomingMovies.length"
        >
          <div :key="movie.id" v-for="movie in upcomingMovies">
            <img
              :src="imgURL + movie.poster_path"
              :alt="movie.title"
              :title="movie.title"
              @click="abrirModal(movie.id)"
            />
          </div>
        </VueSlickCarousel>
      </div>
    </div>
    <div class="modal" v-if="movie" @click="fecharModal">
      <div class="modal-container">
        <button @click="fecharModal">X</button>
        <img :src="imgURL + movie.backdrop_path" alt="" />
        <div class="movie-desc">
          <h1>{{ movie.title }}</h1>
          <p>{{ movie.overview }}</p>
          <p>
            <span>Data lançamento</span>
            {{ new Date(movie.release_date).toLocaleDateString("pt-BR") }}
          </p>
          <h2>Títulos semelhantes</h2>
          <div class="movies-similar">
            <div class="card" :key="similar.id" v-for="similar in filterMovies">
              <img :src="imgURL + similar.backdrop_path" alt="" />
              <div class="card-info">
                <p>{{ similar.title }}</p>
                <span v-if="similar.overview">{{
                  similar.overview.substring(0, 135)
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "../assets/css/vue-slick-carousel.css";
import "../assets/css/vue-slick-carousel-theme.css";

export default {
  components: { VueSlickCarousel },
  data: () => ({
    settings: {
      dots: false,
      slidesToShow: 10,
      slidesToScroll: 10,
    },
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    similarMovies: [],
    movie: false,
    imgURL: "https://image.tmdb.org/t/p/w500",
  }),
  methods: {
    async fetchMovies(type) {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${type}?api_key=0749efeddfb8119667a4e1f5dbaafc0c&language=pt-BR`,
      );

      const data = await res.json();
      return data.results;
    },
    async fetchMovie(id) {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=0749efeddfb8119667a4e1f5dbaafc0c&language=pt-BR`,
      );

      const data = await res.json();
      this.movie = data;
    },
    async fetchSimilarMovies(id) {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=0749efeddfb8119667a4e1f5dbaafc0c&language=pt-BR`,
      );

      const data = await res.json();
      this.similarMovies = data.results;
    },
    fecharModal({ target, currentTarget }) {
      if (target === currentTarget) this.movie = false;
    },
    abrirModal(id) {
      this.fetchMovie(id);
      this.fetchSimilarMovies(id);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  computed: {
    filterMovies() {
      return this.similarMovies
        .filter((x) => x.backdrop_path && x.overview)
        .slice(0, 6);
    },
  },
  async created() {
    this.popularMovies = await this.fetchMovies("popular");
    this.topRatedMovies = await this.fetchMovies("top_rated");
    this.upcomingMovies = await this.fetchMovies("upcoming");
  },
};
</script>

<style scoped>
.header {
  top: 0px;
  position: relative;
  background: transparent;
  z-index: 1;
}

.header-menu {
  background-color: transparent;
  height: 68px;
  z-index: 2;
  padding: 0 60px;
  font-size: 14px;
  position: relative;
}

.logo {
  width: 10.4375rem;
  height: 2.8125rem;
  margin-top: 20px;
  margin-right: auto;
}

.movie-background {
  position: relative;
  padding: 70px 45px;
  margin-bottom: 0;
  background: 0 0;
  color: #fff;
}

.img-background {
  z-index: 0;
  position: absolute;
  top: -70px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.img-background-gradient {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

.background {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -webkit-transform: scale(1.25) translateY(-10%);
  -moz-transform: scale(1.25) translateY(-10%);
  -ms-transform: scale(1.25) translateY(-10%);
  -o-transform: scale(1.25) translateY(-10%);
  transform: scale(1.25) translateY(-10%);
}

.background-gradient {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(to top, #000, transparent);
}

.background {
  transform: none;
  float: right;
  width: 50%;
  height: 100%;
  object-fit: cover;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left,
    right,
    from(rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 0))
  );
  mask-image: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
}

.movies {
  height: 100vh;
  background: #000;
}

.movie-info {
  padding: 100px 0;
  width: 50%;
  z-index: 1;
  position: relative;
}

.movie-info h1 {
  font-weight: normal;
  font-size: 3vw;
  font-weight: bolder;
}

.movie-info p {
  color: #fff;
  font-weight: 400;
  line-height: normal;
  width: 100%;
  font-size: 1.3vw;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
  margin: 30px 0;
}

.movie-info button {
  border: none;
  font-size: 1.3vw;
  font-weight: bold;
  padding: 0.8vw 1.8vw;
  border-radius: 5px;
  cursor: pointer;
}

.movie-info .play {
  background: #fff;
  color: #000;
}

.movie-info .more-info {
  background: rgba(109, 109, 110, 0.7);
  border: none;
  color: #fff;
  margin-left: 15px;
}

.movies-list {
  background: #141414;
  background: linear-gradient(to bottom, #000, #141414e0);
  padding-bottom: 30px;
}

.movies-list h1 {
  color: #fff;
  padding: 15px 30px;
  font-size: 1.5vw;
}

/* CARROSEL */

.slick-slider {
  padding: 0 20px;
  margin-bottom: 60px;
}

.slick-slide img {
  width: inherit;
}

.slick-slide div {
  padding: 0 10px;
  cursor: pointer;
}

/* MODAL */

.modal::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 80px;
}

.modal-container {
  position: relative;
  flex-direction: column;
  display: flex;
  background: #141414;
  animation: fadeIn 0.3s forwards;
  width: 830px;
  z-index: 1;
  border-radius: 10px;
  color: #fff;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translate3d(50px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.modal-container img {
  width: 100%;
  height: fit-content;
  border-radius: 10px 10px 0 0;
}

.modal-container h2 {
  margin: 50px 0 10px 0;
}

.movie-desc {
  margin: 50px;
}

.movie-desc h1 {
  font-size: 1.8vw;
  margin-bottom: 20px;
}

.movie-desc p {
  font-size: 0.9vw;
  margin-bottom: 20px;
}

.movie-desc span {
  font-weight: bold;
}

/* CARDS */

.movies-similar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card {
  width: 220px;
  margin: 10px;
  background: #2f2f2f;
  border-radius: 10px;
}

.card-info {
  padding: 15px;
}
.card p {
  font-size: 0.8vw;
  font-weight: bold;
}

.card span {
  font-weight: normal;
  font-size: 0.7vw;
}

.modal-container button {
  position: absolute;
  right: 15px;
  top: 15px;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  text-align: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1vw;
  color: #fff;
}
</style>
