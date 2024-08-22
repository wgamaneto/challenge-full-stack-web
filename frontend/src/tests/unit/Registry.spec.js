import { mount, createLocalVue } from '@vue/test-utils'
import Registry from '@/components/Registry.vue'
import VueRouter from 'vue-router'
import api from '@/services/api'

jest.mock('@/services/api')

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('Registry.vue', () => {
  let router
  let pushSpy

  beforeEach(() => {
    pushSpy = jest.fn()
    router = new VueRouter({
      routes: [
        {
          path: '/',
          name: 'Home'
        }
      ]
    })
    router.push = pushSpy
  })

  it('renders correctly', () => {
    const wrapper = mount(Registry, { localVue, router })
    expect(wrapper.find('.header').text()).toBe('Cadastrar Aluno')
  })

  it('shows an error message if fields are empty and saveStudent is called', async () => {
    const wrapper = mount(Registry, { localVue, router })
    await wrapper.vm.saveStudent()
    expect(wrapper.vm.errorMessage).toBe('Por favor, preencha todos os campos.')
  })

  it('shows an error message if RA is invalid and saveStudent is called', async () => {
    const wrapper = mount(Registry, { localVue, router })
    wrapper.vm.student = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      ra: '12345',
      cpf: '123.456.789-00'
    }
    await wrapper.vm.saveStudent()
    expect(wrapper.vm.errorMessage).toBe('O Registro Acadêmico deve conter exatamente 6 números.')
  })

  it('shows an error message if CPF is invalid and saveStudent is called', async () => {
    const wrapper = mount(Registry, { localVue, router })
    wrapper.vm.student = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      ra: '123456',
      cpf: '123-456-789'
    }
    await wrapper.vm.saveStudent()
    expect(wrapper.vm.errorMessage).toBe('O CPF deve estar no formato 000.000.000-00.')
  })

  it('calls api.post and redirects on successful saveStudent', async () => {
    api.post.mockResolvedValueOnce({}) // Mock da resposta de sucesso da API
    const wrapper = mount(Registry, { localVue, router })
    wrapper.vm.student = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      ra: '123456',
      cpf: '123.456.789-00'
    }
    await wrapper.vm.saveStudent()
    expect(api.post).toHaveBeenCalledWith('/students', wrapper.vm.student)
    expect(pushSpy).toHaveBeenCalledWith('/')
  })

  it('calls cancelEdit method and redirects', () => {
    const wrapper = mount(Registry, { localVue, router })
    wrapper.vm.cancelEdit()
    expect(pushSpy).toHaveBeenCalledWith('/')
  })
})
