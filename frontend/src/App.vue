<template>
  <div class="navbar">
    <div class="logo">
      <img src="./assets/logo.png" alt="Grupo A" class="logo-image" />
    </div>
    <div class="nav-links">
      <router-link to="/" class="nav-link">Alunos</router-link>
    </div>
  </div>
  <router-view />
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: #ddd;
  color: #333;
  border-bottom: 2px solid #c0c0c0;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-image {
  max-height: 40px;
}

.nav-links {
  display: flex;
  gap: 15px;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  font-size: 1.2em;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.nav-link:hover {
  background-color: #c0c0c0;
  color: #000;
}

.nav-button {
  background-color: #b0b0b0;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  font-weight: bold;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.nav-button:hover {
  background-color: #a0a0a0;
}
</style>
