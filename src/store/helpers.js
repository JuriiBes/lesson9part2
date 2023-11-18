export function complianceVerification(company, objFilter) {
    for (const props in objFilter) {
        if (objFilter[props] && objFilter[props] != company[props]) return false
    }
    return true
}
