var app = new Vue({
    el: '#app',
    data: { message: 'Pasatiempos de Sofia' }
});

var pasatiempos = new Vue({
    el: '#pasatiempos',
    data(){
        return {
            bandera: false,
            bucl: [
                { id: 1, titulo: "Escribir", imagen: 'imgs/escribir.png', mostrarImagen: false},
                { id: 2, titulo: "Pintar", imagen: 'imgs/pintar.png', mostrarImagen: false},
                {id: 3, titulo: "Viajar", imagen: 'imgs/viajar.png', mostrarImagen: false},
                {id: 4, titulo: "Hiking", imagen: 'imgs/hiking.jpeg', mostrarImagen: false}
            ]
        }
    },
    methods: {
        boton(){
            this.bandera = !this.bandera;
        }
    },

    computed: {
        pasatiemposFiltrados() {
            return this.bucl.filter((t) => t.mostrarImagen)
        }
    }

});

/*

        <div id="pasatiempos">
            <ol>
                <li v-for="p in bucl" :key = "p.id">
                    <input type = "checkbox" v-model = "p.mostrarImagen">
                    <span :class="{ mostrarImagen: p.mostrarImagen }">{{ p.titulo }}</span>
        
                </li>
            </ol>
            <button type="button" class="btn btn-primary" @click="boton">
                {{ boton ? 'Mostrar imagenes seleccionadas' : 'Ocultar imagenes' }}
            </button>
            <ol>
                <li v-for ="p in pasatiemposFiltrados">
                    <img v-if = "bandera" src = "p.imagen">
                </li>
            </ol>
        </div>
*/

/*var boton_if = new Vue({
    el: '#boton_if',
    data(){
        return {
            bandera: false
        }
    },
    methods: {
        boton(){
            this.bandera = !this.bandera;
        }
    }

})

        <div id="boton_if">
            <button type="button" class="btn btn-primary" @click="boton">Mostrar imagenes</button>
            <div v-if = "bandera">Mensaje secreto</div>
        </div>
*/