import React from 'react';
import SearchPresenter from './SearchPresenter';
import { moviesApi, TVApi } from 'api';

export default class extends React.Component{
    state = {
        movieResults : null,
        tvResults : null,
        searchTerm : '',
        error : null,
        loading : false
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { searchTerm } = this.state;
        if(searchTerm !== '') {
            this.searchByTerm()
        }
    };

    updateTerm = (e) => {
        const { 
            target : { value } 
        } = e;
        console.log(value)
        this.setState({
            searchTerm : value
        })

    }

    searchByTerm = async () => {
        const { searchTerm } = this.state;
        this.setState({
            loading : true
        })
        try{
            // throw Error();
            const {data : { results : movieResults } }  = await moviesApi.search(searchTerm);
            const {data : { results : showResults } }   = await TVApi.search(searchTerm);
            this.setState({
                movieResults ,
                tvResults : showResults
            })
        } catch{
            this.setState({
                error : '검색 에러 입니다.'
            })
        } finally {
            this.setState({
                loading : false
            })
        }

    }

    render() {
        const { movieResults, tvResults, searchTerm, error , loading } = this.state;
        console.log(this.state)
        return (
            <SearchPresenter 
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                error={error}
                loading={loading}
                handleSubmit={this.handleSubmit}
                updateTerm={this.updateTerm}
            />
        )
    }
}