<template>
  <div class="test">
    <ul class="img-box">
      <li>
        <a href="javascript:;">
          <img src="../assets/1.svg" alt />
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="../assets/2.svg" alt />
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="../assets/3.svg" alt />
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="../assets/4.png" alt />
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="../assets/vs.png" alt />
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="../assets/1.svg" alt />
        </a>
      </li>
    </ul>
    <!-- <div class="btn">
      <button class="prev">&lt;</button>
      <button class="next">&gt;</button>
    </div>-->
    <div class="des">
      <ul>
        <li class="item active"></li>
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
        <li class="item"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      index: 0,
      num: 5,
      leftWidth: 600
    };
  },
  mounted() {
    this.cont("next");
  },
  methods: {
    cont(dirtion) {
      this.play();
      $(".img-box").stop(false, true);
      if (dirtion == "next") {
        this.index++;
        if (this.index > this.num) {
          $(".img-box").css({
            left: 0
          });
          this.index = 1;
        }
      }
      $(".img-box").animate({
        left: -this.leftWidth * this.index
      });
      this.active($(".item").eq(this.index == 5 ? 0 : this.index));
    },
    play() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      this.timer = setTimeout(() => {
        this.cont("next");
      }, 3000);
    },
    active(dom) {
      $(".active").removeClass("active");
      dom.addClass("active");
    },
  }
};
</script>

<style scoped>
body,
ul,
li,
a {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
}
.test {
  position: relative;
  width: 600px;
  margin: 100px auto;
  font-size: 0;
  overflow: hidden;
}
.test .img-box {
  position: relative;
  left: 0;
  width: 3600px;
  height: 500px;
  text-align: center;
}
.test ul li {
  display: inline-block;
}
.test ul li img {
  width: 600px;
  height: 500px;
}
/*按钮*/
.test .btn {
  position: absolute;
  top: 50%;
  margin-top: -20px;
}
.test .btn .prev {
  position: absolute;
  left: -2px;
  background: rgba(0, 0, 0, 0.5);
  width: 30px;
  height: 40px;
  outline: none;
}
.test .btn .next {
  position: absolute;
  right: -574px;
  width: 30px;
  height: 40px;
  background: rgba(0, 0, 0, 0.5);
  outline: none;
}
/*圆点*/
.des {
  position: absolute;
  bottom: 30px;
  width: 100%;
  text-align: center;
}
.des ul {
  display: inline-block;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 7px;
}
.des .item {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #fff;
  margin: 2px;
}
.des .active {
  background: #ff6700;
}
</style>