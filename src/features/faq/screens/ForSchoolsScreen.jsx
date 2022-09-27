/* eslint-disable prettier/prettier */
import React from "react";
import PropTypes from "prop-types";
// import { useHistory } from "react-router-dom";
import ScreenWrapper from "./ScreenWrapper";

const Screen = (props) => {
  const { isOpenDyslexicActive } = props;
  // const history = useHistory();
  return (
    <ScreenWrapper
      title="FOR-SCHOOLS-TITLE"
      isOpenDyslexicActive={isOpenDyslexicActive}
    >
      <>
        Vilnius-Lithuania iGEM 2021 komanda kviečia <span className="color">papildyti ugdymo turinį</span>,
        susijusį su molekulinės biologijos pagrindais, biotechnologijomis,
        inžinerija, imunitetu, mikroorganizmais bei nagrinėti su COVID-19
        pandemija susijusias aktualijas pasitelkiant mūsų kurtus 
        <span className="color"> papildytos realybės modelius</span>.
        <br /><br />
        <span className="color"><b>Informacinis paketas</b></span>
        <br />
        Kad būtų lengviau įtraukti naują įrankį į mokyklos kasdienybę,
        paruošėme Informacinį paketą, kuriame trumpai aprašytas
        kiekvienas modelis bei nurodomos temos, kurioms paaiškinti
        galima pasitelkti konkretų modelį. Spauskite
        <a
          href="../assets/informacija.pdf"
          target="_blank"
          rel="noreferrer"
        >
         &nbsp;čia
        </a>,
        kad atidarytumėte.
        <br /><br />
        <span className="color"><b>Pamokų planai</b></span>
        <br />
        Taip pat visus modelius galima suskirstyti į 3 pagrindines temas - sintetinė biologija,
        DNR ir RNR reikšmė baltymų sintezėje, imunitetas. Kiekvienai iš šių temų paruošėme pamokų planus.
        Įvado į sintetinę biologiją planas yra išsamesnis, kartu pridėtas konspektas, praktinė užduotis.
        <br /><br />
        Pamokos DNR ir RNR reikšmė baltymų sintezėje planas (atsisiųsti
        <a
          href="../assets/dnr_rnr_pamoka.pdf"
          target="_blank"
          rel="noreferrer"
        >
         &nbsp;čia
        </a>),
        iliustracijos (atsisiųsti <a
          href="../assets/dnr_rnr_iliustracijos.zip"
          target="_blank"
          rel="noreferrer"
        >
         čia
        </a>).
        <br /><br />
        Pamokos Imunitetas ir biotechnologijos planas (atsisiųsti 
        <a
          href="../assets/imunitetas_pamoka.pdf"
          target="_blank"
          rel="noreferrer"
        >
         &nbsp;čia
        </a>),
        iliustracijos (atsisiųsti
          <a
            href="../assets/imunitetas_iliustracijos.zip"
            target="_blank"
            rel="noreferrer"
          >
          &nbsp;čia
          </a>). 
        <br /><br />
        Pamokos Įvadas į sintetinę biologiją planas (atsisiųsti 
          <a
          href="../assets/sinbio_pamoka.pdf"
          target="_blank"
          rel="noreferrer"
        >
         &nbsp;čia
        </a>
        ), iliustracijos (atsisiųsti <a
            href="../assets/sinbio_iliustracijos.zip"
            target="_blank"
            rel="noreferrer"
          >
          čia
          </a>).
        <br /><br />
        Šios pamokos įgyvendinimui paruošėme <span className="color">skaidres</span>, spauskite <a
            href="../assets/skaidres.pptx"
            target="_blank"
            rel="noreferrer"
          >
          čia
          </a>,
        kad atsisiųstumėte. Taip pat pagal pateiktą planą ir skaidres, įrašėme video pamoką,
        spauskite <a
            href="https://youtu.be/i9InzVc1UT8"
            target="_blank"
            rel="noreferrer"
          >
          čia
          </a>, kad peržiūrėtumėte.
        <br /><br />
        <span className="color"><b>Grįžtamasis ryšys</b></span>
        <br />
        Išbandžius papildytos realybės modelius, kviečiame palikti grįžtamąjį ryšį.
        Spauskite
        <a
          href="https://forms.gle/fotMuUU5m7dyXgZ36"
          target="_blank"
          rel="noreferrer"
        >
         &nbsp;čia&nbsp;
        </a>
        norėdami atidaryti grįžtamojo ryšio anketą. 

      </>
    </ScreenWrapper>
  );
};

export default Screen;

Screen.propTypes = {
  isOpenDyslexicActive: PropTypes.bool.isRequired,
};
