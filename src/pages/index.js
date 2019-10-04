import React from 'react'
import { Circle } from 'rc-progress'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Anchor } from '../components/Anchor'
import impreuna from '../../static/images/impreuna-white.svg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { Partners } from '../components/Partners'
import citizen from '../../static/images/citizen-symbol.svg'
import civicnet from '../../static/images/civicnet.png'
import { projects } from '../data/projects'
const IndexPage = () => (
  <Layout>
    <SEO title="Acasa" />
    <div className={'page-header home'}>
      <img src={impreuna} alt="" />
      <h1>
        continuăm digitalizarea
        <br />
        serviciilor publice
      </h1>
      <div className={'call-to-action transparent'}>
        <div className={'button green'}>
          <Anchor href="/members">Alătură-ne</Anchor>

          <Anchor href="/projects">Vezi proiecte</Anchor>
        </div>
      </div>
    </div>

    <div className={'container'}>
      <div id={'who'}>
        <h1>CINE SUNTEM</h1>
        <Tabs>
          <TabList>
            <Tab>POVESTEA</Tab>
            <Tab>MISIUNEA & VIZIUNEA</Tab>
            <Tab>PRINCIPII</Tab>
          </TabList>

          <TabPanel>
            <p>
              Lansat în primăvara lui 2017, Civictech Romania a pornit ca un start-up non-guvernamental și non-profit,
              fondat fiind de ex-bursieri GovITHub. Ne-am propus să continuăm, alături de parteneri ai societății
              civile, proiecte care să aducă România mai aproape de viziunea care ne unește.
            </p>

            <p>
              După mai bine de doi ani de activitate si crestere susținută, în 2019, Civictech Romania evolueaza catre
              ceea ce numele nostru a intuit neintentionat inca de la bun inceput: o viitoare federatie de organizatii
              care au in misiune o Romanie informatizata si conectata prin digitalizare.
            </p>

            <p>
              Citizen Next și CivicNet au devenit astfel primele organizatii co-fondatoare ale viitoarei federatiei si
              continuatoarele viziunii si misiunii Civictech Romania. Lansam astfel invitatia catre toate organizatiile
              care lucreaza la proiecte civice de digitalizare sa ni se alature. Impreuna, ca parteneri egali, vrem sa
              dezvoltam aceasta federatie, sa ii definim noua identitate si sa ii crestem impactul in societate.
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              <span className="brand">
                CivicTech<sup>RO</sup>
              </span>{' '}
              urmărește viziunea unei societăți românești deschise, transparente și conectate prin servicii publice
              digitale.
            </p>

            <p>
              Prin dialog cu cetățenii și parteneriate cu instituții publice, companii private și organizații non-profit
              vrem să definim, dezvoltăm și împreună cu voi să lansăm soluții digitale eficiente și prietenoase pentru
              serviciile publice românești, bazate pe interoperabilitate și tehnologii open source.
            </p>
          </TabPanel>
          <TabPanel>
            <h2 className="principles">Cetățean</h2>
            <p>
              Abordarea oricărui proiect începe din perspectiva cetățenilor. Primul pas va fi întotdeauna să aflăm care
              sunt nevoile și greutățile întampinate de ei. Tot ce facem reprezintă o îmbunătățire cuantificabilă în
              experiența de a fi cetățean.
            </p>
            <h2 className="principles">Independență</h2>
            <p>
              Suntem o organizație independentă condusă de membrii ei printr-un proces decizional participativ și
              deschis.
            </p>
            <h2 className="principles">Valori civice</h2>
            <p>
              Credem în egalitate și responsabilitatea tuturor oamenilor din societate, indiferent de educație, venituri
              sau ocupație. Credem în demnitate, în mai bine și în binele comun.
            </p>
            <h2 className="principles">Inovație</h2>
            <p>
              Credem în potențialului unei comunități de specialiști organizate, care să reprezinte o punte de legătură
              și de transfer de cunoştinţe şi informaţii între instituţii şi organizaţii, pentru a crește capacitatea şi
              performanţa de inovare în administrație.
            </p>
            <h2 className="principles">Colaborare</h2>
            <p>
              Cu cine putem și trebuie să colaborăm pe acest proiect?” este prima intrebare pe care ne-o punem atunci
              cand ne apucăm de treabă. Împreună putem să facem mai multe, mai bine și mai repede.
            </p>
            <h2 className="principles">Transparență</h2>
            <p>
              Credem într-o societate bazată pe transparența decizională și de organizare. Vrem să fim un exemplu de
              urmat pentru cei ce vor ca informațiile publice să fie ușor de accesat.
            </p>
            <h2 className="principles">Energie pozitivă</h2>
            <p>
              Vrem să redăm încrederea partenerilor noștri că nevoile lor pot găsi răspunsuri pozitive, deschise și
              oneste. Ne dorim asta de la toți membrii comunității{' '}
              <span className="brand">
                CivicTech<sup>RO</sup>
              </span>
            </p>
            <h2 className="principles">Comunitate</h2>
            <p>
              Suntem o comunitate de profesioniști diversă, reunită în jurul viziunii unei Românii cu cetățeni
              responsabili, harnici, implicați și motivați. Invităm orice persoană care vrea să își dedice competențele
              acestei viziuni să ni se alăture.
            </p>
            <h2 className="principles">Hărnicie</h2>
            <p>
              Ne dedicam proiectelor în care suntem implicați și viziunii asumate. Atunci când răsplata e atingerea
              acestei viziuni, hărnicia de care dăm dovadă are o importanță deosebită.
            </p>
          </TabPanel>
        </Tabs>
      </div>
    </div>

    <div className="call-to-action green">
      <div id="members">
        <div className={'container'}>
          <div className={'call-to-action__content'}>
            <h1>ORGANIZAȚII MEMBRE</h1>
            <div className="logos">
              <Anchor href="https://citizennext.ro" title="Citizen Next">
                <img src={citizen} alt="Citizen Next" height="70" />
              </Anchor>
              <Anchor href="https://civicnet.ro" title="CivicNet">
                <img src={civicnet} alt="CivicNet" height="50" />
              </Anchor>
            </div>
            <div className={'button full'}>
              <Anchor href="mailto:office@civictech.ro">Alătură-ne</Anchor>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className={'container'}>
      <div id={'projects'}>
        <h1>PROIECTE</h1>
        <p>
          Proiectele{' '}
          <span className="brand">
            CivicTech<sup>RO</sup>
          </span>{' '}
          sunt construite cu responsabilitate și respect pentru cetățean și sunt implementate la nivel național și local
          alături de organizații partenere care sprijină și promovează digitalizarea serviciilor publice. Iată câteva
          dintre proiectele la care lucrăm:
        </p>
        <div className="row">
          {projects.map(({ img, title, url, client, clientLogo, percent }) => (
            <div className="col-4 col-12-sm rounded">
              <img src={img} alt={title} width="100%" />

              <div className="progress">
                <div className="details">
                  <h2 className="projects">{title}</h2>
                </div>
                <div className="circle">
                  <strong>{percent}%</strong>
                  <span>progres</span>
                  <Circle percent={percent} strokeWidth="4" trailWidth="4" strokeColor="#009999" trailColor="#D3D3D3" />
                </div>
              </div>
              <div className="client">
                <img src={clientLogo} alt={client} height="30" />
                <span>{client}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className={'call-to-action'} id="partners">
      <div className={'container'}>
        <div className={'call-to-action__content'}>
          <h1>PARTENERI</h1>
          <p>
            Ne onorează să colaborăm cu cei care împărtășesc principiile{' '}
            <span className="brand">
              CivicTech<sup>RO</sup>
            </span>{' '}
            și viziunea unei societăți digitale eficiente. Alături de instituții publice, companii private, organizații
            non-guvernamentale și grupuri de inițiativă civică lucrăm pentru a construi împreună soluții digitale cu
            impact direct pentru cetățeni și societate.
          </p>
          <Partners />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
