<template>
	<q-card class="my-card" flat bordered>
      <img :src="character.image" :alt="character.name">

      <q-list>
        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="primary" name="infos" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{character.name}}</q-item-label>
            <q-item-label caption>Espèce : {{character.species}}.</q-item-label>
            <q-item-label caption>Apparait dans {{character.episode.length}} épisode(s).</q-item-label>
			</q-item-section>
        </q-item>
		<slot />
      </q-list>
    </q-card>
</template>
<script setup>
    const props = defineProps({
        character: {
            type: Object,
            required: true
        }
    })
</script>