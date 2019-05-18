import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid #f5f5f5;
`;
const Search = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  background: white;
  max-width: 80%;
  margin: auto;
  align-items: center;
  @media (max-width: 769px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;
const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  background-color: rgb(245, 245, 245);
  color: #222;
  border: 1px solid rgb(245, 245, 245);
  width: 60%;
  font-size: 16px;
  border: none;
  margin: 0;
  transition: 0.3s;
  padding-right: 30px;
  box-sizing: border-box;
  text-indent: 30px;
  &:focus {
    outline: none;
    border: 1px solid rgb(240, 240, 240);
    box-shadow: 0 1px 1px 0 rgba(65, 69, 73, 0.3),
      0 1px 3px 1px rgba(65, 69, 73, 0.15);
    background: white;
  }
  @media (max-width: 769px) {
    width: 100%;
    font-size: 18px;
  }
`;
const A = styled.a`
  color: black;
  text-decoration: none;
  @media (max-width: 769px) {
    display: none;
  }
`;

const Content = styled.div`
  width: 50%;
  position: relative;
  @media (max-width: 769px) {
    width: 100%;
    display: grid;
    grid-template-columns: 6fr 1fr;
  }
`;
const ButtonSearch = styled.button`
  display: none;
  font-size: 16px;
  border: none;
  background-color: #48a8f5;
  color: #fff;
  border-radius: 4px;
  @media (max-width: 769px) {
    display: block;
  }
`;

export default class SearchBar extends Component {
  state = { term: '' };

  handleSearch = term => {
    this.setState({ term });
    this.props.onSearch(term);
  };

  render() {
    return (
      <Container>
        <Search>
          <Content>
            <a
              style={{
                fontSize: '16px',
                position: 'absolute',
                top: '10px',
                left: '7px'
              }}>
              <i
                style={{ color: 'rgb(136,136,136)' }}
                className="fas fa-search"
              />
            </a>
            <Input
              placeholder="Search"
              value={this.state.term}
              onChange={event => this.handleSearch(event.target.value)}
            />
            <ButtonSearch onClick={() => this.handleSearch(this.state.term)}>
              Go!
            </ButtonSearch>
          </Content>
          <A
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/rojasleon/video-search-on-youtube">
            <i style={{ fontSize: 23 }} className="fab fa-github" />
          </A>
        </Search>
      </Container>
    );
  }
}
