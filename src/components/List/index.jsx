import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
        <ul>
          {results.map(result => (
            <li key={result.name}>
              <Link
                href={`/pokemon/${result.name}?endpoint=${result.url}`}
                to={`/pokemon/${result.name}?endpoint=${result.url}`}
              >
                {result.name}
              </Link>
            </li>
          ))}
        </ul>
        {next && <button onClick={this.onLoadMoreResults}>Carregar mais Pokemon</button>}
      </Fragment>
    );
  }
}

export default List;
