<template>
  <nav class="nav has-shadow">
        <div class="container">
          <router-link to="/cards" exact>
            <img src="http://bit.ly/vue-img"
              alt="Vue SPA" />
          </router-link>
          <router-link class="nav-item is-tab"
          to="/cards/" exact>
          Home</router-link>
          <router-link class="nav-item is-tab"
          to="/create" exact>
          Create Card</router-link>
        </div>
      </nav>
</template>

