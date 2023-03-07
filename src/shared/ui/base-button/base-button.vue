<template>
  <button class="p-1 px-5 text-white rounded" :class="buttonVariant">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";
import { ButtonVariants } from "./types";

interface Props {
  variant: ButtonVariants;
}

const props = defineProps<Props>();

const buttonVariant = computed(() => {
  const mapButtonVariantsByProps: Record<ButtonVariants, string> = {
    [ButtonVariants.Primary]: "bg-teal-500",
    [ButtonVariants.Error]: "bg-red-400",
    [ButtonVariants.Secondary]: "bg-blue-400",
  };
  return mapButtonVariantsByProps[props.variant ?? ButtonVariants.Primary];
});
</script>
