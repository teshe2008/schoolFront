<template>
  <q-select
    v-model="locale"
    :options="localeOptions"
    label="Quasar Language"
    dense
    borderless
    emit-value
    map-options
    options-dense
    style="min-width: 150px"
  />
  <!-- ...... -->
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  name: "language-switcher",
  setup() {
    const { locale } = useI18n({ useScope: "global" });

    return {
      locale,
      localeOptions: [
        { value: "en-US", label: "English" },
        { value: "am-ET", label: "Amharic" }
      ]
    };
  }
};
</script>

<style scoped>

</style>
