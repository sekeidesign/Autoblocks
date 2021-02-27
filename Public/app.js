fetch("https://api.notion.com/v1/databases/11af47c3d89c4afd9000518e7ff90d03/query", {
  "method": "POST",
  "headers": {
    "cookie": "__cfduid=dafb52d1fc8538d461cbaa60710c098241614035967",
    "Authorization": "Bearer secret_xOLs7UclNIojYcjgJVPfco5zMciCRny5a30FNofTGxK",
    "Content-Type": "application/json"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});