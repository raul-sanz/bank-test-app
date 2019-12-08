<template>
  <q-page class="flex justify-center">
    <div :class="[ $q.screen.width < 440 ?'full-width':'','q-pa-md' ]">
      <q-table
        title="Branches"
        :data="branches"
        :columns="columns"
        row-key="name"
        :loading="loading"
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="id" :props="props">
              {{ props.row.id }}
            </q-td>
            <q-td key="name" :props="props">
                {{ props.row.name }}
            </q-td>
            <q-td key="bankId" :props="props">
                {{ props.row.bank }}
            </q-td>
            <q-td key="options" :props="props">
               <q-btn outline rounded  dense color="primary" icon="remove_red_eye" :label="lab" @click="showDetails(props.row)"/>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import {mapActions,mapMutations,mapState} from 'vuex'
export default {
  name: 'PageIndex',
  data() {
    return {
      loading: false,
      columns: [
        { name: 'id', align: 'center', label: 'ID', field: 'id', sortable: true },
        {
          name: 'name',
          required: true,
          label: 'Branch Name',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'bankId', label: 'Bank Id', field: 'bank', sortable: true},
        { name: 'options', label: 'Options',align: 'center',}
      ],
      data: []
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    ...mapActions('data',['getBranches']),
    ...mapMutations('data',['setBranchDetails','setBranches']),
    async getData(){
      this.loading = true
      let {data:{results}} = await this.getBranches()
      this.setBranches(results)
      results ? this.loading = false : null
    },
    showDetails(branch){
      this.setBranchDetails(branch)
      this.$router.push(`/branch/${branch.id}`)
    }
  },
  computed: {
    ...mapState('data',['branches']),
    lab(){
      return this.$q.screen.width < 500 ? '' : 'description'
    }
  },
}
</script>
