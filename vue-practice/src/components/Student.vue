<template>
    <h1>Ini adalah Student bernama {{ studentName }}</h1> <button @click="showData">Show Detail</button><br>
</template>

<script>
export default {
    props: {
        studentName: String
    },
    emits: ['response'],
    methods: {
        showData() {
            this.$emit('response', this.studentName)
        }
    }
 }
</script>