import { mount } from '@vue/test-utils'
import Modal from '@/components/ConfirmationModal.vue'

describe('Modal.vue', () => {
  it('renders correctly when show prop is true', () => {
    const wrapper = mount(Modal, {
      propsData: {
        show: true,
        onConfirm: jest.fn(),
        onCancel: jest.fn()
      }
    })
    expect(wrapper.find('.modal-overlay').exists()).toBe(true)
    expect(wrapper.find('.modal-content').exists()).toBe(true)
  })

  it('does not render when show prop is false', () => {
    const wrapper = mount(Modal, {
      propsData: {
        show: false,
        onConfirm: jest.fn(),
        onCancel: jest.fn()
      }
    })
    expect(wrapper.find('.modal-overlay').exists()).toBe(false)
    expect(wrapper.find('.modal-content').exists()).toBe(false)
  })

  it('calls onConfirm when Confirm button is clicked', async () => {
    const onConfirm = jest.fn()
    const wrapper = mount(Modal, {
      propsData: {
        show: true,
        onConfirm,
        onCancel: jest.fn()
      }
    })
    await wrapper.find('.confirm').trigger('click')
    expect(onConfirm).toHaveBeenCalled()
  })

  it('calls onCancel when Cancel button is clicked', async () => {
    const onCancel = jest.fn()
    const wrapper = mount(Modal, {
      propsData: {
        show: true,
        onConfirm: jest.fn(),
        onCancel
      }
    })
    await wrapper.find('.cancelar').trigger('click')
    expect(onCancel).toHaveBeenCalled()
  })
})
