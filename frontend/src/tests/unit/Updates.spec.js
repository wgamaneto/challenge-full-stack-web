import { mount, createLocalVue } from '@vue/test-utils';
import UpdateView from '@/components/UpdateView.vue';
import VueRouter from 'vue-router';

jest.mock('@/services/api');

const localVue = createLocalVue();
localVue.use(VueRouter);

describe('UpdateView.vue', () => {
  let router;
  let pushSpy;

  beforeEach(() => {
    pushSpy = jest.fn();
    router = new VueRouter({
      routes: [
        {
          path: '/',
          name: 'Home'
        },
        {
          path: '/update/:id',
          name: 'UpdateView'
        }
      ]
    });
    router.push = pushSpy;
  });

  it('renders correctly', () => {
    const wrapper = mount(UpdateView, {
      localVue,
      router,
      propsData: { id: 1 }
    });
    expect(wrapper.find('.header').text()).toBe('Editar Aluno');
  });

  it('loads student data on mount', async () => {
    const studentData = { ra: '123', name: 'John Doe', cpf: '1234567890
