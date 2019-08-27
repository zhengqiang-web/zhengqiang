<template>
  <div class="jumbotron">
    <div class="text-nav flexrow bg-primary marg" style="height:450px">
      <div class="container flag">
        <h1>
          Code editing.
          <br />Redefined.
        </h1>
        <p>Free. Built on open source.Runs everywhere.</p>
        <div class="btn-group">
          <button type="button" class="btn download btn-lg">
            <a href="#">download for windowns</a>
          </button>
          <button
            type="button"
            class="btn dropdown-color btn-lg dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span class="caret"></span>
            <span class="sr-only">Toggle Dropdown</span>
          </button>
          <ul class="dropdown-menu">
            <li>
              <table class="table">
                <tr>
                  <td></td>
                  <td></td>
                  <td>Stable</td>
                  <td>Insiders</td>
                </tr>
                <tr>
                  <th>Macos</th>
                  <td>Package</td>
                  <td class="glyphicon glyphicon-download-alt"></td>
                </tr>
                <tr>
                  <th>Window x64</th>
                  <td>User Installer</td>
                  <td class="glyphicon glyphicon-download-alt"></td>
                </tr>
                <tr>
                  <th>Linux x64</th>
                  <td>
                    .deb
                    <br />.rpm
                  </td>
                  <td class="glyphicon glyphicon-download-alt"></td>
                </tr>
              </table>
            </li>
            <li role="separator" class="divider"></li>
            <li style="color:black">
              By using VS Code, you agree to its
              <a href>license and privacy statement.</a>
            </li>
          </ul>
          
        </div>
        <p>By using VS Code, you agree to its
        <br><a href="" style="color:pink" >license and privacy statement.</a></p>
      </div>
      <div class="vsBack"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.marg {
  margin-top: -65px;
}
.download {
  background: green;
}
.download a {
  color: aliceblue;
  text-decoration: none;
}
.download:hover {
  background-color: chartreuse;
}
.dropdown-color {
  background-color: aqua;
}
.table {
  color: black;
}
.flexrow {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.vsBack {
  background: url("../assets/vs.png") no-repeat;
  margin:auto 30px;
  width: 1800px;
  height: 400px;
   background-size: cover;
}
.flag{
  text-align: center;
  margin: 30px 30px;
}
</style>