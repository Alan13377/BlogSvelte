const fetch = require("node-fetch");
const fs = require("fs");
let postObj = require("../routes/blog/_post.json");
require("dotenv").config();

const API = process.env.GHOST_API;
