<template>
    <q-tabs align="left">
		<q-route-tab v-for="page in nav" :key="page.name" :to="page.path" :label="page.name" />
	</q-tabs>
</template>
<script setup>
import {useRouter} from 'vue-router'
    const {getRoutes} = useRouter()
    const nav = computed( () => {
        let routes = getRoutes()
        return routes.filter( (r) => r.meta.nav)
    })
</script>