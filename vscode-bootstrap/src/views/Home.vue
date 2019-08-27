<template>
    <div id="home" >
        <div class="news container">
      <p>
        <a href>version 1.37</a>
        is now available! Read about the new features and fixes from July.
      </p>
    </div>
    <app-jumbotron></app-jumbotron>
    <div class="row">
      <div class="col-xs-6 col-md-3">
        <a href="#" class="thumbnails">
          <div class="glyphicon glyphicon-home caption"></div>IntelliSense
        </a>
      </div>
      <div class="col-xs-6 col-md-3">
        <a href="#" class="thumbnails">
          <div class="glyphicon glyphicon-list-alt caption"></div>IntelliSense
        </a>
      </div>
      <div class="col-xs-6 col-md-3">
        <a href="#" class="thumbnails">
          <div class="glyphicon glyphicon-refresh caption"></div>IntelliSense
        </a>
      </div>
      <div class="col-xs-6 col-md-3">
        <a href="#" class="thumbnails">
          <div class="glyphicon glyphicon-lock caption"></div>IntelliSense
        </a>
      </div>
    </div>
    <app-slidershow></app-slidershow>
    <div class="bg-svg">
      <div class="container">
        <div class="rows">
          <div class="col">
            <img src="../assets/1.svg" alt width="350px" height="250px" />
          </div>
          <div class="col">
            <h1>Meet IntelliSense.</h1>
            <p>Go beyond syntax highlighting and autocomplete with IntelliSense, which provides smart completions based on variable types, function definitions, and imported modules.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-svg" style="background:#cbb">
      <div class="container">
        <div class="rows">
          <div class="col">
            <h1>Meet IntelliSense.</h1>
            <p>Go beyond syntax highlighting and autocomplete with IntelliSense, which provides smart completions based on variable types, function definitions, and imported modules.</p>
          </div>
          <div class="col">
            <img src="../assets/2.svg" alt width="350px" height="250px" />
          </div>
        </div>
      </div>
    </div>
    <div class="bg-svg">
      <div class="container">
        <div class="rows">
          <div class="col">
            <img src="../assets/3.svg" alt width="350px" height="250px" />
          </div>
          <div class="col">
            <h1>Meet IntelliSense.</h1>
            <p>Go beyond syntax highlighting and autocomplete with IntelliSense, which provides smart completions based on variable types, function definitions, and imported modules.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-svg" style="background:#cbb">
      <div class="container">
        <div class="rows">
          <div class="col">
            <h1>Meet IntelliSense.</h1>
            <p>Go beyond syntax highlighting and autocomplete with IntelliSense, which provides smart completions based on variable types, function definitions, and imported modules.</p>
          </div>
          <div class="col hover">
            <img src="../assets/4.png" alt width="350px" height="250px" />
          </div>
        </div>
      </div>
    </div>
    <div class="bg-svg">
      <div class="container">
        <app-upshow></app-upshow>
      </div>
    </div>
    </div>
</template>

<script>
import jumbotron from "../components/jumbotron";
import slidershow from "../components/slideshow";
import upshow from "../components/upshow"
export default {
    name: "home",
  components: {
    "app-jumbotron": jumbotron,
    "app-slidershow": slidershow,
    "app-upshow":upshow,
  }
}
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
ul,
li {
  list-style: none;
}
.news {
  width: 100%;
  margin-top: 50px;
  background-color: beige;
}
.news p {
  height: 45px;
  line-height: 45px;
  text-align: center;
}
.row {
  margin-top: -77px;
  background-color: #fff;
  height: 120px;
}
.thumbnails {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  height: 120px;
  padding-left: 0;
  font-size: 18px;
  text-decoration: none;
}
.thumbnails:hover {
  background-color: azure;
  color: burlywood;
  text-decoration: none;
}
.thumbnails div {
  font-size: 24px;
}
.bg-svg {
  position: relative;
  height: 350px;
}
.rows {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: row;
}
.col {
  margin-left: 50px;
}
.col h1 {
  font-weight: 200;
}
.col p {
  line-height: 40px;
  width: 600px;
  font-size: 20px;
  margin-top: 50px;
}

</style>