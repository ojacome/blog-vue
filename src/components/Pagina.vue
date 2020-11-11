<template>
    <section id="content">
        <h2 class="subheader">Página</h2>
        <h3>parámetro: {{ id_desde_url }}</h3>
        <button @click="actualizarNombre()">Actualizar nombre</button>
        <h4>{{ nombre }}</h4>        
    </section>
</template>

<script>
export default {
    name: 'Pagina',
    created(){
        console.log('componente creado');
    },
    mounted() {
        this.id_desde_url = this.$route.params.id;
        console.log('componente montado');
    },
    updated() {
        console.log('compoenente actualizado');
    },
    destroyed() {
        console.log('componente eliminado');
    },
    data() {
        return {
            id_desde_url: null,
            nombre: 'olmedo'
        }
    },
    methods: {
        actualizarNombre(){
            this.nombre = 'JESÜS'           
        }
    }
}
</script>