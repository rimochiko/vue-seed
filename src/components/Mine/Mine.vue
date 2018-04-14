<template>
  <div class="wrapper_mine">
    <div class="wrapper_profile">
      <div class="wrapper_avatar">
        <img src="../../assets/avatar.jpg"/>
        <div class="wrapper_gender"></div>
      </div>

      <ul class="ul_relationship">
        <li>
          <p class="p_num">0</p>
          <p class="p_tip">习惯</p>
        </li>
        <li>
          <p class="p_num">0</p>
          <p class="p_tip">关注</p>
        </li>
        <li>
          <p class="p_num">0</p>
          <p class="p_tip">粉丝</p>
        </li>
      </ul>
    </div>

    <div v-if="none" class="wrapper_no_history">
      <p class="p_tip">尚未发布习惯记录</p>
    </div>

    <div v-if="none === false" class="wrapper_history">
      <div class="history">
        <div class="info_history">
          <p class="p_main">早起</p>
          <p class="p_des">2018.01.27 - 2018.04.12 共坚持4天</p>
        </div>

        <div class="content_history">
          <div class="content_single">
            <p class="p_main">今天还去吃了粉</p>
            <p class="p_des">- 2018.01.31 -</p>
          </div>
          <div class="content_single">
            <p class="p_main">今天还去吃了粉</p>
            <p class="p_des">- 2018.01.31 -</p>
          </div>
          <div class="content_single">
            <p class="p_main">今天还去吃了粉</p>
            <p class="p_des">- 2018.01.31 -</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      none: false
    }
  }
}
</script>

<style>
.wrapper_mine {
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  background-color: #F2F2F2;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

.wrapper_mine .wrapper_profile {
  display: flex;
  margin: .5rem;
  padding: 0 1rem;
  align-items: center;
  height: 8rem;
  background-color: #FFFFFF;
  border-radius: 3px;
}

.wrapper_profile .wrapper_avatar {
  width: 6rem;
  margin-right: 2rem;
}

.wrapper_profile .wrapper_avatar img {
  width: 100%;
  border-radius: 50%;
}

.ul_relationship {
  display: inherit;
  flex: 1;
  padding: 0;
  justify-content: space-between;
  list-style: none;
}

.ul_relationship > li {
  margin:0 .5rem;
  text-align: center;
}

.ul_relationship .p_num {
  color: #3CCC77;
  font-size: 1.4rem;
}

.ul_relationship .p_tip {
  color: #898f9c;
}

.wrapper_no_history {
  display: inherit;
  flex: 1;
  align-items: center;
  justify-content: center;
}

.wrapper_history {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.wrapper_no_history .p_tip {
  color: #898f9c;
}

.history {
  margin: .5rem;
  padding: .5rem;
  background: #FFFFFF;
  border-radius: 3px;
  height: 10.5rem;
}

.history .info_history .p_main {
  color: #333333;
}

.history .info_history .p_des {
  color: #878787;
  font-size: .7rem;
}

.history .content_history {
  display: flex;
  height: 7rem;
  justify-content: space-between;
  padding-top: .5rem;
}

.content_history .content_single {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #feffc0;
  height: 5.5rem;
  width: 5.5rem;
  padding: .5rem;
}

.content_history .content_single .p_main {
  font-size: .8rem;
  color: #a39f64;
}

.content_history .content_single .p_des {
  color: #d5d196;
  font-size: .7rem;
  align-self: flex-end;
}
</style>
