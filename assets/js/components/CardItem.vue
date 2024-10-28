<template>
	<q-item clickable>
		<q-item-section avatar>
			<q-icon color="primary" :name="icon" />
		</q-item-section>
		<q-item-section>
			<q-item-label caption>
				<slot />
			</q-item-label>
		</q-item-section>
	</q-item>
</template>
<script setup>
    const props = defineProps({
        icon: {
            type: String,
            required: true
        }
    })
</script>