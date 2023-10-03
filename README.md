# vue-boolzapp

**Milestone 1**

- Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse

- Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

1. ricreare l'html

2. creare un array di oggetti con:
    - nome
    - avatar
    - messaggi:

         - data
         - testo 
         - stato del messaggio

3. stampare il nome e l'avatar tramite un ciclo v-for 

#

**Milestone 2**

- Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione

- Click sul contatto mostra la conversazione del contatto cliccato

1. faccio due cicli for in due div: 
  
  - al div padre v-for 'contact in contacts'
  - al div figlio v-for 'message in contact.messages'

2. creo :class :

  - se lo status del messaggio è sent verrà aggiunta la classe sent
  - se lo status del messaggio è received verrà aggiunta la classe received


