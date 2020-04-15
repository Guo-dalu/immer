import produce from "../dist/immer.cjs.production.min.js"

const baseState = {
	list: [
		{
			name: "wenbo"
		}
	]
}

const nextState = produce(baseState, draft => {
	draft.list = [
		{
			name: "wenbo"
		}
	]
})

console.log(nextState)
console.log(nextState === baseState)
