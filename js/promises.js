let getLastGitCommit = (username) => {
    let url = `https://api.github.com/users/${username}/events`
    return fetch(url, {headers: GIT_TOKEN})
    .then(response => response.json())
    .then(events => events.filter(event => event.type === "PushEvent"))
    .then(pushEvents => pushEvents[0].created_at.slice(0,10))
}

document.getElementById("lookitup").addEventListener("click",
        (ev) => {
        ev.preventDefault();
        let username = document.getElementById("username").value;
        getLastGitCommit(username)
            .then(date => {
                document.getElementById("output").innerText = date;
            })
    })

const wait = function (num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num)
               return resolve();
            else
               return reject();

        }, num)
    })
}
wait(1000).then(() => console.log("You'll see this after 1 second"))
wait(3000).then(() => console.log("You'll see this after 3 seconds"))

//================      BONUS       =====================//
