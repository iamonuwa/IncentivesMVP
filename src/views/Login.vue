<template>
  <card
    type="secondary"
    shadow
    header-classes="bg-white pb-5"
    body-classes="px-lg-5 py-lg-5"
    class="border-0"
  >
    <template>
      <div class="text-muted text-center mb-3">
        <small>Sign in with credentials</small>
      </div>
    </template>
    <template>
      <form role="form">
        <base-input alternative class="mb-3" placeholder="Email" addon-left-icon="ni ni-email-83"></base-input>
        <base-input
          alternative
          type="password"
          placeholder="Password"
          addon-left-icon="ni ni-lock-circle-open"
        ></base-input>
        <base-checkbox>Remember me</base-checkbox>
        <div class="text-center">
          <base-button type="primary" class="my-4">Sign In</base-button>
        </div>
      </form>
    </template>
  </card>
</template>
<script>
export default {
  name: "login",
  components: {},
  data() {
      return {

      }
  },
  methods: {

  }
};
</script>
<style>
</style>
