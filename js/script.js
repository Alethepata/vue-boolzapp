const {createApp} = Vue;

const dt = luxon.DateTime;

createApp({
    data(){
        return{
            contacts: [
                {
                    name: 'Michele',
                    avatar: 'img/avatar_1.jpg ',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020',
                            time: '15:30',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            time: '15:50',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            time: '16:15',
                            message: 'Tutto fatto!',
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
                            date: '20/03/2020',
                            time: ' 16:30',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020',
                            time: ' 16:30',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020',
                            time: '16:35',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: 'img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020',
                            time: ' 10:10',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020',
                            time: ' 10:20',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020',
                            time: ' 16:15',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: 'img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020',
                            time: ' 15:30',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            time: '15:50',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: 'img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020',
                            time: ' 15:30',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            time: '15:50',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: 'img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020',
                            time: ' 15:30',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            time: ' 15:50',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020',
                            time: ' 15:51',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: 'img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020',
                            time: ' 15:30',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            time: '15:50',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: 'img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020',
                            time: ' 15:30',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020',
                            time: ' 15:50',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            time: ' 15:51',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            counter:0,
            newMessages:'',
            newSearch: ''
        } 
    },
    methods:{
        enter(){
            const newMessage ={
                date: dt.now().setLocale('it').toLocaleString(dt.DATETIME),
                time: dt.now().setLocale('it').toLocaleString(dt.TIME_24_SIMPLE),
                message: this.newMessages,
                status: 'sent'
            }

            this.contacts.forEach((contact) => {
                if(newMessage.message.length > 0){
                 contact.messages.push(newMessage)
                }
                 
            });
            
            this.newMessages=''

    
            setTimeout(() =>{
                this.answer()
            },1000)
        },
        answer(){

            const answer ={
                date: dt.now().setLocale('it').toLocaleString(dt.DATETIME),
                time: dt.now().setLocale('it').toLocaleString(dt.TIME_24_SIMPLE),
                message: 'ok',
                status: 'received'
            }

            this.contacts.forEach((contact) => {
             contact.messages.push(answer)   
            });
            
        },
        search(){

            const newContacts = [...this.contacts]
            newContacts.forEach((contact)=>{
                const newName = [
                    ...contact.name
                ]
            if(!newName.join().includes(this.newSearch.split('').join())){
                  contact.visible =false
                }else if(this.newSearch === '')contact.visible =true 

            })            
                
        },
        lastMessage(contact){
            return contact.messages.at(-1).message;

        },
        lastDate(contact){
            return contact.messages.at(-1).date;

        },
        
    }
}).mount('#app')