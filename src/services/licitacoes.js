export default httpClient => ({
  getLicitacoesYears: async () => {
    const response = await httpClient.get('/licitacoes/years')
    return { data: response.data }
  },

  getLicitacoes: async (year) => {
    console.log(year)
    const response = await httpClient.post('/licitacoes', {
      data: {
        year
      }
    })
    return { data: response.data }
  }
})