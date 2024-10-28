<template>
	<q-page-container>
    <div class="q-pa-md">
  		<div class="q-pa-md row items-start q-gutter-xs">
			<loader v-show="loading" />
            <character-card v-if="character" class="m-1" :character="character">
				<card-item icon="bookmark_add" v-if="!store.inBookmarks(character)" @click="store.addBookmark(character)">Ajouter aux favoris</card-item>
				<card-item icon="bookmark_remove" v-if="store.inBookmarks(character)" @click="store.removeBookmark(character)">Enlever des favoris</card-item>
			</character-card>
        </div>
		<q-btn color="primary" @click="router.go(-1)">Retour</q-btn>
    </div>
	</q-page-container>
</template>
<route lang="yaml">
name: 'character_detail'
</route>
<script setup>
import Api from '../../composables/Api'
import { onMounted } from 'vue'
import { useApi } from '../../composables/use-api'
import { useCharacterStore } from '../../store/characters'
import {useRoute, useRouter} from 'vue-router'
const route = useRoute()
const router = useRouter()
const store = useCharacterStore()

const { query, result: character, loading, error, callApi: loadCharacter} = useApi(async(query)=> {
	const res = await Api.get(`https://rickandmortyapi.com/api/character/${query}`)
	return res.data
})

onMounted(async () => {
	await router.isReady()
	query.value = route.params.id
	loadCharacter()
	
})
</script>