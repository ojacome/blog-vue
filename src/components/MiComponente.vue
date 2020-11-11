<template>
    <div>
        <section id="content">
        <h1>Este es mi componente</h1>
        <h2>{{ subtitulo }}</h2>
        </section>
    </div>
</template>



<script>
export default {
    name: 'MiComponente',
    data(){
        return {
            subtitulo: 'Subtitulo desde otro componente'
        }
    }
}
</script>