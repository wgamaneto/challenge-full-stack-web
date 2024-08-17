<template>
  <div class="navbar">
    <div class="logo">
      <h1>Informacao dos estudantes</h1>
    </div>
    <div class="nav-links">
      <router-link to="/" class="nav-link">Lista dos estudantes</router-link>
      <router-link to="/cadastrar">
        <button type="button" class="nav-button">Registrar</button>
      </router-link>
    </div>
  </div>
  <router-view />
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #282c34;
  color: #ffffff;
}

.logo h1 {
  margin: 0;
  font-size: 1.5em;
  color: #61dafb;
}

.nav-links {
  display: flex;
  gap: 15px;
}

.nav-link {
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
  font-size: 1em;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #61dafb;
}

.nav-button {
  background-color: #61dafb;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  font-weight: bold;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.nav-button:hover {
  background-color: #21a1f1;
}
</style>
