const backBtn = document.getElementById("back-btn");
const themeToggle = document.getElementById("theme-toggle");
const rootEl = document.getElementById("root");

//back button to go to previous page
backBtn.addEventListener('click', function (event) {
    event.preventDefault();

    window.location.href = "./index.html";
});

isToggled = false;

//button to switch between light mode/dark mode
themeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    isToggled = !isToggled;
    if (isToggled) {
        themeToggle.textContent = "Light Mode";
    } else {
        themeToggle.textContent = "Dark Mode";
    }

});

//puts blog posts onto main
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
    })


}

renderBlogPost();
