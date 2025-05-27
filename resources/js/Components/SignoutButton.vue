<script setup>
import { router } from '@inertiajs/vue3';
defineProps({
title: String,
});

const logout = () => {
router.post(route('logout'));
};
</script>

<template>
<div>
<form @submit.prevent="logout">
<button type="submit">Sign Out</button>
</form>
</div>
</template>
