<template>
  <div class="container">
    <div class="header">
      <input type="text" v-model="txtSearch" placeholder="Digite sua busca" class="search-input" />
      <button @click="serachStudent" class="search-button">Pesquisar</button>
      <router-link to="/cadastrar">
        <button type="button" class="register-button">Cadastrar Aluno</button>
      </router-link>
    </div>

    <div v-if="listStudents.length > 0" class="table-container">
      <table class="consulta">
        <thead>
          <tr>
            <th>Registro Acadêmico</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>E-mail</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in listStudents" :key="student.id">
            <td>{{ student.ra }}</td>
            <td>{{ student.name }}</td>
            <td>{{ student.cpf }}</td>
            <td>{{ student.email }}</td>
            <td class="actions">
              <button type="button" class="edit-button" @click="to = '/cadastrar'">Editar</button>
              <button type="button" @click="deleteStudent(student)" class="delete-button">
                Excluir
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="consulta">
      <p>Sem dados de alunos</p>
    </div>
  </div>
</template>

<script>
import api from '@/services/api'

export default {
  name: 'StudentsData',
  data () {
    return {
      listStudents: [],
      txtSearch: '',
      update: false
    }
  },
  mounted () {
    this.requestApi()
  },
  methods: {
    requestApi () {
      api.get('/students').then((response) => {
        this.listStudents = response.data
      })
    },

    serachStudent () {
      if (this.txtSearch.trim() !== '') {
        this.listStudents = this.listStudents.filter((student) => student.name.toLowerCase().includes(this.txtSearch.toLowerCase()))
      } else {
        this.requestApi()
      }
    },

    deleteStudent (student) {
      api.delete(`/students/${student.id}`).then(() => {
        this.requestApi()
      })
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 30px auto;
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.search-input {
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
}

.search-button,
.register-button {
  background-color: #a0a0a0;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}

.search-button:hover,
.register-button:hover {
  background-color: #888888;
}

.table-container {
  margin-top: 20px;
}

.consulta {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  background-color: #fff;
}

.consulta th,
.consulta td {
  padding: 12px 15px;
  border-bottom: 1px solid #ddd;
}

.consulta th {
  background-color: #f0f0f0;
  font-weight: bold;
}

.actions {
  display: flex;
  gap: 10px;
}

.edit-button,
.delete-button {
  border: none;
  background: none;
  color: #007bff;
  cursor: pointer;
  text-decoration: underline;
  font-size: 0.9em;
  padding: 0;
}

.edit-button:hover,
.delete-button:hover {
  color: #0056b3;
}
</style>
