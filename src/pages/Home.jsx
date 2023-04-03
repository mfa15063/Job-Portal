import { IonContent, IonPage } from '@ionic/react';
import Rocket from '../components/Rocket';
import Header from '../components/Header';
import './Home.scss';

const Home = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <Rocket />
      </IonContent>
    </IonPage>
  );
};

export default Home;
