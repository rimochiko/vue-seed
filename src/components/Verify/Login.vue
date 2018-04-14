<template>
  <div class="wrapper_login">
    <div class="wrapper_ads">
      <p class="p_ad">一切源于</br><span class="p_ad_special">喜欢</span></p>
    </div>
    <form class="wrapper_form" action='/'>
      <div class="input_group">
        <label class="label_verify">用户名</label>
        <input type="text" placeholder="你的用户名" class="input_verify"/>
      </div>
      <div class="input_group">
        <label class="label_verify">密码</label>
        <input type="password" placeholder="填写密码" class="input_verify"/></p>
      </div>
      <input type="submit" value="登录" class="btn_confirm"/>
      <p><router-link class="p_tip" to="/register">没有账号？</router-link></p>
    </form>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.wrapper_login {
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  align-items: center;
  justify-content: center;
}

.wrapper_ads .p_ad {
  font-size: 2.4rem;
  color: #666;
}

.wrapper_ads .p_ad_special {
  font-size: 3rem;
  color: #00cd83;
}

.wrapper_form {
  margin-top: 2rem;
}

.wrapper_form .btn_confirm {
  display: flex;
  justify-content: center;
  width: 100%;
  color: #FFFFFF;
  font-size: 1rem;
  background-color: #00cd83;
  border: none;
  height: 3rem;
  align-items: center;
  margin-top: 1rem;
  border-radius: 3px;
}
.wrapper_form .p_tip {
  display: flex;
  justify-content: center;
  color: #878787;
  font-size: .8rem;
  margin-top: 2rem;
}
.input_group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #90EE90;
  padding: .5rem 0;
}

.input_group .label_verify {
  font-size: 1rem;
  width: 4rem;
  color: #333;
}
.input_group .input_verify {
  font-size: 1rem;
  border: none;
  padding: .5rem;
  outline: none;
}
</style>
