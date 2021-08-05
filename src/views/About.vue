<template>
  <div class="demo">
    <resize-observer @notify="handleResize" />
    <h1>About page! Width {{w}} | Height {{h}}</h1>
    <p>asdas</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      w: null,
      h: null,
    }
  },
  methods: {
    handleResize (qq) {
      console.log('resized',qq)
      // this.w = width
      // this.h = height
      // return  w
    }
  },
  beforeMount() {
    this.w = window.innerWidth
    this.h = window.innerHeight
  },
}
</script>

<style scoped>
.demo {
  position: relative;
  background: red;
}
</style>