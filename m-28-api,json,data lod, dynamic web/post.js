 const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then((res) => res.json())
    .then((json) => {
        console.log(json);
        displayPost(json);
    });
};

// const displayPost = (posts) => {

//     // 1. get the container
//     const postContainer = document.getElementById("post-container");
//     postContainer.innerHTML = "";

//    posts.forEach(post => {
//     // console.log(post.title);

//     // 2. create element
//     const li = document.createElement("li");
//     li.innerText = post.title;
//     console.log(li);

//     // 3. add li into container
//     postContainer.appendChild(li);
//    });
// };


// {
//     "userId": 10,
//     "id": 97,
//     "title": "quas fugiat ut perspiciatis vero provident",
//     "body": "eum non blanditiis soluta porro quibusdam voluptas\nvel         voluptatem qui placeat dolores qui velit aut\nvel inventore aut cumque culpa explicabo aliquid at\nperspiciatis est et voluptatem dignissimos dolor itaque sit nam"
// }

const displayPost = (posts) => {
    // 1.get the container 
    const postContainer = document.getElementById("post-container");
    postContainer.innerHTML = "";

    posts.forEach((post) => {
        // 2. create element 
        const postCard = document.createElement("div");
        postCard.innerHTML = `
        <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
        `
        // 3. add to the container
        postContainer.appendChild(postCard)
    });
}
loadPost();