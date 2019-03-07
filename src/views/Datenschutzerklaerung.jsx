import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Title = styled.h1`
  font-family: Montserrat;
  font-size: 2.6em;
  text-align: center;
  margin: auto;
  color: silver;
  margin-top: 80px;
`;
const Subtitle = styled.h2`
  font-family: Montserrat;
  font-size: 2em;
  text-align: center;
  margin: auto;
  color: silver;
  padding-top: 4%;
  padding-bottom: 2%;
`;
const Grey_block = styled.section`
  background-color: #f4f4f4;
  color: silver;
  min-height: 750px;
  position: relative;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 600px) {
    min-height: 450px;
  }
  @media only screen and (max-width: 800px) {
    min-height: 500px;
  }
`;
const White_block = styled.section`
  background-color: white;
  color: silver;
  min-height: 650px;
  position: relative;
  width: 100%;
  @media only screen and (max-width: 600px) {
    min-height: 450px;
  }
  @media only screen and (max-width: 800px) {
    min-height: 500px;
  }
`;
const Article = styled.article`
  font-family: Montserrat;
  font-size: 1.2em;
  text-align: center;
  margin: auto;
  color: silver;
  max-width: 60%;
  text-align: justify;
  letter-spacing: 3px;
  line-height: 1.8;

  @media only screen and (max-width: 600px) {
    font-size: 0.8em;
    max-width: 90%;
    letter-spacing: 1px;
    line-height: 1;
  }
  @media only screen and (max-width: 800px) {
    font-size: 1em;
    max-width: 75%;
    letter-spacing: 2px;
    line-height: 1.3;
  }
`;

const Datenschutzerklaerung = () => {
    return (
      <div>
        <Header />
        <Title>DATENSCHUTZERKLÄRUNG</Title>
        <White_block>
                <Subtitle>Allgemeine Datenschutzerklärung</Subtitle>
          <Article>
            Durch die Nutzung unserer Website erklären Sie sich mit der Erhebung, Verarbeitung und
            Nutzung von Daten gemäß der nachfolgenden Beschreibung
            einverstanden. Unsere Website kann grundsätzlich ohne
            Registrierung besucht werden. Dabei werden Daten wie
            beispielsweise aufgerufene Seiten bzw. Namen der abgerufenen
            Datei, Datum und Uhrzeit zu statistischen Zwecken auf dem Server
            gespeichert, ohne dass diese Daten unmittelbar auf Ihre Person
            bezogen werden. Personenbezogene Daten, insbesondere Name,
            Adresse oder E-Mail-Adresse werden soweit möglich auf
            freiwilliger Basis erhoben. Ohne Ihre Einwilligung erfolgt keine
            Weitergabe der Daten an Dritte. 
          </Article>
        </White_block>
        <Grey_block>
                <Subtitle>Datenschutzerklärung für Google Analytics</Subtitle>
            <Article>
                Unsere Website verwendet Google Analytics, einen
                Webanalysedienst von Google Inc., 1600 Amphitheatre Parkway,
                Mountain View, CA 94043, USA. Zur Deaktivierung von Google
                Analytiscs stellt Google unter <Link to="http://tools.google.com/dlpage/gaoptout?hl=de"> 
                http://tools.google.com/dlpage/gaoptout?hl=de</Link> ein Browser-Plug-In zur Verfügung. Google Analytics verwendet
                Cookies. Das sind kleine Textdateien, die es möglich machen, auf
                dem Endgerät des Nutzers spezifische, auf den Nutzer bezogene
                Informationen zu speichern. Diese ermöglichen eine Analyse der
                Nutzung unseres Websiteangebotes durch Google. Die durch den
                Cookie erfassten Informationen über die Nutzung unserer Seiten
                (einschließlich Ihrer IP-Adresse) werden in der Regel an einen
                Server von Google in den USA übertragen und dort gespeichert.
                Wir weisen darauf hin, dass auf dieser Website Google Analytics
                um den Code „gat._anonymizeIp();“ erweitert wurde, um eine
                anonymisierte Erfassung von IP-Adressen (sog. IP-Masking) zu
                gewährleisten. Ist die Anonymisierung aktiv, kürzt Google
                IP-Adressen innerhalb von Mitgliedstaaten der Europäischen Union
                oder in anderen Vertragsstaaten des Abkommens über den
                Europäischen Wirtschaftsraum, weswegen keine Rückschlüsse auf
                Ihre Identität möglich sind. Nur in Ausnahmefällen wird die
                volle IP-Adresse an einen Server von Google in den USA
                übertragen und dort gekürzt. Google beachtet die
                Datenschutzbestimmungen des „Privacy Shield“-Abkommens und ist
                beim „Privacy Shield“-Programm des US-Handelsministeriums
                registriert und nutzt die gesammelten Informationen, um die
                Nutzung unserer Websites auszuwerten, Berichte für uns
                diesbezüglich zu verfassen und andere diesbezügliche
                Dienstleistungen an uns zu erbringen. Mehr erfahren Sie unter <Link to="http://www.google.com/intl/de/analytics/privacyoverview.html"> http://www.google.com/intl/de/analytics/privacyoverview.html.</Link>
            </Article>
        </Grey_block>
        <Footer />
      </div>
    );
};

export default Datenschutzerklaerung;