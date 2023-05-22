<template>
    <div class="d-flex" style="height: 100vh;">
        <div class="loader">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
    </div>
</template>
<script>
export default{
    name:'loader',
}
</script>
<style >
  body {
  margin: 0;
}

.loader {
  position: absolute;
  top: 50%;
  left: 40%;
  margin-left: 10%;
  transform: translate3d(-50%,-50%,0);
}

.dot {
  width: 27px;
  height: 27px;
  background: #0d70b7;
  border-radius: 100%;
  display: inline-block;
  animation: slide 1s infinite;
}

.dot:nth-child(1) {
  animation-delay: 0.1s;
  background: #0d70b7;
}

.dot:nth-child(2) {
  animation-delay: 0.2s;
  background:rgb(117, 179, 227);
}

.dot:nth-child(3) {
  animation-delay: 0.3s;
  background: #2b2c2c
}

.dot:nth-child(4) {
  animation-delay: 0.4s;
  background: rgb(230, 189, 135)
}

.dot:nth-child(5) {
  animation-delay: 0.5s;
  background: #ed9e35;
}

@keyframes slide {
  0% {
    transform: scale(1);
  }
  
  50% {
    opacity: 0.3;
    transform: scale(2);
  }
  
  100% {
    transform: scale(1);
  }
}

</style>