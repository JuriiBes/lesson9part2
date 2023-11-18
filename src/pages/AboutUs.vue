<template>
    <div class="container">
        <div class="about-us">
            <div class="dobry">Доброго вечора!</div>
            <div class="wechir">Ми з України!!!!</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutUs',
}
</script>

<style lang="scss" scoped>
.container {
    margin: 25px;
    background-color: rgba(170, 206, 238, 0.38);
    padding: 25px;
    height: 78vh;
}
.about-us {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    font-weight: 600;
    letter-spacing: 1px;
}
.dobry {
    font-size: 25px;
    color: blue;
}
.wechir {
    font-size: 30px;

    color: yellow;
}
</style>
