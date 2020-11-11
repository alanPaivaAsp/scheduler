import { mount } from '@vue/test-utils'
import Button from '~/components/button'

const factory = () => {
  return mount(Button, {
    propsData: {
      text: 'foo',
      type: 'primary',
    },
  })
}

describe('Button', () => {
  test('mounts properly', () => {
    const wrapper = factory()
    expect(wrapper.vm).toBeTruthy()
  })

  test('renders properly', () => {
    const wrapper = factory()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('when primary renders properly', () => {
    const wrapper = factory()

    expect(wrapper.classes('button-primary')).toBe(true)
  })

  test('when primary renders properly', () => {
    const wrapper = factory()

    expect(wrapper.classes('button-primary')).toBe(true)
  })

  test('when secondary renders properly', async () => {
    const wrapper = factory()

    await wrapper.setProps({ type: 'secondary' })

    expect(wrapper.classes('button-secondary')).toBe(true)
  })

  test('when tertiary renders properly', async () => {
    const wrapper = factory()

    await wrapper.setProps({ type: 'tertiary' })

    expect(wrapper.classes('button-tertiary')).toBe(true)
  })

  test('when outline renders properly', async () => {
    const wrapper = factory()

    await wrapper.setProps({ type: 'outline' })

    expect(wrapper.classes('button-outline')).toBe(true)
  })
})
