<template>
  <div>
    <div class="header">
      <div class="w">
        <a href="/" class="logo"></a>
        <div class="logo-title">欢迎注册</div>
        <div class="have-account">
          已有帐号
          <a href="/login">请登录></a>
        </div>
      </div>
    </div>
    <div class="content w">
      <div class="login m">
        <div class="form-item">
          <div class="form-tag">姓名</div>
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
        <div class="form-item">
          <div class="form-tag">确认密码</div>
          <div class="form-input-wrapper">
            <input type="password">
          </div>
        </div>
        <div class="form-item">
          <div class="form-tag">手机</div>
          <div class="form-input-wrapper">
            <input>
          </div>
        </div>
        <div class="form-item" style="margin-top: 50px">
          <button class="btn-register">注册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
  @import "../../assets/css/login.css";
</style>
