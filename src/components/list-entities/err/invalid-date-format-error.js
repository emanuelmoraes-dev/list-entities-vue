export default class InvalidDateFormatError extends Error {
	constructor (inputSearch, message) {
		super(message || `Entry ${inputSearch} does not have a valid search date format`)
		this.inputSearch = inputSearch
	}
}
