# gqlCodeTranslator
# Test issue for Kiwi 
* Stack: next.js, GraphQL, Apollo, Recompose, MongoDB, Mongoose, Express, Formik..

* Popis aplikace: SSR aplikace na frameworku Next.JS. Jako backend-to-client a zaroven state management pouzita kombinace
serveru GraphQL a klienta Apollo. Pro modely na serveru pouzita kombinace MongoDB a Mongoose. Pro handlovani HOC pouzita knihovna Recompose.
Pro formular jsem pouzil skvelou knihovnu Formik.
* Aplikace se nejprve vyrenderuje na serveru s listem jiz historicky zadanych frazi a nasledne funguje universalne, kdy si komponenty volaji sva
data v zavislosti na GQL wrapperu. Po odeslani ciselne fraze skrze mutaci na serveru - kde probehne jeji preklad na pismena - (soubor translator.js),
se po resolve mutace dane promis jednak preposle obsah nove fraze do zobrazovaci komponenty, druhak probehne refetch query historie frazi. Pro handle
chyb ci loadingu pri nezajisteni dat (a pro dalsi HOC ala compose) jsem pouzil knihovnu Recompose.
* Na aplikaci jsem pouzil muj prozatim oblibeny stack RNG. 

* Jak rozebehnout: git pull, npm install, npm run dev :-)