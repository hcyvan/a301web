<template>
  <div>
    <div class="header">
      <div class="w">
        <ul class="fr">
          <li>
            <a href="/login">您好，请登陆</a>
            &nbsp;&nbsp;
            <a href="/register" class="to-register">免费注册</a>
          </li>
          <li class="spacer"></li>
          <li>
            <a href="#">实验指南</a>
          </li>
          <li class="spacer"></li>
          <li>
            <a href="#">其他</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="w">
      <a href="/" class="logo"></a>
      <div class="search">
        <input class="text"><!--
        --><button class="search-btn">搜索</button>
      </div>
      <div style="height: 40px"></div>
      <router-view></router-view>
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
  .logo {
    position: absolute;
    top: 70px;
    left: calc(50% - 1380px/2 + 70px);
    height: 80px;
    width: 240px;
    background: url("../assets/logo.png") no-repeat;
    background-size: 100% 100%;
  }
  .header {
    height: 45px;
    background-color: #e3e4e5;
    margin: 0 auto;
  }
  .header .fr {
    float: right;
    margin: 0;
    line-height: 45px;
  }
  .header ul {
    list-style: none;
  }
  .header ul li {
    float: left;
  }
  .header ul li.spacer {
    margin: 14px 15px auto;
    width: 2px;
    height: 18px;
    background-color: #ccc;
  }
  .header a {
    text-decoration: none;
    color: #999;
  }
  .header a.to-register {
    color: #2a9930;
  }
  .search {
    width: 550px;
    height: 40px;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    background-color: #fff;
    border: 1px solid #2a9930;
  }
  .search .text {
    box-sizing: border-box;
    display: inline-block;
    width: 480px;
    height: 40px;
    padding: 0 20px;
    font-size: 18px;
    border: 0;
    outline: 0;
  }

  .search .search-btn {
    box-sizing: border-box;
    display: inline-block;
    width: 70px;
    height: 40px;
    color: #fff;
    background-color: #2a9930;
    border: 0;
  }
  .search-btn:hover {
    background-color: #237629;
  }

  .w {
    width: 1380px;
    margin: 0 auto;
  }
</style>
