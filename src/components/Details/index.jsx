import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { parse } from 'query-string';
import styled from 'styled-components';
import tinycolor from 'tinycolor2';
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';

const Section = styled.section`
  padding: 40px 24px;
  width: 100%
  height: 100%;
`;

const Info = styled.section`
  background-color: #ffffff;
  border-radius: 16px;
  margin: 0 auto;
  max-width: 660px;
  padding: 60px 40px;
  position: relative;
  width: 100%;
  width: 100%;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h2`
  text-transform: capitalize;
  font-size: 46px;
`;

const Figure = styled.img`
  width: 300px;
  height: 300px;
  margin-top: -100px;
  margin-right: -40px;
`;

const Category = styled.p`
  font-size: 22px;
  text-transform: capitalize;
`;

const Description = styled.p`
  font-weight: 700;
  color: #A2A2A2;
  font-size: 22px;
  line-height: 38px;
  margin: 40px 0;
`;

const Characteristics = styled.section`
  display: flex;
  justify-content: space-between;
`;

const Characteristic = styled.div`
  text-transform: capitalize;

  h3 {
    font-size: 16px;
  }

  p {
    font-size: 22px;
    color: #585858;
    font-weight: 700;
  }
`;

class Details extends Component {
  static propTypes = {
    // details: PropTypes.objectOf(PropTypes.object),
    // specie: PropTypes.objectOf(PropTypes.object),
    // fetchDetails: PropTypes.func.isRequired,
    // fetchSpecie: PropTypes.func.isRequired,
    // location: PropTypes.shape(PropTypes.object).isRequired,
    // match: PropTypes.shape(PropTypes.object).isRequired,
  }

  static defaultProps = {
    details: {},
    specie: {},
  }

  componentDidMount() {
    const { endpoint } = parse(this.props.location.search);
    const { match } = this.props;

    this.props.fetchDetails({ endpoint, name: match.params.name });
  }

  getSpecie = () => {
    const { fetchSpecie, details, match } = this.props;

    fetchSpecie({ endpoint: details[match.params.name].species.url, name: match.params.name });
  }

  render() {
    const { details, specie, match } = this.props;
    let color, style;

    if (Object.prototype.hasOwnProperty.call(specie, match.params.name)) {
      color = tinycolor(specie[match.params.name].color.name).darken().toString();

      style = {
        backgroundColor: color,
      };
    }

    const RenderInfos = () => {
      if (Object.prototype.hasOwnProperty.call(details, match.params.name) &&
          Object.prototype.hasOwnProperty.call(specie, match.params.name)) {
        return (
          <Fragment>
            <Header>
              <div>
                <Title>{match.params.name}</Title>
                <Category>
                  {details[match.params.name].types[0].type.name}
                </Category>
              </div>

              <Figure
                alt={match.params.name}
                src={details[match.params.name].sprites.front_default}
              />
            </Header>

            <Characteristics>
              <Characteristic>
                <h3 style={{ color }}>height:</h3>
                <p>{details[match.params.name].height}</p>
              </Characteristic>

              <Characteristic>
                <h3 style={{ color }}>weight:</h3>
                <p>{details[match.params.name].weight}</p>
              </Characteristic>

              <Characteristic>
                <h3 style={{ color }}>abilities:</h3>
                <p>{details[match.params.name].abilities[0].ability.name}</p>
              </Characteristic>

              <Characteristic>
                <h3 style={{ color }}>habitat:</h3>
                <p>{specie[match.params.name].habitat.name}</p>
              </Characteristic>
            </Characteristics>

            <Description>
              {specie[match.params.name].flavor_text_entries[1].flavor_text}
            </Description>

            <ResponsiveContainer width="100%" height={230}>
              <BarChart data={details[match.params.name].stats}>
                <XAxis dataKey="stat.name"/>
                <Bar dataKey="base_stat" fill={color} />
              </BarChart>
            </ResponsiveContainer>
          </Fragment>
        );
      }

      return null;
    }

    return (
      <Fragment>
        {
          !specie[match.params.name] &&
          <button onClick={this.getSpecie}>Show Pokemon Specie Info</button>
        }

        <Section style={style}>
          <Info>
            {RenderInfos()}
          </Info>
        </Section>
      </Fragment>
    );
  }
}

export default Details;
