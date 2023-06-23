import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

//ImgHTMLAttributes e HTMLImageElement permitem pegar todos elementos de imagem
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;  
}
//se hasBorder = true então aplica a borda
export function Avatar({hasBorder = true, ...props}: AvatarProps) {
  return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
    //spred operator para pegar todos os objetos props
    {...props}
    />
  );
}