import style from '../style/Card.module.css';

const Card3: React.FC = () => {
  return (
    <div className={style.card}>
      <h2>Salada Caprese</h2>
      <img src="https://th.bing.com/th/id/R.0e7630f65c5e4fb775fdb723cee9428b?rik=3nlDm35KKiqYGw&pid=ImgRaw&r=0" alt="Salada Caprese" width={400} height={300} />
      <h3>Ingredientes:</h3>
      <ul>
        <li>3 tomates maduros</li>
        <li>200g de queijo mussarela de búfala</li>
        <li>Folhas de manjericão fresco</li>
        <li>2 colheres de sopa de azeite de oliva</li>
        <li>Sal e pimenta a gosto</li>
        <li>Vinagre balsâmico (opcional)</li>
      </ul>
      <h3>Instruções:</h3>
      <ol>
        <li>Corte os tomates e o queijo mussarela em fatias.</li>
        <li>Arrume as fatias de tomate e queijo alternadamente em um prato de servir.</li>
        <li>Espalhe as folhas de manjericão sobre as fatias de tomate e queijo.</li>
        <li>Regue com azeite de oliva e tempere com sal e pimenta a gosto.</li>
        <li>Se desejar, adicione um pouco de vinagre balsâmico por cima.</li>
        <li>Sirva imediatamente.</li>
      </ol>
      <p><strong>Dica:</strong> Para uma apresentação mais bonita, você pode usar tomates de cores diferentes, como amarelos e vermelhos.</p>
    </div>
  );
};

export default Card3;
