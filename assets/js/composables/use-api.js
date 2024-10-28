import { ref } from 'vue'

export function useApi(getResults) {
	const query  = ref('')
	const result = ref('')
	const error = ref(false)
	const loading = ref(false)

	const callApi = async() => {
		result.value = ""
		error.value   = false
		loading.value = true
		try{
			result.value = await getResults(query.value)
		} catch {
			error.value = true
		} finally {
			loading.value = false
		}
	}

	return {query, result, error, loading, callApi}
}
