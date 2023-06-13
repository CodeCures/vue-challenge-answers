import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import HelloWorld from "../HelloWorld.vue";

interface HelloWorldProps {
    msg: string
}

describe("Hello World",  () => {
    it("renders a 'Hello World'", () => {
        const wrapper  = mount(HelloWorld);
        const msg = (wrapper.vm as unknown as HelloWorldProps).msg
        expect(wrapper.text()).toBe(msg)
    })
})