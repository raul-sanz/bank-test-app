<template>
  <div class="flex justify-center q-pt-md">
    <q-card class="my-card">
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/parallax2.jpg">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>
            <q-badge color="orange">Name: </q-badge> {{data.name}}</q-item-label>
          <q-item-label caption><q-badge color="green">Bank Name: </q-badge> {{bank.name}}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn color="info" flat round>
            <q-icon size="lg" name="add_circle" @click="setModalCreateEmployee(true)"/>
            <q-tooltip content-class="bg-green" content-style="font-size: 10px" anchor="top middle" self="bottom middle" :offset="[10, 10]">
              Add new employee
            </q-tooltip>
          </q-btn>
        </q-item-section>
      </q-item>
    </q-card>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name:'CardDetails',
  props:{
    data:{
      type:Object,
      required: true
    },
    bank:{
      type:Object,
      required: true
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    ...mapMutations('data',['setModalCreateEmployee'])
  },
}
</script>

<style>

</style>