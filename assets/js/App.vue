<template>
	<q-layout view="hHh lpR fFf">
		<router-view v-slot="{ Component, route }">
			<component :is="Component" :key="route" />
		</router-view>
	</q-layout>
  </template>