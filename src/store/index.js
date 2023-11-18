import { createStore } from 'vuex'
import { complianceVerification } from './helpers'

export default createStore({
    state: {
        companyList: [
            {
                id: 1,
                companyName: 'Capital',
                companyRate: '55',
                yearOfFoundation: '2000',
                companyOwner: 'Jack Wolf',
            },
            {
                id: 2,
                companyName: 'Position',
                companyRate: '63',
                yearOfFoundation: '1999',
                companyOwner: 'Jo Fitch',
            },
            {
                id: 3,
                companyName: 'Christmas',
                companyRate: '100',
                yearOfFoundation: '1',
                companyOwner: 'Santa Claus',
            },
            {
                id: 4,
                companyName: 'Green Man',
                companyRate: '99',
                yearOfFoundation: '1',
                companyOwner: 'Grinch',
            },
        ],
        editCompanyItem: {},
        companyFilter: {},
    },
    getters: {
        gCompanyList: (state) => state.companyList,
        gEditCompanyItem: (state) => state.editCompanyItem,
        gFilteredCompanyList: (state) =>
            state.companyList.filter((company) => complianceVerification(company, state.companyFilter)),
    },
    mutations: {
        mDeleteCompany(state, idCompany) {
            state.companyList = state.companyList.filter((company) => company.id != idCompany)
        },
        mAddCompany(state, company) {
            state.companyList.push(company)
        },
        mEditCompany(state, idCompany) {
            state.editCompanyItem = state.companyList[state.companyList.findIndex((company) => company.id == idCompany)]
        },
        mSaveChangeInformationCompany(state, changeCompany) {
            state.companyList[state.companyList.findIndex((company) => company.id == changeCompany.id)] = {
                ...changeCompany,
            }
            state.editCompanyItem = {}
        },
        mCompanyFilter(state, filterData) {
            state.companyFilter = filterData
        },
    },
    actions: {
        aDeleteCompany({ commit }, idCompany) {
            commit('mDeleteCompany', idCompany)
        },
        aAddCompany({ commit }, company) {
            commit('mAddCompany', company)
        },
        aEditCompany({ commit }, idCompany) {
            commit('mEditCompany', idCompany)
        },
        aSaveChangeInformationCompany({ commit }, changeCompany) {
            commit('mSaveChangeInformationCompany', changeCompany)
        },
        mCompanyFilter({ commit }, filterData) {
            commit('mCompanyFilter', filterData)
        },
    },
    modules: {},
})
