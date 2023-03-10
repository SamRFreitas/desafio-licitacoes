<template>
  <DataTable
    :columns="state.columns"
    :data="state.rows"
    :options="{
      reponsive: true,
      autoWidth: false,
      lengthMenu: [ 5, 10 ],
      lengthChange: true
    }"
    class="table table-striped"
  >
    <thead>
      <tr>
        <th>#</th>
        <th>Nome</th>
        <th>Position</th>
        <th>Office</th>
        <th>Age</th>
        <th>Start Date</th>
        <th>Salary</th>
      </tr>
    </thead>
  </DataTable>
</template>

<script>
import DataTable from 'datatables.net-vue3'
import DataTableBs5 from 'datatables.net-bs5'
import Select from 'datatables.net-select'
import DataTablesCore from 'datatables.net'
import 'datatables.net-responsive-bs5'
DataTable.use(Select)
DataTable.use(DataTablesCore) 
DataTable.use(DataTableBs5)


import { reactive } from 'vue'

export default {
  components: {
    DataTable
  },
  setup () {
    function render (data, type, row, meta) {return `${meta.row+1}`}
    const state = reactive({
      columns: [
      { data: null, render},
      { data: 'name' },
      { data: 'position' },
      { data: 'office' },
      { data: 'age' },
      { data: 'start_date' },
      { data: 'salary' },
      ],
      rows: [
        
        { id: 1, name:'John', position: 'f', age: 20, start_date: '', salary: 0.03343 },
        { id: 2, name:'Jane', position: 'f', age: 24, start_date: '2011-10-31', salary: 0.03343 },
        { id: 3, name:'Susan', position: 'f', age: 16, start_date: '2011-10-30', salary: 0.03343 },
        { id: 4, name:'Chris', position: 'f', age: 55, start_date: '2011-10-11', salary: 0.03343 },
        { id: 5, name:'Chris', position: 'f', age: 55, start_date: '2011-10-11', salary: 0.03343 },
        { id: 6, name:'Chris', position: 'f', age: 55, start_date: '2011-10-11', salary: 0.03343 },
        { id: 6, name:'Chris', position: 'f', age: 55, start_date: '2011-10-11', salary: 0.03343 },
        { id: 6, name:'Chris', position: 'f', age: 55, start_date: '2011-10-11', salary: 0.03343 },
        { id: 6, name:'Chris', position: 'f', age: 55, start_date: '2011-10-11', salary: 0.03343 },
        { id: 6, name:'Chris', position: 'f', age: 55, start_date: '2011-10-11', salary: 0.03343 },
        { id: 6, name:'Chris', position: 'f', age: 55, start_date: '2011-10-11', salary: 0.03343 },
        { id: 6, name:'Chris', position: 'f', age: 55, start_date: '2011-10-11', salary: 0.03343 },
        { id: 6, name:'Chris', position: 'f', age: 55, start_date: '2011-10-11', salary: 0.03343 },
        { id: 6, name:'Chris', position: 'f', age: 55, start_date: '2011-10-11', salary: 0.03343 },
        { id: 6, name:'Chris', position: 'f', age: 55, start_date: '2011-10-11', salary: 0.03343 },
        { id: 6, name:'Chris', position: 'f', age: 55, start_date: '2011-10-11', salary: 0.03343 },
        { id: 6, name:'Chris', position: 'f', age: 55, start_date: '2011-10-11', salary: 0.03343 },
        { id: 6, name:'Chris', position: 'f', age: 55, start_date: '2011-10-11', salary: 0.03343 },
        { id: 6, name:'Chris', position: 'f', age: 55, start_date: '2011-10-11', salary: 0.03343 },
        { id: 6, name:'Chris', position: 'f', age: 55, start_date: '2011-10-11', salary: 0.03343 },
        { id: 6, name:'Chris', position: 'f', age: 55, start_date: '2011-10-11', salary: 0.03343 },
        { id: 6, name:'Chris', position: 'f', age: 55, start_date: '2011-10-11', salary: 0.03343 },
      ]
    })

    return { state }
  }
}
</script>

<style>
@import 'datatables.net-bs5';
</style>