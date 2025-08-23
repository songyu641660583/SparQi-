<template>
  <div class="download-page">
    <div class="container-1">
      <div class="hero-section">
        <img class="hero-bg" src="@/assets/download-bg.jpg" />
        <div class="hero-title">SDK下载中心</div>
        <div class="hero-subtitle">获取最新版Android SDK，开启智能穿戴开发之旅</div>
      </div>
      <div class="content-container">
        <div class="download-card">
          <div class="card-content">
            <div class="card-title">Android SDK 下载</div>
            <div class="card-description">
              当前提供 Android 平台的SDK 下载，支持穿戴设备开发。请根据下方指南进行集成。
            </div>
          </div>
          <div class="download-button" @click="handleDownload">
            <div class="button-content">
              <span class="button-text">下载 Android SDK</span>
              <span class="button-text"></span>
              <div class="button-version">（v1.00.00）</div>
            </div>
            <div class="button-icon">
              <svg
                class="download-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 3L12 13M12 13L17 8.27778M12 13L7 8.27778"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 13V14C4 16.7614 6.23858 19 9 19H15C17.7614 19 20 16.7614 20 14V13"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-2">
      <div class="guide-section">
        <div class="section-header">
          <div class="section-title">安装与使用指南</div>
        </div>
        <div class="section-text">﻿﻿点击上方按钮下载SDK 压缩包（文件大小约12MB）。</div>
        <div class="inline-text">
          <div class="text-part">﻿﻿解压后将</div>
          <div class="code-block">
            <div class="code-text">ResearchKit_SDK_1.00.00.aar</div>
          </div>
          <div class="text-part">文件放入您的项目目录。</div>
        </div>
        <div class="inline-text">
          <div class="text-part">﻿﻿在</div>
          <div class="code-block">
            <div class="code-text">build.gradle</div>
          </div>
          <div class="text-part">中添加依赖。</div>
        </div>
        <div class="code-container">
          <div class="code-block-2">
            <div class="code-text-2">implementation files(' libs/ResearchKit_SDK_1.00.00.aar'）</div>
          </div>
        </div>
        <!-- <div class="inline-text">
          <div class="text-part">同步项目并参考</div>
          <div class="link-block">
            <div class="link-text">官方文档</div>
            <div class="link-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7.05033 16.9497L16.9498 7.05025M16.9498 7.05025L7.32532 6.77527M16.9498 7.05025L17.2248 16.6748"
                  stroke="#06B1B1"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div class="text-part">开始开发</div>
        </div> -->
        <div class="inline-text">
          <div class="text-part">如需帮助，请联系</div>
          <div class="link-block">
            <div class="link-text">jeremy.li@goertek.com</div>
            <div class="link-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7.05033 16.9497L16.9498 7.05025M16.9498 7.05025L7.32532 6.77527M16.9498 7.05025L17.2248 16.6748"
                  stroke="#06B1B1"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <!-- <div class="text-part">或加入</div>
          <div class="link-block">
            <div class="link-text">开发者社区</div>
            <div class="link-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="7"
                  transform="rotate(90 12 12)"
                  stroke="#06B1B1"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19 12L5 12"
                  stroke="#06B1B1"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 19V19C15.866 15.134 15.866 8.86599 12 5V5"
                  stroke="#06B1B1"
                  stroke-width="1.2"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 19V19C8.13401 15.134 8.13401 8.86599 12 5V5"
                  stroke="#06B1B1"
                  stroke-width="1.2"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div> -->
          <div class="text-part">。</div>
        </div>
      </div>
      <div class="version-section">
        <div class="section-header">
          <div class="section-title">版本说明</div>
        </div>
        <!-- <div class="version-item">
          <div class="version-bullet">-</div>
          <div class="version-title">v1.2.0（2024-09-15）：</div>
          <div class="version-description">
            优化蓝牙连接稳定性，新增健康数据解析接口。
          </div>
        </div> -->
        <div class="version-item">
          <div class="version-bullet">-</div>
          <div class="version-title">v1.00.00（2025-06-20）：</div>
          <div class="version-description">Android SDK版本发布。</div>
        </div>
      </div>
    </div>
    <div class="scroll-indicator">
      <div class="scroll-bar"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
 const handleDownload = () => {
    window.open('http://alpha.goertek.com:4433/sdk/ResearchKit_SDK_1.00.00.zip', '_blank');
  };

</script>

<style lang="scss" scoped>
$contentWidth: 1200px;

.download-page {
  margin: 100px auto;
  width: $contentWidth;
  align-self: stretch;
  padding-bottom: 48px;
  position: relative;
  background: white;
  box-shadow: 0px 12px 32px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  border-radius: 24px;
  border-bottom: 1px rgba(255, 255, 255, 0.12) solid;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 64px;

  .container-1 {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
  }

  .hero-section {
    align-self: stretch;
    padding-top: 80px;
    padding-bottom: 120px;
    position: relative;
    background: #1e3c3c;
    overflow: hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    display: flex;
  }

  .hero-bg {
    width: 1236px;
    height: 1407px;
    left: -18px;
    top: -492px;
    position: absolute;
    mix-blend-mode: hard-light;
    box-shadow: 160px 160px 160px;
    filter: blur(80px);
    object-fit: contain;
  }

  .hero-title {
    text-align: center;
    color: white;
    font-size: 64px;
    font-family: Source Han Sans CN;
    font-weight: 700;
    word-wrap: break-word;
  }

  .hero-subtitle {
    text-align: center;
    color: rgba(255, 255, 255, 0.48);
    font-size: 24px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    word-wrap: break-word;
  }

  .content-container {
    position: relative;
    z-index: 2;
    margin-top: -40px;
    align-self: stretch;
    padding-left: 40px;
    padding-right: 40px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    display: flex;
  }

  .download-card {
    align-self: stretch;
    height: 200px;
    padding-left: 48px;
    padding-right: 48px;
    padding-top: 24px;
    padding-bottom: 24px;
    background: white;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.12);
    border-radius: 24px;
    justify-content: flex-start;
    align-items: center;
    gap: 24px;
    display: inline-flex;
  }

  .card-content {
    flex: 1 1 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    display: inline-flex;
  }

  .card-title {
    align-self: stretch;
    color: black;
    font-size: 40px;
    font-family: Source Han Sans CN;
    font-weight: 700;
    word-wrap: break-word;
  }

  .card-description {
    align-self: stretch;
    color: rgba(0, 0, 0, 0.48);
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 24px;
    word-wrap: break-word;
  }

  .download-button {
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    background: linear-gradient(0deg, #06b1b1 0%, #06b1b1 100%);
    border-radius: 200px;
    justify-content: center;
    align-items: center;
    gap: 16px;
    display: flex;
    cursor: pointer;
  }

  .button-content {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2px;
    display: inline-flex;
  }

  .button-text {
    color: white;
    font-size: 18px;
    font-family: Source Han Sans CN;
    font-weight: 700;
    line-height: 24px;
    word-wrap: break-word;
  }

  .button-version {
    color: white;
    font-size: 12px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    line-height: 16px;
    word-wrap: break-word;
  }

  .button-icon {
    width: 24px;
    height: 24px;
    position: relative;
    overflow: hidden;
  }

  .container-2 {
    margin-top: 64px;
    align-self: stretch;
    padding-left: 80px;
    padding-right: 80px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 40px;
    display: flex;
  }

  .guide-section,
  .version-section {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    display: flex;
  }

  .section-header {
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    display: inline-flex;
  }

  .section-title {
    width: 269px;
    color: rgba(0, 0, 0, 0.64);
    font-size: 24px;
    font-family: Source Han Sans CN;
    font-weight: 700;
    line-height: 28px;
    word-wrap: break-word;
  }

  .section-text {
    align-self: stretch;
    color: rgba(0, 0, 0, 0.48);
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 24px;
    word-wrap: break-word;
  }

  .inline-text {
    align-self: stretch;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: inline-flex;
  }

  .text-part {
    color: rgba(0, 0, 0, 0.48);
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 24px;
    word-wrap: break-word;
  }

  .code-block {
    height: 24px;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 2px;
    padding-bottom: 2px;
    background: #f2f2f2;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: flex;
  }

  .code-text {
    color: rgba(0, 0, 0, 0.48);
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 20px;
    word-wrap: break-word;
  }

  .code-container {
    padding-left: 24px;
    padding-right: 24px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    display: flex;
  }

  .code-block-2 {
    height: 24px;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 2px;
    padding-bottom: 2px;
    background: #f2f2f2;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: inline-flex;
  }

  .code-text-2 {
    color: #06b1b1;
    font-size: 16px;
    font-family: Source Han Sans SC;
    font-weight: 400;
    line-height: 20px;
    word-wrap: break-word;
  }

  .link-block {
    height: 24px;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 2px;
    padding-bottom: 2px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    gap: 2px;
    display: flex;
  }

  .link-text {
    color: #06b1b1;
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 20px;
    word-wrap: break-word;
  }

  .link-icon {
    width: 24px;
    height: 24px;
    position: relative;
    overflow: hidden;
  }

  .version-item {
    align-self: stretch;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: inline-flex;
  }

  .version-bullet {
    color: black;
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 700;
    line-height: 24px;
    word-wrap: break-word;
  }

  .version-title {
    color: black;
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 700;
    line-height: 24px;
    word-wrap: break-word;
  }

  .version-description {
    color: rgba(0, 0, 0, 0.48);
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 24px;
    word-wrap: break-word;
  }

  .scroll-indicator {
    height: 920px;
    padding-left: 6px;
    padding-right: 6px;
    padding-top: 24px;
    padding-bottom: 24px;
    left: 1182px;
    top: 0px;
    position: absolute;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    display: inline-flex;
  }

  .scroll-bar {
    width: 6px;
    height: 120px;
    background: rgba(0, 0, 0, 0.12);
    border-radius: 200px;
  }
}

@media (max-width: 768px) {
  .download-page {
    margin: 1% auto;
    width: 98%;
    padding-bottom: 0.48rem;
    box-shadow: 0px 0.12rem 0.32rem rgba(0, 0, 0, 0.08);
    border-radius: 0.24rem;
    gap: 0.64rem;

    .hero-section {
      padding-top: 1.2rem;
      padding-bottom: 1.6rem;
      gap: 0.16rem;
    }

    .hero-bg {
      width: 12.36rem;
      height: 14.07rem;
      left: -0.18rem;
      top: -4.92rem;
      box-shadow: 1.6rem 1.6rem 1.6rem;
      filter: blur(0.8rem);
    }

    .hero-title {
      font-size: 1.04rem;
    }

    .hero-subtitle {
      font-size: 0.44rem;
    }

    .content-container {
      margin-top: -0.4rem;
      padding-left: 0.4rem;
      padding-right: 0.4rem;
      gap: 0.1rem;
    }

    .download-card {
      height: 3rem;
      padding-left: 0.48rem;
      padding-right: 0.48rem;
      padding-top: 0.24rem;
      padding-bottom: 0.24rem;
      box-shadow: 0rem 0.04rem 0.24rem rgba(0, 0, 0, 0.12);
      border-radius: 0.24rem;
      gap: 0.24rem;
    }

    .card-content {
      gap: 0.16rem;
    }

    .card-title {
      font-size: 0.76rem;
    }

    .card-description {
      font-size: 0.33rem;
      line-height: 0.24rem;
    }

    .download-button {
      padding-left: 0.36rem;
      padding-right: 0.36rem;
      padding-top: 0.3rem;
      padding-bottom: 0.24rem;
      border-radius: 2rem;
      gap: 0.2rem;
    }

    .button-content {
      gap: 0.02rem;
    }

    .button-text {
      font-size: 0.28rem;
      line-height: 0.3rem;
    }

    .button-version {
      font-size: 0.24rem;
      line-height: 0.24rem;
    }

    .button-icon {
      width: 0.48rem;
      height: 0.48rem;

      .download-icon {
        width: 0.48rem;
        height: 0.48rem;
      }
    }

    .container-2 {
      margin-top: 0.64rem;
      padding-left: 0.8rem;
      padding-right: 0.8rem;
      gap: 0.4rem;
    }

    .guide-section,
    .version-section {
      gap: 0.28rem;
    }

    .section-header {
      gap: 0.08rem;
    }

    .section-title {
      width: 2.69rem;
      font-size: 0.36rem;
      line-height: 28px;
    }

    .section-text {
      font-size: 0.28rem;
      line-height: 0.32rem;
    }

    .inline-text {
      gap: 0.08rem;
    }

    .text-part {
      font-size: 0.34rem;
      line-height: 0.32rem;
    }

    .code-block {
      height: 0.32rem;
      padding-left: 0.08rem;
      padding-right: 0.08rem;
      padding-top: 0.02rem;
      padding-bottom: 0.02rem;
      border-radius: 0.08rem;
      gap: 0.1rem;
    }

    .code-text {
      font-size: 0.34rem;
      line-height: 0.2rem;
    }

    .code-container {
      padding-left: 0.32rem;
      padding-right: 0.32rem;
      gap: 0.1rem;
    }

    .code-block-2 {
      height: 0.32rem;
      padding-left: 0.08rem;
      padding-right: 0.08rem;
      padding-top: 0.02rem;
      padding-bottom: 0.02rem;
      border-radius: 0.08rem;
      gap: 0.1rem;
    }

    .code-text-2 {
      font-size: 0.34rem;
      line-height: 0.2rem;
    }

    .link-block {
      height: 0.32rem;
      padding-left: 0.08rem;
      padding-right: 0.08rem;
      padding-top: 0.02rem;
      padding-bottom: 0.02rem;
      border-radius: 0.08rem;
      gap: 0.02rem;
    }

    .link-text {
      font-size: 0.34rem;
      line-height: 0.2rem;
    }

    .link-icon {
      width: 0.32rem;
      height: 0.32rem;
    }

    .version-item {
      gap: 0.08rem;
    }

    .version-bullet {
      font-size: 0.34rem;
      line-height: 0.32rem;
    }

    .version-title {
      font-size: 0.34rem;
      line-height: 0.32rem;
    }

    .version-description {
      font-size: 0.34rem;
      line-height: 0.32rem;
    }

    .scroll-indicator {
      height: 9.2rem;
      padding-left: 0.6rem;
      padding-right: 0.6rem;
      padding-top: 0.32rem;
      padding-bottom: 0.32rem;
      left: 11.82rem;
      top: 0px;
      gap: 0.1rem;
      display: inline-flex;
    }

    .scroll-bar {
      width: 0.06rem;
      height: 1.2rem;
      background: rgba(0, 0, 0, 0.12);
      border-radius: 2rem;
    }
  }
}

@media (min-width: 768px) and (max-width: 1200px) {
  .download-page {
    margin: 1% auto;
    width: 98%;
    padding-bottom: 0.48rem;
    box-shadow: 0px 0.12rem 0.32rem rgba(0, 0, 0, 0.08);
    border-radius: 0.24rem;
    gap: 0.64rem;

    .hero-section {
      padding-top: 1.2rem;
      padding-bottom: 1.6rem;
      gap: 0.16rem;
    }

    .hero-bg {
      width: 12.36rem;
      height: 14.07rem;
      left: -0.18rem;
      top: -4.92rem;
      box-shadow: 1.6rem 1.6rem 1.6rem;
      filter: blur(0.8rem);
    }

    .hero-title {
      font-size: 1.04rem;
    }

    .hero-subtitle {
      font-size: 0.44rem;
    }

    .content-container {
      margin-top: -0.4rem;
      padding-left: 0.4rem;
      padding-right: 0.4rem;
      gap: 0.1rem;
    }

    .download-card {
      height: 3rem;
      padding-left: 0.48rem;
      padding-right: 0.48rem;
      padding-top: 0.24rem;
      padding-bottom: 0.24rem;
      box-shadow: 0rem 0.04rem 0.24rem rgba(0, 0, 0, 0.12);
      border-radius: 0.24rem;
      gap: 0.24rem;
    }

    .card-content {
      gap: 0.16rem;
    }

    .card-title {
      font-size: 0.76rem;
    }

    .card-description {
      font-size: 0.33rem;
      line-height: 0.24rem;
    }

    .download-button {
      padding-left: 0.36rem;
      padding-right: 0.3rem;
      padding-top: 0.24rem;
      padding-bottom: 0.24rem;
      border-radius: 2rem;
      gap: 0.2rem;
    }

    .button-content {
      gap: 0.02rem;
    }

    .button-text {
      font-size: 0.28rem;
      line-height: 0.3rem;
    }

    .button-version {
      font-size: 0.24rem;
      line-height: 0.24rem;
    }

    .button-icon {
      width: 0.48rem;
      height: 0.48rem;

      .download-icon {
        width: 0.48rem;
        height: 0.48rem;
      }
    }

    .container-2 {
      margin-top: 0.64rem;
      padding-left: 0.8rem;
      padding-right: 0.8rem;
      gap: 0.4rem;
    }

    .guide-section,
    .version-section {
      gap: 0.28rem;
    }

    .section-header {
      gap: 0.08rem;
    }

    .section-title {
      width: 2.69rem;
      font-size: 0.36rem;
      line-height: 28px;
    }

    .section-text {
      font-size: 0.28rem;
      line-height: 0.32rem;
    }

    .inline-text {
      gap: 0.08rem;
    }

    .text-part {
      font-size: 0.34rem;
      line-height: 0.32rem;
    }

    .code-block {
      height: 0.32rem;
      padding-left: 0.08rem;
      padding-right: 0.08rem;
      padding-top: 0.02rem;
      padding-bottom: 0.02rem;
      border-radius: 0.08rem;
      gap: 0.1rem;
    }

    .code-text {
      font-size: 0.34rem;
      line-height: 0.2rem;
    }

    .code-container {
      padding-left: 0.32rem;
      padding-right: 0.32rem;
      gap: 0.1rem;
    }

    .code-block-2 {
      height: 0.32rem;
      padding-left: 0.08rem;
      padding-right: 0.08rem;
      padding-top: 0.02rem;
      padding-bottom: 0.02rem;
      border-radius: 0.08rem;
      gap: 0.1rem;
    }

    .code-text-2 {
      font-size: 0.34rem;
      line-height: 0.2rem;
    }

    .link-block {
      height: 0.32rem;
      padding-left: 0.08rem;
      padding-right: 0.08rem;
      padding-top: 0.02rem;
      padding-bottom: 0.02rem;
      border-radius: 0.08rem;
      gap: 0.02rem;
    }

    .link-text {
      font-size: 0.34rem;
      line-height: 0.2rem;
    }

    .link-icon {
      width: 0.32rem;
      height: 0.32rem;
    }

    .version-item {
      gap: 0.08rem;
    }

    .version-bullet {
      font-size: 0.34rem;
      line-height: 0.32rem;
    }

    .version-title {
      font-size: 0.34rem;
      line-height: 0.32rem;
    }

    .version-description {
      font-size: 0.34rem;
      line-height: 0.32rem;
    }

    .scroll-indicator {
      height: 9.2rem;
      padding-left: 0.6rem;
      padding-right: 0.6rem;
      padding-top: 0.32rem;
      padding-bottom: 0.32rem;
      left: 11.82rem;
      top: 0px;
      gap: 0.1rem;
      display: inline-flex;
    }

    .scroll-bar {
      width: 0.06rem;
      height: 1.2rem;
      background: rgba(0, 0, 0, 0.12);
      border-radius: 2rem;
    }
  }
}
</style>
