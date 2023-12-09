<script>
	import { onDestroy, onMount } from 'svelte';
	import PollStore from '../stores/PollStore.js';
	import PollDetails from './PollDetails.svelte';
	import { scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	// export let polls = [];

	//const unsubPollList = PollStore.subscribe((data) => {
	//	polls = data;
	//});

	onMount(() => {
		//e.g. fetch data from an API or database
		console.log('PollList mounted');
	});

	onDestroy(() => {
		console.log('PollList destroyed');
		// unsubPollList();
	});
</script>

<div class="poll-list">
	{#each $PollStore as poll (poll.id)}
		<div class="poll" transition:scale|locale animate:flip={{ duration: 1000 }}>
			<PollDetails {poll} />
		</div>
	{/each}
</div>

<style>
	.poll-list {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;
	}
</style>
