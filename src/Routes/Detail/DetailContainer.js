import React from 'react';
import DetailPresenter from './DetailPresenter';
import { moviesApi, TVApi } from 'api';

export default class extends React.Component{
    constructor(props) {
        super(props);
        const {
            location : { pathname }
        } = props;
        this.state = {
            result : null,
            error : null,
            loading : true,
            isMovie : pathname.includes('/movie/')
        };
    }
    

    async componentDidMount() {
        // console.log(this.props.match.params.id)
        const { 
            match : {
                params : {id}
            } ,
            history : { push },
        } = this.props
        const { isMovie } = this.state;
        const parsedId = parseInt(id);
        
        if( isNaN(parsedId) ) {
            return push('/')
        }
        let result = null;
        try{
            if(isMovie) {
                ({data : result } = await moviesApi.movieDetail(parsedId) )
            } else {
                ({data : result } = await TVApi.showDetail(parsedId) )
            }
        } catch {
            this.setState({ error : '디테일 오류 입니다.' })
        } finally {
            this.setState({ loading : false , result })
        }
    }

    render() {
        // console.log(this.props)
        const { result  , error , loading } = this.state
        // console.log(result)
        return <DetailPresenter 
        result={result}
        error={error}
        loading={loading}>
        </DetailPresenter>
    }
}