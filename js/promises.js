const getLastGitCommit = function () {
fetch('https://api.github.com/users/calebewheeler/events', {headers: GIT_TOKEN})
    .then(response => {
        // console.log(response.json())
        return response.json();
    })
    .then(data => {
        console.log(data[0].created_at.slice(0,10))
        return data[0].created_at.slice(0,10);
    })
}
getLastGitCommit();

const wait = function (num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num)
                resolve();
            else
                reject();

        }, num)
    })
}
wait(1000).then(() => console.log("You'll see this after 1 second"))
wait(3000).then(() => console.log("You'll see this after 3 seconds"))