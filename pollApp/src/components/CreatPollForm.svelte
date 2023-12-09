<script>
	import PollStore from '../stores/PollStore';
	import { createEventDispatcher } from 'svelte';
	import Button from '../shared/Button.svelte';

	let dispatch = createEventDispatcher();
	let fields = {
		question: '',
		answerA: '',
		answerB: ''
	};

	let errors = {
		question: '',
		answerA: '',
		answerB: ''
	};

	function generateGUID() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			var r = (Math.random() * 16) | 0,
				v = c === 'x' ? r : (r & 0x3) | 0x8;
			return v.toString(16);
		});
	}

	let isValid = false;

	const submitHandler = (e) => {
		isValid = true;
		// validate question
		if (fields.question.trim().length < 5) {
			errors.question = 'Question must be at least 5 characters long';
			isValid = false;
		} else {
			errors.question = '';
		}

		// validate answer A
		if (fields.answerA.trim().length < 1) {
			errors.answerA = 'Answer A is required';
			isValid = false;
		} else {
			errors.answerA = '';
		}

		// validate answer B
		if (fields.answerB.trim().length < 1) {
			errors.answerB = 'Answer B is required';
			isValid = false;
		} else {
			errors.answerB = '';
		}

		// add new poll
		if (isValid) {
			let poll = { ...fields, votesA: 0, votesB: 0, id: generateGUID() };
			// add poll to store
			PollStore.update((currentPolls) => {
				return [...currentPolls, poll];
			});
			dispatch('addPoll');
		}
	};
</script>

<form on:submit|preventDefault={submitHandler}>
	<div class="form-field">
		<label for="question">Poll question</label>
		<input type="text" id="question" bind:value={fields.question} />
		{#if errors.question}
			<p style="color: red;">{errors.question}</p>
		{/if}
	</div>
	<div class="form-field">
		<label for="anser-a">Answer A:</label>
		<input type="text" id="answer-a" bind:value={fields.answerA} />
		{#if errors.answerA}
			<p style="color: red;">{errors.answerA}</p>
		{/if}
	</div>
	<div class="form-field">
		<label for="answer-b">Answer B:</label>
		<input type="text" id="answer-b" bind:value={fields.answerB} />
		{#if errors.answerB}
			<p style="color: red;">{errors.answerB}</p>
		{/if}
	</div>
	<Button type="secondary" flat={true}>Add Poll</Button>
</form>

<style>
	form {
		width: 400px;
		text-align: center;
		margin: 0 auto;
	}
	.form-field {
		margin: 18px auto;
	}
	input {
		width: 100%;
		padding: 8px;
		border: 1px solid #ccc;
		border-radius: 6px;
		box-sizing: border-box;
	}
	label {
		margin: 10px auto;
		display: block;
		text-align: left;
	}
</style>
