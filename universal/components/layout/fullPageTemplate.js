import Head from "next/head";
import Button from "react-bootstrap/lib/Button";

export default ({ children, title = "GQLCodeTranslator" }) => (
  <div id="globalWrapper" style={styles.globalWrapper}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
        crossOrigin="anonymous"
      />
    </Head>
    <header style={styles.header}>
        <h1 style={styles.logo}>GQLCodeTranslator</h1>
        <h1>Kiwi test app</h1>
    </header>
    <div>
      {children}
    </div> 
    <footer style={styles.footer}></footer>
  </div>
);

const styles = {
  globalWrapper:{
    paddingLeft: "60px",
    paddingRight: "60px"
  },
  header:{
    height: "120px",
    paddingTop: "10px",
    marginBottom: "60px"
  },
  logo: {
    fontWeight: "bold",
    fontSize: "54px",
    color: "#00ad98"
  },
  footer: {
    float: "left",
    width: "100%"
  }
};
