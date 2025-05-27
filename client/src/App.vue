<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { HomeIcon, UserIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <div class="layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="logo">
        <img src="@/assets/logo.svg" alt="Logo" />
        <h2>MyApp</h2>
      </div>
      <nav class="nav-links">
        <RouterLink to="/" class="nav-item">
          <HomeIcon class="icon" />
          <span>Dashboard</span>
        </RouterLink>
        <RouterLink to="/user" class="nav-item">
          <UserIcon class="icon" />
          <span>User</span>
        </RouterLink>
      </nav>
    </aside>

    <!-- Main content -->
    <main class="main-content">
      <!-- Topbar -->
      <header class="topbar">
        <HomeIcon class="icon" />
      </header>

      <!-- Dynamic page content -->
      <section class="view-container">
        <RouterView />
      </section>
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
  font-family: sans-serif;
  color: #333;
}

/* Sidebar */
.sidebar {
  width: 220px;
  background-color: #2c3e50;
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.sidebar .logo {
  text-align: center;
  margin-bottom: 2rem;
}

.sidebar .logo img {
  width: 60px;
  margin-bottom: 0.5rem;
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #ecf0f1;
  text-decoration: none;
  font-weight: bold;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.nav-item:hover {
  background-color: #34495e;
}

.nav-item.router-link-exact-active {
  background-color: #1abc9c;
  color: white;
}

.icon {
  width: 20px;
  height: 20px;
}

/* Main area */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
}

/* Topbar */
.topbar {
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

/* View content */
.view-container {
  flex: 1;
  padding: 2rem;
  background-color: #ffffff;
  overflow-y: auto;
  min-height: 100vh;
}
</style>
