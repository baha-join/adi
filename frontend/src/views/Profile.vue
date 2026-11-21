<template>
  <div class="profile-card">
    <h2>Мой профиль</h2>
    <div class="input-group">
      <label>ФИО</label>
      <input v-model="fullName" type="text" />
    </div>
    <div class="input-group">
      <label>Телефон</label>
      <input v-model="phone" type="text" />
    </div>
    <button @click="saveProfile">Сохранить изменения</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../api'

const fullName = ref('')
const phone = ref('')

onMounted(async () => {
  const res = await api.get('/me/')
  fullName.value = res.data.full_name || ''
  phone.value = res.data.phone || ''
})

const saveProfile = async () => {
  try {
    await api.put('/profile/update/', {
      full_name: fullName.value,
      phone: phone.value
    })
    alert('Профиль обновлен!')
  } catch (e) {
    alert('Ошибка при обновлении')
  }
}
</script>

<style scoped>
.profile-card { max-width: 400px; margin: 0 auto; background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
.input-group { margin-bottom: 15px; }
.input-group label { display: block; margin-bottom: 5px; }
.input-group input { width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 8px; }
button { width: 100%; margin-top: 10px; background-color: #ff7f50; color: white; border: none; padding: 10px; border-radius: 8px; cursor: pointer; }
</style>
