import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps{
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    })
  }

  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="./src/assets/neuber.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Capirôneuber Rocha</strong>
              <time title="22 de Abril ás 03:12h" dateTime="2023-04-11 03-13-38"> Acerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
         <button onClick={handleLikeComment}>
          <ThumbsUp />
          Aplaudir <span>{likeCount}</span>
         </button>
        </footer>
       </div>
    </div>
  );
}