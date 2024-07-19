import style from '../style/Card.module.css';

const Card2: React.FC = () => {
  return (
    <div className={style.card}>
      <h2>Frango Assado com Ervas</h2>
      <img src="https://th.bing.com/th/id/OIP.coXZiWccUHOsoj49vwijigHaEd?rs=1&pid=ImgDetMain" alt="Frango Assado" width={400} height={300} />
      <h3>Ingredientes:</h3>
      <ul>
        <li>1 frango inteiro (aproximadamente 1,5 kg)</li>
        <li>4 dentes de alho picados</li>
        <li>2 colheres de sopa de azeite de oliva</li>
        <li>Suco de 1 limão</li>
        <li>1 colher de sopa de alecrim fresco</li>
        <li>1 colher de sopa de tomilho fresco</li>
        <li>Sal e pimenta a gosto</li>
      </ul>
      <h3>Instruções:</h3>
      <ol>
        <li>Pré-aqueça o forno a 200°C.</li>
        <li>Lave e seque o frango. Coloque-o em uma assadeira.</li>
        <li>Em uma tigela pequena, misture o alho picado, azeite de oliva, suco de limão, alecrim, tomilho, sal e pimenta.</li>
        <li>Esfregue a mistura de temperos por todo o frango, garantindo que fique bem coberto.</li>
        <li>Coloque o frango no forno pré-aquecido e asse por aproximadamente 1 hora e 30 minutos, ou até que a pele esteja dourada e crocante e o frango esteja completamente cozido.</li>
        <li>Retire o frango do forno e deixe descansar por 10 minutos antes de cortar.</li>
      </ol>
      <p><strong>Dica:</strong> Para um toque extra de sabor, você pode colocar algumas fatias de limão e ramos de ervas dentro da cavidade do frango antes de assar.</p>
    </div>
  );
};

export default Card2;
