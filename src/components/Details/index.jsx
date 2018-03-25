import React, { Component, Fragment } from 'react';
import { parse } from 'query-string';

class Details extends Component {
  static propTypes = {}

  static defaultProps = {
    name: undefined,
    pokemonForm: undefined,
  }

  componentDidMount() {
    const { endpoint } = parse(this.props.location.search);
    const { match } = this.props;
    this.props.fetchDetails({ endpoint, name: match.params.name });
  }

  getPokemonForm = () => {
    // this.state.details.forms[0].url
  }

  render() {
    const details = this.props[this.props.match.params.name];

    let name;

    if (details) {
      name = details.name;
    }

    return (
      <Fragment>
        <h2>{name}</h2>

        {/* {!pokemonForm && <button onClick={this.getPokemonForm}>Show Pokemon Form</button>} */}

        {/* {pokemonForm && (
          <Fragment>
            <img
              alt={pokemonForm.sprites.front_default}
              src={pokemonForm.sprites.front_default}
            />
            <img
              alt={pokemonForm.sprites.back_default}
              src={pokemonForm.sprites.back_default}
            />
          </Fragment>
        )} */}
      </Fragment>
    );
  }
}

export default Details;