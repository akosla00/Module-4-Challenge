const username = document.getElementById("username");
const title = document.getElementById("title");
const content = document.getElementById("content");
const btn = document.getElementById("btn");

btn.addEventListener('click', function (event) {
    event.preventDefault();

    let blogPostArray = [];

    let blogPost = {
        username: username.value,
        title: title.value,
        content: content.value.trim(),
    };

    if (blogPost.username === '') {
        alert("Username cannot be blank.");
    } else if (blogPost.title === '') {
        alert("Title cannot be blank.");
    } else if (blogPost.content === '') {
        alert("Content cannot be blank.");
    } else {

        const blogPosts = JSON.parse(localStorage.getItem('blogPosts'));

        if (blogPosts !== null) {

            blogPostArray.push(...blogPosts, blogPost);
        } else {
            blogPostArray.push(blogPost);
        }

        localStorage.setItem("blogPosts", JSON.stringify(blogPostArray));

        window.location.replace("http://127.0.0.1:5500/index2.html");
    }

});