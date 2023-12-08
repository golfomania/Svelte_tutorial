<script>
	export let polls = [];
</script>

<div class="poll-list">
	{#each polls as poll (poll.id)}
		<div class="poll">
			<h3>{poll.question}</h3>
			<div class="poll-answers">
				<div class="poll-answer">
					<p>{poll.answerA}</p>
					<p>{poll.votesA}</p>
				</div>
				<div class="poll-answer">
					<p>{poll.answerB}</p>
					<p>{poll.votesB}</p>
				</div>
			</div>
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
