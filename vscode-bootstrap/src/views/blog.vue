<template>
  <div class="blog">
    <div class="wrapper container">
      <div class="right">
        <app-menu></app-menu>
      </div>
      <div class="center">
        <app-content></app-content>
      </div>
      <div class="left">
        <app-anchor></app-anchor>
      </div>
    </div>
  </div>
</template>

<script>
import slidermenu from "../components/slidermenu";
import anchor from "../components/anchor";
import content from "../components/content";
export default {
  name: "blog",
  components: {
    "app-menu": slidermenu,
    "app-anchor": anchor,
    "app-content": content
  },
  methods: {}
};
</script>

<style scoped>
.blog {
  margin-top: 35px;
  height: 2400px;
}
.wrapper {
  display: flex;
  width: 100%;
}
.right {
  width: 200px;
  margin-top: 20px;
  background: #fff;
}
.center {
  width: 200px;
  flex-grow: 1;
  padding: 0 50px;
  margin: 20px 20px 0 20px;
  background: #fff;
}
.left {
  margin-top: 20px;
  width: 200px;
  background: #fff;
}
</style>