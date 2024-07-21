import Nav from '@/app/components/Nav';
import style from '@/app/style/sobre.module.css'
export default function Sobre() {
  return (
   
    
    <div className={style.sobre}>
<Nav/>
        <h1> Sobre</h1>

<h4>Bem-vindo ao Receitas Web!</h4>

<p>
No Receitas Web, nossa missão é trazer inspiração culinária para sua cozinha. Fundado em 2024, nosso site oferece uma coleção diversificada de receitas fáceis e deliciosas, projetadas para cozinheiros de todos os níveis.
<br />
<br />
 O que Oferecemos
 <br />
<br />
<strong> -Receitas Diversas:</strong> Desde pratos principais a sobremesas, temos algo para todos. <br />
<strong> - Instruções Simples:</strong>Passo a passo para garantir sucesso na cozinha. <br />
<strong> - Dicas Úteis:</strong>Truques para melhorar suas habilidades culinárias. <br />
<br />

Nossa Visão
<br />
<br />
Queremos tornar a cozinha uma experiência divertida e gratificante. Explore nossas receitas e descubra o prazer de cozinhar e compartilhar refeições!
</p>
    </div>
  );
}
