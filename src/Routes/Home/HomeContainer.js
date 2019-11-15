import React from 'react';
import HomePresenter from './HomePresenter';
import { moviesApi } from 'api'

export default class extends React.Component {
    state = {
        nowPlaying : null,
        upcoming : null,
        popular : null,
        error : null,
        loading : true
    };

    async componentDidMount(){
        try{
            const {data : { results : nowPlaying} } = await moviesApi.nowPlaying();
            const {data : { results : upcoming} } = await moviesApi.upcoming();
            const {data : { results : popular} } = await moviesApi.popular();
            // throw Error();
            this.setState({
                nowPlaying : nowPlaying,  // 위와 아래는 같은 코드이다.
                upcoming,
                popular
            })
        } catch {
            this.setState({
                error : '에러 입니다.'
            })
        } finally {
            this.setState({
                loading : false,

            })
        }
    }

    render() {
        const { nowPlaying , upcoming , popular , error , loading } = this.state
        console.log(this.state)
        return (
            <HomePresenter 
                nowPlaying={nowPlaying} 
                upcoming={upcoming} 
                popular={popular} 
                error={error}
                loading={loading}
            />
        )
    }
}

