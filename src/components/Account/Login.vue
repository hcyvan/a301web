<template>
  <div>
    <div class="header">
      <div class="w">
        <a href="/" class="logo"></a>
        <div class="have-account">
          没有帐号
          <a href="/register">请注册></a>
        </div>
      </div>
    </div>
    <div class="content w">
      <div class="login m">
        <div class="form-item">
          <div class="form-tag">手机</div>
          <div class="form-input-wrapper">
            <input>
          </div>
        </div>
        <div class="form-item">
          <div class="form-tag">密码</div>
          <div class="form-input-wrapper">
            <input type="password">
          </div>
        </div>
        <div class="form-item" style="margin-top: 50px">
          <button class="btn-register">登陆</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  @import "../../assets/css/login.css";
</style>
