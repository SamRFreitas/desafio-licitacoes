<template>
  <vue-good-table
    class="px-4 mt-4"
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
    <template #table-row="props">
      <div
        v-if="props.column.field == 'actions'"
        class="d-flex justify-content-center"
      >
        <button
          @click="openModal(props)"
          class="desafio-button"
        >
          Detalhes
        </button>

        <a
          class="d-flex align-items-center btn btn-danger ms-2"
          :href="props.row.link"
          target="_blank"
        >
          <fa icon="link" />
        </a>
      </div>

      <span
        v-if="props.column.field == 'situacaoDoProcesso'"
        class="badge"
        :class="checkLicitacaoStatusStyle(props)"
      >
        {{ props.row.situacaoDoProcesso }}
      </span>
    </template>
    <template #emptystate>
      <p class="text-center">
        Nenhuma Licitação encontrada
      </p>
    </template>
  </vue-good-table>

  <AppModal
    :visible="state.isModalOpen"
    :modal-title="state.modalTitle"
    @on-close-modal="state.isModalOpen = false"
  > 
    <LicitacoesDetails :licitacao="state.licitacao" />
  </AppModal>
</template>

<script>
import 'vue-good-table-next/dist/vue-good-table-next.css'
import { VueGoodTable } from 'vue-good-table-next'
import {reactive} from 'vue'
import AppModal from './AppModal.vue'
import LicitacoesDetails from './LicitacoesDetails.vue'
export default {
  props: {
    rows: {
      type: Array,
      required: true
    }
  },
  components: {
    VueGoodTable,
    AppModal,
    LicitacoesDetails,
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
      isModalOpen: false,
      licitacao: null,
      modalTitle: null,
      columns: [
      { label: 'Unidade Gestora', field: 'unidadeGestora' },
      { label: 'Processo ADM', field: 'numeroDoProcessoAdm' },
      { label: 'Processo', field: 'numeroDoProcesso' },
      { label: 'Modalidade', field: 'modalidade' },
      { label: 'Tipo', field: 'tipo' },
      { label: 'Situação', field: 'situacaoDoProcesso' },
      { label: 'Julgamento', field: 'dataDeJulgamento',  type: 'date', formatFn: formatDate},
      { label: 'Homologação', field: 'dataDeHomologacao', type: 'date', formatFn: formatDate},
      { label: 'Ações', field: 'actions' },
      ],
      options: {
        lengthMenu: [5, 10]
      }
    })

    function checkLicitacaoStatusStyle (props) {
      if (props.row.situacaoDoProcesso === 'Aberta') {
        return 'text-bg-info'
      }

      if (props.row.situacaoDoProcesso === 'Aguardando abertura') {
        return 'text-bg-warning'
      }

      if (props.row.situacaoDoProcesso === 'Concluída') {
        return 'text-bg-success'
      }

      if (props.row.situacaoDoProcesso === 'Revogada') {
        return 'text-bg-dark'
      }

      if (props.row.situacaoDoProcesso === 'Deserta') {
        return 'text-bg-danger'
      }
     
    }

    function openModal (props) {
      state.licitacao = props.row
      state.modalTitle = state.licitacao.unidadeGestora
      state.isModalOpen = true
    }

    return { state, openModal, checkLicitacaoStatusStyle }
  }
}
</script>