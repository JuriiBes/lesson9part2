function includesElement(objToSearch, searchElement) {
    return objToSearch.includes(searchElement)
}

export function complianceVerification(company, objFilter) {
    for (const props in objFilter) {
        if (objFilter[props] && includesElement(company[props], objFilter[props]) === false) return false
    }
    return true
}
