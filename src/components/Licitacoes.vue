<template>
  <vue-good-table
    :columns="state.columns"
    :rows="rows"
    :search-options="{
      enabled: true,
      placeholder: 'Procurar',
    }"
    :pagination-options="{
      enabled: true,
      mode: 'pages',
      perPage: 5,
      position: 'bottom',
      perPageDropdown: [3, 7, 9],
      dropdownAllowAll: false,
      setCurrentPage: 1,
      nextLabel: 'Próximo',
      prevLabel: 'Anterior',
      pageLabel: 'página',
      rowsPerPageLabel: 'Licitações por página',
    }"
  >
    <template #emptystate>
      <p class="text-center">
        Nenhuma Licitação encontrada
      </p>
    </template>
  </vue-good-table>
</template>

<script>
import 'vue-good-table-next/dist/vue-good-table-next.css'
import { VueGoodTable } from 'vue-good-table-next'
import {reactive} from 'vue'

export default {
  props: {
    rows: {
      type: Array,
      required: true
    }
  },
  components: {
    VueGoodTable
  },
  setup () {

    function padTo2Digits(num) {
      return num.toString().padStart(2, '0')
    }

    
    function formatDate (value) {

      if (value === '-' || value === null) {
        return '-'
      } else {
        const date = new Date(value)
        return [
          padTo2Digits(date.getDate()),
          padTo2Digits(date.getMonth() + 1),
          date.getFullYear(),
        ].join('/')
      }
      
    }
    const state = reactive({
      modalIsOpen: false,
      columns: [
      { label: 'Unidade Gestora', field: 'unidadeGestora' },
      { label: 'Processo ADM', field: 'numeroDoProcessoAdm' },
      { label: 'Processo', field: 'numeroDoProcesso' },
      { label: 'Modalidade', field: 'modalidade' },
      { label: 'Numero Modalidade', field: 'numeroDaModalidade' },
      { label: 'Tipo', field: 'tipo' },
      { label: 'Situação', field: 'situacaoDoProcesso' },
      { label: 'Julgamento', field: 'dataDeJulgamento',  type: 'date', formatFn: formatDate},
      { label: 'Homologação', field: 'dataDeHomologacao', type: 'date', formatFn: formatDate},
      { label: 'Objeto', field: 'objeto' },
      { label: 'Valor', field: 'valor' },
      // { label: 'Anexo', field: 'possuiAnexo' },
      ],
      options: {
        lengthMenu: [5, 10]
      }
    })

    return { state }
  }
}
</script>