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
      <div class="input_group">
        <label class="label_verify">确认密码</label>
        <input type="password" placeholder="填写确认密码" class="input_verify"/></p>
      </div>
      <input type="submit" value="注册" class="btn_confirm"/>
      <p><router-link class="p_tip" to="/login">已有账号？</router-link></p>
    </form>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.input_group .label_verify {
  width: 5rem;
}
</style>
