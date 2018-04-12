<template>
  <div class="wrapper_newhabit">
    <div class="nav_habit">
      <router-link to="/newhabit/hot">热门</router-link>
      <router-link to="/newhabit/health">健康</router-link>
      <router-link to="/newhabit/sports">运动</router-link>
      <router-link to="/newhabit/study">学习</router-link>
      <router-link to="/newhabit/time">时间</router-link>
      <router-link to="/newhabit/think">思考</router-link>  
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.wrapper_newhabit {
  width: 100%;
  flex: 1;
}
.wrapper_newhabit .nav_habit {
  display: flex;
  flex: 1;
  justify-content: space-between;
}
.wrapper_newhabit .nav_habit a {
  text-decoration: none;
  color: #878787;
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 1rem 0;
  border-bottom: 1px solid #ddd;
}
.wrapper_newhabit .nav_habit .active {
  color: #3CCC77;
  border-bottom: 3px solid #3CCC77;
}
</style>