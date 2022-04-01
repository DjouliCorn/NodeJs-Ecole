import products from './products/index.mjs'

export default {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'ESGI API',
    description: 'ESGI API Rest',
    constact: {
      name: 'ESGI Contacts',
      email: 'info@esgi.fr',
      url: 'https://esgi.fr'
    }
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Local server'
    }
  ],
  paths: {
    ...products.paths
  },
  components: {
    schemas: {
      ...products.schema
    }
  }
}
