<template>
  <LoadingScreen
    v-if="state.isLoading"
    :on-loading-text="state.textLoading"
  />
  <div v-else>
    <AppHeader />
    <div class="p-4">
      <div class="text-center">
        <label
          for="id=select"
          class="fs-5"
        >
          Selecione o ano das Licitações:
        </label>
        <form
          class="d-flex flex-column justify-content-center align-items-center mt-2"
        >
          <select
            id="id-select"
            class="form-select w-25"
            aria-label="Default select example"
            v-model="state.year"
            @change="changeYear"
          >
            <option
              v-for="year in state.years"
              :key="year"
              :value="year"
            >
              {{ year }}
            </option>
          </select>
          <button
            type="button"
            class="btn btn-primary mt-2 w-25"
            @click="getLicitacoesByYear"
          >
            Buscar Licitações
          </button>
        </form>
      </div>
      <Licitacoes
        :rows="state.licitacoes"
        class="mt-4"
      />
    </div>
  </div>
</template>


<script>
import Licitacoes from './components/Licitacoes.vue'
import AppHeader from './components/AppHeader.vue'
import { reactive } from 'vue'
import LoadingScreen from './components/LoadingScreen.vue'
import services from './services'
export default {
  name: 'App',
  components: {
    Licitacoes,
    AppHeader,
    LoadingScreen
  },
  setup () {
    const state = reactive({
      isLoading: null,
      isLoadingTableData: false, 
      textLoading: null,
      years: [],
      year: null,
      licitacoes: []
    })

    function changeYear(event) {
      this.state.year = event.target.value
    }

    function getLicitacoesByYear() {

      this.state.textLoading = 'Carregando os dados da tabela...'
      this.state.isLoading = true
      this.state.licitacoes = []

      services.licitacoes.getLicitacoes(this.state.year).then(response => {
        
        response.data.forEach((licitacao) => {
          this.state.licitacoes.push(JSON.parse(licitacao)) 
        })

        this.state.isLoading = false

      })

    }

    return { state, changeYear, getLicitacoesByYear }

  },
  async created () {

    this.state.textLoading = 'Carregando...'
    this.state.isLoading = true

    await services.licitacoes.getLicitacoesYears().then(response => {
      this.state.years = response.data
      this.state.year = this.state.years[0]
      this.state.isLoading = false
    })

  }
}
</script>
