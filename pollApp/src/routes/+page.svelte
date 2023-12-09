<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import CreatPollForm from '../components/CreatPollForm.svelte';
	import PollList from '../components/PollList.svelte';
	import Tabs from '../shared/Tabs.svelte';

	//tabs
	let items = ['Current Polls', 'Add new poll'];
	let activeItem = 'Current Polls';
	const tabChange = (e) => {
		activeItem = e.detail;
	};

	//add new poll
	const handleAddPoll = (e) => {
		activeItem = 'Current Polls';
	};
</script>

<Header />
<main>
	<Tabs {items} {activeItem} on:tabChange={tabChange} />
	{#if activeItem === 'Current Polls'}
		<PollList />
	{:else if activeItem === 'Add new poll'}
		<CreatPollForm on:addPoll={handleAddPoll} />
	{/if}
</main>
<Footer />

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}
</style>
