import { mount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"
import HomeView from "@/views/HomeView.vue"
import TreeComponent from "../TreeComponent.vue"

describe("TreeComponent", () => {
  it("should work", async() => {
    const wrapper = mount(TreeComponent)
    await wrapper.setProps({
      data: [
        {
          key: "1",
          title: "Parent 1",
          children: [{
            key: "1-1",
            title: "child 1",
          }, {
            key: "1-2",
            title: "child 2",
            children: [{
              key: "1-2-1",
              title: "grandchild 1",
            }, {
              key: "1-2-2",
              title: "grandchild 2",
            }],
          }],
        },
        {
          key: "2",
          title: "Parent 2",
          children: [{
            key: "2-1",
            title: "child 1",
            children: [{
              key: "2-1-1",
              title: "grandchild 1",
            }, {
              key: "2-1-2",
              title: "grandchild 2",
            }],
          }, {
            key: "2-2",
            title: "child 2",
          }],
        },
        {
          key: "3",
          title: "Parent 3",
          children: [{
            key: "3-1",
            title: "child 1",
            children: [{
              key: "3-1-1",
              title: "grandchild 1",
            }, {
              key: "3-1-2",
              title: "grandchild 2",
            }],
          }],
        },
      ],
    })
    expect(wrapper.text()).toMatchInlineSnapshot("\"Parent 1child 1child 2grandchild 1grandchild 2Parent 2child 1grandchild 1grandchild 2child 2Parent 3child 1grandchild 1grandchild 2\"")
  })
})
