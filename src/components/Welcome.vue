<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="enterChat()">
          <label for="name">Enter your name:</label>
          <input v-model="name" type="text" name="name" />
          <div class="feedback" v-if="feedback">{{ feedback }}</div>
          <button class="btn teal">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      name: null,
      feedback: null
    }
  },
  methods: {
    enterChat(){
      if(this.name)
        this.$router.push({ name: 'Chat', params: { name: this.name } })
      else
        this.feedback = 'You must enter a name to join the chat.'
    }
  }
}
</script>

<style scoped>
.welcome{
  max-width: 30rem;
  margin-top: 10rem;
}
.welcome h2 {
  font-size: 3rem;
}
.feedback{
  color: red;
  margin-bottom: 1rem;
}
</style>
