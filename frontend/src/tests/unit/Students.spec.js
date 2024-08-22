import { mount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import api from "@/services/api";
import StudentsData from "@/components/StudentsData.vue";

jest.mock("@/services/api");

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("StudentsData.vue", () => {
  let router;
  let pushSpy;

  beforeEach(() => {
    pushSpy = jest.fn();
    router = new VueRouter({
      routes: [
        {
          path: "/",
          name: "Home",
        },
        {
          path: "/cadastrar",
          name: "Register",
        },
        {
          path: "/update/:id",
          name: "UpdateView",
        },
      ],
    });
    router.push = pushSpy;
  });

  it("renders correctly", () => {
    const wrapper = mount(StudentsData, { localVue, router });
    expect(wrapper.find(".header").text()).toBe("Consulta de alunos");
  });

  it("searches for students based on search input", async () => {
    const wrapper = mount(StudentsData, { localVue, router });
    wrapper.setData({
      listStudents: [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Doe" },
      ],
    });
    wrapper.vm.txtSearch = "John";
    await wrapper.vm.searchStudent();
    expect(wrapper.vm.filteredStudents).toEqual([{ id: 1, name: "John Doe" }]);
  });

  it("shows all students when search input is empty", async () => {
    const wrapper = mount(StudentsData, { localVue, router });
    wrapper.setData({
      listStudents: [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Doe" },
      ],
    });
    wrapper.vm.txtSearch = "";
    await wrapper.vm.searchStudent();
    expect(wrapper.vm.filteredStudents).toEqual([
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Doe" },
    ]);
  });

  it("opens confirmation modal for deletion", () => {
    const wrapper = mount(StudentsData, { localVue, router });
    const student = { id: 1, name: "John Doe" };
    wrapper.vm.openConfirmationModal(student);
    expect(wrapper.vm.isModalVisible).toBe(true);
    expect(wrapper.vm.studentToDelete).toEqual(student);
  });

  it("confirms deletion and calls API delete", async () => {
    const wrapper = mount(StudentsData, { localVue, router });
    api.delete.mockResolvedValueOnce({});
    wrapper.setData({ studentToDelete: { id: 1 } });
    await wrapper.vm.confirmDelete({ id: 1 });
    expect(api.delete).toHaveBeenCalledWith("/students/1");
    expect(wrapper.vm.isModalVisible).toBe(false);
  });

  it("cancels deletion and hides modal", () => {
    const wrapper = mount(StudentsData, { localVue, router });
    wrapper.vm.cancelDelete();
    expect(wrapper.vm.isModalVisible).toBe(false);
    expect(wrapper.vm.studentToDelete).toBe(null);
  });

  it("edits student and navigates to update view", () => {
    const wrapper = mount(StudentsData, { localVue, router });
    const student = { id: 1 };
    wrapper.vm.editStudent(student);
    expect(pushSpy).toHaveBeenCalledWith({ name: "UpdateView", params: { id: 1 } });
  });
});
