<template>
  <div>
    <div class="sort-bar">
      <div class="sort-item">
        <a class="active">默认</a>
        <a>销量 &#8595;</a>
        <a>好评 &#8595;</a>
      </div>
      <div class="summary">
        共找到相关商品 12 件
      </div>
    </div>
    <div style="margin-top: 10px">
      <ul class="product-list-wrapper">
        <li class="product">
          <div class="pic">
            <a href="/detail"><img src="/static/demo/p1.gif"></a>
          </div>
          <div class="price">
            ￥200.00
          </div>
          <div class="title">
            EpiZyme TBE电泳缓冲液（5×）（5 L）电泳液
          </div>
          <div class="detail">
            <ul>
              <li>销量: 275</li>
              <li>货号: PS109S</li>
              <li>品牌: Sigma</li>
            </ul>
          </div>
        </li>
        <li class="product">
          <div class="pic">
            <a href="/detail"><img src="/static/demo/p2.jpg"></a>
          </div>
          <div class="price">
            ￥200.00
          </div>
          <div class="title">
            EpiZyme TBE电泳缓冲液（5×）（5 L）电泳液
          </div>
          <div class="detail">
            <ul>
              <li>销量: 275</li>
              <li>货号: PS109S</li>
              <li>品牌: Sigma</li>
            </ul>
          </div>
        </li>
        <li class="product">
          <div class="pic">
            <a href="/detail"><img src="/static/demo/p3.jpg"></a>
          </div>
          <div class="price">
            ￥200.00
          </div>
          <div class="title">
            EpiZyme TBE电泳缓冲液（5×）（5 L）电泳液
          </div>
          <div class="detail">
            <ul>
              <li>销量: 275</li>
              <li>货号: PS109S</li>
              <li>品牌: Sigma</li>
            </ul>
          </div>
        </li>
        <li class="product">
          <div class="pic">
            <a href="/detail"><img src="/static/demo/p4.gif"></a>
          </div>
          <div class="price">
            ￥200.00
          </div>
          <div class="title">
            EpiZyme TBE电泳缓冲液（5×）（5 L）电泳液
          </div>
          <div class="detail">
            <ul>
              <li>销量: 275</li>
              <li>货号: PS109S</li>
              <li>品牌: Sigma</li>
            </ul>
          </div>
        </li>
        <li class="product">
          <div class="pic">
            <a href="/detail"><img src="/static/demo/p5.jpg"></a>
          </div>
          <div class="price">
            ￥200.00
          </div>
          <div class="title">
            EpiZyme TBE电泳缓冲液（5×）（5 L）电泳液
          </div>
          <div class="detail">
            <ul>
              <li>销量: 275</li>
              <li>货号: PS109S</li>
              <li>品牌: Sigma</li>
            </ul>
          </div>
        </li>
        <li class="product">
          <div class="pic">
            <a href="/detail"><img src="/static/demo/p6.jpg"></a>
          </div>
          <div class="price">
            ￥200.00
          </div>
          <div class="title">
            EpiZyme TBE电泳缓冲液（5×）（5 L）电泳液
          </div>
          <div class="detail">
            <ul>
              <li>销量: 275</li>
              <li>货号: PS109S</li>
              <li>品牌: Sigma</li>
            </ul>
          </div>
        </li>
      </ul>
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
  .sort-bar {
    box-sizing: border-box;
    height: 40px;
    padding: 7px 0;
    background-color: #f1f1f1;
  }
  .sort-bar .sort-item {
    margin-left: 8px;
  }
  .sort-bar .sort-item a {
    float: left;
    padding: 0 9px;
    height: 24px;
    border: 1px solid #ccc;
    line-height: 24px;
    margin-right: -1px;
    font-size: 14px;
    color: #333;
    background: #fff;
  }
  .sort-bar .sort-item a:hover {
    border: 1px solid #2a9930;
    color: #2a9930;
  }
  .sort-bar .sort-item a.active {
    border: 1px solid #2a9930;
    background-color: #2a9930;
    color: #fff;
  }
  .sort-bar .summary {
    float: right;
    margin-right: 8px;
    font-size: 14px;
    color: #333;
  }
  .product-list-wrapper {
    padding: 0 0;
    list-style: none;
  }
  .product-list-wrapper::after {
    content: "";
    clear: both;
    display: block;
  }
  .product-list-wrapper .product {
    float: left;
    box-sizing: border-box;
    padding: 12px 9px;
    width: 276px;
    height: 470px;
  }
  .product-list-wrapper .product:hover {
    border: 1px solid #ccc;
  }
  .product-list-wrapper .pic {
    text-align: center;
  }
  .product-list-wrapper .pic img{
    box-sizing: border-box;
    width: 220px;
    height: 220px;
  }
  .product-list-wrapper .price {
    color: #f00;
  }
  .product-list-wrapper .title {
    height: 80px;
    margin-top: 20px;
    font-size: 14px;
    color: #333;
    border-bottom: 1px solid #dddddd;
  }
  .product-list-wrapper .detail {
    margin-top: 10px;
    font-size: 14px;
    color: #666;
  }
  .product-list-wrapper .detail ul {
    padding: 0 0;
  }
  .product-list-wrapper .detail li {
    list-style: none;
  }

</style>
