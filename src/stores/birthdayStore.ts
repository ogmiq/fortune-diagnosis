import { defineStore } from 'pinia';

export const useBirthdayStore = defineStore('birthday', {
  state: () => ({
    birthday: '',
  }),
  actions: {
    setBirthday(date: string) {
      this.birthday = date;
    },
  },
});
