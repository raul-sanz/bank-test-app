<template>
      <div :class="[$q.screen.width < 440 ?'full-width':'','q-pa-md' ]">
        <q-table
          title="Employees"
          :data="employees"
          :columns="columns"
          row-key="name"
          :loading="loading"
          no-data-label="No employees were found for this branch"
        >
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="id" :props="props">
                {{ props.row.id }}
              </q-td>
              <q-td key="name" :props="props">
                  {{ props.row.name }}
              </q-td>
              <q-td key="middleName" :props="props">
                  {{ props.row.middle_name }}
              </q-td>
              <q-td key="lastName" :props="props">
                  {{ props.row.last_name }}
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
</template>

<script>
import { mapActions,mapMutations,mapState } from "vuex";
export default {
  name:'TableEmployees',
  props:{
    branchId:{
      type:Number,
      required:true
    }
  },
  data() {
    return {
      loading:false,
      data:[],
      columns: [
        { name: 'id', align: 'center', label: 'ID', field: 'id', sortable: true },
        {
          name: 'name',
          required: true,
          label: 'Name',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'middleName', label: 'Middle Name', field: 'middle_name', sortable: true},
        { name: 'lastName', label: 'Last Name', field: 'last_name', sortable: true}
      ],
    }
  },
  computed: {
    ...mapState('data',['employees'])
  },
  created() {
    this.getDetails()
  },
  methods: {
    ...mapActions('data',['getEmployeesForBranch']),
    ...mapMutations('data',['setEmployees']),
    async getDetails(){
      this.loading = true
      let {data:{results}} = await this.getEmployeesForBranch(this.branchId)
      this.setEmployees(results)
      results ? this.loading = false : null
    }
  },
}
</script>

<style>

</style>