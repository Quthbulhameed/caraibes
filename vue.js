var app = new Vue({
    el: '#app',
    data() {
        return {
            id: null,
            nbcouchage: null,
            porte: null,
            etage: null,
            idcategorie: null,
            baignoire: null,
            prixbase: null,
        }
    },
    methods: {
        ajax: function (id, event) {
            axios({
                method: 'get',
                // a changer
                url: 'http://127.0.0.1:5000/chambres/' + id,
                responseType: 'json',
            })
                .then(async res => {
                    if (res.status === 200) {
                        // a changer pour obtneir le tableau de data
                        this.id = res.data.id;
                        this.nbcouchage = res.data.nbcouchage;
                        this.porte = res.data.porte;
                        this.etage = res.data.etage;
                        this.idcategorie = res.data.idcategorie;
                        this.baignoire = res.data.baignoire;
                        this.prixbase = res.data.prixbase;

                    } else if (res.status === 400) {
                        let errorResponse = await res.json();
                        this.errors.push(errorResponse.error);
                    }
                });
        }
    }
})
