<template>
  <div class="header">
    <div class="left"></div>
    <div class="center">
      <p class="p_title" v-text="title"></p>
    </div>
    <div class="right">
      <router-link to="/newhabit" v-if="showAdd"><img src="../../assets/icon_add.png" class="icon_header"/></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      showAdd: true,

    }
  },
  created () {
   this.calHeader();
  },
  watch: {
   '$route': 'calHeader'
  },
  methods: {
    calHeader () {
      console.log(this.$route.path);
      if(/^\/tasklist$/.test(this.$route.path)) {
        this.title = '任务清单';
        this.showAdd = true;
        return;
      } 

      if(/^\/newhabit\//.test(this.$route.path)) {
        this.title = '添加新习惯';
        this.showAdd = false;
        return;
      } 

      if(/^\/ground$/.test(this.$route.path)) {
        this.title = '广场';
        this.showAdd = false;
        return;
      } 
      
      if(/^\/mine$/.test(this.$route.path)) {
        this.title = '我';
        this.showAdd = false;
        return;
      } 
    }
  }
}
</script>

<style>
.header {
  display: inherit;
  height: 4rem;
  background: linear-gradient(left bottom, #00c3c8, #00cd83);
  color: #FFFFFF;
  align-items: center;
}

.header .center {
  display: inherit;
  flex: 1;
  align-items: center;
  justify-content: center;
}

.header .icon_header {
  height: 1.4rem;
}

.header .right {
  margin-right: 2rem;
}

.header .left {
  margin-left: 2rem;
}
</style>
