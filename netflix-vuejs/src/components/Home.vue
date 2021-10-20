<template>
  <div class="homepage">
    <div class="header">
      <div class="header-menu">
        <img src="../assets/netflix-logo-5.png" alt="" class="logo" />
        <div class="header-items">
          <select class="language">
            <option value="">Português</option>
            <option value="">English</option>
          </select>
          <router-link class="btn-signup">Sair</router-link>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="intro">
        <div class="intro-background">
          <div class="intro-background-gradient">
            <img
              src="../assets/signup-background.jpg"
              alt=""
              class="background"
            />
            <div class="background-gradient"></div>
          </div>
        </div>
        <div class="intro-info">
          <h2>Bem-vindo(a) de volta!</h2>
          <h1>Filmes, séries e muito mais. Sem limites.</h1>
          <h2>Assista onde quiser. Cancele quando quiser.</h2>

          <router-link to="/Login" class="btn-signup"
            >Finalize sua assinatura&nbsp;&nbsp;ᐳ</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.homepage {
  height: 100vh;
  background: #000;
}
.header {
  background-color: transparent;
  position: absolute;
  max-width: 1800px;
  margin: 0 auto;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 5rem;
  z-index: 10;
}

.header-menu {
  display: flex;
  align-items: flex-start;
  height: auto;
  justify-content: space-between;
  flex-flow: row nowrap;
  padding-top: 20px;
}

.logo {
  width: 10.4375rem;
  height: 2.8125rem;
  margin-right: auto;
}

.header-items .btn-signup {
  margin-left: 30px;
}

.language {
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid #aaa;
  color: #fff;
  font-size: 0.875rem;
  padding: 0.5rem 0.8rem;
  border-radius: 3px;
}

.btn-signup {
  background: #e50914;
  padding: 17px 35px;
  color: #fff;
  font-size: 1.875rem;
  border-radius: 3px;
  cursor: pointer;
  text-decoration: none;
}

.intro {
  position: relative;
  border-bottom: 8px solid #222;
  padding: 70px 45px;
  margin-bottom: 0;
  background: 0 0;
  color: #fff;
}

.intro-background {
  z-index: 0;
  position: absolute;
  top: -70px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.intro-background-gradient {
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
  background: rgba(0, 0, 0, 0.4);
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(rgba(0, 0, 0, 0.8)),
    color-stop(60%, rgba(0, 0, 0, 0)),
    to(rgba(0, 0, 0, 0.8))
  );
  background-image: -webkit-linear-gradient(
    bottom,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
  background-image: -moz-
    oldlinear-gradient(
      bottom,
      rgba(0, 0, 0, 0.8) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0.8) 100%
    );
  background-image: -o-linear-gradient(
    bottom,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
}

.background {
  transform: none;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.intro-info {
  position: relative;
  width: 100%;
  padding: 130px 0;
  max-width: 950px;
  margin: 0 auto;
  text-align: center;
  z-index: 1;
}

.intro-info h2 {
  font-size: 26px;
  font-weight: normal;
  margin-bottom: 40px;
}

.intro-info h2:first-child {
  margin-bottom: 20px;
}

.intro-info h1 {
  font-size: 4rem;
  margin-bottom: 10px;
}

.intro-info router-link {
  background: #e50914;
  font-size: 30px;
  padding: 18px 30px;
  border-radius: 3px;
  cursor: pointer;
}
</style>
