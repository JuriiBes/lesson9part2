<template>
    <div class="company__item">
        <div class="company__container">
            <div class="company__name">{{ dataCompany.companyName }}</div>
            <div class="company__rate">{{ dataCompany.companyRate }}</div>
            <div class="company__year">{{ dataCompany.yearOfFoundation }}</div>
            <div class="company__owner">{{ dataCompany.companyOwner }}</div>
            <div></div>
        </div>
        <button type="button" class="company__edit" @click="editorCompany(dataCompany.id)">
            <img :src="editIcon" alt="icon" />
        </button>
        <button type="button" class="company__delete" @click="deleteCompany(dataCompany.id)">
            <img :src="deleteIcon" alt="icon" />
        </button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'CompanyItem',
    props: {
        dataCompany: {
            type: Object,
            default: () => ({}),
        },
    },
    computed: {
        editIcon() {
            return require(`@/data/icon/edit.png`)
        },
        deleteIcon() {
            return require(`@/data/icon/delete.png`)
        },
    },
    methods: {
        ...mapActions(['aDeleteCompany']),
        deleteCompany(idCompany) {
            this.aDeleteCompany(idCompany)
        },
        editorCompany(idCompany) {
            this.$router.push({
                name: 'editor',
                params: {
                    type_editor: '0',
                    id: idCompany,
                },
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.company {
    // .company__item
    &__item {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
    }
    // .company__container
    &__container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        padding: 5px 10px;
        text-align: start;
        flex: 1 1 auto;
        align-items: center;
        & > div:not(:last-child) {
            border-right: 1px solid #ffffff;
        }
        & > div {
            padding: 5px 10px;
        }
    }
    // .company__name
    &__name {
    }
    // .company__rate
    &__rate {
    }
    // .company__year
    &__year {
    }
    // .company__owner
    &__owner {
    }
    // .company__edit
    // .company__delete
    &__delete,
    &__edit {
        display: flex;
        align-items: center;
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 5px;
        & img {
            transition: transform ease 0.3s;
        }

        &:hover {
            & img {
                transform: translate(0, -12%);
            }
        }
    }
}
</style>
