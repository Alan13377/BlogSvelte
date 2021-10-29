const fetch = require("node-fetch");
const fs = require("fs");
let postsObj = require("../routes/blog/_post.json");
require("dotenv").config();

const API = process.env.GHOST_API;

const writeFile = (obj) => {
  const parseData = JSON.stringify(obj);
  fs.writeFileSync("./src/routes/blog/_post.json", parseData);
  console.log("Datos guardados");
};

const fetchData = async () => {
  const response = await fetch(API);
  const data = await response.json();
  const posts = await data.posts.map((post) => ({
    ...post,
    title: post.title,
    html: post.html,
    slug: post.slug,
    createdAt: post.created_at,
    id: post.id,
    desc: post.excerpt,
    image: post.feature_image,
  }));

  if (postsObj.length >= 15) {
    if (posts[0].title === postsObj[0].title) {
      postsObj.shift();
      postsObj.unshift(posts[0]);
      writeFile(postsObj);
    } else {
      postsObj.unshift(posts[0]);
      writeFile(postsObj);
    }
  } else {
    writeFile(posts);
  }
};

fetchData();
