export function setBranchDetails (state,data ) {
  state.branchDetails = data
}

export function setEmployees (state,data ) {
  state.employees = data
}
export function setNewEmployee(state,data ) {
  state.employees.push(data)
}

export function setBranches (state,data ) {
  state.branches = data
}

export function setModalCreateEmployee (state,data ) {
  state.modalCreateEmployee = data
}
