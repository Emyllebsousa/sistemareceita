import Card from '../components/Card';
import Card2 from '../components/Card2';
import Card3 from '../components/Card3';
import Nav from '../components/Nav';
const Descrition: React.FC = () => {
  return (
    <div>
      <Nav/>
      <div className='cards'>
      <Card />
      <Card2 />
      <Card3 />
      </div>
    </div>
  );
}

export default Descrition;
