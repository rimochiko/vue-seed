<template>
  <div class="wrapper_set">
    <router-link to="/login">注销账号</router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.wrapper_set {
  display: flex;
  flex: 1 1 0;
  background-color: #F2F2F2;
}
.wrapper_set > a {
  display: flex;
  flex: 1 1 0;
  height: 3rem;
  justify-content: center;
  align-items: center;
  background-color: #FFF;
  margin: 1rem 0;
  color: #333;
}
</style>
