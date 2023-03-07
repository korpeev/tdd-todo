import { beforeEach, describe, expect, it, vi } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import BaseButton from "./base-button.vue";
import { ButtonVariants } from "./types";

describe("base button", () => {
  it("should be mounted", () => {
    const wrapper = mount(BaseButton, {
      props: { variant: ButtonVariants.Primary },
    });
    expect(wrapper.getCurrentComponent().isMounted).toBe(true);
    wrapper.unmount();
  });
  it("click event", async () => {
    const wrapper = mount(BaseButton, {
      props: { variant: ButtonVariants.Primary },
    });
    const click = vi.spyOn(wrapper, "trigger");
    await wrapper.trigger("click");
    expect(click).toBeCalled();
  });
  it("button variant computed field", () => {
    const wrapper = mount(BaseButton, {
      props: { variant: ButtonVariants.Error },
    });
    const mapButtonVariantsByProps: Record<ButtonVariants, string> = {
      [ButtonVariants.Primary]: "bg-teal-500",
      [ButtonVariants.Error]: "bg-red-400",
      [ButtonVariants.Secondary]: "bg-blue-400",
    };
    const expectedButtonVariant =
      mapButtonVariantsByProps[wrapper.props().variant as ButtonVariants];
    expect(wrapper.vm.buttonVariant).toBe(expectedButtonVariant);
  });
});
