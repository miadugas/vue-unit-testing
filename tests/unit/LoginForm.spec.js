import LoginForm from "@/components/LoginForm.vue"
import { mount } from "@vue/test-utils"

describe("LoginForm", () => {
  it("emits an event with user data payload", () => {
    const wrapper = mount(LoginForm)
    // Find text input
    const input = wrapper.find('input[type="text"]')
    // Set value for text input
    input.setValue("Mia Dugas")
    // Simulate form submission
    wrapper.trigger("submit")
    // Assert event has been emitted
    const formSubmittedCalls = wrapper.emitted("formSubmitted")
    expect(formSubmittedCalls).toHaveLength(1)
    // Assert payload is correct
    const expectedPayload = { name: "Mia Dugas" }
    expect(wrapper.emitted("formSubmitted")[0][0]).toMatchObject(
      expectedPayload
    )
  })
})
