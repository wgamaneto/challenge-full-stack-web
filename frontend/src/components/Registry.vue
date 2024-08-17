<template>
  <div class="container">
    <h1 class="txt-cadastro">Cadastrar novo aluno</h1>
    <form @submit="enviarForm">
      <div class="input">
        <label for="ra" class="label">
          Ra:
          <input type="text" v-model="ra" id="ra" />
        </label>
      </div>

      <div class="input">
        <label for="nome" class="label">
          Nome:
          <input type="text" v-model="nome" id="nome" />
        </label>
      </div>

      <div class="input">
        <label for="cpf" class="label">
          CPF:
          <input type="text" v-model="cpf" id="cpf" />
        </label>
      </div>

      <div class="input">
        <label for="email" class="label">
          E-mail:
          <input type="email" v-model="email" id="email" />
        </label>
      </div>

      <div class="">
        <button type="button" @click="redirect">Cancelar</button>
        <button type="submit">Salvar</button>
        <div class="save-div" v-if="save">
          <p class="save">Estudante salvo com sucesso!</p>
        </div>
      </div>
    </form>
    <p v-if="error">Preencher corretamente os campos</p>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import api from '../services/api'

export default {
  name: 'CadastroStudents',
  data () {
    return {
      ra: '',
      nome: '',
      cpf: '',
      email: '',
      error: false,
      save: false
    }
  },
  setup () {
    const router = useRouter()
    return { router }
  },
  methods: {
    validationRa (ra) {
      return !Number.isNaN(Number(ra)) && ra.length > 0
    },

    isValidEmail (email) {
      const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
      return regex.test(email)
    },

    isSave () {
      this.save = false
    },

    redirect () {
      this.$router.push('/')
    },

    enviarForm (e) {
      e.preventDefault()
      if (!this.nome || !this.cpf || !this.ra || !this.email) {
        this.error = true
        return
      }

      if (!this.validationRa(this.ra) || this.cpf.length !== 11 || !this.isValidEmail(this.email)) {
        this.error = true
        return
      }

      this.error = false

      api
        .post('/students', {
          ra: this.ra,
          name: this.nome,
          cpf: this.cpf,
          email: this.email
        })
        .then(() => {
          this.save = true
          this.ra = ''
          this.nome = ''
          this.cpf = ''
          this.email = ''
          setTimeout(() => {
            this.isSave()
            this.redirect()
          }, 2000)
        })
        .catch((error) => {
          console.error('Erro ao salvar estudante:', error)
          this.error = true
        })
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 450px;
  margin: auto;
  box-shadow: 5px 6px 6px 5px rgba(0, 0, 0, 0.4);
  padding: 10px 5px 30px 10px;
  margin-top: 20px;
}
.txt-cadastro {
  text-align: center;
}

input {
  display: block;
  width: 90%;
  height: 25px;
  border-radius: 5px;
  border: 1px solid rgb(181, 173, 173);
  box-shadow: 5px 5px 5px rgb(138, 135, 135);
}
label {
  padding: 4px;
}

button {
  color: white;
  font-weight: 900;
  padding: 8px 15px;
  background-color: rgb(204, 13, 13);
  border-radius: 5px;
  margin-right: 20px;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: white;
}

.save {
  background-color: darkred;
  color: white;
  display: inline;
  border-radius: 5px;
  padding: 5px;
  transition: 3s;
}
.save-div {
  margin-top: 20px;
}
</style>
