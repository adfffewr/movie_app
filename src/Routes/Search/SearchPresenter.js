import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Loader from 'Components/Loader';
import Section from 'Components/Section';
import Error from 'Components/Error';
import Poster from 'Components/Poster';

const Container = styled.div`
    padding:20px;
`;
const Form = styled.form`
    margin-bottom:50px;
`;
const Input = styled.input`
    all:unset;
    font-size:23px;
    width:100%;
`;

const SearchPresenter = ({
    movieResults , 
    tvResults  ,
    error ,
    loading , 
    searchTerm , 
    handleSubmit,
    updateTerm,
    }) => (
    <Container>
        <Helmet>
            <title>Search | App </title>
        </Helmet>
        <Form onSubmit={handleSubmit}>
            <Input placeholder="검색..." value={searchTerm} onChange={updateTerm}></Input>
        </Form>
        {loading ? <Loader></Loader> : <>
            {movieResults && movieResults.length> 0 && (
                <Section title="movie Result">
                    {movieResults.map( movie => (
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
            {tvResults && tvResults.length> 0 && (
                <Section title="tv Result">
                    {tvResults.map( show => (
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
            {tvResults && movieResults && tvResults.length === 0 & movieResults.length === 0 && (
                <Error color="#95a5a6" text="존재하지 않는 페이지 입니다."></Error>
            )}
        </>}

    </Container>
)

SearchPresenter.propTypes = {
    movieResults : PropTypes.array,
    tvResults : PropTypes.array,
    error : PropTypes.string,
    loading : PropTypes.bool.isRequired,
    searchTerm : PropTypes.string,
    handleSubmit : PropTypes.func.isRequired,
    updateTerm : PropTypes.func.isRequired,
}

export default SearchPresenter;