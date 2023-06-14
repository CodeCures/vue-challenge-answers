import { describe, expect, it } from "vitest";
import GlobalCss from "../GlobalCss.vue?raw";

describe("GlobalCss", () => {
    it("contains dynamic (v-bind) style directive", () => {
        expect(GlobalCss).toContain(atob('Omdsb2JhbChib2R5KQ=='))
    })
})