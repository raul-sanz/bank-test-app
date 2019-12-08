import Vue from 'vue'

export function getContext ( context,data) {
  console.log(data)
}
export function getBranches ( context) {
  return Vue.prototype.$axios.get('/branches',{ crossDomain: true})
}

export function getEmployeesForBranch( context,id) {
  return Vue.prototype.$axios.get(`/employees/?branch=${id}`)
}

export function postEmployees ( context,data) {
  return Vue.prototype.$axios.post('/employees/',data)
}

export function getBanks ( context) {
  return Vue.prototype.$axios.get('/banks')
}