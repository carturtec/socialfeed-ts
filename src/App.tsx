
import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';


import styles from './App.module.css';
import './global.css';

//author:{avatarUrl: "", name: "", role:""}
//publishedAt: Date
//content: String

const posts: PostType[] = [
  {
    id: 1,
    author: {
    avatarUrl: './src/assets/neuber.png',
    name: 'Neuber Rocha',
    role: 'Eng. Civil'
  },
  content: [
    {type: 'paragraph', content: 'the readable content of a page when looking at its layout. The points'},
    {type: 'paragraph', content: 'the readable content of a page when looking at its layout. The points'}, 
    {type: 'link', content: 'using Lorem Ipsum is that it has a more-or-less normal distributions'},
   ],
   publishedAt: new Date('2023-04-29 04:00:00'), 
  },
  {
    id: 2,
    author: {
    avatarUrl: './src/assets/mam.png',
    name: 'Ferdimam Jr',
    role: 'Veterinário'
  },
  content: [
    {type: 'paragraph', content: 'the franz ferdiamam readable content of a page when looking at its layout. The points'},
    {type: 'paragraph', content: 'ferdimam the readable content of a page when looking at its layout. The points'}, 
    {type: 'link', content: 'using neuber Lorem Ipsum is that it has a more-or-less normal distributions'},
   ],
   publishedAt: new Date('2023-04-30 05:05:00'), 
 },
];

export function App() {
  return (
    <div>
     <Header />
     <div className={styles.wrapper}>
      <Sidebar />
      <main>
         {posts.map(post => {
          return (
            
            <Post 
                key={post.id}
                post={post}
            />
          )          
         })}
      </main>
     </div>
    </div>
  )
}

 
