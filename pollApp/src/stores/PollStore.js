import { writable } from 'svelte/store'; // import writable from svelte/store

const PollStore = writable([
	{
		id: 1,
		question: 'Python or JavaScript?',
		answerA: 'Python',
		answerB: 'JavaScript',
		votesA: 9,
		votesB: 15
	},
	{
		id: 2,
		question: 'Cats or Dogs?',
		answerA: 'Cats',
		answerB: 'Dogs',
		votesA: 22,
		votesB: 7
	},
	{
		id: 3,
		question: 'Svelte or React?',
		answerA: 'Svelte',
		answerB: 'React',
		votesA: 15,
		votesB: 15
	}
]); // create a writable store

export default PollStore; // export the store
