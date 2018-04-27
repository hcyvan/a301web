<template>
  <div>
    <div class="rt">
      <div class="seller-detail">
        <div class="name">张旭生物公司</div>
        <div class="content"> 这里是公司的简介或者其他信息</div>
      </div>
      <img src="/static/demo/logo-other.jpg" class="logo">
    </div>
    <div class="rd">
      <products></products>
    </div>
  </div>
</template>

<script>
import Products from '@/components/Products'
export default {
  components: {Products},
  name: 'HelloWorld',
  data () {
    return {
    }
  }
}
</script>
<style scoped>
  .rt {
    padding: 20px 60px;
    border-top: 1px solid #999;
  }
  .rt::after {
    content: "";
    clear: both;
    display: block;
  }
  .rt .logo {
    float: right;
    display: inline-block;
    height: 200px;
  }
  .rt .seller-detail {
    float: left;
    display: inline-block;
  }
  .rt .seller-detail .name {
    margin-bottom: 20px;
    font-size: 36px;
    color: #666;
  }
  .rd {
    margin-top: 60px;
  }
</style>
