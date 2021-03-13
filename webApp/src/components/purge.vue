<template>
    <div class="full-screen-wrap">
        <div class="card-standard">
            <h1>Purge "Copy of"</h1>
            <p>Get rid of that pesky "Copy of" in front of your duplicated pages in one fell swoop.</p>
            <button @click="purge" class="btn-primary">Purge Database</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Purge",
    methods: {
        purge: () => {
            fetch("http://localhost:3000/json_placeholder/databases/11af47c3d89c4afd9000518e7ff90d03/query", {
                headers: {
                    Authorization: "Bearer secret_xOLs7UclNIojYcjgJVPfco5zMciCRny5a30FNofTGxK",
                    "Content-Type": "application/json"
                },
                method: "POST"
            })
            .then(response => response.json())
            .then(data => {
                let results = data.results;
                results.forEach(page => {
                    let title = page.properties.Name.title[0].text.content;
                    let id = page.id;
                    if(title.indexOf("Copy of") !== 0) {
                        return 
                    } else {
                        title = title.replace("Copy of ", "");
                        let body = `{ "properties": { "Name": { "title": [ { "text": { "content": "${title}" } } ] } }`
                        fetch(`http://localhost:3000/json_placeholder/pages/${id}`, {
                            body: body,
                            headers: {
                                Authorization: "Bearer secret_xOLs7UclNIojYcjgJVPfco5zMciCRny5a30FNofTGxK",
                                "Content-Type": "application/json"
                            },
                            method: "PATCH"
                        })
                        .then(response => response.json())
                        .then(data => {
                            console.log(data.results)
                        })
                        .catch((e) => {
                            console.error("Error:", e)
                        })
                    }
                });
            })
            .catch((e) => {
                console.error('Error:', e);
            });
        },
    },
}
</script>

<style scoped>
    h1 {
        margin-bottom: 8px;
    }
    p {
        margin-bottom: 24px;
    }
</style>