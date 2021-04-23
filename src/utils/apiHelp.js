import useFetch from "use-http"

async function post(url, data, setup = { mask: true }) {
    const { get, post, response, loading, error } = useFetch("https://www.google.com")
    const config = this.getRequestHeader();
    const rep = await post(url, data)
    if (response.ok) {

    }
}


function succese(params) {

}