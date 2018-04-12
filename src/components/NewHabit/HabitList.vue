<template>
  <div class="habitList">
    <div class="habit">
      <div class="icon_habit" v-bind:style="{backgroundImage: 'url('+url+')'}">
      </div>
      <div class="habit_info">
        <p class="p_main">记单词</p>
        <p class="p_des">104人在坚持</p>
      </div>	
    </div>

    <div class="habit">
      <div class="icon_habit" v-bind:style="{backgroundImage: 'url('+url+')'}">
      </div>
      <div class="habit_info">
        <p class="p_main">早起</p>
        <p class="p_des">86人在坚持</p>
      </div>  
    </div>

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
  overflow:auto;
  -webkit-overflow-scrolling: touch;
  flex-direction: column;  
}
.habit {
  display: flex;
  height: 5rem;
  padding: 0rem 2rem;
  border-bottom: 1px solid #ddd;
}
.habit .habit_info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.habit .habit_info .p_main {
  font-size: 1.1rem;
  color: #333333;
}
.habit .habit_info .p_des {
  color: #878787;
  font-size: .9rem;
}
.habit .icon_habit {
  width: 5rem;
  height: 5rem;
  background-repeat: no-repeat;
  background-position: left center;
  background-size: auto 60%;
}
</style>
