<script setup lang="ts">
import "animate.css";
import { ref, onMounted, h } from "vue";
import languageData from "./utils/language";
import { getAssetsFile } from "./utils";
import { productList } from "./utils/data"


const isMobile = ref(false);
const productListRef = ref(productList);
const checkIsMobile = () => {
  isMobile.value = window.innerWidth < 768;
};
type languateType = "chinese" | "english";

const languageValue = ref<string>(localStorage.getItem("languageValue") || "chinese");

const languageDic = ref<any>(languageData[languageValue.value as languateType]);

const animationRef = ref<Element[]>([]);
const headerNavFixedRef = ref<Element>();
const codeRef = ref<Element>();
const blockRef = ref<Element>();
const fireModuleRef = ref<Element>();
const fireContentRef = ref<Element>();
const fireTitleRef = ref<Element>();
const fireDescRef = ref<Element>();
const fireDescRef2 = ref<Element>();
const isLocked = ref(false);
let step = 1

function unLock(stepValue: number, timer: number = 2500, scrollTo?: number) {
  isLocked.value = true;
  setTimeout(() => {
    isLocked.value = false;
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    step = stepValue
    if (scrollTo) {
      window.scrollTo(0, scrollTo);
    }
  }, timer)
}

const handleScroll = () => {
  if (window.scrollY > 5 && !isLocked.value && step === 1) {

    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`; // 补偿滚动位置
    document.body.style.width = '100%';
    window.scrollTo(5, 0);

    if (fireContentRef?.value) {
      fireContentRef.value.classList.add("secondStep")
    }
    if (fireModuleRef?.value) {
      fireModuleRef.value.classList.add("secondStep")
    }
    if (fireTitleRef?.value) {
      fireTitleRef.value.classList.add("customFadeOut")
    }
    if (fireDescRef?.value) {
      fireDescRef.value.classList.add("customFadeIn")
    }
    // if (fireDescRef2?.value) {
    //   fireDescRef2.value.classList.add("customFadeIn")
    // }

    unLock(2, 2500)

    setTimeout(() => {

      // setTimeout(() => {
      //   if (headerNavFixedRef?.value) {
      //     headerNavFixedRef.value.classList.add("show")
      //   }
      // }, 800)

      if (fireContentRef?.value) {
        fireContentRef.value.classList.add("thirdStep")
        setTimeout(() => {
          if (fireContentRef?.value) {
            fireContentRef.value.classList.add("hide")
          }
          if (headerNavFixedRef?.value) {
            headerNavFixedRef.value.classList.add("show")
          }
        }, 500)

      }
      if (fireModuleRef?.value) {
        fireModuleRef.value.classList.add("thirdStep")
      }
    }, 1200)

  }
  // 判断是否到达顶部
  if (step === 2 && window.scrollY === 0 && !isLocked.value) {

    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`; // 补偿滚动位置
    document.body.style.width = '100%';
    unLock(1, 2500)
    if (fireContentRef?.value) {
      fireContentRef.value.classList.remove("thirdStep")
    }
    if (fireModuleRef?.value) {
      fireModuleRef.value.classList.remove("thirdStep")
    }
    if (headerNavFixedRef?.value) {
      headerNavFixedRef.value.classList.remove("show")
    }
    if (fireContentRef?.value) {
      fireContentRef.value.classList.remove("hide")
    }

    setTimeout(() => {
      if (fireContentRef?.value) {
        fireContentRef.value.classList.remove("secondStep")
      }
      if (fireModuleRef?.value) {
        fireModuleRef.value.classList.remove("secondStep")
      }
      if (fireTitleRef?.value) {
        setTimeout(() => {
          if (fireTitleRef?.value) {
            fireTitleRef.value.classList.remove("customFadeOut")
            fireTitleRef.value.classList.add("customFadeIn")
            setTimeout(() => {
              if (fireTitleRef?.value) {
                fireTitleRef.value.classList.remove("customFadeIn")
              }
            }, 500)
          }
        }, 500)
      }
      if (fireDescRef?.value) {
        fireDescRef.value.classList.add("customFadeOut")
        fireDescRef.value.classList.remove("customFadeIn")
        setTimeout(() => {
          if (fireDescRef?.value) {
            fireDescRef.value.classList.remove("customFadeOut")
          }
        }, 500)
      }
      // if (fireDescRef2?.value) {
      //   fireDescRef2.value.classList.add("customFadeOut")
      //   fireDescRef2.value.classList.remove("customFadeIn")
      //   setTimeout(() => {
      //     if (fireDescRef2?.value) {
      //       fireDescRef2.value.classList.remove("customFadeOut")
      //     }
      //   }, 500)
      // }
    }, 1000)
  }

};


onMounted(() => {
  checkIsMobile()

  document.documentElement.style.fontSize = (100 * window.innerWidth / 1920) + 'px';
  window.addEventListener('resize', () => {
    document.documentElement.style.fontSize = (100 * window.innerWidth / 1920) + 'px';
  });
  if (!isMobile.value) {
    window.addEventListener('scroll', handleScroll);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("customFadeInUp");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );
  animationRef.value.forEach((item) => {
    observer.observe(item);
  });

  const codeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          step = 3
          const scrollY = window.scrollY
          unLock(2, 1500, scrollY)

          document.body.style.overflow = 'hidden';
          document.body.style.position = 'fixed';
          document.body.style.top = `-${scrollY}px`; // 补偿滚动位置
          document.body.style.width = '100%';
          window.scrollTo(0, scrollY);

          entry.target.classList.add("customFadeInUp");
          codeObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 1,
    }
  );
  if (codeRef.value) {
    codeObserver.observe(codeRef.value);
  }
});
const handleContentItemRef = (el: any) => {
  if (el) {
    if (!isMobile.value) {
      animationRef.value.push(el);
    }
  }
};

const handleApply = () => {
  window.open("https://sparqi-lab.com/research-kit/apply");
}

const handleDownload = () => {
  window.open("https://sparqi-lab.com/research-kit/sdk-download");
}

const handleProductClick = (item: any, childIndex: number) => {
  item.active = childIndex
  console.log(item)
}

</script>

<template>
  <div class="home-page" :class="{ mobile: isMobile }">
    <div class="fire-module" ref="fireModuleRef">
      <div class="fire-module-in" ref="fireContentRef">
        <div class="fire-module-bg">
        </div>
        <div class="fire-module-content">
          <div class="header-nav">
            <div class="header-logo">
              <img src="@/assets/header-logo.png" alt="" />
            </div>
            <div class="header-nav-list">
              <div class="header-nav-item">{{ languageDic.nav.text1 }}</div>
              <div class="header-nav-item">{{ languageDic.nav.text2 }}</div>
              <div class="header-nav-item">{{ languageDic.nav.text3 }}</div>
            </div>
          </div>
          <div class="fire-info animationElement" :ref="(el) => handleContentItemRef(el)">
            <div class="fire-title" ref="fireTitleRef">
              <span class="text">{{ languageDic.fire.title1 }}</span> -<br />
              <span class="text">{{ languageDic.fire.title2 }}</span><br />
              <span class="text blue">{{ languageDic.fire.title3 }}</span>
            </div>
            <div class="fire-desc" ref="fireDescRef">
              <div class="fire-desc1">{{ languageDic.fire.desc }}</div>
              <div class="fire-desc2" v-html="languageDic.fire.desc2"></div>
              <!-- ref="fireDescRef2"  -->
            </div>
            <!-- <div class="fire-btn">
              <img src="@/assets/arrow-down.png" alt="">
            </div> -->
          </div>
        </div>
      </div>
    </div>

    <div class="black-bg" ref="blockRef"></div>

    <div class="apply-module">
      <div class="apply-module-in">
        <div class="apply-info animationElement" :ref="(el) => handleContentItemRef(el)">
          <div class="apply-title">
            <span class="text">{{ languageDic.apply.title1 }}</span> -<br />
            <span class="text">{{ languageDic.apply.title2 }}</span>
            <span class="text blue">{{ languageDic.apply.title3 }}</span>
          </div>
          <div class="apply-desc">{{ languageDic.apply.desc }}</div>
          <div class="apply-download-wrap">
            <div class="apply-download-btn-default">
              <span>{{ languageDic.apply.btnText }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12.3889 5M19 12L12.3889 19" stroke="white" stroke-width="2.5"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="apply-download-btn-hover" @click="handleApply">
              <span>{{ languageDic.apply.btnTextHover }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12.3889 5M19 12L12.3889 19" stroke="white" stroke-width="2.5"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 产品列表 -->

    <div class="my-product">
      <div class="my-product-in">
        <div class="my-product-title animationElement" :ref="(el) => handleContentItemRef(el)">
          {{ languageDic.product.title }}
        </div>
        <div class="my-product-content">
          <div class="my-product-item animationElement" :ref="(el) => handleContentItemRef(el)" v-for="(item, index) in productListRef"
            :key="index">
            <div class="my-product-item-left">
              <div class="my-product-switch" v-if="item.posterList.length > 1">
                <div class="my-product-switch-item" :class="{ active: item.active === childIndex }"
                  @click="handleProductClick(item, childIndex)" v-for="(childItem, childIndex) in item.posterList"
                  :key="childIndex">
                </div>

              </div>
              <div class="my-product-item-left-item" :style="{height: childIndex === item.active ? '100%' : '0px'}" v-for="(childItem, childIndex) in item.posterList"
                :key="childIndex" >
                <img class="my-poster-item" :src="getAssetsFile(childItem)" alt="" v-if="childIndex === item.active" />
              </div>
            </div>
            <div class="my-product-item-right">
              <div class="my-product-item-right-head">
                <span></span>
                <div>
                  <p class="product-cate">{{ item.cate }}</p>
                  <p class="product-title">{{ item.title }}</p>
                </div>
                <img class="product-part" :src="getAssetsFile(item.part)" alt="">
              </div>
              <div class="my-product-item-right-body">
                <div class="my-product-item-right-body-item" v-for="(funcItem, funcIndex) in item.func" :key="funcIndex"> 
                    <img class="my-product-item-right-body-item-icon" :src="getAssetsFile(funcItem.img)" alt="">
                    <p class="my-product-item-right-body-item-desc" v-for="(descItem, descIndex) in funcItem.decs" :key="descIndex">{{ descItem }}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- SDK下载 -->
    <div class="sdk-module">
      <div class="sdk-module-in">
        <div class="sdk-info animationElement" :ref="(el) => handleContentItemRef(el)">
          <div class="sdk-title">
            <span class="blue text">{{ languageDic.sdk.title1 }}</span> -<br />
            <span class="text">{{ languageDic.sdk.title2 }}</span>
          </div>
          <div class="sdk-text">{{ languageDic.sdk.title3 }}</div>
          <div class="sdk-desc">{{ languageDic.sdk.desc }}</div>
          <div class="sdk-download-wrap">
            <div class="sdk-download-btn-default">
              <span>{{ languageDic.sdk.btnText }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="sdk-icon" viewBox="0 0 24 24" fill="none">
                <path d="M12 3L12 13M12 13L17 8.27778M12 13L7 8.27778" stroke="black" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4 13V14C4 16.7614 6.23858 19 9 19H15C17.7614 19 20 16.7614 20 14V13" stroke="black"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="sdk-download-btn-hover" @click="handleDownload">
              <span>{{ languageDic.sdk.btnTextHover }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="sdk-icon" viewBox="0 0 24 24" fill="none">
                <path d="M12 3L12 13M12 13L17 8.27778M12 13L7 8.27778" stroke="white" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4 13V14C4 16.7614 6.23858 19 9 19H15C17.7614 19 20 16.7614 20 14V13" stroke="white"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <div class="sdk-code" ref="codeRef">
          <div class="sdk-bg">
            <img src="@/assets/code.png" alt="" />
          </div>
          <!-- <div class="sdk-download-wrap">
            <div class="sdk-download-btn-default">
              <span>{{ languageDic.sdk.btnText }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="sdk-icon" viewBox="0 0 24 24" fill="none">
                <path d="M12 3L12 13M12 13L17 8.27778M12 13L7 8.27778" stroke="black" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4 13V14C4 16.7614 6.23858 19 9 19H15C17.7614 19 20 16.7614 20 14V13" stroke="black"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="sdk-download-btn-hover" @click="handleDownload">
              <span>{{ languageDic.sdk.btnTextHover }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="sdk-icon" viewBox="0 0 24 24" fill="none">
                <path d="M12 3L12 13M12 13L17 8.27778M12 13L7 8.27778" stroke="white" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4 13V14C4 16.7614 6.23858 19 9 19H15C17.7614 19 20 16.7614 20 14V13" stroke="white"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div> -->
        </div>
      </div>
    </div>

    <div class="frame">
      <div class="bottom">
        <div class="div-31">
          <div class="div-32">
            <div class="frame-wrapper-6">
              <div class="div-33">
                <div class="element-2">
                  <img class="fire-png" :src="getAssetsFile('fire-text.png')" />
                </div>
                <div class="text-wrapper-24">{{ languageDic.footer.laboratory }}</div>
              </div>
            </div>
            <div class="frame-wrapper-7">
              <div class="div-33">
                <div class="text-wrapper-25">{{languageDic.footer.developEng}}</div>
                <div class="text-wrapper-25">{{ languageDic.footer.develop }}</div>
              </div>
            </div>
          </div>
          <div class="div-34">
            <div class="text-wrapper-26">{{ languageDic.footer.resouce }}</div>
            <div class="div-35">
              <div class="div-36 cursor-pointer">
                <div class="text-wrapper-27">{{ languageDic.footer.manual }}</div>
                <img class="img-2" :src="getAssetsFile('arrow-right.svg')" />
              </div>
              <div class="div-36 cursor-pointer">
                <div class="text-wrapper-27">{{ languageDic.footer.SDKDoc }}</div>
                <img class="img-2" :src="getAssetsFile('arrow-right.svg')" />
              </div>
              <div class="div-36 cursor-pointer">
                <div class="text-wrapper-27">{{ languageDic.footer.case }}</div>
                <img class="img-2" :src="getAssetsFile('arrow-right.svg')" />
              </div>
            </div>
          </div>
          <div class="frame-wrapper-8">
            <div class="div-37">
              <div class="text-wrapper-26">{{ languageDic.footer.concat }}</div>
              <div class="div-38">
                <div class="div-33">
                  <svg class="img-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8 15.8193L3.75736 11.5767C1.41421 9.23345 1.41421 5.43449 3.75736 3.09134C6.10051 0.748198 9.89947 0.748198 12.2427 3.09134C14.5858 5.43449 14.5858 9.23345 12.2427 11.5767L8 15.8193ZM11.2998 10.6338C13.1223 8.81138 13.1223 5.8566 11.2998 4.03415C9.4774 2.2117 6.52261 2.2117 4.70017 4.03415C2.87772 5.8566 2.87772 8.81138 4.70017 10.6338L8 13.9337L11.2998 10.6338ZM8 8.66732C7.2636 8.66732 6.66667 8.07038 6.66667 7.33398C6.66667 6.5976 7.2636 6.00065 8 6.00065C8.7364 6.00065 9.33333 6.5976 9.33333 7.33398C9.33333 8.07038 8.7364 8.66732 8 8.66732Z"
                      fill="black" fill-opacity="0.64" />
                  </svg>
                  <div class="div-2">
                    <div class="text-wrapper-27">{{ languageDic.footer.address }}</div>
                  </div>
                </div>
                <div class="div-33">
                  <svg xmlns="http://www.w3.org/2000/svg" class="img-2" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M1.99967 2H13.9997C14.3679 2 14.6663 2.29848 14.6663 2.66667V13.3333C14.6663 13.7015 14.3679 14 13.9997 14H1.99967C1.63149 14 1.33301 13.7015 1.33301 13.3333V2.66667C1.33301 2.29848 1.63149 2 1.99967 2ZM13.333 4.82528L8.04754 9.55867L2.66634 4.81063V12.6667H13.333V4.82528ZM3.00731 3.33333L8.04094 7.77467L13.0003 3.33333H3.00731Z"
                      fill="black" fill-opacity="0.64" />
                  </svg>
                  <div class="div-2">
                    <div class="text-wrapper-27">sparqi-lab@goertek.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="div-39">
          <div class="image-4"></div>
          <div class="div-40">
            <p class="text-wrapper-28">
              {{ languageDic.footer.copyright }}

            </p>
            <div class="div-2">
              <div class="text-wrapper-30">{{ languageDic.footer.privacy }}</div>
              <div class="text-wrapper-30">{{ languageDic.footer.terms }}</div>
              <div class="text-wrapper-30">{{ languageDic.footer.ICP }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-border"></div>
    </div>
  </div>
  <div class="header-nav header-nav-fixed" ref="headerNavFixedRef">
    <div class="header-logo">
      <img src="@/assets/header-logo.png" alt="" />
    </div>
    <div class="header-nav-list">
      <div class="header-nav-item">{{ languageDic.nav.text1 }}</div>
      <div class="header-nav-item">{{ languageDic.nav.text2 }}</div>
      <div class="header-nav-item">{{ languageDic.nav.text3 }}</div>
    </div>
  </div>
</template>
<style>
*::-webkit-scrollbar {
  width: 0;
}
</style>

<style lang="scss" scoped>
@use './css/apply';
@use './css/product';
@use './css/sdk';
@use './css/fire';

@media screen and (max-width: 768px) {
  body {
    font-size: 0.16rem !important;
    /* 覆盖rem转换结果 */
  }

  /* 针对特定小字号元素放大 */
  .small-text {
    font-size: 14px !important;
  }
}

.home-page {
  width: 100vw;
  min-height: 100vh;
  // overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .black-bg {
    height: 2.40rem;
    background-color: #000;
  }
}

.fire-title {
  &.customFadeOut {
    opacity: 1;
    animation: fireTitleFadeOut 0.5s ease forwards;
  }

  &.customFadeIn {
    opacity: 0;
    animation: fireTitleFadeIn 1s ease forwards;
  }
}

@keyframes fireTitleFadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes fireTitleFadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fire-desc {
  &.customFadeIn {
    animation: fireDescFadeIn 1s ease forwards;
  }

  &.customFadeOut {
    animation: fireDescFadeOut 1s ease forwards;
  }
}


@keyframes fireDescFadeIn {
  from {
    margin-top: 0.24rem;
  }

  to {
    margin-top: -272px;
  }
}

@keyframes fireDescFadeOut {
  from {
    margin-top: -272px;
  }

  to {
    margin-top: 0.24rem;
  }
}

@keyframes fireDescFadeInPad {
  from {
    margin-top: 0.24rem;
  }

  to {
    margin-top: -4.12rem;
  }
}

@keyframes fireDescFadeOutPad {
  from {
    margin-top: -4.12rem;
  }

  to {
    margin-top: 0.24rem;
  }
}



.fire-desc2 {
  &.customFadeIn {
    opacity: 0;
    animation: fireDesc2FadeIn 1s ease forwards;
  }

  &.customFadeOut {
    opacity: 1;
    animation: fireDesc2FadeOut 1s ease forwards;
  }
}

@keyframes fireDesc2FadeIn {
  from {
    opacity: 0;
    margin-top: 800px;
  }

  to {
    opacity: 1;
    margin-top: 21px;
  }
}

@keyframes fireDesc2FadeOut {
  from {
    opacity: 1;
    margin-top: 21px;
  }

  to {
    opacity: 0;
    margin-top: 800px;
  }
}

.animationElement {
  opacity: 0;

  &.customFadeInUp {
    opacity: 1;
    animation: customFadeInUp 1s ease;
  }
}

@keyframes customFadeInUp {
  from {
    opacity: 0;
    // 调整渐入的距离 40px是要修改的值，数值越大距离越大;
    transform: translateY(140px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.sdk-code {
  &.customFadeInUp {
    opacity: 1;
    animation: customCodeFadeInUp 1s ease forwards;
  }
}



@keyframes customCodeFadeInUpMobile {
  from {
    opacity: 0;
       margin-top: 2.36rem;
  }

  to {
    opacity: 1;
     margin-top: 0.45rem;
  }
}

@keyframes customCodeFadeInUpPad {
  from {
    opacity: 0;
       margin-top: 2.36rem;
  }

  to {
    opacity: 1;
       margin-top: 0.45rem;
  }
}

@keyframes customCodeFadeInUp {
  from {
    opacity: 0;
    margin-top: 2.36rem;
  }

  to {
    opacity: 1;
    margin-top: 0.45rem;
  }
}

.cursor-pointer {
  cursor: pointer;
}

.frame {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: #fff;

  .bottom {
    display: flex;
    flex-direction: column;
    // height: 7.39rem;
    align-items: flex-start;
    gap: 0.48rem;
    width: 12rem;
    margin: 0.24rem auto 0;
    position: relative;
    align-self: stretch;
    background-color: #ffffff;

    .fire-png {
      width: 1.18rem;
      object-fit: cover;
    }

    .div-2 {
      display: inline-flex;
      gap: 0.16rem;
    }
  }

  .div-31 {
    display: flex;
    flex-direction: column;
    width: 1200px;
    align-items: flex-start;
    gap: 0.64rem;
    padding: 0.40rem 0px;
    position: relative;
    flex: 0 0 auto;
    border-bottom-width: 0.01rem;
    border-bottom-style: solid;
    border-color: #0000001f;
  }

  .div-32 {
    display: inline-flex;
    align-items: center;
    gap: 0.80rem;
    position: relative;
    flex: 0 0 auto;
  }

  .frame-wrapper-6 {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.48rem;
    position: relative;
    flex: 0 0 auto;
  }

  .div-33 {
    display: inline-flex;
    align-items: center;
    gap: 0.08rem;
    position: relative;
    flex: 0 0 auto;
  }

  .text-wrapper-24 {
    width: fit-content;
    font-family: "Source Han Sans CN-Regular", Helvetica;
    font-weight: 400;
    color: #000000a3;
    font-size: 0.24rem;
    line-height: 0.16rem;
    white-space: nowrap;
    position: relative;
    letter-spacing: 0;
  }

  .frame-wrapper-7 {
    display: inline-flex;
    flex-direction: column;
    height: 0.16rem;
    align-items: flex-start;
    gap: 0.08rem;
    position: relative;
    flex: 0 0 auto;
  }

  .text-wrapper-25 {
    position: relative;
    width: fit-content;
    margin-top: -0.01rem;
    font-family: "Source Han Sans CN-Regular", Helvetica;
    font-weight: 400;
    color: #000000a3;
    font-size: 0.20rem;
    letter-spacing: 0;
    line-height: 0.16rem;
    white-space: nowrap;
  }

  .div-34 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.16rem;
    position: relative;
    align-self: stretch;
    width: 100%;
    flex: 0 0 auto;
  }

  .text-wrapper-26 {
    width: 2.69rem;
    margin-top: -0.01rem;
    font-family: "Source Han Sans CN-Bold", Helvetica;
    font-weight: 700;
    color: #000000a3;
    font-size: 0.16rem;
    line-height: 0.16rem;
    position: relative;
    letter-spacing: 0;
  }

  .div-35 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    align-self: stretch;
    width: 100%;
    flex: 0 0 auto;
  }

  .div-36 {
    justify-content: space-between;
    padding: 0.2rem 0.08rem 0.2rem 0px;
    position: relative;
    align-self: stretch;
    width: 100%;
    flex: 0 0 auto;
    border-bottom-width: 0.01rem;
    border-bottom-style: solid;
    border-color: #00000029;
    display: flex;
    align-items: center;
  }

  .text-wrapper-27 {
    width: fit-content;
    margin-top: -0.01rem;
    font-family: "Source Han Sans CN-Regular", Helvetica;
    font-weight: 400;
    color: #000000a3;
    font-size: 0.14rem;
    line-height: 0.16rem;
    white-space: nowrap;
    position: relative;
    letter-spacing: 0;
  }

  .img-2 {
    position: relative;
    width: 0.16rem;
    height: 0.16rem;
  }

  .frame-wrapper-8 {
    display: flex;
    align-items: flex-start;
    gap: 0.64rem;
    position: relative;
    align-self: stretch;
    width: 100%;
    flex: 0 0 auto;
  }

  .div-37 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.32rem;
    position: relative;
    flex: 1;
    flex-grow: 1;
  }

  .div-38 {
    display: inline-flex;
    align-items: flex-start;
    gap: 0.64rem;
    position: relative;
    flex: 0 0 auto;
  }

  .div-39 {
    display: flex;
    width: 12rem;
    align-items: center;
    gap: 4.64rem;
    position: relative;
    flex: 0 0 auto;
  }

  .image-4 {
    position: relative;
    width: 1.60rem;
    height: 0.35rem;
  }

  .div-40 {
    display: inline-flex;
    align-items: center;
    gap: 0.32rem;
    padding: 0.32rem 0px;
    position: relative;
    flex: 0 0 auto;
  }

  .text-wrapper-28 {
    position: relative;
    width: 2.69rem;
    font-family: "Source Han Sans CN-Medium", Helvetica;
    font-weight: 500;
    color: #0000007a;
    font-size: 0.12rem;
    letter-spacing: 0;
    line-height: 0.12rem;
  }

  .text-wrapper-29 {
    width: fit-content;
    margin-top: -0.01rem;
    font-family: "Source Han Sans CN-Medium", Helvetica;
    font-weight: 500;
    color: #000000;
    font-size: 0.12rem;
    line-height: 0.12rem;
    white-space: nowrap;
    position: relative;
    letter-spacing: 0;
  }

  .text-wrapper-30 {
    position: relative;
    width: fit-content;
    margin-top: -0.01rem;
    font-family: "Source Han Sans CN-Medium", Helvetica;
    font-weight: 500;
    color: #0000007a;
    font-size: 0.12rem;
    letter-spacing: 0;
    line-height: 0.12rem;
    white-space: nowrap;
    cursor: pointer;

    &:hover {
      color: #000000;
    }
  }
}

.bottom-border {
  margin: 0 auto 0.48rem;
  width: 1200px;
  height: 0.01rem;
  background-color: rgba(0, 0, 0, 0.12);
}

@media (max-width: 768px) {
  .frame {

    .bottom {
      padding-bottom: 0.6rem;
      width: 80%;

      .fire-png {
        width: 2.88rem;
      }

      .text-wrapper-24 {
        font-size: 0.54rem;
      }

      .text-wrapper-25 {
        font-size: 0.32rem;
      }

      .text-wrapper-26 {
        font-size: 0.44rem;
      }

      .div-36 {
        padding: 0.52rem 0.08rem 0.52rem 0px;
      }

      .text-wrapper-27 {
        font-size: 0.32rem;
      }

      .div-31 {
        width: 100%;

        padding-bottom: 0.6rem;
      }

      .div-37 {
        gap: 0.8rem;
      }

      .image-4 {
        width: 2.8rem;
        height: auto;
      }

      .text-wrapper-28 {
        width: auto;
        font-size: 0.32rem;
      }

      .div-39 {
        gap: 1.2rem;
      }

      .img-2 {
        width: 0.36rem;
        height: 0.36rem;
      }

      .text-wrapper-29,
      .text-wrapper-30 {
        font-size: 0.32rem;
      }
    }
  }

  .sdk-code {
    &.customFadeInUp {
      opacity: 1;
      animation: customCodeFadeInUpMobile 1s ease forwards;
    }
  }

  .bottom-border {
    width: 100%;
  }


}

@media (min-width: 768px) and (max-width: 1200px) {
   .frame {

    .bottom {
      padding-bottom: 0.6rem;
      width: 80%;

      .fire-png {
        width: 2.88rem;
      }

      .text-wrapper-24 {
        font-size: 0.54rem;
      }

      .text-wrapper-25 {
        font-size: 0.32rem;
      }

      .text-wrapper-26 {
        font-size: 0.44rem;
      }

      .div-36 {
        padding: 0.52rem 0.08rem 0.52rem 0px;
      }

      .text-wrapper-27 {
        font-size: 0.32rem;
      }

      .div-31 {
        width: 100%;

        padding-bottom: 0.6rem;
      }

      .div-37 {
        gap: 0.8rem;
      }

      .image-4 {
        width: 2.8rem;
        height: auto;
      }

      .text-wrapper-28 {
        width: auto;
        font-size: 0.32rem;
      }

      .div-39 {
        gap: 1.2rem;
      }

      .img-2 {
        width: 0.36rem;
        height: 0.36rem;
      }

      .text-wrapper-29,
      .text-wrapper-30 {
        font-size: 0.32rem;
      }
    }
  }

  .sdk-code {
    &.customFadeInUp {
      opacity: 1;
      animation: customCodeFadeInUpPad 1s ease forwards;
    }
  }

  .bottom-border {
    width: 100%;
  }
  .fire-desc {
  &.customFadeIn {
    animation: fireDescFadeInPad 1s ease forwards;
  }

  &.customFadeOut {
    animation: fireDescFadeOutPad 1s ease forwards;
  }
}



}
</style>
