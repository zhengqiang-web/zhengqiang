<template>
<div class="menu">
    <h4>overview</h4>
  <a-menu
    mode="inline"
    :openKeys="openKeys"
    @openChange="onOpenChange"
    style="width: 256px"
    
  >
  
    <a-sub-menu key="sub1">
      <span slot="title"><span>setup</span></span>
      <a-menu-item key="1">overview</a-menu-item>
      <a-menu-item key="2">linux </a-menu-item>
      <a-menu-item key="3">macos </a-menu-item>
      <a-menu-item key="4">windows </a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub2">
      <span slot="title"><span>get start</span></span>
      <a-menu-item key="5">Option 5</a-menu-item>
      <a-menu-item key="6">Option 6</a-menu-item>
      <a-sub-menu key="sub3" title="Submenu">
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
      </a-sub-menu>
    </a-sub-menu>
      <a-sub-menu key="sub3">
      <span slot="title"><span>user guide</span></span>
      <a-menu-item key="5">Option 5</a-menu-item>
      <a-menu-item key="6">Option 6</a-menu-item>
      <a-sub-menu key="sub3" title="Submenu">
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
      </a-sub-menu>
    </a-sub-menu>
      <a-sub-menu key="sub4">
      <span slot="title"><span>language</span></span>
      <a-menu-item key="5">Option 5</a-menu-item>
      <a-menu-item key="6">Option 6</a-menu-item>
      <a-sub-menu key="sub3" title="Submenu">
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
      </a-sub-menu>
    </a-sub-menu>
      <a-sub-menu key="sub5">
      <span slot="title"><span>node.js</span></span>
      <a-menu-item key="5">Option 5</a-menu-item>
      <a-menu-item key="6">Option 6</a-menu-item>
      <a-sub-menu key="sub3" title="Submenu">
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
      </a-sub-menu>
    </a-sub-menu>
      <a-sub-menu key="sub6">
      <span slot="title"><span>typescript</span></span>
      <a-menu-item key="5">Option 5</a-menu-item>
      <a-menu-item key="6">Option 6</a-menu-item>
      <a-sub-menu key="sub3" title="Submenu">
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
      </a-sub-menu>
    </a-sub-menu>
    <a-sub-menu key="sub7">
      <span slot="title"><span>python</span></span>
      <a-menu-item key="9">Option 9</a-menu-item>
      <a-menu-item key="10">Option 10</a-menu-item>
      <a-menu-item key="11">Option 11</a-menu-item>
      <a-menu-item key="12">Option 12</a-menu-item>
    </a-sub-menu>
  </a-menu>
</div>
</template>
<style scoped>
.menu{
    margin-top: 50px;
    position: fixed;
}
h4{
    margin-left: 20px;
}
</style>
<script>
export default {
  data () {
    return {
      rootSubmenuKeys: ['sub1', 'sub2','sub3', 'sub4','sub5','sub6','sub7'],
      openKeys: [],
    }
  },
  methods: {
    onOpenChange (openKeys) {
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : []
      }
    },
  },
}

</script>
