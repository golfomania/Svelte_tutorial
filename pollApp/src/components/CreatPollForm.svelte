<script>
	import Button from '../shared/Button.svelte';

	let fields = {
		question: '',
		answerA: '',
		answerB: ''
	};

	const submitHandler = (e) => {
		console.log(fields);
	};
</script>

<form on:submit|preventDefault={submitHandler}>
	<div class="form-field">
		<label for="question">Poll question</label>
		<input type="text" id="question" bind:value={fields.question} />
	</div>
	<div class="form-field">
		<label for="anser-a">Answer A:</label>
		<input type="text" id="answer-a" bind:value={fields.answerA} />
	</div>
	<div class="form-field">
		<label for="answer-b">Answer B:</label>
		<input type="text" id="answer-b" bind:value={fields.answerB} />
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
