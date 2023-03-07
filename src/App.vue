<template>
  <div class="h-screen w-screen bg-sky-100 flex justify-center items-center">
    <div class="shadow-md max-w-[400px] w-full p-5 bg-white">
      <form>
        <h2>Type your todo</h2>
        <div class="flex gap-x-5">
          <base-input v-model:value="todoInput" />
          <base-button @click.prevent="click" :variant="ButtonVariants.Error"
            >test</base-button
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseInput from "shared/ui/base-input/index.vue";
import { BaseButton, ButtonVariants } from "shared/ui/base-button";
const todoInput = ref("");
const click = () => {
  console.log("clicked");
};
</script>
