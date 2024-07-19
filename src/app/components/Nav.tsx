import style from '@/app/style/Nav.module.css'

const Nav: React.FC = () => {
    return (
<main className={style.menu}>
  <ul>
    <li><a href="/">Inicio</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/descrition">Receitas</a></li>
 </ul>
</main>
    );
}
export default Nav;
