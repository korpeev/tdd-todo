import { beforeEach, expect, it } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
// @ts-ignore
import BaseInput from "shared/ui/base-input/index.vue";
let baseInput: VueWrapper;
beforeEach(() => {
  baseInput = mount(BaseInput, {
    props: {
      modelValue: "",
      value: "",
    },
  });
});
it("should be mount", () => {
  expect(baseInput.getCurrentComponent().isMounted).toBeTruthy();
});

it("test v model", async () => {
  await baseInput.find("input").setValue("best todo #1");
  expect(baseInput.find("input").element.value).toBe("best todo #1");

  await baseInput.vm.$nextTick();
  expect(baseInput.emitted().input).toBeTruthy();
});

it("should be unmount", () => {
  baseInput.unmount();

  expect(baseInput.getCurrentComponent().isUnmounted).toBe(true);
});
