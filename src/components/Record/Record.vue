<template>
  <div v-bind:class="[isLoading ? 'isLoading' : 'record-list']">
  <Loading v-if="isLoading"></Loading>
  <div class="record">
    <div class="record_info">
      <div class="author_avatar">
        <img src="../../assets/avatar.jpg"/>
      </div>
      <div class="record_detail">
        <div class="record_basic">
          <p class="p_main">小美</p>
          <p class="p_des">坚持<a href="#">#吃早餐#</a></p>
        </div>
        <div class="record_basic align-right">
          <p class="p_des">2分钟前</p>
          <p class="p_main">30天</p>
        </div>
      </div>
    </div>
    <div class="record_content">
      <img src="../../assets/content.jpg"/>
      <p>今天吃的早餐是面包和牛奶。</p>
    </div>
    <div class="record_likes">
      <a class="icon_like"></a>
      <img src="../../assets/user.jpg"/>
    </div>
    <div class="record_comment">
      <p class="p_des"><a href="#" class="p_main">SAM</a>真是心灵手巧啊！</p>
    </div>
    <div class="record_options">
      <a class="record_option option_like">3</a>
      <a class="record_option option_comment">3</a>
      <a class="record_option option_share"></a>
    </div>
  </div>

  <div class="record">
    <div class="record_info">
      <div class="author_avatar">
        <img src="../../assets/avatar.jpg"/>
      </div>
      <div class="record_detail">
        <div class="record_basic">
          <p class="p_main">小美</p>
          <p class="p_des">坚持<a href="#">#吃早餐#</a></p>
        </div>
        <div class="record_basic align-right">
          <p class="p_des">2分钟前</p>
          <p class="p_main">30天</p>
        </div>
      </div>
    </div>
    <div class="record_content">
      <img src="../../assets/content.jpg"/>
      <p>今天吃的早餐是面包和牛奶。</p>
    </div>
    <div class="record_likes">
      <a class="icon_like"></a>
      <img src="../../assets/user.jpg"/>
    </div>
    <div class="record_comment">
      <p class="p_des"><a href="#" class="p_main">SAM</a>真是心灵手巧啊！</p>
    </div>
    <div class="record_options">
      <a class="record_option option_like">3</a>
      <a class="record_option option_comment">3</a>
      <a class="record_option option_share"></a>
    </div>
  </div>

  </div>
</template>

<script>
import Loading from '../Loading/Loading'

export default {
  data () {
    return {
      isLoading: true
    }
  },
  mounted () {
  	this.isLoading = false;
  },
  components: {
    Loading
  }
}
</script>

<style>
.isLoading {
 width: 100%;
 height: 100%;
 overflow: hidden;
}
.record-list {
  display: flex;
  flex:1 1 0;
  overflow:auto;
  -webkit-overflow-scrolling: touch;
  flex-direction: column;
}
.record {
  margin: .5rem;
  padding: 1rem;
  background-color: #FFFFFF;
  border-radius: 3px;
}
.record_info {
  display: flex;
  align-items: center;
  height: 3rem;
  padding: 1rem 0;
  margin-bottom: 1rem;
}
.record_info .author_avatar {
  margin-right: 1rem;
  overflow: hidden;
}
.record_info .author_avatar > img {
  width: 4rem;
  border-radius: 50%;
}
.record_detail {
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
}
.record_basic .p_main {
  margin: 0;
  color: #3CCC77;
  font-size: 1.2rem;
}
.align-right {
  text-align: right;
}
.record_basic .p_des {
  margin: 0;
  color: #858585;
  line-height: 2;
  font-size: .9rem;
}
.record_basic .p_des > a {
  color: #333333;
  text-decoration: none;
}
.record_content {
  width: 100%;
}
.record_content img {
  width: 100%;
}
.record_likes {
  padding: 0 1rem;
  margin-bottom: 1rem;
  height: 2.4rem;
  background: #FFFFFF;
}
.record_likes img {
  width: 2.4rem;
  border-radius: 50%;
  margin-right: 1rem;
}
.record_likes .icon_like {
  display: inline-block;
  height: 2.4rem;
  width: 2rem;
  background-image: url(../../assets/icon_like_a.png);
  background-repeat: no-repeat;
  background-position: left center;
  background-size: auto 40%;
}
.record_options {
  padding: 0 1rem;
}
.record_options .record_option {
  padding-left: 2rem;
  margin-bottom: 1rem;
  margin-right: 2rem;
  color: #858585;
  background-repeat: no-repeat;
  background-position: left center;
  background-size: auto 100%;
}
.record_options .option_like {
  background-image: url(../../assets/icon_like.png);
}
.record_options .option_comment {
  background-image: url(../../assets/icon_comment.png);
}
.record_options .option_share {
  background-image: url(../../assets/icon_share.png);
}
.record_comment {
  padding: 0 1rem 1rem;
}
.record_comment .p_des {
  margin: 0;
  color: #878787;
}
.record_comment .p_main {
  color: #3CCC77;
  text-decoration: none;
  line-height: 1.8;
}
.record_comment .p_main::after {
  content: '：';
  color: #878787;
}
</style>
