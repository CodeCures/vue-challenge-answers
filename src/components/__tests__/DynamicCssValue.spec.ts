import { describe, expect, it } from "vitest";
import DynamicCssValue from "../DynamicCssValue.vue?raw";

describe("DynamicCssValue", () => {
    it("contains dynamic (v-bind) style directive", () => {
        expect(DynamicCssValue).toContain(atob('Y29sb3I6IHYtYmluZCh0aGVtZSk'))
    })
})