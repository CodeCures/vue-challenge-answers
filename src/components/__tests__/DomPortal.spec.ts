import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import DomPortal from "../DomPortal.vue";

describe("DomPortal", () => {
    it("renders to the body", () => {
        const wrapper = mount(DomPortal);

        expect(wrapper.find('span').exists()).toBeFalsy();
        expect(document.body.innerHTML).toMatchInlineSnapshot('"<span>Hello Wold!</span>"')
    })
})