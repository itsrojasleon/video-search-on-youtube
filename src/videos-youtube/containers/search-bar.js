import React, { Component } from 'react'

export default class SearchBar extends Component {
	state = { term: ''}

	handleSearch = (term) => {
		this.setState({ term })
		this.props.onSearch(term)
	}

	render() {
		return (
			<input
				value={this.state.term}
				onChange={event => this.handleSearch(event.target.value)}
			/>
		)
	}
}
