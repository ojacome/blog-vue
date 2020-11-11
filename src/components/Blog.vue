<template>
    <div>
        <Slider
        texto="Blog"/>
        <div class="center">
            <section id="content">
                <h2 class="subheader">Blog</h2>
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
    name: 'Blog',
    components: {
        Slider,
        Sidebar
    }
}
</script>