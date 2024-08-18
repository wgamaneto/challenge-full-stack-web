<template>
  <div class="container">
    <div class="txt-search">
      <label for="search">
        <input type="text" v-model="txtSearch" placeholder="Digite sua busca" />
      </label>
      <button @click="searchStudent" class="search">Pesquisar</button>
      <router-link to="/cadastrar">
        <button class="register-button">Cadastrar Aluno</button>
      </router-link>
    </div>

    <div v-if="filteredStudents.length > 0">
      <table class="consulta">
        <thead>
          <tr>
            <th>▼ Registro Acadêmico</th>
            <th>▼ Nome</th>
            <th>▼ CPF</th>
            <th>▼ Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in filteredStudents" :key="student.id">
            <td class="td-bottom">{{ student.ra }}</td>
            <td class="td-bottom">{{ student.name }}</td>
            <td class="td-bottom">{{ student.cpf }}</td>
            <td class="td-bottom">
              <button type="button" class="edit" @click="editStudent(student.id)">[Editar]</button>
              <button type="button" @click="deleteStudent(student)" class="delete">
                [Excluir]
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
import api from '../services/api'

export default {
  name: 'StudentsData',
  data () {
    return {
      listStudents: [],
      filteredStudents: [],
      txtSearch: ''
    }
  },
  mounted () {
    this.requestApi()
  },
  methods: {
    requestApi () {
      api
        .get('/students')
        .then((response) => {
          this.listStudents = response.data
          this.filteredStudents = response.data
        })
        .catch((error) => {
          console.error('Erro ao buscar alunos:', error)
        })
    },
    searchStudent () {
      if (this.txtSearch.trim() !== '') {
        this.filteredStudents = this.listStudents.filter((student) => student.name.toLowerCase().includes(this.txtSearch.toLowerCase()))
      } else {
        this.filteredStudents = this.listStudents
      }
    },

    deleteStudent (student) {
      api
        .delete(`/students/${student.id}`)
        .then(() => {
          this.requestApi()
        })
        .catch((error) => {
          console.error('Erro ao deletar aluno:', error)
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
}

.txt-search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
}

.txt-search input {
  width: 60%;
  height: 35px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding-left: 10px;
}

.search,
.register-button {
  background-color: #b0b0b0;
  border: 1px solid #b0b0b0;
  border-radius: 4px;
  color: white;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: bold;
  margin-left: 10px;
}

.register-button {
  background-color: #c0c0c0;
}

.consulta table {
  width: 100%;
  border-collapse: collapse;
}

.consulta th,
.consulta td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.td-bottom {
  padding: 10px 0;
}

.edit,
.delete {
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
}

.edit:hover,
.delete:hover {
  color: #000;
}

th {
  font-weight: bold;
}
</style>
