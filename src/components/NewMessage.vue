<template>
<div class="new-message">
    <form @submit.prevent="addMessage()">
        <label for="new-message">New Message (enter to add):</label>
        <input autocomplete="off" type="text" name="new-message" v-model="newMessage">
        <div v-if="feedback" class="feedback">{{ feedback }}</div>
    </form>
</div>
</template>

<script>
import db from '@/firebase/init'

export default {
    data(){
        return {
            newMessage: null,
            feedback: null
        }
    },
    methods: {
        addMessage(){
            if(this.newMessage){
                db.collection('messages').add({
                    name: this.name,
                    content: this.newMessage,
                    timeStamp: Date.now()
                }).catch(error => console.log('error :', error))

                this.newMessage = this.feedback = null;
            }else{  
                this.feedback = 'You must enter a message.'
            }
        }
    },
    props: ['name']
}
</script>

<style scoped>
.feedback{
  color: red;
  margin-bottom: 1rem;
}
</style>
