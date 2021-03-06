import { shallowMount, createLocalVue, mount } from '@vue/test-utils'
import Element from 'element-ui'

import soform from '../../src/install.js'
import Form from '../../src/component/Form.vue'
import FormRows from '../../src/component/FormRows.vue'

const localVue = createLocalVue()
localVue.use(soform, {
  source: Element,
})

describe('components/formRow basic function', () => {
  test('init', () => {
    let formRowsInstance = shallowMount(FormRows, {
      localVue,
      propsData: {
        rows: []
      }
    })
    expect(formRowsInstance.props().rows).toEqual([])
  })
})
