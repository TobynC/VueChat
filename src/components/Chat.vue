<template>
<div class="chat container">
    <h2 class="center teal-text">Chat</h2>
    <div class="card">
        <div class="card-content">
            <ul v-chat-scroll class="messages">
                <li class="message" v-for="message in messages" :key="message.id">
                    <span class="teal-text">{{ message.name}}:</span>
                    <span class="grey-text text-darken-3">{{ message.content }}</span>
                    <span class="grey-text time">{{ message.timeStamp }}</span>
                </li>
            </ul>
        </div>
        <div class="card-action">
            <NewMessage :name="name" />
        </div>
    </div>
</div>
</template>

<script>
import NewMessage from '@/components/NewMessage'
import db from '@/firebase/init'
import moment from 'moment'

export default {
    name: 'Chat',
    data() {
        return {
            name: this.$route.params.name,
            messages: []
        }
    },
    methods: {

    },
    components: {
        NewMessage
    },
    created(){
        let ref = db.collection('messages').orderBy('timeStamp');
        ref.onSnapshot(snapshot => {
            snapshot.docChanges.forEach(change => {
                if(change.type === 'added'){
                    let document = change.doc;
                    this.messages.push({
                        id: document.id,
                        name: document.data().name,
                        content: document.data().content,
                        timeStamp: moment(document.data().timeStamp).format('lll')
                    })
                }
            })
        })
    }
}
</script>

<style scoped>
.chat {
    max-width: 50rem;
    margin-top: 2rem;
}

.chat h2 {
    font-size: 3.6rem;
    margin-bottom: 4rem;
}

.chat span {
    font-size: 1.4rem;
}

.chat .time {
    display: block;
    font-size: 1rem;
}

.chat .card {
    margin-bottom: 2rem;
}
.message{
    margin: 1rem 0;
}
.messages{
    max-height: 50rem;
    overflow: auto;
}
.messages::-webkit-scrollbar{
    width: 0.25rem;
}
.messages::-webkit-scrollbar-track{
    background: #ddd;
}
.messages::-webkit-scrollbar-thumb{
    background: #aaa;
}
</style>
