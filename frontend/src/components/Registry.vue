<template>
  <div class="container">
    <h2>{{ isEdit ? "Editar Aluno" : "Cadastrar Aluno" }}</h2>
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
          placeholder="Informe o registro academico"
        />
      </div>

      <div class="form-group">
        <label for="cpf">CPF</label>
        <input
          id="cpf"
          type="text"
          v-model="student.cpf"
          placeholder="Informe o numero do documento"
        />
      </div>

      <button type="submit" class="save-button">Salvar</button>
      <button type="button" @click="cancelEdit" class="cancel-button">Cancelar</button>
    </form>
  </div>
</template>

<script>
import api from '@/services/api'

export default {
  name: 'Registry',
  data () {
    return {
      student: {
        ra: '',
        name: '',
        cpf: '',
        email: ''
      },
      isEdit: false
    }
  },
  mounted () {
    const { student } = this.$route.params
    if (student) {
      this.student = student
      this.isEdit = true
    }
  },
  methods: {
    saveStudent () {
      api
        .post('/students', this.student)
        .then(() => {
          this.$router.push('/')
        })
        .catch((error) => {
          console.error('Erro ao cadastrar aluno:', error)
        })
    },
    cancelEdit () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
  margin-top: 20px;
  padding: 20px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
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
  background-color: #28a745;
  color: white;
}

.cancel-button {
  background-color: #dc3545;
  color: white;
}
</style>
