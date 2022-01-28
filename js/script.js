
/*Partendo dal markup fornito in allegato, implementare la logica per far funzionare lo slider:
Deve essere possibile scorrere le immagini cliccando sulle freccette.
I pallini in basso devono illuminarsi in base all'immagine che sto visualizzando.
Far si che cliccando i pallini, venga selezionata l'immagine corrispondente.
Note:  scegliamo una delle due seguenti soluzioni per le freccette:
Se stiamo visualizzando la prima immagine, la freccetta di sinistra può:
scomparire
passare all'ultima immagine
Se stiamo visualizzando l'ultima immagine, la freccetta  a destra può:
scomparire
passare alla prima immagine
Siate coerenti: o scompaiono o continuano a navigare, no a soluzioni miste!!
Bonus:
1- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
2- quando il mouse va in hover sulle freccette o sui pallini l'autoplay si interrompe
3 - l'autoplay riparte quando il mouse lascia le freccette o i pallini*/

console.log('JS OK', Vue);


const app = new Vue({
    el:'#root',
    data:{
        currentIndex: 0,
        images: ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg', 'images/image4.jpg']
    },
    methods: {
    
        getCurrentIndex(index){
            return (this.currentIndex === index);
        },
        setImage(index){
            this.currentIndex = index;
            console.log(index)
        },
        nexImage(){
            if(this.currentIndex == this.images.length - 1){
                this.currentIndex = 0;
            }else{
                this.currentIndex ++;
            }
        },
        previusImage(){
            if(this.currentIndex == 0){
                this.currentIndex += this.images.length - 1;
            }else{
                this.currentIndex --;
            }
        },
        imagePlay(){
            setInterval(this.nexImage,3000);
        }
        
    },
    created (){
        this.imagePlay();
    }

    
});

