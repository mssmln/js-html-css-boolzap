// Milestone 1 --> completed
// ● Replica della grafica c on l a possibilità di avere messaggi scritti dall’utente (verdi) e
// dall’interlocutore (bianco) assegnando due classi CSS diverse
// ● Visualizzazione dinamica della lista contatti: tramite l a direttiva v-for, visualizzare nome e immagine di ogni contatto
// Milestone 2
// ● Visualizzazione dinamica dei messaggi: t ramite l a direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// ● Click sul contatto mostra l a conversazione del contatto cliccato
// Milestone 3
// ● Aggiunta di un messaggio: l ’utente scrive un testo nella parte bassa e digitando “enter” i l testo viene aggiunto al thread sopra, come messaggio verde

var app = new Vue ({
  el : '#app',
  data : {
    // arrayMessage: [], // pusho i nuovi messaggi da input tag
    bell: [
      {
        family: 'fas',
        prefix: 'fa-',
        type: 'bell'
      },
      {
        family: 'fas',
        prefix: 'fa-',
        type: 'bell-slash'
      }
    ],
    newMessage: '', // ci serve per il v-model, andrà sovrascritta
    counter: 0,
    user: {
      name: 'Massimiliano',
      avatar: '_io',
      alt: 'foto-profilo'
    },
    contacts: [
      {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [
          {
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
          }
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [
          {
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Luisa',
        avatar: '_4',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
        ],
      },
    ]
  },
  mounted(){

  },
  methods : {
    showChat(index){
      this.counter = index; // al click su li tag ci mostra il suo index
      console.log(this.counter);
    },
    getNotified(){
      alert('you have enabled desktop notifications');

    },
    // sendMessage(){
    //   this.arrayMessage.push(this.newMessage);
    //   this.newMessage = ''; // per ripulirla all'invio
    //   console.log(this.newMessage);
    //
    // },
  }

});
