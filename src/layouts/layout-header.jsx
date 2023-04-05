import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import Home from "../pages/Home";
import { IonContent, IonPage } from "@ionic/react";
import { Route } from "react-router";

function LayoutWithHeader() {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <Outlet />
        <Footer />
      </IonContent>
    </IonPage>
  );
}

export default LayoutWithHeader;
