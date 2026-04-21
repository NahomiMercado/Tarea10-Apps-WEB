const { createApp } = Vue;

const app = createApp({
    data() {
        return {
        chuck:[
                {
                    icon_url: "https://picsum.photos/300/200?random=1",
                    value: "Chuck Norris can skydive into outer space."
                },
                {
                    icon_url: "https://picsum.photos/300/200?random=2",
                    value: "The chief export of Chuck Norris is pain."
                },
                {
                    icon_url: "https://picsum.photos/300/200?random=3",
                    value: "Chuck Norris doesn't read books. He stares them down until he gets the information he wants."
                },
                {
                    icon_url: "https://picsum.photos/300/200?random=4",
                    value: "Time waits for no man. Unless that man is Chuck Norris."
                },
                {
                    icon_url: "https://picsum.photos/300/200?random=5",
                    value: "If you spell Chuck Norris in Scrabble, you win. Forever."
                }
            ]
        } 
    }
});


// 🔥 COMPONENTE
app.component('chuck-card', {
  props: ['icon_url', 'value'],

    template: `
    <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
        <div class="card h-100 shadow">
        <img :src="icon_url" class="card-img-top" alt="Random Image">
        <div class="card-body">
            <h5 class="card-title text-center text-purple">Chuck Joke</h5>
            <p class="card-text">{{ value }}</p>
        </div>
        </div>
    </div>
    `
});

app.mount("#app");

