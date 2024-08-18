<template>
  <div class="container">
    <div class="form-group">
      <label for="name">Nome</label>
      <input type="text" v-model="student.name" placeholder="Informe o nome completo" />
    </div>

    <div class="form-group">
      <label>E-mail</label>
      <input type="email" v-model="student.email" placeholder="Informe apenas um e-mail" />
    </div>

    <div class="form-group">
      <label>RA</label>
      <input type="text" v-model="student.ra" placeholder="Informe o registro acadêmico" />
    </div>

    <div class="form-group">
      <label>CPF</label>
      <input type="text" v-model="student.cpf" placeholder="Informe o número do documento" />
    </div>

    <div class="form-actions">
      <button @click="cancel" class="cancel">Cancelar</button>
      <button @click="saveStudent" class="save">Salvar</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      student: {
        name: '',
        email: '',
        ra: '',
        cpf: ''
      }
    }
  },
  methods: {
    saveStudent () {
      // lógica para salvar o estudante
    },
    cancel () {
      // lógica para cancelar
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 700px;
  margin: auto;
  margin-top: 30px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background-color: white;
  border-radius: 4px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.form-group label {
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input {
  height: 35px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding-left: 10px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.cancel,
.save {
  background-color: #b0b0b0;
  border: 1px solid #b0b0b0;
  border-radius: 4px;
  color: white;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: bold;
  margin-left: 10px;
}

.save {
  background-color: #c0c0c0;
}
</style>
