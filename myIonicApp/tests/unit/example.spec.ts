import { mount } from '@vue/test-utils'
import SubscriptionPage from '@/views/subscription/SubscriptionLayout.vue'

describe('Tab1Page.vue', () => {
  it('renders tab 1 Tab1Page', () => {
    const wrapper = mount(SubscriptionPage)
    expect(wrapper.text()).toMatch('Tab 1 page')
  })
})
