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

