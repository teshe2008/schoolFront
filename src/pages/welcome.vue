<template>
  <q-layout view="hhh LpR fFf">
    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img alt="logo" src="../assets/logo.png">
          </q-avatar>
        </q-toolbar-title>
        <router-link to="/" class="q-link q-router-link--active text-secondary">Home</router-link>
        <router-link to="#about" class="q-ma-md q-link text-secondary">About</router-link>
        <router-link to="#register" class="q-ma-md text-capitalize q-link text-secondary">Register Now</router-link>
        <login-component></login-component>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page>
        <div id="top">
        </div>
      </q-page>
    </q-page-container>
    <q-footer>
      <q-toolbar>
        <q-toolbar-title>
          <div>
            <div>
              <div class="row row-md">
                <div class="col col-auto">
                  <a href="/">
                    <q-avatar>
                      <img  alt="logo" src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
                    </q-avatar>
                  </a>
                  <p>Brought to you By Support Education PLC</p>
                  <div>
                    <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                    <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                    <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                    <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>

                <div class="col">
                  <h4>Useful Links</h4>
                  <ul>
                    <li><i class="bi bi-chevron-right"></i> <a href="#">Home</a></li>
                    <li><i class="bi bi-chevron-right"></i> <a href="#">About us</a></li>
                    <li><i class="bi bi-chevron-right"></i> <a href="#">Services</a></li>
                    <li><i class="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
                    <li><i class="bi bi-chevron-right"></i> <a href="#">Privacy policy</a></li>
                  </ul>
                </div>

                <div class="col">
                  <h4>Our Services</h4>
                  <ul style="color:#FFCA3D">
                    <li><i class="bi bi-chevron-right"></i> <a href="#">Consultancy</a></li>
                    <li><i class="bi bi-chevron-right"></i> <a href="#">Training</a></li>
                    <li><i class="bi bi-chevron-right"></i> <a href="#">On demand support</a></li>
                    <li><i class="bi bi-chevron-right"></i> <a href="#">Software Development</a></li>
                    <li><i class="bi bi-chevron-right"></i> <a href="#">Network and School lab Electrical
                      Installation</a></li>
                  </ul>
                </div>

                <div class="col">
                  <h4>Contact Us</h4>
                  <p>
                    WPXH+GFM street, Addis Ababa<br>
                    Ethiopia <br><br>
                    <strong>Phone:</strong>+251 911 62 26 90<br>
                    <strong>Email:</strong> info@suped.org<br>
                  </p>

                </div>

              </div>
            </div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import LoginComponent from "pages/auth/login.vue";

export default defineComponent({
  name: "WelcomePage",
  components: { LoginComponent },
  methods: {
    showLogin() {
      alert("clicked");
    }
  }

});
</script>
<style scoped>
#top {

}
</style>
