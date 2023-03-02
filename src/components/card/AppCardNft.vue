<script setup lang="ts">
  defineProps<{
    src: string;
    title: string;
    user: string;
    price: string;
  }>();
</script>
<template>
  <div class="card-container">
    <div class="content">
      <div class="card-style">
        <div class="card-content-image">
          <div class="image-content">
            <img :src="src" class="img-styles" :alt="title" />
          </div>
        </div>
        <div class="card-footer-content">
          <div class="text-content-flex">
            <div class="text-content">
              <div class="div-content text-style">
                {{ title }}
              </div>
            </div>
            <div class="div-content text-style">@{{ user }}</div>
            <div>
              <img src="../../../dist/etereo.png" class="etereo" />{{ price }}
            </div>
          </div>
          <div class="btn-content-flex">
            <slot name="button-components"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .card-container {
    margin: 0;
    padding: 0;
    .content {
      display: inline-block;
      position: relative;
      width: 100%;
      .card-style {
        background-color: rgb(255, 255, 255);
        border-radius: 12px;
        box-shadow: rgb(0 0 0 / 4%) 0px 4px 8px;
        transition: box-shadow 0.25s ease-in-out 0s;
        .card-content-image {
          padding-bottom: 56.25%;
          height: 0px;
          position: relative;
          .image-content {
            box-sizing: border-box;
            display: block;
            overflow: hidden;
            width: initial;
            height: initial;
            background: none;
            opacity: 1;
            border: 0px;
            margin: 0px;
            padding: 0px;
            position: absolute;
            inset: 0px;
            .img-styles {
              position: absolute;
              inset: 0px;
              box-sizing: border-box;
              padding: 0px;
              border: none;
              margin: auto;
              display: block;
              width: 0px;
              height: 0px;
              min-width: 100%;
              max-width: 100%;
              min-height: 100%;
              max-height: 100%;
              object-fit: cover;
            }
          }
        }
        .card-footer-content {
          padding: 16px;
          border-radius: 12px;
          z-index: 99;
          .text-content-flex {
            display: flex;
            flex-direction: column;
            .text-content {
              display: flex;
              margin-bottom: 38px;
              overflow: hidden;
              -webkit-box-align: center;
              align-items: center;
              justify-content: left;
              .div-content {
                display: block;
                -webkit-box-align: center;
                align-items: center;
                margin: 0px;
                // padding-left: 16px;
                overflow: hidden;
                word-break: break-all;
                text-overflow: ellipsis;
                white-space: nowrap;
                text-align: left;
              }
              .text-style {
                font-weight: 600;
                font-size: 16px;
                color: rgb(4, 17, 29);
              }
            }
            .etereo {
              width: 13px;
            }
          }
          .btn-content-flex {
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
  }
</style>
