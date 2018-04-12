<template>
  <div class="wrapper_list">
    <div v-if="isNone" class="div_none_tip">
      <img src="../../assets/no_task.png" class="img_none"/>
      <p class="p_tip">点击右上角[+]添加习惯</p>
    </div>

    <div v-if="isNone === false" class="task_list">
      <div class="task_single">
        <div class="icon_task" v-bind:style="{backgroundImage: 'url('+url+')'}"></div>
        <div class="info_task">
          <p class="p_main">刷题库</p>
          <p class="p_des">已坚持4天</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      isNone: false,
      url: require('../../assets/h_bubble.png')
    }
  }
}
</script>

<style>
.wrapper_list {
  display: inherit;
  flex:1 1 0;
  overflow:auto;
  -webkit-overflow-scrolling: touch;
  flex-direction: column;
  background-color: #F2F2F2;
}

.task_single {
  display: flex;
  margin: .5rem;
  padding: 0 .5rem;
  height: 6rem;
  background: #FFFFFF;
  border-radius: 3px;
  align-items: center;
}

.task_single .icon_task {
  height: 5rem;
  width: 5rem;
  margin-right: 1rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto 60%;
}

.task_single .p_main {
  color: #333333;
}

.task_single .p_des {
  color: #878787;
  font-size: .9rem;
}

.div_none_tip {
  display: inherit;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
}
.div_none_tip .img_none {
  height: 10rem;
}

.div_none_tip .p_tip {
  color: #898f9c;
}
</style>
