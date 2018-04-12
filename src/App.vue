<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Tab/>
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
  font-family: 'Open Sans','Helvetica Neue',Arial,'Hiragino Sans GB','Microsoft YaHei','WenQuanYi Micro Hei',sans-serif;
  display: flex;
  flex: 1 1 0;
  letter-spacing: .05rem;
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
