<template>
	<q-page-container>
    <div class="q-pa-md">
        <div class="text-h2">Demo api Graphql</div>
  		<div class="q-pa-md row items-start q-gutter-xs">
      		<q-input square filled v-model="query" @update:model-value="search()" label="Chercher un personnage">
				<template v-slot:append>
					<q-icon v-show="query.length>0" name="close" @click="query='';search()" class="cursor-pointer" />
				</template>
			</q-input>
        </div>
		<loader v-show="loading" />
  		<div v-if="characters.length>0" class="q-pa-md row items-start q-gutter-xs">
            <character-card class="m-1" v-for="character in characters" :character="character">
				<card-item icon="visibility" :to="{name: 'character_detail', params: {id: character.id} }">
						Voir la fiche
				</card-item>
				<card-item icon="bookmark_add" v-if="!store.inBookmarks(character)" @click="store.addBookmark(character)">Ajouter aux favoris</card-item>
				<card-item icon="bookmark_remove" v-if="store.inBookmarks(character)" @click="store.removeBookmark(character)">Enlever des favoris</card-item>
			</character-card>
        </div>
    </div>
	</q-page-container>
</template>
<route lang="yaml">
name: 'api_graphql'
meta:
    nav: true
</route>
<script setup>
import Api from '../composables/Api'
import { onMounted } from 'vue'
import { useApi } from '../composables/use-api'
import { useCharacterStore } from '../store/characters'
const store = useCharacterStore()

const charactersQuery = `
query Characters($name:String!) {
	characters(filter: {name: $name}){
		results{
			id
			name
			image
			species
			episode{
				name
			}
		}
	}
}
`
const { query, result: characters, loading, error, callApi: search} = useApi(async(query)=> {
	const res = await Api.post('https://rickandmortyapi.com/graphql',
	{
		query: charactersQuery,
		variables: {
			name: query
		}
	})
	return res.data.data.characters.results
})
onMounted(() => search())
</script>