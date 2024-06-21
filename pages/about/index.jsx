import Header from "@/components/Header";
import style from "@/styles/about-us.module.css";
const AboutUs = () => {
  return (
    <>
      <Header page="about-us" />
      <div className={style.container}>
        {/* <h2 className={style.title}>
        <em>ÜBER UNS</em>
      </h2> */}
        <p className={style.paragraph}>
          Österreich ist einer der bedeutendsten Kultur- und
          Tourismusgemeinschaften Europas, und ein soziales Land, in dem
          Menschen unterschiedlichster Herkunft in Frieden leben. Die Zahl der
          hier in Österreich lebenden türkischen Migranten liegt über dem
          europäischen Durchschnitt. Eine aussichtsreiche und gelungene Zukunft
          dieser Menschen, kann nur mit einer gelungenen Bildung, der
          kulturellen und sozialen Bindung an Österreich, sowie der gelebten
          Integration der Werte, der Österreichischen Gesellschaft, im täglichen
          Leben, erreicht werden.
        </p>
        <p className={style.paragraph}>
          Um dieser Vision nachzugehen, haben sich Vereinsmitglieder in der
          österreichischen Bundeshauptstadt unter dem Dach des Vereines AKM
          Anadolu Kültür Merkezi getroffen. Dieser Verein ist ein gemeinnütziger
          und den Behörden bekannter Verein.
        </p>
        <p className={style.paragraph}>
          Der Verein veranstaltet Aktivitäten im Bereich der Kultur, dem Sport
          sowie in Themen der Integration. Sie setzt Veranstaltungen zur
          Anpassung von Zuwanderern um. Die Eröffnung von internationalen
          Sprachkursen, Kunst- und Kulturkursen, Information von Schülern über
          ihre berufliche und schulischen oder außerschulische
          Weiterbildungsmöglichkeiten, Förderung des Dialogs zwischen türkischer
          und österreichischer Kultur und Organisation dieser Rahmenprogramme,
          dienen zu den Zielen und Schwerpunkten des Vereins.
        </p>
        <p className={style.paragraph}>
          Wir bezwecken Kindern und Jugendlichen in der Schule zu helfen, diese
          Gruppe bestmöglich in ihrer außerschulischen Bildung zu unterstützen.
          Äußerst wichtig ist uns das gute Zusammenleben in der Österreichischen
          Gesellschaft und die Verbreitung des friedvollen Miteinanders in
          Solidarität unter allen in Österreich lebenden Menschen.
        </p>
        <p className={style.paragraph}>
          Die Eröffnung von Kindergärten, der Schutz der pluralistischen
          Gesellschaft samt der Kultur und Traditionen, die Hilfe für Menschen
          in Not sind unsere Motivation.
        </p>
        <p className={style.paragraph}>
          Um diese Ziele zu erreichen, organisieren wir regelmäßig soziale,
          kulturelle Veranstaltungen sowie Aktivitäten im Bereich der Bildung.
        </p>
      </div>
    </>
  );
};

export default AboutUs;
