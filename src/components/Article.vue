<template>
    <div>
        <div class="center">
            <section id="content">                
                <article class="article-item article-detail" v-if="article">
                    <div class="image-wrap">
                        <img :src="'http://localhost:3900/api/articles/get-image/'+ article.image" :alt="article.title" v-if="article.image"/>
                        <img src="../assets/img/no-img.png" :alt="article.title" v-if="!article.image"/>
                    </div>

                    <h1 class="subheader">{{article.title }}</h1>
                    <span class="date">
                        {{article.date | moment("from","now")}}
                    </span>
                    <p>
                        {{article.content}}
                    </p>

                    <div class="clearfix"></div>
                </article>
            </section>
            </div>
            <Sidebar/>        
        <div class="clearfix"></div>
    </div>
</template>

<script>
import Sidebar from './shared/Sidebar';
import Axios from 'axios';
import {Global} from '../Global';



export default {
    name: 'Article',
    components: {
        Sidebar,
    },
    mounted(){
        var articleId = this.$route.params.id;
        this.getArticle(articleId);
    },
    data(){
        return {
            article: null
        }
    },
    methods: {
        getArticle(articleId){
            var url = Global.url + '/articles/article/'+ articleId;
            Axios.get(url)
            .then( res => {

                if(res.data.status === 'success'){
                    this.article = res.data.article
                    // console.log(this.article);
                }
            }).catch( err => {
                console.log(err);
            })
        }
    }
}
</script>