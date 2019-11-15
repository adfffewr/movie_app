import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Section from 'Components/Section';
import Loader from 'Components/Loader';
import Error from 'Components/Error';
import Poster from 'Components/Poster';

const Container = styled.div`
    padding: 20px;
`;

const TVPresenter = ({topRated , popular ,airingToday ,error ,loading}) => (
    <>
    <Helmet>
        <title>TV Shows | App </title>
    </Helmet>
    {loading ? (
        <Loader></Loader>
    ) : (
    <Container>
        {topRated && topRated.length > 0 && (
            <Section title="Top Rated Shows">
                {topRated.map( show => (
                    <Poster 
                        key={show.id}
                        id={show.id}
                        title={show.original_name}
                        imageUrl={show.poster_path}
                        rating={show.vote_average}
                        year={show.first_air_date.substring(0,4)}
                    >
                    </Poster>
                ))}
            </Section>
        )}

        {popular && popular.length > 0 && (
            <Section title="Popular Shows">
                {popular.map( show => (
                    <Poster 
                        key={show.id}
                        id={show.id}
                        title={show.original_name}
                        imageUrl={show.poster_path}
                        rating={show.vote_average}
                        year={show.first_air_date.substring(0,4)}
                    >
                    </Poster>
                ))}
            </Section>
        )}

        {airingToday && airingToday.length > 0 && (
            <Section title="AiringToday Shows">
                {airingToday.map( show => (
                    <Poster 
                        key={show.id}
                        id={show.id}
                        title={show.original_name}
                        imageUrl={show.poster_path}
                        rating={show.vote_average}
                        year={show.first_air_date.substring(0,4)}
                    >
                    </Poster>
                ))}
            </Section>
        )}
        {error && <Error color="#e74c3c" text={error}></Error>}
    </Container>
    )}
    </>
)
    

TVPresenter.propTypes = {
    topRated : PropTypes.array,
    popular : PropTypes.array,
    airingToday : PropTypes.array,
    error : PropTypes.string,
    loading : PropTypes.bool.isRequired,
}

export default TVPresenter;