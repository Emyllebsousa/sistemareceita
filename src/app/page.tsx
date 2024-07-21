import Nav from '@/app/components/Nav';
import style from '@/app/style/Inicio.module.css';

export default function Home() {
  return (
    <div className={style.inicio}>
      <Nav />
      <h1>receitas web</h1>
    </div>
  );
}
