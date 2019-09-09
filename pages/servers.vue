<template>
  <v-layout column justify-center align-center>
    <p>Servers and stuff here</p>
    <div class="my-2">
      <v-btn x-large color="success" dark @click="getServers()">Extra large Button</v-btn>
    </div>
     <v-list rounded>
      <v-subheader>Servers</v-subheader>
      <v-list-item-group color="primary">
        <v-list-item v-for="i in servers" :key="i">
          <v-list-item-icon>
             <v-icon>computer</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="i"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-layout >
</template>


<script>
import axios from 'axios'
import {mapMutations} from 'vuex'

export default {
  computed: {
    servers () {
      return this.$store.state.servers.list
    }
  },
  methods: {
     async getServers () {
      const { data } = await axios.get(`/list`)
      console.log(data)
      return data
    },
    addTodo () {
      this.$store.commit('todos/add', 'your momma')
      console.log(this.todos)
     
    },
    ...mapMutations({
      toggle: 'servers/toggle'
    })
  }
}

</script>