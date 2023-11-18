<template>
    <div class="container">
        <filters-company />
        <company-list />
    </div>
</template>

<script>
import FiltersCompany from '@/pages/MyCompany/FiltersCompany.vue'
import CompanyList from '@/pages/MyCompany/CompanyList.vue'

export default {
    name: 'MyCompany',
    components: {
        FiltersCompany,
        CompanyList,
    },
}
</script>

<style lang="scss" scoped>
.container {
    margin: 25px;
    background-color: rgba(170, 206, 238, 0.38);
    padding: 25px;
    height: 78vh;
}
</style>
