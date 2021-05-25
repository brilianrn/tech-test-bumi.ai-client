<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow mb-4">
    <div class="container-fluid">
      <router-link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Challenge_Logo.png/1200px-Challenge_Logo.png"
          alt="logo"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <router-link to="/">Home</router-link>
            </a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="#">
              <router-link to="/about">MyFavorites</router-link>
            </a>
          </li> -->
          <div class="dropdown">
            <a class="nav-link dropdown-toggle text text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Album ID</a>
            <div class="dropdown-content">
              <div v-for="(num, i) in 100" :key="i">
                <a href="#" @click.prevent="toSortingPhotos(num)">{{ num }}</a>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import route from '../router'

export default {
  name: 'Navbar',
  methods: {
    toSortingPhotos (albumId) {
      route.push('/sorting-by/' + albumId)
    }
  }
}
</script>

<style scoped>
* {
  text-decoration: none;
  color: black;
}
img {
  width: 5em;
}
.dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #f1f1f1;
  color: #0F51F9;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
</style>
