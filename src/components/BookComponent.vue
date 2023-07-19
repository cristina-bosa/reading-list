<template>
    <img :src="book.cover" alt="book.title" height="250"/>
    <section>
      <h3 class="text-bold text-secondary">{{ book.title }}</h3>
      <p>
        <span class="tag">{{ book.genre }}</span>
      </p>      
      <p class="text-grey">{{ book.author.name }}</p>
      <p>{{ book.synopsis }}</p>
    </section>
    <section>
      <img src="@/assets/icons/plus.svg" alt="Add to cart" height="24" width="24">
      <iconPlus></iconPlus>
      <button @click="addList(book)">Add</button>
    </section>
</template>

<script lang="ts">
import Book from '@/types/Book.interface';
import iconPlus from '@/components/icons/iconPlus.vue'
export default {
  props: {
    book: {
      type: Object,
      required: true
    }    
  },
  methods: {
    addList(book: Book) {
      console.log({book})
    }
  },
    setup() {


      return {
        iconPlus

    }
  }
}
</script>

<style lang="less" scoped>
@import "@/assets/all.less";
.tag{
  background-color: lighten(@secondary, 33.4%);
  color: @secondary;
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
}
</style>