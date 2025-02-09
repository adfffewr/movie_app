import React from 'react';
import TVPresenter from './TVPresenter';
import { TVApi } from 'api';

export default class extends React.Component{
    state = {
        topRated : null,
        popular : null,
        airingToday : null,
        error : null,
        loading : true
    }

    async componentDidMount(){
        try{
            const {data : { results : topRated } } = await TVApi.topRated();
            const {data : { results : popular} } = await TVApi.popular();
            const {data : { results : airingToday } } = await TVApi.airingToday();
            this.setState({
                topRated,
                popular,
                airingToday
            })
        } catch {
            this.setState({
                error : '에러 입니다.'
            })
        } finally {
            this.setState({
                loading : false
            })
        }
    }

    render() {
        const { topRated , popular , airingToday , error , loading } = this.state;
        console.log(this.state)
        return (
        <TVPresenter 
            topRated={topRated}
            popular={popular}
            airingToday={airingToday}
            error={error}
            loading={loading}
        />
        )
    }
}