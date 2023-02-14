
export class SwapiService {

  _baseUrl = 'https://www.swapi.tech/api'

  async getResource(url) {
    const res = await fetch(`${this._baseUrl}${url}`)

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`)
    }

    return await res.json()
  }

  async getAllPeople() {
    const data = await this.getResource(`/people/`)
    return data.results
  }

  async getPerson(id) {
    const data = await this.getResource(`/people/${id}`)
    return data.result.properties
  }

  async getAllPlanets() {
    const data = await this.getResource(`/planets/`)
    return data.results
  }

  async getPlanet(id) {
    const data = await this.getResource(`/planets/${id}`)
    return data.result.properties
  }

  async getAllStarships() {
    const data = await this.getResource(`/starships/`)
    return data.results
  }

  async getStarship(id) {
    const data = await this.getResource(`/starships/${id}`)
    return data.result.properties
  }
}

const swapi = new SwapiService()
const data = swapi.getStarship(2)
  .then((data) => {
    console.log(data)
  })
