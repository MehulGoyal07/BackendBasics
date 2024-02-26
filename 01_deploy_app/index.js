require("dotenv").config();
const express = require("express");

const app = express();

const port = 3000;

const githubData = {
  login: "MehulGoyal07",
  id: 111576588,
  node_id: "U_kgDOBqaGDA",
  avatar_url: "https://avatars.githubusercontent.com/u/111576588?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/MehulGoyal07",
  html_url: "https://github.com/MehulGoyal07",
  followers_url: "https://api.github.com/users/MehulGoyal07/followers",
  following_url:
    "https://api.github.com/users/MehulGoyal07/following{/other_user}",
  gists_url: "https://api.github.com/users/MehulGoyal07/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/MehulGoyal07/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/MehulGoyal07/subscriptions",
  organizations_url: "https://api.github.com/users/MehulGoyal07/orgs",
  repos_url: "https://api.github.com/users/MehulGoyal07/repos",
  events_url: "https://api.github.com/users/MehulGoyal07/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/MehulGoyal07/received_events",
  type: "User",
  site_admin: false,
  name: "MEHUL GOYAL",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 2,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2022-08-19T12:26:27Z",
  updated_at: "2024-02-26T00:43:55Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("mehuldotcom");
});

app.get("/login", (req, res) => {
  res.send("<h1>Revising Backend with Chai</h1>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${port}`);
});
