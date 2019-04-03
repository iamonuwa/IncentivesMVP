<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <div>
      <amplify-connect
        :subscription="onCreatePatientSubscription"
        :mutation="createPatientMutation"
        @done="onCreatePatient"
      >
        <template slot-scope="{ loading, mutate, errors }">
          <div v-if="loading">Loading...</div>

          <div v-else-if="errors.length > 0">
            <ul v-for="item in errors">
              <li>{{item.message}}</li>
            </ul>
          </div>

          <input v-model="id" placeholder="Patient ID Number">
          <input v-model="phone" placeholder="Phone Number">
          <input v-model="countryCode" placeholder="County Code">
          <button v-on:click="mutate">Create Patient Profile</button>
        </template>
      </amplify-connect>
    </div>
  </div>
</template>

<script>
import { components } from "aws-amplify-vue";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { listPatients } from "./graphql/queries.js";
import { createPatient } from "./graphql/mutations";
import { onCreatePatient } from "./graphql/subscriptions";

export default {
  name: "app",
  components: {
    ...components
  },
  data() {
    return {
      id: null,
      phone: null,
      countryCode: null
    };
  },
  computed: {
    listPatientsQuery() {
      return this.$Amplify.graphqlOperation(listPatients);
    },
    createPatientMutation() {
      const input = {
        phone: this.phone,
        countryCode: this.countryCode
      };
      return this.$Amplify.graphqlOperation(createPatient, { input });
    },
    onCreatePatientSubscription() {
      return this.$Amplify.graphqlOperation(onCreatePatient);
    }
  },
  methods: {
    createPatient() {
      const input = {
        phone: this.phone,
        countryCode: this.countryCode
      };
      try {
        API.graphql(graphqlOperation(createPatient, { input }));
      } catch (err) {
        console.log(err);
      }
    },
    onCreatePatient(prevData, newData) {
      const newPatient = newData.onCreatePatient;
      prevDta.data.listPatients.items.push(newPatient);
      return prevData.data;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
