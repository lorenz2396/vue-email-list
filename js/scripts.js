const { createApp } = Vue;


createApp ({
    data(){
        return {
            emaiList : [],
        }
    },
    created(){
        for(let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')  // il metodo è gia un a promise
            .then((res) => {
                console.log(res.data.response, i);

                this.emaiList.push(res.data.response);

                if(this.emaiList.lenght == 10){
                    console.log('Finito il ciclo')
                }
            });
        }
    }

}).mount('#app');



