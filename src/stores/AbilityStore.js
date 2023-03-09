import { defineStore } from "pinia";

export const useAbilityStore = defineStore("userAbilities", {
  state: () => ({
    abilities: localStorage.getItem("abilities")
  }),

  getters: {
    getAbilities(state) {
      return state.abilities;
    }
  },

  actions: {
    removeAbilities() {
    }
  },
  persist: true
});
