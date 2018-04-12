<template>
  <div class="wrapper_tab">
    <ul class="ul_tab">
      <li>
        <router-link to="/tasklist">
          <div class="div_icon_tab icon_home"></div><span>习惯</span>
        </router-link>
      </li>
      <li>
        <router-link to="/ground">
          <div class="div_icon_tab icon_ground"></div><span>圈子</span>
        </router-link>
      </li>
      <li>
        <router-link to="/mine">
          <div class="div_icon_tab icon_mine"></div><span>关于我</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.wrapper_tab {
  display: flex;
  height: 3.6rem;
  border-top: 1px solid #ddd;
  background: #FFFFFF;
}

.wrapper_tab .ul_tab {
  list-style: none;
  padding: 0;
  display: inherit;
  flex: 1 1 0;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
}

.wrapper_tab .ul_tab > li {
  display: inherit;
}

.wrapper_tab .ul_tab .div_icon_tab {
  height: 1.6rem;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: auto 1.6rem;
  display: inherit;
}

.wrapper_tab .ul_tab .div_icon_tab.icon_home {
  background-image: url(../../assets/icon_home.png);
}

.wrapper_tab .ul_tab .active .div_icon_tab.icon_home {
  background-image: url(../../assets/icon_home_a.png);
}

.wrapper_tab .ul_tab .div_icon_tab.icon_ground {
  background-image: url(../../assets/icon_ground.png);
}

.wrapper_tab .ul_tab .active .div_icon_tab.icon_ground {
  background-image: url(../../assets/icon_ground_a.png);
}

.wrapper_tab .ul_tab .div_icon_tab.icon_mine {
  background-image: url(../../assets/icon_mine.png);
}

.wrapper_tab .ul_tab .active .div_icon_tab.icon_mine {
  background-image: url(../../assets/icon_mine_a.png);
}

.wrapper_tab .ul_tab > li > a {
  display: inherit;
  flex-direction: column;
  color: #858585;
  text-decoration: none;
  justify-content: center;
}

.wrapper_tab .ul_tab > li .active {
  color: #3CCC77;
}
</style>
