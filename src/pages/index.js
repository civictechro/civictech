import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Circle } from 'rc-progress'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Anchor } from '../components/Anchor'
import impreuna from '../../static/images/impreuna-white.svg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import citizen from '../../static/images/citizennext.svg'
import civicnet from '../../static/images/civicnet.svg'
import { projects } from '../data/projects'

const IndexPage = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query projectImages {
        allFile(filter: { absolutePath: { regex: "/projects/" } }) {
          nodes {
            childImageSharp {
              fluid(maxWidth: 350, maxHeight: 122, traceSVG: { color: "rgb(40, 149, 149)", threshold: 50 }) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
            name
          }
        }
      }
    `,
  )
  return (
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
            <Anchor href="/#members">Alătură-te</Anchor>

            <Anchor href="/#projects">Vezi proiecte</Anchor>
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
                Lansat în primăvara lui 2017, Civictech România a pornit ca un start-up neguvernamental și nonprofit,
                fondat fiind de ex-bursieri <Anchor href="https://ithub.gov.ro">GovITHub</Anchor>. Ne-am propus să
                continuăm, alături de parteneri ai societății civile, proiecte care să aducă România mai aproape de
                viziunea care ne unește.
              </p>

              <p>
                După mai bine de doi ani de activitate si crestere susținută, în 2019, Civictech România evoluează către
                ceea ce numele nostru a intuit neintenționat încă de la bun început: o viitoare federație de organizații
                care au în misiune o Românie informatizată și conectată prin digitalizare.
              </p>

              <p>
                Citizen Next și CivicNet au devenit astfel primele organizații cofondatoare ale viitoarei federații și
                continuatoarele viziunii și misiunii Civictech România. Lansăm astfel invitația către toate
                organizațiile care lucrează la proiecte civice de digitalizare să ni se alăture. Împreună, ca parteneri
                egali, vrem să dezvoltăm această federație, să îi definim noua identitate și să îi creștem impactul în
                societate.
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                Civictech România urmărește viziunea unei societăți românești deschise, transparente și conectate prin
                servicii publice digitale.
              </p>

              <p>
                Prin dialog cu cetățenii și parteneriate cu instituții publice, companii private și organizații non
                profit vrem să definim, dezvoltăm și împreună cu voi să lansăm soluții digitale eficiente și prietenoase
                pentru serviciile publice românești, bazate pe interoperabilitate și tehnologii open source.
              </p>
            </TabPanel>
            <TabPanel>
              <h2 className="principles">Cetățean</h2>
              <p>
                Abordarea oricărui proiect începe din perspectiva cetățenilor. Primul pas va fi întotdeauna să aflăm
                care sunt nevoile și greutățile întampinate de ei. Tot ce facem reprezintă o îmbunătățire cuantificabilă
                în experiența de a fi cetățean.
              </p>
              <h2 className="principles">Independență</h2>
              <p>
                Suntem o organizație independentă condusă de membrii ei printr-un proces decizional participativ și
                deschis.
              </p>
              <h2 className="principles">Valori civice</h2>
              <p>
                Credem în egalitate și responsabilitatea tuturor oamenilor din societate, indiferent de educație,
                venituri sau ocupație. Credem în demnitate, în mai bine și în binele comun.
              </p>
              <h2 className="principles">Inovație</h2>
              <p>
                Credem în potențialului unei comunități de specialiști organizate, care să reprezinte o punte de
                legătură și de transfer de cunoştinţe şi informaţii între instituţii şi organizaţii, pentru a crește
                capacitatea şi performanţa de inovare în administrație.
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
                oneste. Ne dorim asta de la toți membrii comunității Civictech România
              </p>
              <h2 className="principles">Comunitate</h2>
              <p>
                Suntem o comunitate de profesioniști diversă, reunită în jurul viziunii unei Românii cu cetățeni
                responsabili, harnici, implicați și motivați. Invităm orice persoană care vrea să își dedice
                competențele acestei viziuni să ni se alăture.
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

      <div className="call-to-action green" id="members">
        <div>
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
                <Anchor href="mailto:office@civictech.ro">Alătură-te</Anchor>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={'container'}>
        <div id={'projects'}>
          <h1>PROIECTE</h1>
          <p>
            Proiectele Civictech România sunt construite cu responsabilitate și respect pentru cetățean și sunt
            implementate la nivel național și local alături de organizații partenere care sprijină și promovează
            digitalizarea serviciilor publice. Iată câteva dintre proiectele la care lucrăm:
          </p>
          <div className="row">
            {projects.map(({ name, title, url, member, memberLogo, percent }, index) => {
              const node = allFile.nodes.find(node => node.name === name)
              return (
                <div className="col-4 col-12-sm project rounded" key={index}>
                  <Img fluid={node.childImageSharp.fluid} />
                  <div className="progress">
                    <div className="details">
                      <h2 className="project-title">{title}</h2>
                    </div>
                    <div className="circle">
                      <strong>{percent}%</strong>
                      <span>progres</span>
                      <Circle
                        percent={percent}
                        strokeWidth="4"
                        trailWidth="4"
                        strokeColor="#009999"
                        trailColor="#D3D3D3"
                      />
                    </div>
                  </div>
                  <a href={url} title={`${title}, un proiect ${member}`}>
                    <div className="client">
                      Un proiect <img src={memberLogo} alt={member} width="100" />
                    </div>
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
