<template>
<span class="p-1 m-1" v-if="message!=''">
{{ message }}
</span>
</template>
<script setup>
const props=defineProps({
message:String
});
</script>
<style scoped>
span{color:red;}
</style>