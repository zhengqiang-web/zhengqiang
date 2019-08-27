<template>
  <div class="bg">
    <div class="left" @click="upPage">
      <span class="glyphicon glyphicon-chevron-left"></span>
    </div>
    <div id="content-marg" v-if="page==1">
      <div class="content-border">
        <div class="text-list">
          <div class="content">
            <a href>
              <img
                alt="Brand"
                src="../assets/logo.png"
                class="img-rounded"
                width="45px"
                height="45px"
              />
            </a>
            <div class="text-content">
              <a href="#">
                <strong>Una Kravets</strong>
                <span>@una1</span>
              </a>
              <div>
                vs
                <a href>code</a> does so many things right. I’m constantly impressed by the UX, and customizing workspace / user preferences is no exception. 🙌🏼💯 It just keeps getting better ❤️
              </div>
            </div>
          </div>
          <div class="content">
            <a href>
              <img
                alt="Brand"
                src="../assets/logo.png"
                class="img-rounded"
                width="45px"
                height="45px"
              />
            </a>
            <div class="text-content">
              <a href="#">
                <strong>Una Kravets</strong>
                <span>@una</span>
              </a>
              <div>
                vs
                <a href>code</a> does so many things right. I’m constantly impressed by the UX, and customizing workspace / user preferences is no exception. 🙌🏼💯 It just keeps getting better ❤️
              </div>
            </div>
          </div>
          <div class="content">
            <a href>
              <img
                alt="Brand"
                src="../assets/logo.png"
                class="img-rounded"
                width="45px"
                height="45px"
              />
            </a>
            <div class="text-content">
              <a href="#">
                <strong>Una Kravets</strong>
                <span>@una</span>
              </a>
              <div>
                vs
                <a href>code</a> does so many things right. I’m constantly impressed by the UX, and customizing workspace / user preferences is no exception. 🙌🏼💯 It just keeps getting better ❤️
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="content-marg" v-else-if="page==2">
      <div class="content-border">
        <div class="text-list">
          <div class="content">
            <a href>
              <img
                alt="Brand"
                src="../assets/logo.png"
                class="img-rounded"
                width="45px"
                height="45px"
              />
            </a>
            <div class="text-content">
              <a href="#">
                <strong>Una Kravets</strong>
                <span>@una2</span>
              </a>
              <div>
                vs
                <a href>code</a> does so many things right. I’m constantly impressed by the UX, and customizing workspace / user preferences is no exception. 🙌🏼💯 It just keeps getting better ❤️
              </div>
            </div>
          </div>
          <div class="content">
            <a href>
              <img
                alt="Brand"
                src="../assets/logo.png"
                class="img-rounded"
                width="45px"
                height="45px"
              />
            </a>
            <div class="text-content">
              <a href="#">
                <strong>Una Kravets</strong>
                <span>@una</span>
              </a>
              <div>
                vs
                <a href>code</a> does so many things right. I’m constantly impressed by the UX, and customizing workspace / user preferences is no exception. 🙌🏼💯 It just keeps getting better ❤️
              </div>
            </div>
          </div>
          <div class="content">
            <a href>
              <img
                alt="Brand"
                src="../assets/logo.png"
                class="img-rounded"
                width="45px"
                height="45px"
              />
            </a>
            <div class="text-content">
              <a href="#">
                <strong>Una Kravets</strong>
                <span>@una</span>
              </a>
              <div>
                vs
                <a href>code</a> does so many things right. I’m constantly impressed by the UX, and customizing workspace / user preferences is no exception. 🙌🏼💯 It just keeps getting better ❤️
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="content-marg" v-else>
      <div class="content-border">
        <div class="text-list">
          <div class="content">
            <a href>
              <img
                alt="Brand"
                src="../assets/logo.png"
                class="img-rounded"
                width="45px"
                height="45px"
              />
            </a>
            <div class="text-content">
              <a href="#">
                <strong>Una Kravets</strong>
                <span>@unaelse</span>
              </a>
              <div>
                vs
                <a href>code</a> does so many things right. I’m constantly impressed by the UX, and customizing workspace / user preferences is no exception. 🙌🏼💯 It just keeps getting better ❤️
              </div>
            </div>
          </div>
          <div class="content">
            <a href>
              <img
                alt="Brand"
                src="../assets/logo.png"
                class="img-rounded"
                width="45px"
                height="45px"
              />
            </a>
            <div class="text-content">
              <a href="#">
                <strong>Una Kravets</strong>
                <span>@una</span>
              </a>
              <div>
                vs
                <a href>code</a> does so many things right. I’m constantly impressed by the UX, and customizing workspace / user preferences is no exception. 🙌🏼💯 It just keeps getting better ❤️
              </div>
            </div>
          </div>
          <div class="content">
            <a href>
              <img
                alt="Brand"
                src="../assets/logo.png"
                class="img-rounded"
                width="45px"
                height="45px"
              />
            </a>
            <div class="text-content">
              <a href="#">
                <strong>Una Kravets</strong>
                <span>@una</span>
              </a>
              <div>
                vs
                <a href>code</a> does so many things right. I’m constantly impressed by the UX, and customizing workspace / user preferences is no exception. 🙌🏼💯 It just keeps getting better ❤️
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right" @click="nextPage">
      <span class="glyphicon glyphicon-chevron-right"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1
    };
  },
  methods: {
    upPage() {
      if (this.page > 2) {
        this.page = 2;
      } else if (this.page <= 0) {
        this.page = 2;
      } else {
        this.page--;
      }
    },
    nextPage() {
      if (this.page > 2) {
        this.page = 1;
      } else if (this.page < 0) {
        this.page = 1;
      } else {
        this.page++;
      }
    }
  }
};
</script>

<style scoped>
.bg {
  position: relative;
  background-color: #ccc;
  height: 300px;
  display: flex;
  align-items: center;
}
.content-border {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.text-list {
  display: flex;
  flex-direction: row;
}
.content {
  display: flex;
  flex-direction: row;
  width: 380px;
}
.text-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.left,
.right {
  line-height: 50px;
  text-align: center;
  font-size: 40px;
  color: aquamarine;
}
.left:hover,
.right:hover {
  color: aqua;
}

#content-marg {
  width: 700px;
  margin: 0 auto;
  margin-left: 25px;
}
</style>