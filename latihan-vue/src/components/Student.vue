<template>

    <slot>Ini adalah slot default karena parent tidak memberikan data</slot><br>
    Nama Murid Adalah {{ studentName }} <button @click="showData">Show Detail</button><br>
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