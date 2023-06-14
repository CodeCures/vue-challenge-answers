import { mount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"
import { withDefaults, defineProps } from 'vue'
import PropValidation from "../PropValidation.vue"



describe("PropValidation", () => {
    it("renders a button element", async () => {
        const wrapper = mount(PropValidation)

        expect(wrapper.find('button')).toBeTruthy();
    })

    it('sets the default type prop to "default"', () => {
        const props = withDefaults(defineProps({ type: String }), {
            type: 'default'
        })
        const wrapper = mount(PropValidation, { props })
        expect(wrapper.props('type')).toBe('default')
    })

    it('accepts a valid type prop', () => {
        
        const wrapper = mount(PropValidation, { props: {type: 'primary'} })
        expect(wrapper.props('type')).toBe('primary')
    })

    it('rejects an invalid type prop', () => {
        const props = withDefaults(defineProps({ type: String }), {
            type: 'invalid'
        })
        const wrapper = mount(PropValidation, { props })
        expect(wrapper.props('type')).toBe('default')
    })
})
