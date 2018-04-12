<template>
  <div class="wrapper_loading">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.wrapper_loading {
  background: #FFFFFF;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.wrapper_loading span {
  display: block;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  background: #90EE90;
  margin: .5rem;
  animation: loading 1.2s infinite;
}

.wrapper_loading span:nth-child(2) {
  animation-delay: .3s;
}

.wrapper_loading span:nth-child(3) {
  animation-delay: .6s;
}

@keyframes loading {
  0% { opacity: 1 }
  20% { opacity: .8 }
  40% { opacity: .6 }
  60% { opacity: .6 }
  80% { opacity: .8 }
  100% { opacity: 1 }
}
</style>