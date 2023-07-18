<template>
  <section class="hero" aria-label="Library of books">
    <h1>Book haven: where pages turn and adventures begin</h1>
    <p>Discover untold tales and get lost in the realm of literature.</p>
  </section>
</template>

<script lang="ts">
export default {
  name: 'HeaderComponent',
}
</script>
<style lang="less">
@import '../assets/all.less';

.hero {
  background-color: @primary;
  color: @light;
  padding: 3rem;
  border-radius: 0rem 0rem 1rem 1rem;
  margin-bottom: 1rem;

  h1 {
    font-size: 3rem;
    font-family: Excon;
    font-weight: 900;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    font-family: Ranade;
    font-weight: 200;
  }
}
</style>