<template>
    <div class="wrap">
        <div class="test-card">
            <h1>Test me out, baby!</h1>
            <p>Check me out, try the thing. <br> I’m a test to see if you suck at dev (spoilers, you do)</p>
            <button @click="apiTest" class="btn-primary">Make an API call</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "APItest",
    methods: {
        apiTest: () => {
            let checkTitle = (obj) => {
                obj.properties.Name.title[0].text.content.indexOf("Copy of");
            }
            fetch("http://localhost:3000/json_placeholder/databases/11af47c3d89c4afd9000518e7ff90d03/query", {
                headers: {
                    Authorization: "Bearer secret_xOLs7UclNIojYcjgJVPfco5zMciCRny5a30FNofTGxK",
                    "Content-Type": "application/json"
                },
                method: "POST"
            })
            .then(response => response.json())
            .then(data => data.results.forEach(page => console.log(checkTitle(page))))
            .catch((error) => {
                console.error('Error:', error);
            });
        },
    },
}
</script>

<style scoped>
    .wrap {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0px 16px;
    }
    .test-card {
        padding: 40px 56px;
        border-radius: 3px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: white;
        box-shadow: 0px 4px 12px rgba(55, 53, 47, 0.1);
        text-align: center;
    }
    h1 {
        margin-bottom: 8px;
    }
    p {
        margin-bottom: 24px;
    }
</style>