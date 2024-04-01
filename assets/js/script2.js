const backBtn = document.getElementById("back-btn");
const themeToggle = document.getElementById("theme-toggle");
const rootEl = document.getElementById("root");


backBtn.addEventListener('click', function (event) {
    event.preventDefault();

    window.location.replace("http://127.0.0.1:5500/index.html");
});

isToggled = false;

themeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    isToggled = !isToggled;
    if (isToggled) {
        themeToggle.textContent = "Light Mode";
    } else {
        themeToggle.textContent = "Dark Mode";
    }

});

function renderBlogPost() {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts'));
    blogPosts.forEach(function (blogPost) {
        const titleEl = document.createElement("h2");
        const contentEl = document.createElement("p");
        const usernameEl = document.createElement("p");
        const blogPostEl = document.createElement("div");
        titleEl.textContent = blogPost.title;
        contentEl.textContent = blogPost.content;
        usernameEl.textContent = ("- " + blogPost.username);
        blogPostEl.appendChild(titleEl);
        blogPostEl.appendChild(contentEl);
        blogPostEl.appendChild(usernameEl);
        blogPostEl.classList.add("blog-post");
        rootEl.appendChild(blogPostEl);
        console.log(this);
    })


}

renderBlogPost();
