<template>
  <q-btn-dropdown
    icon="translate"
    flat
    class="text-secondary"
    v-model="menu"
  >
    <q-list>
      <q-item clickable v-for="item in languageOptions"
              v-bind:key="item.value" v-ripple class="q-list--bordered" v-model="menu">
        <q-item-section @click="setLanguage(item.value)" flat>
          <q-item-label> {{ item.label }} <span :class="'fi fi-'+item.flag" /></q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

  </q-btn-dropdown>
</template>

<script>
import "/node_modules/flag-icons/css/flag-icons.min.css";
export default {
  name: "language-switcher",
  data() {
    return {
      selectedLanguage: null,
      languageOptions: [
        { label: "English", value: "en-US", flag: "us" },
        { label: "Amharic", value: "am-ET", flag: "et" }
      ],
      menu: false
    };
  },
  mounted() {
    this.selectedLanguage = this.$q.lang.getLocale();
  },
  methods: {
    setLanguage: function(val) {
      this.$q.loading.show({
        text: "wait..."
      });
      let timer = setTimeout(() => {
        this.$q.loading.hide();
        timer = void 0;
      }, 500);
      return this.$q.lang.set(val);
    }
  }
}
</script>
