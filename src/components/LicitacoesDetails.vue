<template>
  <div class="d-flex flex-column container-fluid w-100 fw-bol">
    <div class="d-flex flex-row">
      {{ licitacao.objeto }}
    </div>

    <div class="d-flex flex-row justify-content-between mt-2">
      <p> Numero da Modalidade: </p>
      <p> {{ licitacao.modalidade }} - {{ licitacao.numeroDaModalidade }}</p>
    </div>

    <div class="d-flex flex-row justify-content-between mt-2">
      <p> VALOR: </p>
      <p> {{ licitacao.valor }}</p>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    licitacao: {
      type: Object,
      required: true
    }
  },
}
</script>