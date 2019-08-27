<template>
  <div>
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid bg-primary">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <a class="navbar-brand" href="#">
            <img
              alt="Brand"
              src="../assets/logo.png"
              class="img-rounded"
              width="30px"
              height="30px"
            />
          </a>
          <a class="navbar-brand" href="javascript:;">
            <router-link to="/">Visual Studio Code</router-link>
          </a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav" id="text-color">
            <li>
              <!-- <a href="#">Docs</a> -->
              <a href="javascript:;">
                <router-link to="/doce">Docs</router-link>
              </a>
            </li>
            <li>
              <a href="#">
                <router-link to="/update">Updates</router-link>
              </a>
            </li>
            <li>
              <a href="#">
                <router-link to="/Blog">Blog</router-link>
              </a>
            </li>
            <li>
              <a href="#">
                <router-link to="/Api">Api</router-link>
              </a>
            </li>
            <li>
              <a href="#">
                <router-link to="/Extentions">Extentions</router-link>
              </a>
            </li>
            <li>
              <a href="#" class="text-nav">
                <router-link to="/FAQ">FAQ</router-link>
              </a>
            </li>
          </ul>

          <ul class="nav navbar-nav navbar-right" id="text-color">
            <li class="download">
              <a href="#" class="glyphicon glyphicon-download-alt">Download</a>
            </li>
          </ul>
          <form class="navbar-form navbar-right">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search" />
            </div>
          </form>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.download {
  widows: 100px;
  text-align: center;
  background: green;
}
.navbar-header a {
  color: #fff;
  font-size: 24px;
  text-decoration: none;
}
.navbar-header a:hover {
  color: #fff;
  text-decoration: none;
}
#text-color a {
  color: rgba(255, 255, 255, 0.5);
  font-size: 16px;
}
#text-color a:hover {
  color: #fff;
}
</style>