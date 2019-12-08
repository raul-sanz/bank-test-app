<template>
  <div >
    <q-dialog v-model="modal" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Enter data for new employee</div>
        </q-card-section>

        <q-card-section>
          <q-input
            ref="name" 
            filled 
            dense 
            v-model="newEmployee.name" 
            autofocus  
            class="q-mb-md" 
            label="Name" 
            :rules="[val => !!val || 'Field is required']"/>
          <q-input
            ref="middle_name" 
            filled 
            dense 
            v-model="newEmployee.middle_name" 
            class="q-mb-md" 
            label="Middle Name"  
            :rules="[val => !!val || 'Field is required']"/>
          <q-input
            ref="last_name" 
            filled 
            dense 
            v-model="newEmployee.last_name" 
            class="q-mb-md" 
            label="Last Name" 
            :rules="[val => !!val || 'Field is required']"/>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat color="red" label="Cancel" v-close-popup />
          <q-btn flat color="green" label="Create employee" @click="create"/>
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
      const error = [];
      for (let [key, obj] of Object.entries(this.$refs)) {
        obj.validate();
        if (obj.hasError) {
          error.push(obj);
        }
      }
      if (error.length > 0) {
        this.$q.notify({
          color: "negative",
          message: "Please complete fields",
          position: "top-right"
        });
      }else{
        this.$q.loading.show()
        this.newEmployee.branch = this.branchDetails.id
        console.log(this.newEmployee)
        let {data} = await this.postEmployees(this.newEmployee)
        this.setNewEmployee(data)
        data ? this.$q.loading.hide() : null
        this.setModalCreateEmployee(false)
      }
      
    }
  },

}
</script>

<style>

</style>