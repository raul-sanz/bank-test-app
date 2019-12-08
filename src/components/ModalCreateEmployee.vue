<template>
  <div >
    <q-dialog v-model="modal" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Enter data for new employee</div>
        </q-card-section>

        <q-card-section>
          <q-input filled dense v-model="newEmployee.name" autofocus  class="q-mb-md" label="Name"/>
          <q-input filled dense v-model="newEmployee.middle_name" class="q-mb-md" label="Middle Name" />
          <q-input filled dense v-model="newEmployee.last_name" class="q-mb-md" label="Last Name"/>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat color="red" label="Cancel" v-close-popup />
          <q-btn flat color="green" label="Create employee" v-close-popup  @click="create"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapState,mapMutations,mapActions } from "vuex";
export default {
  name:'ModalCreateEmployee',
  data() {
    return {
      newEmployee:{}
    }
  },
  computed: {
    ...mapState('data',['modalCreateEmployee','branchDetails']),
    modal:{
      get(){
        return this.modalCreateEmployee
      },
      set(){
        return this.setModalCreateEmployee(false)
      }
    },
  },
  methods: {
    ...mapMutations('data',['setModalCreateEmployee','setNewEmployee']),
    ...mapActions('data',['postEmployees']),
    async create(){
      this.$q.loading.show()
      this.newEmployee.branch = this.branchDetails.id
      console.log(this.newEmployee)
      let {data} = await this.postEmployees(this.newEmployee)
      this.setNewEmployee(data)
      data ? this.$q.loading.hide() : null
    }
  },

}
</script>

<style>

</style>