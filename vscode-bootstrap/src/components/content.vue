<template>
  <div class="contents">
    <h1>Getting Started</h1>
    <p>Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages (such as C++, C#, Java, Python, PHP, Go) and runtimes (such as .NET and Unity). Begin your journey with VS Code with these introductory videos.</p>
    <h1><a href="#components-anchor-demo-basic">Visual Studio Code in Action</a></h1>
    <app-carousel></app-carousel>
  </div>
</template>

<script>
import carousel from "./carousel";
export default {
  name: "contents",
  components: {
    "app-carousel": carousel
  }
};
</script>

<style scoped>
.contents {
  margin-top: 50px;
  margin-left: 40px;
}
</style>