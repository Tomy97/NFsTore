<script lang="ts" setup>
  defineProps<{
    text: string;
  }>();
</script>
<template>
  <button type="submit" class="btn login_submit btn-lg">{{ text }}</button>
</template>
<style lang="scss" scoped>
  .login_submit {
    padding: 10px;
    background-color: #18a0fb;
    color: #fff;
    text-transform: uppercase;
    border-radius: 10px;
    font-weight: 700;
    align-items: center;
    font-size: 18px;
    text-align: center;
    cursor: pointer;
    transition: 0.5s;
    width: 75%;
    &:hover {
      background-color: #0f6f9a;
      border-color: #1392e7;
      outline: none;
    }
    &:active {
      background-color: #fff;
      border-color: #000;
      color: #000;
    }
  }
</style>
