# Paso 1: Styled components

Instalación de Styled components: npm i @emotion/core @emotion/styled


## Paso 2: función API

Se llama a la función callAPI 

Se utiliza Async / Await + Fetch

Fetch: Fetch es el nombre de una nueva API para Javascript con la cuál podemos realizar peticiones HTTP asíncronas utilizando promesas y de forma que el código sea un poco más sencillo y menos verbose.


  const callAPI = async () => {

    const api = await fetch('http://breaking-bad-quotes.herokuapp.com/v1/quotes');
    console.log(api)


    ----------- El console log devuelte la respuesta de la url: ----------------
    Response {type: "cors", url: "http://breaking-bad-quotes.herokuapp.com/v1/quotes", redirected: false, status: 200, ok: true, …}
    body: (...)
    bodyUsed: false
    headers: Headers {}
    ok: true
    redirected: false
    status: 200
    statusText: "OK"
    type: "cors"
    url: "http://breaking-bad-quotes.herokuapp.com/v1/quotes"
    __proto__: Response
    }
    --------------------------------------------------------------------------

Para extraer la data que devuelve la API se tiene que utilizar la función .json() de javaxcript.


  const callAPI = async () => {
    const api = await fetch('http://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json()
    console.log(frase)
  }

  ------------ crear una nueva función que equivale api. al pasarle la función api.json() --------

    la promesa es:

    Promise {<pending>}
    __proto__: Promise
    [[PromiseState]]: "fulfilled"
    [[PromiseResult]]: Array(1)
    0:
    author: "Gustavo Fring"
    quote: "I hide in plain sight, same as you."
    __proto__: Object
    length: 1

  ---------------------------------------------------------------------------------------------------
 
    si le pasamos al console.log console.log(frase[0])

    entrará dentro del objeto donde está las frase y su autor y devolverá:

    author: "Gustavo Fring"
    quote: "I hide in plain sight, same as you."


  ---------------------------------------------------------------------------

  Para estraer los datos y poderlos pintar en el componente es necesario crear un useState

  - Creamos una función con un objeto vacío

  const [frase, setFrase ] = useState[{}]  

  utilizamos el nombre farse en el state, que es donde se almacenan los datos de la llamada a la API.

  Así que el astate se lo pasamos por props al componente Frase.js


  en la función setFrase la psamos frase para que modifique el State.


  --------------------------------------------------------------------------------

    En el componente Frase le pasamos por props {frase}

    En el html le pintamos:

            <h2>{frase.author}</h2>
            <p>{frase.quote}</p>
        

    --------------------------------------------------------------------------------  


    useEffect es como el document.ready. se utiliza cuando carga el componente
    cuando el componente esté listo se llama a la API.


      useEffect( () =>{
        callAPI()
      }, [])

      como dependencias se le pase un array vacío. y cuando este componente carge se va a consultar la API de forma automática. 


