<template>
  <div id="container">
    <form id="chat">
      <input
        type="text"
        name="username"
        placeholder="Digite seu nome"
        id="username"
        v-model="username"
      />
      <div id="messages">
        <Message
          v-for="messa in messages"
          :key="messa.id"
          :message="messa"
          :colors="generateColor()"
        />
      </div>
      <input
        type="text"
        name="message"
        placeholder="Digite uma mensagem"
        id="message"
        v-model="message"
      />
      <button @click.prevent="send" id="button" type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
import Message from "./Message";
import { socket } from "../main";

export default {
  components: {
    Message,
  },
  data() {
    return {
      username: "",
      message: "",
      messages: [],
    };
  },
  created() {
    socket.on("previousMessages", (data) => {
      for (let mess of data) {
        this.messages.push(mess);
        console.log("messages: " + mess.message);
      }
    });

    socket.on("receivedMessage", (data) => {
      console.log(data);
      this.messages.push(data);
    });
  },

  methods: {
    send() {
      const newMessage = {
        id: Date.now(),
        username: this.username,
        message: this.message,
      };

      socket.emit("sendMessage", newMessage);
      this.messages.push(newMessage);
      this.message = "";
    },
    generateColor() {
      return {
        myBg: "#" + ((Math.random() * 0xffffff) << 0).toString(16),
        myStrong: "#" + ((Math.random() * 0xffffff) << 0).toString(16),
        myParagraph: "#" + ((Math.random() * 0xffffff) << 0).toString(16),
      };
    },
  },
};
</script>

<style>
#container {
  border-radius: 0.5rem;
  background-color: white;
  height: 75%;
  width: 35%;
}

#chat {
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  height: 100%;
  width: 100%;
}

#username {
  width: 95%;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 2px 4px 15px rgb(0 0 0 / 20%);
}

#messages {
  background: #f1f1f1;
  overflow: scroll;
  min-height: 70%;
  width: 95%;
  margin: 0.5rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 2px 4px 15px rgb(0 0 0 / 20%);
}

#message {
  width: 95%;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 2px 4px 15px rgb(0 0 0 / 20%);
}

#button {
  margin-top: 1rem;
  padding: 0.5rem;
  width: 95%;
  border: none;
  background: lightcoral;
  border-radius: 0.5rem;
  color: white;
  font-weight: bold;
  font-size: 1rem;
}
</style>
