<script setup lang="ts"></script>
<template>
  <button type="submit" class="button login__submit">
    <span class="button__text">Submit</span>
  </button>
</template>
<style lang="scss" scoped>
.login__submit {
  background: #fff;
  font-size: 14px;
  margin-top: 30px;
  padding: 16px 20px;
  border-radius: 26px;
  border: 1px solid #d4d3e8;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #4c489d;
  box-shadow: 0px 2px 2px #5c5696;
  cursor: pointer;
  transition: 0.2s;
  text-align: center;
  &:hover,
  :focus,
  :active {
    border-color: #6a679e;
    outline: none;
  }
}
</style>
