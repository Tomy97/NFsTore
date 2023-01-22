<script setup lang="ts"></script>
<template>
  <div class="container-fluid">
    <div class="row justify-content-center pt-5">
      <div class="col-12">
        <div class="card rounded-3 border-0 shadow">
          <div class="card-body">
            <slot name="body" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
