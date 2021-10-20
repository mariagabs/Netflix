<template>
  <div>
    <div class="header">
      <div class="header-menu">
        <router-link to="/">
          <img src="../assets/netflix-logo-5.png" alt="" class="logo" />
        </router-link>
        <div class="header-items">
          <router-link class="btn-login" to="/Movies">Entrar</router-link>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="form-login">
        <h1>Crie uma senha para iniciar sua assinatura</h1>
        <p>Faltam só mais alguns passos!</p>
        <p>Nós também detestamos formulários.</p>
        <input type="email" required placeholder="Email" />
        <input type="password" required placeholder="Adicione uma senha" />
        <router-link to="/Movies" class="btn-formLogin">Entrar</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  height: 90px;
  border-bottom: 1px solid #e6e6e6;
}

.header img {
  margin-left: 33%;
}

.header div {
  margin-right: 3%;
}

.header-menu {
  display: flex;
  align-items: flex-start;
  height: auto;
  justify-content: space-between;
  flex-flow: row nowrap;
  padding-top: 20px;
}

.header-items {
  margin-top: 10px;
}

.logo {
  width: 10.4375rem;
  height: 2.8125rem;
  margin-right: auto;
}
.btn-login {
  color: #333;
  font-weight: bold;
  font-size: 19px;
  text-decoration: none;
}

.container {
  width: 100%;
}

.form-login {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 440px;
  margin: 50px auto;
}

.form-login h1 {
  display: inline-block;
  font-weight: 700;
  font-size: 23px;
  margin-bottom: 10px;
}

.form-login p {
  font-size: 19px;
}

.form-login input {
  margin-top: 10px;
  height: 60px;
  padding: 0 10px;
  width: 100%;
  font-size: 16px;
  border: solid 1px #8c8c8c;
  border-radius: 2px;
  color: #000;
}

.btn-formLogin {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 48px;
  font-weight: 400;
  font-size: 17px;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  line-height: 1;
  color: #fff;
  background-color: #e50914;
  text-decoration: none;
  -webkit-box-shadow: 0 1px 1px rgb(0 0 0 / 25%);
  -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  box-shadow: 0 1px 1px rgb(0 0 0 / 25%);
  margin-top: 24px;
}
</style>
