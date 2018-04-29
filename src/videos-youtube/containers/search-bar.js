import React, { Component } from 'react'
import styled from 'styled-components'

const Search = styled.div`
	display: flex;
	justify-content: space-around;
	padding: 10px;
	margin-bottom: 20px;
	flex-wrap: wrap;
	background: white;
	max-width: 100%;
	align-items: center;
	border-bottom: 1px solid #F5F5F5;
	@media(max-width: 769px) {
		display: grid;
		grid-template-columns: 1fr;
	}
`
const Input = styled.input`
	padding: 10px;
	border-radius: 4px;
	background-color: rgb(245,245,245);
	color: #222;
	width: 60%;
	font-size: 16px;
	border: none;
	margin: 0;
	transition: .3s;
	padding-right: 30px;
	box-sizing: border-box;
	text-indent: 30px;
	&:focus {
		outline: none;
		border: 1px solid #F5F5F5;
		background: white;
	}
	@media(max-width: 769px) {
		width: 100%;
		font-size: 18px;
	}
`
const A = styled.a`
	color: black;
	textDecoration: none;
	@media(max-width: 769px) {
		display: none;
	}
`;

const Content = styled.div`
	width: 50%;
	position: relative;
	@media(max-width: 769px) {
		width: 100%;
		display: grid;
		grid-template-columns: 6fr 1fr;
	}
`;
const ButtonSearch = styled.button`
	display: none;
	font-size: 16px;
	border: none;
	background-color: #48A8F5;
	color: #fff;
	border-radius: 4px;
	@media(max-width: 769px) {
		display: block;
	}
`;

export default class SearchBar extends Component {
	state = { term: ''}

	handleSearch = (term) => {
		this.setState({ term })
		this.props.onSearch(term)
	}

	render() {
		return (
			<Search>
				<Content>
				  <a style={{ fontSize: '16px', position: 'absolute', top: '10px', left: '7px' }}><i style={{color: 'rgb(136,136,136)'}} className="fas fa-search"></i></a>
					<Input
						placeholder="Search"
						value={this.state.term}
						onChange={event => this.handleSearch(event.target.value)}
					/>
					<ButtonSearch onClick={() => this.handleSearch(this.state.term)}>Go!</ButtonSearch>
				</Content>
				<A href="https://github.com/rojasleon/video-search-on-youtube"><i style={{fontSize: 23}} className="fab fa-github"></i></A>
			</Search>
		)
	}
}
