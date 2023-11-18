<template>
    <div>
        <h3>Company list:</h3>

        <div class="company__items">
            <div v-for="company in gFilteredCompanyList" :key="company.id">
                <company-item :data-company="company" />
            </div>
        </div>
        <div class="company__button">
            <button class="company__button-add" @click="addCompany">Add company</button>
        </div>
    </div>
</template>

<script>
import CompanyItem from '@/pages/MyCompany/CompanyItem.vue'
import { mapGetters } from 'vuex'
export default {
    name: 'CompanyList',
    components: {
        CompanyItem,
    },
    computed: {
        ...mapGetters(['gCompanyList', 'gFilteredCompanyList']),
    },
    methods: {
        addCompany() {
            this.$router.push({
                name: 'editor',
                params: {
                    type_editor: '1',
                },
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.company__items {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    row-gap: 5px;
    max-width: 700px;

    & > div:not(:last-child) {
        border-bottom: 1px solid #ffffff;
    }
}
.company__button {
    display: flex;
    justify-content: center;
    margin-top: 15px;
}
.company__button-add {
    position: relative;
    padding: 5px 10px;
    border: 1px solid #2c3e50;
    border-radius: 2px;
    background-color: transparent;
    transition: color ease 0.23s;
    overflow: hidden;
    &:before,
    &:after {
        content: '';
        z-index: -5;
        position: absolute;
        left: -10%;
        height: 100%;
        width: 130%;
        background-color: #d33707;
        // transform: rotate(-15deg);
        transition: all ease 0.4s;
    }
    &:before {
        top: -50%;
    }
    &:after {
        bottom: -50%;
    }
    &:hover {
        &:before {
            // left: -100%;
            left: -50%;
            transform: rotate(-90deg) translate(0, -250%);
        }
        &:after {
            // left: 100%;
            left: 50%;
            transform: rotate(-90deg) translate(0, 250%);
        }
    }
}
</style>
