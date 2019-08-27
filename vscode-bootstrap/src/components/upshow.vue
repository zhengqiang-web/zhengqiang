<template>
  <div class="list-row">
    <div class="title">
      <h1>Vs Code For</h1>
    </div>
    <div class="data-list">
      <ul class="li-box">
        <li>Ini</li>
        <li>C#</li>
        <li>Java</li>
        <li>TypeScript</li>
        <li>SQL</li>
        <li>HTML</li>
        <li>Haxe</li>
        <li>Rust</li>
        <li>R</li>
        <li>Lua</li>
        <li>JavaScript</li>
        <li>HandleBars</li>
        <li>Go</li>
        <li>Groovy</li>
        <li>Makefile</li>
        <li>Less</li>
        <li>Markdown</li>
        <li>F#</li>
        <li>PHP</li>
        <li>Clojure</li>
        <li>Objective-C</li>
        <li>Jade</li>
        <li>Coffee Script</li>
        <li>Dockerfile</li>
        <li>Swift</li>
        <li>Batch</li>
        <li>Perl</li>
        <li>PowerShell</li>
        <li>JSON</li>
        <li>Python</li>
        <li>Ruby</li>
        <li>C++</li>
        <li>CSS</li>
        <li>Visual Basic</li>
        <li>XML</li>
        <li>Razor</li>
        <li>Sass</li>
      </ul>
    </div>
    <div class="btn-now">
      <a href>get start now</a>
    </div>
  </div>
</template>

<script>

export default {
  name: "list-row",
  data() {
    return {
      index: 0,
      num: 36,
      topWidth: 26,
      timer: undefined
    };
  },
  mounted() {
    this.cont("next");
  },
  methods: {
    cont(dirtion) {
      this.play();
      $(".li-box").stop(false, true);
      if (dirtion == "next") {
        this.index++;
        if (this.index > this.num) {
          $(".li-box").css({
            top: 0
          });
          this.index = 0;
        }
      }
      $(".li-box").animate({
        top: -this.topWidth * this.index
      });
    },
    
    play() {
      if (this.timer) {
        clearTimeout(this.timer);
         this.timer = null;
      }
      this.timer = setTimeout(() => {
        this.cont("next");
      }, 1000);
    }
  }
};
</script>

<style scoped>
.list-row {
  display: flex;
  flex-direction: row;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.list-row .title {
  display: flex;
  align-items: center;
}
.data-list {
  position: relative;
  height: 200px;
  font-size: 24px;
  margin: 100px auto;
  overflow: hidden;
}
.data-list .li-box {
  position: relative;
  top: 0;
  width: 300px;
  height: 1500px;
  text-align: center;
}
.btn-now {
  position: absolute;
  right: 150px;
  align-self: flex-end;
  text-align: center;
  width: 200px;
  height: 50px;
  font-size: 24px;
  background-color: aqua;
  line-height: 50px;
  margin-bottom: 40px;
}
.btn-now a:hover {
  color: aliceblue;
  cursor: pointer;
  text-decoration: none;
}
</style>