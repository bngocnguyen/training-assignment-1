import axios from 'axios';

const today = new Date().toLocaleDateString('en-CA');

const uri = "https://newsapi.org/v2/everything?q=ps5&from=" + today + "&sortBy=publishedAt&language=en&apiKey=b1201dc50f924d7fa410c0994583bdd1";

// state
export const state = () => ({
    articles: []
})

// getters
export const getters = {
    getArticleBySlug: (state) => (slug) => {
        return state.articles.find(article => (article.title.replace(/\s+/g, '-').toLowerCase()) == slug)
    },
    allArticles: state => state.articles
}

// actions
export const actions = {
    async getArticles({ commit }) {
        const result = await axios.get(uri)
        commit("setArticles", result.data.articles)
    }
}

// mutations
export const mutations = {
    setArticles: (state, articles) => state.articles = articles
}
