<template>
  <div class="relative h-screen w-full look bg-center" >
  <div class="absolute top-0 right-0 bottom-0 left-0 bg-gray-500 opacity-75"></div>
    <div class="text-center text-3xl text-white font-bold pt-[80px]">
     
    </div>
    <div class="outer-wrapper ">
      <div class="s-wrap s-type-1" role="slider">
        <input type="radio" id="s-1" name="slider-control" checked="checked" />
        <input type="radio" id="s-2" name="slider-control" />
        <input type="radio" id="s-3" name="slider-control" />
        <input type="radio" id="s-4" name="slider-control" />
        <input type="radio" id="s-5" name="slider-control" />
        <ul class="s-content">
          <li class="s-item s-item-1"></li>
          <li class="s-item s-item-2"></li>
          <li class="s-item s-item-3"></li>
          <li class="s-item s-item-4"></li>
          <li class="s-item s-item-5"></li>
        </ul>
        <div class="s-control">
          <label class="s-c-1" for="s-1"></label>
          <label class="s-c-2" for="s-2"></label>
          <label class="s-c-3" for="s-3"></label>
          <label class="s-c-4" for="s-4"></label>
          <label class="s-c-5" for="s-5"></label>
        </div>
        <div class="s-nav">
          <label class="s-nav-1 right" for="s-2"></label>
          <label class="s-nav-2 left" for="s-1"></label>
          <label class="s-nav-2 right" for="s-3"></label>
          <label class="s-nav-3 left" for="s-2"></label>
          <label class="s-nav-3 right" for="s-4"></label>
          <label class="s-nav-4 left" for="s-3"></label>
          <label class="s-nav-4 right" for="s-5"></label>
          <label class="s-nav-5 left" for="s-4"></label>
        </div>
      </div>
    </div>

    <div
      class="relative flex flex-col justify-center sm:flex-row sm:space-x-4 pb-10"
    >
      <a
        style="cursor: pointer;" @click="$router.push({name: 'portfolio'})"
        class="flex items-center w-[200px] px-6 py-3 mb-3 text-lg text-white bg-gradient-to-r from-blue-300 via-teal-500 to-purple-400 rounded-md sm:mb-0 sm:w-[200px]"
      >
        <h1 class="pr-3">View Portfolio</h1>
      </a>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.outer-wrapper {
  width: 60%;
  display: flex;
  justify-content: center !important;
  align-content: center;
  margin: auto;
}

.s-wrap {
  width: 80%;
  margin-bottom: 50px;
  padding-bottom: 55%;
  position: relative;
  border: 2px solid inherit;
  background-color: #efefe8;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}
.s-wrap > input {
  display: none;
}
.s-wrap .s-content {
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 500%;
  height: 100%;
  font-size: 0;
  list-style: none;
  transition: transform 1s;
}
.s-wrap .s-item {
  display: inline-block;
  width: 20%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
.s-wrap .s-item-1 {
  background-image: url(../assets/Apex.png);
  background-size: cover;
}
.s-wrap .s-item-2 {
  background-image: url(../assets/Travelaid.png);
  background-size: cover;
}
.s-wrap .s-item-3 {
  background-image: url(../assets/foodology.png);
  background-size: cover;
}
.s-wrap .s-item-4 {
  background-image: url(../assets/Newshub.png);
  background-size: cover;
}
.s-wrap .s-item-5 {
  background-image: url(../assets/eden.png);
  background-size: cover;
}

.s-type-1 .s-control {
  position: absolute;
  bottom: 18px;
  left: 50%;
  text-align: center;
  transform: translateX(-50%);
  transition-timing-function: ease-out;
}
.s-type-1 .s-control > label[class^="s-c-"] {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 10px;
  border-radius: 50%;
  border: 1px solid #999;
  background-color: #efefe8;
  cursor: pointer;
}
.s-type-1 .s-nav label {
  display: none;
  position: absolute;
  top: 50%;
  padding: 5px 10px;
  transform: translateY(-50%);
  cursor: pointer;
}
.s-type-1 .s-nav label::before,
.s-type-1 .s-nav label::after {
  content: "";
  display: block;
  width: 8px;
  height: 24px;
  background-color: #fff;
}
.s-type-1 .s-nav label::before {
  margin-bottom: -12px;
}
.s-type-1 .s-nav label.left {
  left: 20px;
}
.s-type-1 .s-nav label.left::before {
  transform: rotate(45deg);
}
.s-type-1 .s-nav label.left::after {
  transform: rotate(-45deg);
}
.s-type-1 .s-nav label.right {
  right: 20px;
}
.s-type-1 .s-nav label.right::before {
  transform: rotate(-45deg);
}
.s-type-1 .s-nav label.right::after {
  transform: rotate(45deg);
}
.s-type-1 #s-1:checked ~ .s-content {
  transform: translateX(0%);
}
.s-type-1 #s-1:checked ~ .s-control .s-c-1 {
  background-color: #333;
}
.s-type-1 #s-1:checked ~ .s-nav .s-nav-1 {
  display: block;
}
.s-type-1 #s-2:checked ~ .s-content {
  transform: translateX(-20%);
}
.s-type-1 #s-2:checked ~ .s-control .s-c-2 {
  background-color: #333;
}
.s-type-1 #s-2:checked ~ .s-nav .s-nav-2 {
  display: block;
}
.s-type-1 #s-3:checked ~ .s-content {
  transform: translateX(-40%);
}
.s-type-1 #s-3:checked ~ .s-control .s-c-3 {
  background-color: #333;
}
.s-type-1 #s-3:checked ~ .s-nav .s-nav-3 {
  display: block;
}
.s-type-1 #s-4:checked ~ .s-content {
  transform: translateX(-60%);
}
.s-type-1 #s-4:checked ~ .s-control .s-c-4 {
  background-color: #333;
}
.s-type-1 #s-4:checked ~ .s-nav .s-nav-4 {
  display: block;
}
.s-type-1 #s-5:checked ~ .s-content {
  transform: translateX(-80%);
}
.s-type-1 #s-5:checked ~ .s-control .s-c-5 {
  background-color: #333;
}
.s-type-1 #s-5:checked ~ .s-nav .s-nav-5 {
  display: block;
}

@keyframes slider-animation {
  0%,
  7% {
    transform: translateX(0%);
  }
  12.5%,
  19.5% {
    transform: translateX(-20%);
  }
  25%,
  32% {
    transform: translateX(-40%);
  }
  37.5%,
  44.5% {
    transform: translateX(-60%);
  }
  50%,
  57% {
    transform: translateX(-80%);
  }
  62.5%,
  69.5% {
    transform: translateX(-60%);
  }
  75%,
  82% {
    transform: translateX(-40%);
  }
  87.5%,
  94.5% {
    transform: translateX(-20%);
  }
}

.look{
  background-image: url(../assets/christopher-gower-m_HRfLhgABo-unsplash.jpg);
  background-size: cover;
}

</style>
