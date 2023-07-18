<template>
    <img :src="book.cover" alt="book.title" height="250" />
    <h3>{{ book.title }}</h3>
    <p>{{ book.author.name }}</p>
    <p>
      <span class="tag">{{ book.genre }}</span>
    </p>      
    <button @click="addToCart(book)">Add</button>
</template>

<script lang="ts">
import Book from '@/interfaces/Book.interface';

export default {
  props: {
    book: {
      type: Object,
      required: true
    }    
  },
  methods: {
    addToCart(book: Book) {
      console.log({book})
    }
  },
    setup() {


    return {}
  }
}
</script>

<style lang="less" scoped>
@import "@/assets/all.less";
.tag{
  background-color: #f5f5f5;
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  &:hover{
    background-color: darken(#f5f5f5, 10%);
  }
}
img{
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease-in-out;
  &:hover{
    height: 350px;
    box-shadow: 0 0.05rem 0.5rem @dark
  }
}
</style>