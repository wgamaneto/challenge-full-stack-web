<template>
  <div class="app-container">
    <aside class="sidebar">
      <div class="logo">
        <img :src="require('@/assets/logo.png')" alt="Grupo A" class="logo-image" />
      </div>
      <div class="sidebar-title">
        <h2>Modulo academico</h2>
      </div>
      <nav class="nav-links">
        <router-link to="/" class="nav-link" active-class="active-link">Alunos</router-link>
      </nav>
    </aside>
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 250px;
  background-color: #ddd;
  border-right: 2px solid #c0c0c0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
  border: 2px solid black;
}

.logo {
  margin-bottom: 20px;
}

.logo-image {
  max-height: 40px;
}

.sidebar-title {
  background-color: #a9a9a9;
  color: white;
  width: 100%;
  display: flex;
  border: 2px solid black;
  justify-content: center;
}

.nav-links {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  font-size: 1.2em;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
  margin-bottom: 10px;
  position: relative;
}

.nav-link:hover {
  background-color: #c0c0c0;
  color: #000;
}

.active-link {
  background-color: #ddd;
  border: 1px solid;
}

.active-link::after {
  content: "";
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid black;
}

.main-content {
  flex-grow: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #f7f7f7;
  border-bottom: 2px solid #c0c0c0;
}

.search-input {
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
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
  margin-left: 10px;
}

.nav-button:hover {
  background-color: #a0a0a0;
}
</style>
