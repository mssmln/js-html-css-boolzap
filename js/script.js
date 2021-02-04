// Milestone 1 --> completed
// ● Replica della grafica c on l a possibilità di avere messaggi scritti dall’utente (verdi) e
// dall’interlocutore (bianco) assegnando due classi CSS diverse
// ● Visualizzazione dinamica della lista contatti: tramite l a direttiva v-for, visualizzare nome e immagine di ogni contatto
// Milestone 2
// ● Visualizzazione dinamica dei messaggi: t ramite l a direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// ● Click sul contatto mostra l a conversazione del contatto cliccato
// Milestone 3
// ● Aggiunta di un messaggio: l ’utente scrive un testo nella parte bassa e digitando “enter” i l testo viene aggiunto al thread sopra, come messaggio verde
// ● Risposta dall’interlocutore: a d ogni inserimento di un messaggio, l ’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
// Milestone 4
// ● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti i l cui nome contiene l e lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
// Milestone 5 - opzionale
// ● Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato.
// Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti
// stampiamo l'orario solo l'orario di invio nel messaggio e non tutta la data (che mostreremo solo per i messaggi più vecchi di un giorno!) :calendar:
// quando il nostro utente ci sta scrivendo la risposta, scriviamo al posto di "Ultimo messaggio..." un bel "Sta scrivendo..."

var app = new Vue ({
  el : '#app',
  data : {
    notificheAttive: false,
    newMessage: '', // ci serve per il v-model, andrà sovrascritta
    newSearch: '', // ci serve per filtrare le chat con v-model
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
      if (!this.notificheAttive) {
        alert('you have disabled desktop notifications');
        this.notificheAttive = true;
      } else  {
        alert('you have enabled desktop notifications');
        this.notificheAttive = false;
      }
      console.log(this.notificheAttive);
    },
    sendMessage(){
      const typeMessage = { // serve un nuovo oggetto da unirsi assieme agli altri con le stesse chiavi
        // date: dayjs.localeData, // con dayjs
        date: moment().format('DD/MM/YYYY h:mm:ss '), // con momentjs
        text: this.newMessage,
        status: 'sent'
      };
      if (this.newMessage.length > 0) {
        this.contacts[this.counter].messages.push(typeMessage);
        console.log(this.contacts[this.counter].messages);
      }
      this.newMessage = ''; // per ripulire la input

      setTimeout(() => {
        const autoMessage = {
          date: moment().format('DD/MM/YYYY h:mm:ss '),
          text: 'okay',
          status: 'received'
        };
        console.log(autoMessage);
        this.contacts[this.counter].messages.push(autoMessage);
        console.log(this.contacts[this.counter].messages);
      }, 1000);
    },
    filtraChat(){
      this.contacts.forEach((item, i) => {
        (item.name.includes(this.newSearch)) ? item.visible = true : item.visible = false ;
      });
    },
  }

});
