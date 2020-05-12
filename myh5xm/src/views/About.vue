<template>
  <div class="about">
    <h1>{{ atoB }}--</h1>
    <div>{{ $store.state.aboutdata }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},

  computed: {
    atoB() {
      return this.$store.state.username;
    },
  },
};
</script>
