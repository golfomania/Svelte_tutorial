<script>
	import PollStore from '../stores/PollStore';
	import Card from '../shared/Card.svelte';
	import Button from '../shared/Button.svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	export let poll;

	//reactive values
	$: totalVotes = poll.votesA + poll.votesB;
	$: percentA = Math.round((poll.votesA / totalVotes) * 100) || 0;
	$: percentB = Math.round((poll.votesB / totalVotes) * 100) || 0;

	//tweened values
	const tweendA = tweened(0);
	const tweendB = tweened(0);
	$: tweendA.set(percentA, { duration: 2000, easing: cubicOut });
	$: tweendB.set(percentB, { duration: 2000, easing: cubicOut });

	//handling votes
	const handleVoting = (answer, id) => {
		PollStore.update((currentPolls) => {
			let copyPolls = [...currentPolls];
			let upvotedPoll = copyPolls.find((poll) => poll.id === id);
			if (answer === 'a') {
				upvotedPoll.votesA++;
			} else {
				upvotedPoll.votesB++;
			}
			return copyPolls;
		});
	};

	//handling delete
	const handleDelete = (id) => {
		console.log('hello');
		PollStore.update((currentPolls) => {
			return currentPolls.filter((poll) => poll.id !== id);
		});
	};
</script>

<div class="poll">
	<Card>
		<h3>{poll.question}</h3>
		<p>Total voltes: {totalVotes}</p>
		<div class="poll-details">
			<div class="answer" on:click={() => handleVoting('a', poll.id)}>
				<div class="percent percent-a" style="width: {$tweendA}%"></div>
				<span>{poll.answerA} ({poll.votesA})</span>
			</div>
			<div class="answer" on:click={() => handleVoting('b', poll.id)}>
				<div class="percent percent-b" style="width: {$tweendB}%"></div>
				<span>{poll.answerB} ({poll.votesB})</span>
			</div>
			<div class="delete">
				<Button flat={true} inverse={true} on:click={() => handleDelete(poll.id)}
					>Delete Poll</Button
				>
			</div>
		</div>
	</Card>
</div>

<style>
	h3 {
		margin: 0 auto;
		color: #555;
	}
	p {
		margin-top: 6px;
		font-size: 14px;
		color: #aaa;
		margin-bottom: 30px;
	}
	.answer {
		background: #fafafa;
		cursor: pointer;
		margin: 10px auto;
		position: relative;
	}
	.answer:hover {
		opacity: 0.6;
	}
	span {
		display: inline-block;
		padding: 10px 20px;
	}
	.percent {
		height: 100%;
		position: absolute;
		box-sizing: border-box;
	}
	.percent-a {
		background: rgba(217, 27, 66, 0.2);
		border-left: 4px solid #d91b42;
	}
	.percent-b {
		background: rgba(69, 196, 150, 0.2);
		border-left: 4px solid #45c496;
	}
	.delete {
		margin-top: 30px;
		text-align: center;
	}
</style>
