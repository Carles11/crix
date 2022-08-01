import React from 'react'
import { Link } from 'react-router-dom'
import '../css/privacyConsent.css'

const Datenschutzerklaerung = () => {
  return (
    <div>
      <h1 className="privacy-title">DATENSCHUTZERKLÄRUNG</h1>
      <div className="privacy-white-block">
        <h2 className="privacy-subtitle">Allgemeine Datenschutzerklärung</h2>
        <article className="privacy-article">
          Durch die Nutzung unserer Website erklären Sie sich mit der Erhebung,
          Verarbeitung und Nutzung von Daten gemäß der nachfolgenden
          Beschreibung einverstanden. Unsere Website kann grundsätzlich ohne
          Registrierung besucht werden. Dabei werden Daten wie beispielsweise
          aufgerufene Seiten bzw. Namen der abgerufenen Datei, Datum und Uhrzeit
          zu statistischen Zwecken auf dem Server gespeichert, ohne dass diese
          Daten unmittelbar auf Ihre Person bezogen werden. Personenbezogene
          Daten, insbesondere Name, Adresse oder E-Mail-Adresse werden soweit
          möglich auf freiwilliger Basis erhoben. Ohne Ihre Einwilligung erfolgt
          keine Weitergabe der Daten an Dritte.
        </article>
      </div>
      <div className="privacy-grey-block">
        <h2 className="privacy-subtitle">
          Datenschutzerklärung für Google Analytics
        </h2>
        <article className="privacy-article">
          Unsere Website verwendet Google Analytics, einen Webanalysedienst von
          Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.
          Zur Deaktivierung von Google Analytiscs stellt Google unter{' '}
          <Link to="http://tools.google.com/dlpage/gaoptout?hl=de">
            http://tools.google.com/dlpage/gaoptout?hl=de
          </Link>{' '}
          ein Browser-Plug-In zur Verfügung. Google Analytics verwendet Cookies.
          Das sind kleine Textdateien, die es möglich machen, auf dem Endgerät
          des Nutzers spezifische, auf den Nutzer bezogene Informationen zu
          speichern. Diese ermöglichen eine Analyse der Nutzung unseres
          Websiteangebotes durch Google. Die durch den Cookie erfassten
          Informationen über die Nutzung unserer Seiten (einschließlich Ihrer
          IP-Adresse) werden in der Regel an einen Server von Google in den USA
          übertragen und dort gespeichert. Wir weisen darauf hin, dass auf
          dieser Website Google Analytics um den Code „gat._anonymizeIp();“
          erweitert wurde, um eine anonymisierte Erfassung von IP-Adressen (sog.
          IP-Masking) zu gewährleisten. Ist die Anonymisierung aktiv, kürzt
          Google IP-Adressen innerhalb von Mitgliedstaaten der Europäischen
          Union oder in anderen Vertragsstaaten des Abkommens über den
          Europäischen Wirtschaftsraum, weswegen keine Rückschlüsse auf Ihre
          Identität möglich sind. Nur in Ausnahmefällen wird die volle
          IP-Adresse an einen Server von Google in den USA übertragen und dort
          gekürzt. Google beachtet die Datenschutzbestimmungen des „Privacy
          Shield“-Abkommens und ist beim „Privacy Shield“-Programm des
          US-Handelsministeriums registriert und nutzt die gesammelten
          Informationen, um die Nutzung unserer Websites auszuwerten, Berichte
          für uns diesbezüglich zu verfassen und andere diesbezügliche
          Dienstleistungen an uns zu erbringen. Mehr erfahren Sie unter{' '}
          <Link to="http://www.google.com/intl/de/analytics/privacyoverview.html">
            {' '}
            http://www.google.com/intl/de/analytics/privacyoverview.html.
          </Link>
        </article>
      </div>
    </div>
  )
}

export default Datenschutzerklaerung
