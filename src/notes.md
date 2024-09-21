check spelling of initialstate, reducers to avoid bug.
// here the state already has a value but we need to display both old and new post , for that , the IMMER is already written inside create slice.
// No need to copy old data , when using inside create slice.

// Prepare
/ this prepare is a call back function which gets args from dispatch and returns the payload as object in ordered way similar to old data to the reducer.
// that's why we use {} in this return to make them as object
// but for using this prepare we need to split the action to reducer and prepare individually