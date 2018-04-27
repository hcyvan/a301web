<template>
  <div>
    <div class="cl">
      <div class="pic">
        <img width="440px" height="440px" src="/static/demo/p1.gif">
      </div>
      <div class="info">
        <div class="title"><b>EpiZyme TBE电泳缓冲液（5×）（5 L）电泳液</b></div>
        <div class="panel">
          <ul>
            <li><span>价格: </span>￥200.00</li>
            <li><span>销量: </span>275</li>
            <li><span>货号: </span>PS109S</li>
            <li><span>品牌: </span>Sigma</li>
            <li><span>包装: </span>500 ML/袋</li>
            <li><span>货期: </span>现货</li>
          </ul>
        </div>
        <span class="span-title">规格：</span>
        <div class="format-content">
          <ul>
            <li>1L</li>
            <li>300mL</li>
            <li>500000000000mL</li>
            <li>600mL</li>
            <li>700mL</li>
            <li>800mL</li>
          </ul>
        </div>
        <br clear="both"/>
        <span class="span-title">数量:</span>
        <div class="number-picker">
          <input type="text" value="1">
        </div>
        <br clear="both"/>
        <div class="buy">
          <button class="add-cart">加入购物车</button>
          <button class="buy-now">立即购买</button>
        </div>
      </div>
      <br clear="both"/>
      <div class="detail">
        <div class="tab">
          <button class="tablinks active" onclick="openCity(event, 'London')">产品详情</button><!--
                    --><button class="tablinks" onclick="openCity(event, 'Paris')">产品详情</button><!--
                    --><button class="tablinks" onclick="openCity(event, 'Tokyo')">产品详情</button>
        </div>
        <div id="London" class="tabcontent" style="display: block">
          <h3>EpiZyme TBE电泳缓冲液（5×）（5 L）电泳液</h3>
          <p>London is the capital city of England.</p>
        </div>
        <div id="Paris" class="tabcontent">
          <h3>Paris</h3>
          <p>Paris is the capital of France.</p>
        </div>
        <div id="Tokyo" class="tabcontent">
          <h3>Tokyo</h3>
          <p>Tokyo is the capital of Japan.</p>
        </div>
      </div>
    </div>
    <div class="cr">
      <div class="seller">
        <div class="title">店铺信息</div>
        <ul>
          <li class="name">张旭生物公司</li>
          <li>邮箱: 123456@gmail.com</li>
          <li>电话: 18888888888</li>
          <li>地址: 上海市闵行区立跃路2995号</li>
          <li class="to-seller"><a href="/seller">进入店铺</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  data () {
    return {
    }
  }
}
</script>
<style scoped>
  .cl {
    box-sizing: border-box;
    padding-top: 35px;
    float: left;
    width: 1080px;
    height: 100px;
    border-top: 1px solid #999;
  }
  .cl .pic {
    float: left;
    width: 440px;
    height: 540px;
    margin-right: 30px;

  }
  .cl .info {
    box-sizing: border-box;
    float: left;
    width: 540px;
  }
   .cl .info .title {
    font-size: 20px;
    color: #333;
  }

  .cl .info .panel {
    margin: 40px 0  ;
    padding: 10px 0;
    background-color: #eee;
  }
   .cl .info .panel ul {
    list-style: none;
    padding: 0;
    line-height: 50px;
  }
  .cl .info span {
    display: inline-block;
    width: 100px;
    margin-left: 20px;
    font-size: 14px;
    color: #666;
  }
  .cl .info .span-title {
    float: left;
  }
  .cl .info .format-content {
    box-sizing: border-box;
    float: left;
    width: 420px;
    height: 100px;
  }
  .cl .info .format-content ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .cl .info .format-content ul li {
    float: left;
    height: 30px;
    min-width: 80px;
    margin: 0 0 8px 8px;
    padding: 2px 5px;
    text-align: center;
    line-height: 30px;
    color: #333;
    border: 1px solid #999;
  }
  .cl .info .number-picker input {
    height: 30px;
    width: 50px;
    padding: 0 5px;
    font-size: 16px;
  }
  .cl .info .buy {
    margin: 30px 0;
  }
  .cl .info .buy::after {
    content: "";
    clear: both;
    display: block;
  }
  .cl .info .buy button {
    float: right;
    height: 44px;
    margin-left: 10px;
    padding: 0 20px;
    font-size: 18px;
  }
  .cl .info .buy .add-cart {

  }
  .cl .info .buy .buy-now {
    color: #fff;
    background-color: #2a9930;
    border: none;
  }
  .cl .detail {
    box-sizing: border-box;
    width: 100%;
    min-height: 500px;
    margin-top: 30px;
    border: 1px solid #ddd;
    border-top: 2px solid #ddd;
  }
  .cr {
    box-sizing: border-box;
    float: left;
    width: 300px;
    height: 200px;
  }
  .cr .seller {
    margin: 0 20px;
    color: #333;
    border: 1px solid #2a9930;
  }
  .cr .seller .title {
    height: 42px;
    text-align: center;
    color: #fff;
    line-height: 42px;
    background-color: #2a9930;
  }
  .cr .seller ul {
    list-style: none;
    padding-left: 20px;
  }
  .cr .seller .name {
    margin: 10px 0 20px;
  }
  .cr .seller .to-seller {
    margin-top: 24px;
  }
  .cr .seller .to-seller a {
    padding: 4px 8px;
    background: #2a9930;
    font-size: 14px;
    color: #fff;
    text-decoration: none;
  }
  .tab {
    box-sizing: padding-box;
    height: 46px;
    background-color: #eee;
    border-bottom: 1px solid #ddd;
  }
  .tab button {
    height: 100%;
    padding: 5px 6px;
    font-size: 18px;
    background-color: inherit;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .tab button.active {
    background-color: #fff;
    border-bottom: 1px solid #fff;
  }
  .tabcontent {
    display: none;
    padding: 6px 12px;
    border-top: none;
  }
</style>
