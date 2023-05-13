import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
import '../css/privacyConsent.css'
const Datenschutzerklaerung = (props) => {
  const { DIC } = props
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">{DIC.PRIVACY_POLICY_TITLE}</h1>
      <div className="privacy-white-block">
        <h2 className="privacy-subtitle">{DIC.PRIVACY_POLICY_SUBTITLE}</h2>
        <article className="privacy-article">
          <p>{DIC.PRIVACY_POLICY_TEXT}</p>
        </article>
      </div>
      {/* <div className="privacy-grey-block">
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
      </div> */}
    </div>
  )
}

Datenschutzerklaerung.propTypes = {
  DIC: PropTypes.shape({
    PRIVACY_POLICY_TITLE: PropTypes.string,
    PRIVACY_POLICY_SUBTITLE: PropTypes.string,
    PRIVACY_POLICY_TEXT: PropTypes.string,
    // Add more PropTypes declarations as needed
  }),
}

export default Datenschutzerklaerung
