# Documentación Solinfo

# Objetivos
- Configurar ApolloServer con PostgresQL
- Crear tabla de documentos
- Crear aplicación en angular 
- Configurar ApolloClient con Angular
- Crear una aplicación que permita ver una lista de todos los documentos en la base de datos
- Debe permitir crear documentos nuevos
- Debe permitir mirar el detalle de cada documento y editarlo
- Debe permitir borrar documentos
- Debe mostrar los documentos importantes primeros



# Requerimientos
- Usar GraphQL, Apollo y Angular
- Usar los patrones y arquitectura de desarrollo establecidos 
- Configurar el routing de angular
- Usar Reactive Forms para los formularios
- Usar Apollo Link State para el estado del front end
- Usar RxJS Observables
- Usar JS es6



# Recursos

**GraphQL**

    // types.graphql
    
    type TipeDeObjeto {
      Propiedad: Tipo(Int, String, etc..)
    }
    
    type Query {
      nombreDelQUery: ResultadoDelQuery
      # Ejemplo
    }
    
    type Mutation {
      nombreDeMutation: ResultadoDeMutation
    }
    
    // resolvers.js
    
    {
      Query: {
        nombreDelQuery: () => { función para traer los datos }
      }
      Muration: {
        nombreDeMutation: () => { función para modificar los datos }
      }
    }
    
    

[Ver documentación de GraphQL](https://graphql.org/learn/)



----------


## Server

**ApolloServer**

[Descargar repositorio](https://github.com/Ruizoft/apolloServer) 


    const server = new ApolloServer(
      { 
        typeDefs, 
        resolvers, 
      });
      
      server.listen()
      

[Ver documentación ApolloServer](https://www.apollographql.com/docs/apollo-server/)


**Correr la aplicación - Una vez que se configure el servidor** 

se necesita [Docker](https://www.docker.com/)
se necesita [Docker Compose](https://docs.docker.com/compose/)


    cd /PATH/TO/DIRECTORY
    docker-compose up

Con esto tendrás acceso a:

- localhost:4000 (GraphQL Server)
- Localhost:4001 (PGAdmin)
  - email: daniel.solinfo@gmail.com contraseña: solinfo123
- Localhost:5234 (PostgresQL)





----------


## WebApp

[Descargar repositorio](https://github.com/Ruizoft/ngapollo)

**ApolloClient**

    // app.module.ts
    
    boost.create({
          uri: 'http://localhost:4000/graphql',
          clientState: {
            defaults,
            resolvers,
            typeDefs,
          },
        });


[Ver documentación ApolloClient](https://www.apollographql.com/docs/angular/)

[Ver documentación Angular Router](https://angular.io/guide/router)

[Ver documentación Angular Reactive Forms](https://angular.io/guide/reactive-forms)


**Arquitectura**


    - src // folder con la aplicación
      - app // folder con el modulo principal de angular
        app.module.ts // modulo principal angular
        app.component.ts // componente principal
        typeDefs.ts
        resolvers.ts
        defaultState.ts
      - OtroModulo // Otro modulo en pascal case (omitir la palabra modulo o module) componente que maneja el estado
        - SubComponente1 // Definir otros componetes de vista o Dump components
          sub.component.ts // logica de vista
          sub.html // Template
          sub.scss // Estilos
        - SubComponente2 // Definir otros componetes de vista o Dump components
        otro.module.ts // Modulo que maneja su propio estado
        otro.component.ts // Componente principal del nuevo modulo
        otro.html // Template
        otro.scss // Estilos
        otro.service.ts // Servicio para llamados a GraphQL y manipulaciónde datos
        resolvers.ts // Resolvers GraphQL/Apollo
        defaultState.ts // Estado inicial 
        typeDefs.graphql // Definición de tipos GraphQL
          queries.graphql // Queries & Mutations GraphQL
        
        



**Correr la aplicación**

    cd /PATH/TO/DIRECTORY
    docker-compose up

Con esto tendrás acceso a:

- localhost:3001 (Angular App con Hot Module Reloading)



