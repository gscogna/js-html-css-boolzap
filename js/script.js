let app = new Vue ({
    el:'#app',
    data:{
        ricercafilter:"",
        messaggioVuoto:"",
        orario: "",
        contatore:0,
        contacts: [
            {
                name: 'Michele',
                avatar: 'img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '05/02/2021 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '05/02/2021 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '05/02/2021 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: 'img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '05/02/2021 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '05/02/2021 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '05/02/2021 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {

                name: 'Ciatto',
                avatar: 'img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '05/02/2021 10:10:40',
                        text: 'Ci sei?',
                        status: 'received'
                    },
                    {
                        date: '05/02/2021 10:20:10',
                        text: 'si quando vuoi!',
                        status: 'sent'
                    },
                    {
                        date: '05/02/2021 16:15:22',
                        text: 'spiegami swift!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Pina',
                avatar: 'img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '05/02/2021 09:30:55',
                        text: 'sei uscita poi?',
                        status: 'sent'
                    },
                    {
                        date: '05/02/2021 09:32:00',
                        text: 'Come lo sai ?',
                        status: 'received'
                    },
                    {
                        date: '05/02/2021 09:34:55',
                        text: 'So sempre tutto!',
                        status: 'sent'
                    },
                    {
                        date: '05/02/2021 09:35:00',
                        text: 'Comunque niente di che',
                        status: 'received'
                    }
                ],
            },
            {

                name: 'Bruno',
                avatar: 'img/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: '05/02/2021 10:10:40',
                        text: 'Stasera esco con Ilaria',
                        status: 'received'
                    },
                    {
                        date: '05/02/2021 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '05/02/2021 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            }
        ]
    },
    created() {
        console.log(moment().locale('it').format('LT'));
        console.log(moment().format(" D/MM/YYYY, h:mm a"));
    },
    methods:{
        // funzione per cambiare indice contatti
        cambio(indice){
            this.contatore = indice ;
        },
        
        // funzione per inserire del testo nella chatbox
        addMessage(){
            if (this.messaggioVuoto.length > 0){
                let nuovoMessagio = {
                    date: moment().format(" D/MM/YYYY, h:mm a"),
                    text: this.messaggioVuoto,
                    status:'sent'
                };
                this.contacts[this.contatore].messages.push(nuovoMessagio);
                this.messaggioVuoto ='';
                setTimeout(this.rispostaAuto,1000);
            }
            
        },

        // funzione per la risposta automatica nella chatbox
        rispostaAuto(){
            let nuovoMessagio2 = {
                date: moment().format(" D/MM/YYYY, h:mm a"),
                text: 'ok',
                status: 'received'
            };
            this.contacts[this.contatore].messages.push(nuovoMessagio2);
        },

        // funzione per la ricerca automatica nella searchbar
        ricercaContatti(){
            this.contacts.forEach(element => {
                element.name.toLowerCase().includes(this.ricercafilter.toLowerCase()) ? element.visible = true : element.visible = false;
            });
        },
        
        // funzione per il dropdown 
        // deleteMessaggio(index){
        //     this.contacts.forEach((element,index) => {
        //         element.messages[index] = [];
        //     });
        // }
    },
});
