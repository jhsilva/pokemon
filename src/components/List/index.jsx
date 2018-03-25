import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Nunito', sans-serif;
    background-color: #F5F7F9;
  }
`;

const Title = styled.h1`
  font-size: 26px;
  color: #999FA6;
  text-align: center;
  text-transform: uppercase;
  margin: 40px 0;
`;

const Items = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Item = styled.li`
  padding: 60px 46px;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 20px -5px rgba(0,0,0,0.1);
  transition: all .3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin: 25px auto;
  max-width: 660px;
  width: 100%;

  &:hover,
  &:active {
    box-shadow: none;
  }
`;

const Link = styled.a`
  text-decoration: none;
  font-weight: bold;
  font-size: 56px;
  text-transform: capitalize;
  color: #000000;
`;

const Figure = styled.img`
  position: absolute;
  right: 0;
  top: -50px;
  width: 300px;
`;

class List extends Component {
  static propTypes = {
    fetchList: PropTypes.func.isRequired,
    results: PropTypes.arrayOf(PropTypes.object),
    next: PropTypes.string,
  }

  static defaultProps = {
    results: [],
    next: undefined,
  }

  componentDidMount() {
    this.props.fetchList({ endpoint: undefined });
  }

  onLoadMoreResults = () => {
    this.props.fetchList({ endpoint: this.props.next });
  }

  render() {
    const { results, next } = this.props;

    return (
      <Fragment>
        <Title>Chose your pokemon</Title>
        <Items>
          {results.map(result => (
            <Item key={result.name}>
              <Link href={`#/pokemon/${result.name}?endpoint=${result.url}`}>
                {result.name}
              </Link>
              <Figure
                alt={result.name}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${result.url.split('/')[6]}.png`}
              />
            </Item>
          ))}
        </Items>
        {next && <button onClick={this.onLoadMoreResults}>Carregar mais Pokemon</button>}
      </Fragment>
    );
  }
}

export default List;
