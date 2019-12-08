<template>
  <div>

    <CardDetails :data="branchDetails" :bank="bankName"/>

    <q-page class="flex justify-center">

      <TableEmployees :branchId="Number($route.params.id)"/>
      
    </q-page>

    <ModalCreateEmployee/>
  </div>
</template>

<script>
import CardDetails from '../components/CardDetails'
import TableEmployees from '../components/TableEmployees'
import ModalCreateEmployee from '../components/ModalCreateEmployee'
import { mapActions,mapState } from "vuex";
export default {
  components:{CardDetails,TableEmployees,ModalCreateEmployee},
  data() {
    return {
      bankName:{}
    }
  },
  computed: {
    ...mapState('data',['branchDetails'])
  },
  created() {
    this.getBank()
  },
  methods: {
    ...mapActions('data',[,'getBanks']),
    async getBank(){
      let {data} = await this.getBanks()
      this.bankName = data.find(el=> el.pk == this.branchDetails.bank )
    }
  },
}
</script>

<style>

</style>