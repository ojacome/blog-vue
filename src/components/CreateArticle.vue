<template>
    <div>
        <div class="center">
            <section id="content">
                <h2 class="subheader">Crear Artículo</h2>

                <form class="mid-form" @submit.prevent="saveArticle()">
                    <div class="form-group">
                        <label for="title">Título</label>
                        <input type="text" name="title" v-model="article.title" />
                        <div v-if="submitted && !$v.article.title.required">El titulo es requerido</div>
                    </div>

                    <div class="form-group">
                        <label for="content">Descripción</label>
                        <textarea name="content" v-model="article.content" ></textarea>
                        <div v-if="submitted && !$v.article.content.required">La descripcion es requerida</div>
                    </div>

                    <div class="form-group">
                        <label for="image">Imagen</label>
                        <input type="file" id="file" ref="file" name="image" @change="fileChange()"/>
                    </div>                    
                    <div class="clearfix"></div>
                    <input type="submit" value="Guardar" class="btn btn-success" />
                </form>
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
import ArticleModel from '../models/Article.model';
import { required } from 'vuelidate/lib/validators';



export default {
    name: 'CreateArticle',
    components: {
        Sidebar
    },
    data(){
        return {
            submitted: false,
            article: new ArticleModel('', '', null, ''),
            file: ''
        }
    },
    validations:{
        article: {
            title: {
                required
            },
            content: {
                required
            }
        }
    },
    methods: { 
        fileChange(){
            this.file = this.$refs.file.files[0];            
        },       
        saveArticle(){    
            console.log(this.article);      
            this.submitted = true;  

            this.$v.$touch();
            if(this.$v.$invalid){
                return false;
            }
            else{                
                var url = Global.url + '/articles';
                Axios.post(url, this.article)
                .then( res => {
    
                    if(res.data.status === 'success'){

                        //subida de la imagen
                        if(this.file != null && this.file != undefined && this.file != ''){
                            const formData = new FormData();
                            formData.append('image', this.file, this.file.name);
    
                            var urlImg = Global.url + '/articles/upload-image/' + res.data.article._id;
                            Axios.post(urlImg, formData)
                            .then( res =>{
                                console.log(res.data);
                                
                                this.$router.push('/blog');
                            }).catch( err => {
                                console.log(err.response.data);
                            })
                        }
                        else{
                            this.$router.push('/blog');
                        }                        
                    }
                }).catch( err => {
                    console.log(err.response.data);
                })
            }
        }
    }
}
</script>