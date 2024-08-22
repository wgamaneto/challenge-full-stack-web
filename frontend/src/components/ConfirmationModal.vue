<template>
  <div v-if="show" class="modal-overlay">
    <div class="modal-content">
      <h3>Confirmação de Exclusão</h3>
      <p>Você realmente deseja excluir este aluno?</p>
      <button class="confirm" @click="confirm">Confirmar</button>
      <button class="cancelar" @click="cancel">Cancelar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
    onConfirm: Function,
    onCancel: Function
  },
  methods: {
    confirm () {
      this.onConfirm()
    },
    cancel () {
      this.onCancel()
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 4px;
  text-align: center;
}

button {
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  opacity: 0.4;
}

.confirm:hover {
  background-color: red;
}
</style>
