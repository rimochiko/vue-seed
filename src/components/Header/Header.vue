<template>
  <div class="header">
    <div class="left">
     <a v-if="showBack" @click="goBack"><img src="../../assets/icon_back.png" class="icon_header"/></a>
    </div>
    <div class="center">
      <p class="p_title" v-if="showTitle" v-text="title"></p>
      <input type="text" placeholder="输入你喜欢的习惯名称" v-if="showSearch" class="input_search"/>
    </div>
    <div class="right">
      <router-link to="/newhabit" v-if="showAdd"><img src="../../assets/icon_add.png" class="icon_header"/></router-link>
      <router-link to="/set" v-if="showSet"><img src="../../assets/icon_set.png" class="icon_header"/></router-link>
      <router-link to="/createhabit" v-if="showSearch" class="a_search">创建</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      showTitle: true,
      showAdd: true,
      showBack: false,
      showSearch: false,
      showSet: false
    }
  },
  created () {
    this.calHeader()
  },
  watch: {
    '$route': 'calHeader'
  },
  methods: {
    calHeader () {
      console.log(this.$route.path)
      if (/^\/tasklist$/.test(this.$route.path)) {
        this.title = '任务清单'
        this.showAdd = true
        this.showTitle = true
        this.showBack = false
        this.showSearch = false
        this.showSet = false
        return
      }
      if (/^\/newhabit\//.test(this.$route.path)) {
        this.title = '添加新习惯'
        this.showAdd = false
        this.showTitle = false
        this.showBack = true
        this.showSearch = true
        this.showSet = false
        return
      }
      if (/^\/ground$/.test(this.$route.path)) {
        this.title = '广场'
        this.showAdd = false
        this.showTitle = true
        this.showBack = false
        this.showSearch = false
        this.showSet = false
        return
      }
      if (/^\/set$/.test(this.$route.path)) {
        this.title = '个人设置'
        this.showAdd = false
        this.showTitle = true
        this.showBack = true
        this.showSearch = false
        this.showSet = false
        return
      }
      if (/^\/mine$/.test(this.$route.path)) {
        this.title = '我'
        this.showAdd = false
        this.showTitle = true
        this.showBack = false
        this.showSearch = false
        this.showSet = true
      }
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
.header {
  display: flex;
  height: 4rem;
  background: linear-gradient(left bottom, #00c3c8, #00cd83);
  color: #FFFFFF;
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
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
}

.header .left {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
}

.header .input_search {
  font-size: .9rem;
  border: none;
  padding: .3rem .3rem .3rem 1.8rem;
  outline: none;
  border-radius: 3px;
  display: flex;
  flex: 1;
  margin: 0 1rem;
  background-image: url(../../assets/icon_search.png);
  background-size: auto 60%;
  background-position: .4rem center;
  background-repeat: no-repeat;
}
.header .a_search {
  align-self: center;
  color: #FFFFFF;
}
</style>
