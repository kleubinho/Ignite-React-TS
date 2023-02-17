// JSX = JavaSciprt + XML (HTML)
import styles from "./App.module.css";
import { Post } from "./components/Post";
import { Header } from "./components/Header";

import "./global.css";
import { Siderbar } from "./components/Siderbar";

// author: {avatar_url: "", name: "", role: "" }
// publisheAt: Date
// content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https:github.com/kleubinho.png",
      name: "Kleber Henrique",
      role: "Junior Pippa",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-08-06 21:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https:github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Pleno",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-08-1 18:20:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Siderbar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

//o metódo forEach percorre o array porém não possui retorno
