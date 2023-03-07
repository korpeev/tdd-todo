<template>
  <div>
    <input v-model="model" type="text" class="border rounded p-2" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  value: string;
}

interface EmitType {
  (event: "update:value", payload: string): void;
}
const props = defineProps<Props>();
const emit = defineEmits<EmitType>();
const model = computed({
  get() {
    return props.value;
  },
  set(value: string) {
    emit("update:value", value);
  },
});
</script>
