<template>
  <div class="habitList">
    <router-link class="habit" to="/">
      <div class="icon_habit" v-bind:style="{backgroundImage: 'url('+url+')'}">
      </div>
      <div class="habit_info">
        <p class="p_main">记单词</p>
        <p class="p_des">104人在坚持</p>
      </div>
    </router-link>

    <router-link class="habit" to="/">
      <div class="icon_habit" v-bind:style="{backgroundImage: 'url('+url+')'}">
      </div>
      <div class="habit_info">
        <p class="p_main">早起</p>
        <p class="p_des">86人在坚持</p>
      </div>
    </router-link>

  </div>
</template>

<script>
export default {
  data () {
    return {
      url: require('../../assets/h_bubble.png')
    }
  }
}
</script>

<style>
.habitList {
  display: flex;
  overflow:auto;
  -webkit-overflow-scrolling: touch;
  flex-direction: column;
}
.habit {
  display: flex;
  height: 4rem;
  padding: 0rem 1rem;
  background-color: #FFFFFF;
  border-bottom: 1px solid #eee;
}
.habit:active {
  background-color: #F2F2F2;
}
.habit .habit_info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.habit .habit_info .p_main {
  font-size: 1rem;
  color: #333333;
}
.habit .habit_info .p_des {
  color: #878787;
  font-size: .8rem;
}
.habit .icon_habit {
  width: 4rem;
  height: 4rem;
  background-repeat: no-repeat;
  background-position: left center;
  background-size: auto 60%;
}
</style>
