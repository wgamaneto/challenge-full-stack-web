<template>
  <div class="container">
    <h2 class="header">Consulta de alunos</h2>
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
              <button type="button" class="edit" @click="editStudent(student)">Editar</button>
              <button type="button" @click="deleteStudent(student)" class="delete">Excluir</button>
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
    /* eslint-disable max-len */
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
    },

    editStudent (student) {
      this.$router.push({
        name: 'UpdateView',
        params: { id: student.id }
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

.txt-search {
  display: flex;
  justify-content: right;
  align-items: center;
  padding-bottom: 15px;
  gap: 5px;
}

.txt-search input {
  width: 420px;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding-left: 10px;
}

.search {
  background-color: #d3d3d3;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  color: black;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: bold;
  margin-left: 10px;
}

.search:hover,
.register-button:hover {
  color: #666;
}

.register-button {
  background-color: #a9a9a9;
  border: 1px solid #a9a9a9;
  border-radius: 4px;
  color: white;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: bold;
}

.consulta table {
  width: 100%;
  border-collapse: collapse;
  background-color: #666;
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

.edit:hover {
  color: #000;
}

.delete:hover {
  color: red;
}

th {
  font-weight: bold;
}
</style>
