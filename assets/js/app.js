const { createApp } = Vue

createApp({
    data() {
      return {
        message: 'Hello world!',
        image: 'https://picsum.photos/200/300'
      }
    }
}).mount('#app')






/*Stampare a schermo un messaggio all’interno di un :puntare_a_destra: h1 :puntare_a_sinistra: utilizzando una proprietá nell'oggetto restituito dalla funzione data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.*/