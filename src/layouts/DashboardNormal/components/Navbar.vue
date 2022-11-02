<script setup lang="ts">
const menuLinks = [
  {
    name: "Explore",
  },
  {
    name: "Stats",
  },
  {
    name: "Resources",
  },
  {
    name: "Create",
  },
];
</script>
<template>
  <div class="wrapper-container">
    <div class="wrapper-padding">
      <nav class="navbar-main">
        <div class="logo-container">
          <h2>NftStore</h2>
        </div>
        <ul>
          <div class="fresnel-container">
            <div class="fresnel-flex">
              <li
                class="fresnel-list"
                v-for="(items, index) in menuLinks"
                :key="index"
              >
                <router-link to="#">
                  {{ items.name }}
                </router-link>
              </li>
            </div>
          </div>
        </ul>
      </nav>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper-container {
  --transition-curve: cubic-bezier(0.05, 0, 0.2, 1);
  box-shadow: rgb(229 232 235 / 0%) 0px 1px 0px 0px;
  max-width: 100vw;
  height: 72px;
  top: 0px;
  position: sticky;
  z-index: 120;
  transition: top 0.5s var(--transition-curve),
    background-color 0.2s var(--transition-curve),
    box-shadow 0.2s var(--transition-curve), color 0.2s var(--transition-curve);
  background-color: rgba(255, 255, 255, 0);
  .wrapper-padding {
    padding: 0px 32px;
    height: 100%;
    .navbar-main {
      display: flex;
      height: 100%;
      -webkit-box-pack: justify;
      justify-content: space-between;
      align-items: center;
      margin-right: -16px;
      .logo-container {
        -webkit-box-align: center;
        align-items: center;
      }
      .menu-container {
        display: flex;
        flex-shrink: 0;
        margin: 0px;
        .fresnel-container {
          margin: 0;
          padding: 0;
          .fresnel-flex {
            display: flex;
            .fresnel-list {
              -webkit-box-align: center;
              align-items: center;
              cursor: pointer;
              display: flex;
              height: 72px;
              -webkit-box-pack: justify;
              justify-content: space-between;
              font-weight: 600;
              font-size: 16px;
              flex-shrink: 0;
            }
          }
        }
      }
    }
  }
}
</style>
