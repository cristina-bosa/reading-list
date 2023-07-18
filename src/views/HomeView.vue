<template>
  <section class="container">
    <HeaderComponent></HeaderComponent>
    <LibraryComponent></LibraryComponent>
    <FooterComponent></FooterComponent>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HeaderComponent from '@/components/HeaderComponent.vue';
import LibraryComponent from '@/components/LibraryComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';


@Options({
  components: {
    HeaderComponent,
    LibraryComponent,
    FooterComponent,

  },
})
export default class HomeView extends Vue { }
</script>
