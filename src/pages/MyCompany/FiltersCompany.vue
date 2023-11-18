<template>
    <div>
        <h3>Filters:</h3>
        <div class="filter__body">
            <label class="filter__label"
                >Company name: <input v-model="filterCompany.companyName" type="text" class="filter__input"
            /></label>
            <label class="filter__label"
                >Company rate: <input v-model="filterCompany.companyRate" type="number" class="filter__input"
            /></label>
            <label class="filter__label">
                Year of foundation:
                <input v-model="filterCompany.yearOfFoundation" type="number" class="filter__input"
            /></label>
            <label class="filter__label">
                Company owner:
                <input v-model="filterCompany.companyOwner" type="text" class="filter__input"
            /></label>
        </div>
        <button class="filter__button" @click="filterCompany = {}">reset filter</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'FiltersCompany',
    data() {
        return {
            filterCompany: {},
        }
    },
    watch: {
        filterCompany: {
            handler(newValue) {
                this.mCompanyFilter(newValue)
            },
            deep: true,
        },
    },

    methods: {
        ...mapActions(['mCompanyFilter']),
    },
}
</script>

<style lang="scss" scoped>
.filter {
    // .filter__body
    &__body {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 15px;
        justify-content: center;
    }
    // .filter__label
    &__label {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 5px;
    }
    // .filter__input
    &__input {
        background-color: transparent;
        border: 1px solid #2c3e50;
        padding: 5px 10px;
        outline: none;
        background-color: rgba(44, 62, 80, 0.4);
        color: aliceblue;
    }
    // .filter__button
    &__button {
        margin-top: 15px;
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
}
</style>
