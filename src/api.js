import axios from 'axios';

const api = axios.create({
    baseURL : 'https://api.themoviedb.org/3',
});

// api.get("tv/popular")

export const moviesApi = {
    nowPlaying : () => {
        return api({
            method: 'GET',
            url: '/movie/now_playing',  // api 통신 상세 주소
            params : { 
                api_key : 'a992d1fae6c06b990f53908e421ee199',
                language : 'en-US'
            }, // 값을 넘긴다
        })
    },
    upcoming : () => {
        return api({
            method: 'GET',
            url: '/movie/upcoming',  // api 통신 상세 주소
            params : { 
                api_key : 'a992d1fae6c06b990f53908e421ee199',
                language : 'en-US'
            }, // 값을 넘긴다
        })
    },
    popular : () => {
        return api({
            method: 'GET',
            url: '/movie/popular',  // api 통신 상세 주소
            params : { 
                api_key : 'a992d1fae6c06b990f53908e421ee199',
                language : 'en-US'
            }, // 값을 넘긴다
        })
    },
    movieDetail : (id) => {
        return api({
            method: 'GET',
            url: `/movie/${id}`,  // api 통신 상세 주소
            params : { 
                api_key : 'a992d1fae6c06b990f53908e421ee199',
                language : 'en-US',
                append_to_response : 'videos'
            }, // 값을 넘긴다
        })
    },
    search : (term) => {
        return api({
            method: 'GET',
            url: `/search/movie`,  // api 통신 상세 주소
            params : { 
                api_key : 'a992d1fae6c06b990f53908e421ee199',
                language : 'en-US',
                query : encodeURIComponent(term)
            }, // 값을 넘긴다
        })
    },
}

export const TVApi = {
    topRated : () => {
        return api({
            method: 'GET',
            url: `/tv/top_rated`,  // api 통신 상세 주소
            params : { 
                api_key : 'a992d1fae6c06b990f53908e421ee199',
                language : 'en-US',
            }, // 값을 넘긴다
        })
    },
    popular : () => {
        return api({
            method: 'GET',
            url: '/tv/popular',  // api 통신 상세 주소
            params : { 
                api_key : 'a992d1fae6c06b990f53908e421ee199',
                language : 'en-US',
            }, // 값을 넘긴다
        })
    },
    airingToday : () => {
        return api({
            method: 'GET',
            url: `/tv/airing_today`,  // api 통신 상세 주소
            params : { 
                api_key : 'a992d1fae6c06b990f53908e421ee199',
                language : 'en-US',
            }, // 값을 넘긴다
        })
    },
    showDetail : (id) => {
        return api({
            method: 'GET',
            url: `/tv/${id}`,  // api 통신 상세 주소
            params : { 
                api_key : 'a992d1fae6c06b990f53908e421ee199',
                language : 'en-US',
                append_to_response : 'videos'
            }, // 값을 넘긴다
        })
    },
    search : (term) => {
        return api({
            method: 'GET',
            url: `/search/tv`,  // api 통신 상세 주소
            params : { 
                api_key : 'a992d1fae6c06b990f53908e421ee199',
                language : 'en-US',
                query : encodeURIComponent(term)
            }, // 값을 넘긴다
        })
    },
}

// export default api