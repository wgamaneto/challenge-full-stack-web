<template>
  <div class="container">
    <h2 class="header">Cadastrar Aluno</h2>
    <form @submit.prevent="saveStudent">
      <div class="form-group">
        <label for="name">Nome</label>
        <input id="name" type="text" v-model="student.name" placeholder="Informe o nome completo" />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          v-model="student.email"
          placeholder="Informe apenas um e-mail"
        />
      </div>

      <div class="form-group">
        <label for="ra">Registro Acadêmico</label>
        <input
          id="ra"
          type="text"
          v-model="student.ra"
          placeholder="Informe o registro acadêmico"
        />
      </div>

      <div class="form-group">
        <label for="cpf">CPF</label>
        <input
          id="cpf"
          type="text"
          v-model="student.cpf"
          placeholder="Informe o número do documento"
        />
      </div>

      <button type="submit" class="save-button">Salvar</button>
      <button type="button" @click="cancelEdit" class="cancel-button">Cancelar</button>
    </form>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
import api from "@/services/api";

export default {
  name: "Registry",
  data() {
    return {
      student: {
        ra: "",
        name: "",
        cpf: "",
        email: "",
      },
      errorMessage: "",
    };
  },
  mounted() {
    const { student } = this.$route.params;
    if (student) {
      this.student = student;
    }
  },
  methods: {
    validateRA(ra) {
      return /^\d{6}$/.test(ra);
    },
    validateCPF(cpf) {
      return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);
    },
    saveStudent() {
      if (!this.student.name || !this.student.email || !this.student.ra || !this.student.cpf) {
        this.errorMessage = "Por favor, preencha todos os campos.";
        return;
      }
      if (!this.validateRA(this.student.ra)) {
        this.errorMessage = "O Registro Acadêmico deve conter exatamente 6 números.";
        return;
      }

      if (!this.validateCPF(this.student.cpf)) {
        this.errorMessage = "O CPF deve estar no formato 000.000.000-00.";
        return;
      }

      this.errorMessage = "";

      api
        .post("/students", this.student)
        .then(() => {
          this.errorMessage = "Aluno cadastrado com sucesso!";
          setTimeout(() => {
            this.$router.push("/");
          }, 2000);
        })
        .catch((error) => {
          if (error.response && error.response.status === 400 && error.response.data.message) {
            this.errorMessage = "Dados já existentes no sistema";
          } else {
            this.errorMessage = "Erro ao cadastrar aluno. Tente novamente.";
          }
          console.error("Erro ao cadastrar aluno:", error);
        });
    },
    cancelEdit() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: auto;
  margin-top: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background-color: white;
  border-radius: 4px;
  font-family: "Courier New", Courier, monospace;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  border-radius: 20px;
  border-width: 2px;
  height: 80px;
  border-color: black;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ddd;
}

.save-button,
.cancel-button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  margin-right: 10px;
}

.save-button {
  background-color: #d3d3d3;
  color: black;
}

.cancel-button {
  background-color: #666;
  color: white;
}

.save-button:hover,
.cancel-button:hover {
  opacity: 0.6;
}

.error-message {
  color: red;
  margin-top: 10px;
  text-align: center;
}
</style>
