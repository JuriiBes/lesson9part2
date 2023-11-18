<template>
    <div class="container">
        <h2>Create entry:</h2>
        <div class="new-company__body">
            <label class="new-company__label"
                >Company name:
                <input ref="company" v-model="newCompany.companyName" type="text" class="new-company__input"
            /></label>
            <label class="new-company__label"
                >Company rate:
                <input ref="company" v-model="newCompany.companyRate" type="number" class="new-company__input"
            /></label>
            <label class="new-company__label">
                Year of foundation:
                <input ref="company" v-model="newCompany.yearOfFoundation" type="number" class="new-company__input"
            /></label>
            <label class="new-company__label">
                Company owner:
                <input ref="company" v-model="newCompany.companyOwner" type="text" class="new-company__input"
            /></label>
        </div>
        <div class="new-company__button-body">
            <button class="new-company__button-add" @click="clickButton(newCompany)">{{ nameButton }}</button>
            <button class="new-company__button-add" @click="clickBack()">back</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'CompanyEditor',
    data() {
        return {
            newCompany: {},
        }
    },
    computed: {
        ...mapGetters(['gEditCompanyItem']),
        valueTypeEditorParams() {
            return this.$route.params.type_editor
        },
        nameButton() {
            if (this.valueTypeEditorParams == 1) return 'add company'
            else return 'save change'
        },
    },
    // mounted() {
    //     this.$refs.company
    // },
    created() {
        if (this.valueTypeEditorParams !== 1) {
            this.aEditCompany(this.$route.params.id)
            this.newCompany = { ...this.gEditCompanyItem }
        }
    },
    methods: {
        ...mapActions(['aAddCompany', 'aEditCompany', 'aSaveChangeInformationCompany']),
        clickButton(company) {
            // let validInputIndex = -1
            // for (let i = 0; i < 4; i++) {
            //     if (!this.$refs.company[i]) {
            //         validInputIndex = i
            //         break
            //     }
            // }
            // if (validInputIndex !== -1) {
            //     console.log(validInputIndex)
            //     this.$refs.company[validInputIndex].focus()
            // } else {
            if (this.valueTypeEditorParams == 1) {
                this.aAddCompany({
                    id: new Date().getTime(),
                    ...company,
                })
            } else {
                this.aSaveChangeInformationCompany(company)
            }
            this.newCompany = {}
            this.$router.push({ name: 'company' })
            // }
        },
        clickBack() {
            this.$router.push({ name: 'company' })
        },
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
.new-company {
    // .new-company__body
    &__body {
        display: flex;
        max-width: 500px;
        flex-direction: column;
        row-gap: 15px;
        margin: 0 auto;
        margin-top: 30px;
    }
    // .new-company__label
    &__label {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    // .new-company__input
    &__input {
        flex: 0 0 65%;
        background-color: transparent;
        border: 1px solid #2c3e50;
        padding: 5px 10px;
        outline: none;
    }
    // .new-company__button-body
    &__button-body {
        display: flex;
        justify-content: center;
        margin-top: 25px;
        gap: 15px;
    }
    // .new-company__button-add
    &__button-add {
        position: relative;
        padding: 5px 25px;
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
