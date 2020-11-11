<template>
    <div>
        <Slider texto="Ejercicios con Formulario"/>
        <div class="center">
            <section id="content">
                <h2 class="subheader">Formulario</h2>
            </section>
            </div>
            <Sidebar/>        
        <div class="clearfix"></div>
    </div>
</template>

<script>
import Sidebar from './shared/Sidebar';
import Slider from './shared/Slider';



export default {
    name: 'Formulario',
    components: {
        Slider,
        Sidebar
    }
}
</script>