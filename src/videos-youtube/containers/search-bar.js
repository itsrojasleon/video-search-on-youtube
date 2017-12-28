import React, { Component } from 'react'
import styled from 'styled-components'

const Search = styled.div`
	display: flex;
	justify-content: center;
	padding: 15px;
	box-shadow: 0 0 5px 10px #D9D9D9;
	margin-bottom: 20px;
	flex-wrap:wrap;
`
const Input = styled.input`
	padding: 10px;
	width: 30%;
	border-radius: 5px;
	border: 1px solid #ccc;
	font-size: 18px;
	@media(max-width: 820px) {
		width: 90%;
	}
`
const Button = styled.button`
	display: none;
	@media(max-width: 820px) {
		display:inline-block;
		width: 50%;
		border-radius: 5px;
		margin-left: 10px;
		padding: 10px;
		margin-top: 12px;
		background-color: rgb(42,48,61);
		color: #fff;
		font-size: 18px;
	}
`

export default class SearchBar extends Component {
	state = { term: ''}

	handleSearch = (term) => {
		this.setState({ term })
		this.props.onSearch(term)
	}

	render() {
		return (
			<Search>
				<Input
					placeholder="Search your favorite videos"
					value={this.state.term}
					onChange={event => this.handleSearch(event.target.value)}
				/>
			</Search>
		)
	}
}
