<template>
    <div class="container">
        <div class="about-us">
            <div class="contact">Йти на звук сирен.</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyContacts',
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
    row-gap: 25px;
    font-weight: 600;
    letter-spacing: 1px;
}
.contact {
    font-size: 25px;
    color: blue;
}
</style>
