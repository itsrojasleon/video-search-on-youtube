import React, { Component } from 'react'
import styled from 'styled-components'

const Search = styled.div`
	display: flex;
	justify-content: space-around;
	padding: 10px;
	box-shadow: 0 0 20px 10px #EEEEEE;
	margin-bottom: 20px;
	flex-wrap:wrap;
	background: rgb(236,243,248);
	width: 100%;
`
const Input = styled.input`
	padding: 6px;
	background: rgb(236,243,248);
	width: 50%;
	border-radius: 30px;
	background :red;
	border: none;
	font-size: 16px;
	text-align: center;
	&:focus {
		outline: none;
	}
	@media(max-width: 820px) {
		width: 90%;
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
				<div style={{width: '50%'}}>
					<Input
						placeholder="Search..."
						value={this.state.term}
						onChange={event => this.handleSearch(event.target.value)}
					/>
					<span>Lupa</span>
				</div>
				<a href="https://github.com/rojasleon/video-search-on-youtube" style={{ borderRadius: '20px', fontSize: '16px', background: 'rgb(236,243,248)' }}>Github</a>
			</Search>
		)
	}
}
