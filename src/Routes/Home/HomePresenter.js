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

const HomePresenter = ({nowPlaying , popular ,upcoming ,error ,loading}) => (
    <>
    <Helmet>
        <title>Movies | App </title>
    </Helmet>
    {loading ? (
        <Loader></Loader> 
    ) : (
    <Container>
        {nowPlaying && nowPlaying.length > 0 && (
            <Section title="Now Playing">
                {nowPlaying.map(movie => (
                    <Poster 
                        key={movie.id}
                        id={movie.id}
                        title={movie.original_title}
                        imageUrl={movie.poster_path}
                        rating={movie.vote_average}
                        isMovie={true}
                        year={movie.release_date.substring(0,4)}
                    >
                    </Poster>
                ))}
            </Section>
        )}

        {upcoming && upcoming.length > 0 && (
            <Section title="upcoming Movie">
                {upcoming.map(movie => (
                    <Poster 
                        key={movie.id}
                        id={movie.id}
                        title={movie.original_title}
                        imageUrl={movie.poster_path}
                        rating={movie.vote_average}
                        isMovie={true}
                        year={movie.release_date.substring(0,4)}
                    >
                    </Poster>
                ))}
            </Section>
        )}

        {popular && popular.length > 0 && (
            <Section title="popular Movie">
                {popular.map(movie => (
                    <Poster 
                        key={movie.id}
                        id={movie.id}
                        title={movie.original_title}
                        imageUrl={movie.poster_path}
                        rating={movie.vote_average}
                        isMovie={true}
                        year={movie.release_date.substring(0,4)}
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

HomePresenter.propTypes = {
    nowPlaying : PropTypes.array,
    popular : PropTypes.array,
    upcoming : PropTypes.array,
    error : PropTypes.string,
    loading : PropTypes.bool.isRequired,
}

export default HomePresenter;