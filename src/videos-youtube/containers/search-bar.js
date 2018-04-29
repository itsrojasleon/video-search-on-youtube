import React, { Component } from 'react'
import styled from 'styled-components'

const Search = styled.div`
	display: flex;
	justify-content: space-around;
	padding: 10px;
	margin-bottom: 20px;
	flex-wrap:wrap;
	background: white;
	width: 100%;
	align-items: center;
	border-bottom: 1px solid #F5F5F5;
`
const Input = styled.input`
	padding: 10px;
	border-radius: 4px;
	background-color: rgb(245,245,245);
	color: #222;
	width: 50%;
	font-size: 16px;
	border: none;
	margin: 0;
	transition: .3s;
	padding-right: 30px;
	text-indent: 30px;
	&:focus {
		outline: none;
		border: 1px solid #F5F5F5;
		background: white;
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
				<div style={{width: '50%', position: 'relative'}}>
				  <a href="https://github.com/rojasleon/video-search-on-youtube" style={{ fontSize: '16px', color: 'black', textDecoration: 'none', position: 'absolute', top: '10px', left: '7px' }}><i style={{color: 'rgb(136,136,136)'}} className="fas fa-search"></i></a>
					<Input
						placeholder="Search"
						value={this.state.term}
						onChange={event => this.handleSearch(event.target.value)}
					/>
				</div>
				<i style={{fontSize: 23}} className="fab fa-github"></i>
			</Search>
		)
	}
}
