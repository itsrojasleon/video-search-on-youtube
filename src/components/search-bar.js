import React, { Component } from 'react'

export default class SearchBar extends Component {
	state = { term: ''}

	handleSearch = (event) => {
		this.setState({ term: event.target.value})
	}

	render() {
		return (
			<input onChange={this.handleSearch} value={this.state.term} />
		)
	}
}