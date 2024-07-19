import style from '../style/Card.module.css';

const Card: React.FC = () => {
  return (
    <div className={style.card}>
      <h2>Lasanha de Carne</h2>
      <img src="https://th.bing.com/th/id/R.1d79f3494a45b6cf63f308f0bdb6ba9d?rik=ovJu%2brw1ddIP3A&pid=ImgRaw&r=0" alt="Lasagna de Carne" width={400} height={300} />
      <h3>Ingredientes:</h3>
      <ul>
        <li>500g de carne moída</li>
        <li>1 cebola picada</li>
        <li>2 dentes de alho picados</li>
        <li>2 latas de molho de tomate</li>
        <li>250g de massa para lasagna</li>
        <li>500g de queijo muçarela ralado</li>
        <li>100g de queijo parmesão ralado</li>
        <li>2 colheres de sopa de azeite de oliva</li>
        <li>Sal e pimenta a gosto</li>
      </ul>
      <h3>Instruções:</h3>
      <ol>
        <li>Pré-aqueça o forno a 180°C.</li>
        <li>Em uma panela grande, aqueça o azeite e refogue a cebola e o alho até ficarem macios.</li>
        <li>Adicione a carne moída e cozinhe até dourar.</li>
        <li>Adicione o molho de tomate, tempere com sal e pimenta, e deixe cozinhar por 20 minutos.</li>
        <li>Em uma forma, coloque uma camada de molho, seguida de uma camada de massa, depois uma camada de queijo muçarela. Repita as camadas até acabar os ingredientes.</li>
        <li>Finalize com uma camada de molho e queijo parmesão por cima.</li>
        <li>Leve ao forno pré-aquecido e asse por 45 minutos ou até dourar.</li>
        <li>Deixe descansar por 10 minutos antes de servir.</li>
      </ol>
      <p><strong>Dica:</strong> Adicione folhas de manjericão fresco entre as camadas para um sabor extra.</p>
    </div>
  );
};

export default Card;
