<template>
  <div class="home">
    <Registry msg="Bem-vindo ao cadastro" />
  </div>
</template>

<script>
// @ is an alias to /src
import Registry from "@/components/Registry.vue";

export default {
  name: "HomeView",
  components: {
    CadastroStudents,
  },
};
</script>
