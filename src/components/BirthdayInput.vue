<template>
  <div class="p-4">
    <label for="birthday" class="block text-lg font-bold">生年月日を入力</label>
    <input
      id="birthday"
      type="date"
      v-model="birthday"
      class="mt-2 p-2 border rounded w-full"
    />
    <button @click="saveBirthday" class="mt-4 bg-primary text-white px-4 py-2 rounded">
      保存
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useBirthdayStore } from '../stores/birthdayStore';


const birthdayStore = useBirthdayStore();
const birthday = ref('');

const saveBirthday = () => {
  birthdayStore.setBirthday(birthday.value);
  console.log('保存された生年月日:', birthdayStore.birthday);
};
</script>
