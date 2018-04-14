<template>
  <div id="app">
    <Header v-if="showHeader"></Header>
    <router-view/>
    <Tab v-if="showTab"></Tab>
  </div>
</template>

<script>
import Header from './components/Header/Header'
import Tab from './components/Tab/Tab'

export default {
  components: {
    Header,
    Tab
  },
  data () {
    return {
      showHeader: true,
      showTab: true
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
      if (/^\/login$/.test(this.$route.path) || /^\/register$/.test(this.$route.path)) {
        this.showHeader = false
        this.showTab = false
        return
      }
      if (/^\/newhabit/.test(this.$route.path)) {
        this.showTab = false
        return
      }
      this.showHeader = true
      this.showTab = true
    }
  }
}
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}
body {
  margin: 0;
  font-size: 16px;
  display: flex;
  flex: 1 1 0;
  letter-spacing: .05rem;
}
body,
input {
  font-family: 'Open Sans','Helvetica Neue',Arial,'Hiragino Sans GB','Microsoft YaHei','WenQuanYi Micro Hei',sans-serif;
}
ul {
  padding: 0;
  margin: 0;
}

p {
  margin: 0;
  line-height: 1.8;
}

a {
  text-decoration: none;
}

#app {
  display: inherit;
  flex-direction: column;
  flex: 1 1 0;
}
</style>
