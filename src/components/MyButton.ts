import { defineComponent, h, type RendererElement } from "vue"

export default defineComponent({
  name: 'MyButton',
  props: {
    disabled: {
        type: Boolean,
        default: false
    }
  },
  emit: ['custom-click'],
  render(ctx: RendererElement) {
    return h('button', {
        disabled: ctx.disabled,
        onClick: () => ctx.$emit('custom-click')
    }, ctx.$slots)
  }
})