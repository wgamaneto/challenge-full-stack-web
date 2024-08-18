<template>
  <div class="container">
    <h2 class="header">Editar Aluno</h2>
    <form @submit.prevent="updateStudent">
      <div class="input">
        <label for="name">
          Nome:
          <input type="text" v-model="student.name" id="name" />
        </label>
      </div>
      <div class="input">
        <label for="email">
          E-mail:
          <input type="email" v-model="student.email" id="email" />
        </label>
      </div>
      <div class="input">
        <label for="ra">
          Registro Acadêmico:
          <input type="text" v-model="student.ra" id="ra" disabled />
        </label>
      </div>
      <div class="input">
        <label for="cpf">
          CPF:
          <input type="text" v-model="student.cpf" id="cpf" disabled />
        </label>
      </div>
      <button type="submit">Salvar</button>
    </form>
    <div v-if="error" class="error">
      <p>Erro ao atualizar aluno. Tente novamente.</p>
    </div>
    <div v-if="success" class="success">
      <p>Aluno atualizado com sucesso!</p>
    </div>
  </div>
</template>

<script>
import api from '@/services/api'

export default {
  name: 'UpdateView',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      student: {
        ra: '',
        name: '',
        cpf: '',
        email: ''
      },
      error: false,
      success: false
    }
  },
  mounted () {
    this.loadStudent()
  },
  methods: {
    loadStudent () {
      api
        .get(`/students/${this.id}`)
        .then((response) => {
          this.student = response.data
        })
        .catch((error) => {
          this.error = true
          console.error('Erro ao carregar dados do aluno:', error)
        })
    },

    updateStudent () {
      api
        .put(`/students/${this.id}`, this.student)
        .then(() => {
          this.success = true
          setTimeout(() => (this.success = false), 2000)
        })
        .catch((error) => {
          this.error = true
          console.error('Erro ao atualizar aluno:', error)
        })
    }
  }
}
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

.input {
  margin-bottom: 15px;
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

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}

.error {
  color: red;
  margin-top: 20px;
}

.success {
  color: green;
  margin-top: 20px;
}
</style>
