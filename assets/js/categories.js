---
---

//Grabs the categories from the data file and creates a list of them
const categories = {
  {% for category in site.categories %}
  {% capture category_name %}{{ category | first }}{% endcapture %}
  {{ category_name }}: [
    {% for post in site.categories[category_name] %}
    {
      url: `{{ site.baseurl }}{{ post.url }}`,
      date: `{{post.date | date_to_string}}`,
      title: `{{post.title}}`
    },
    {% endfor %}
  ],
  {% endfor %}
};

//Grabs the artists from the data file and creates a list of them
// const artists = {
//   {% for i in site.data.author.artists %}
//   {{ i.name }}: {
//     url: `{{ i.url }}`,
//     about: `{{i.about}}`,
//     title: `{{i.name}}`
//   },
//   {% endfor %}
// };

window.onload = function () {
  document.querySelectorAll(".category").forEach((category) => {
    category.addEventListener("click", function (e) {
      const posts = categories[e.target.innerText];
      let html = ``
      posts.forEach(post=>{
        html += `
        <a class="modal-article" href="${post.url}">  
          <h4>${post.title}</h4>
          <small class="modal-article-date">${post.date}</small>
        </a>
        `
      })
      document.querySelector("#category-modal-title").innerText = e.target.innerText;
      document.querySelector("#category-modal-content").innerHTML = html;
      document.querySelector("#category-modal-bg").classList.toggle("open");
      document.querySelector("#category-modal").classList.toggle("open");
    });
  });

  document.querySelector("#category-modal-bg").addEventListener("click", function(){
    document.querySelector("#category-modal-title").innerText = "";
    document.querySelector("#category-modal-content").innerHTML = "";
    document.querySelector("#category-modal-bg").classList.toggle("open");
    document.querySelector("#category-modal").classList.toggle("open");
  })
};