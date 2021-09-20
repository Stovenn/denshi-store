<p align="center">
  <img src="https://media.gcflearnfree.org/content/55e0730c7dd48174331f5164_01_17_2014/whatisacomputer_mac.jpg" width="320" alt="Denshi store Logo" />
  <h1>Denshi store</h1>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


An electronic shop inventory API developed with [Nest](https://github.com/nestjs/nest) framework.

## Installation

```bash
$ npm install
```

## Running the app

```bash
$ docker compose up
```

## Utilisation
Once lauched, the API listens on localhost 5200.

### Get all products:  
  GET http://localhost:5200/products
  
### Get all categories:  
  GET http://localhost:5200/products/categories
  
### Get one product:  
  GET http://localhost:5200/products/:id
  
### Create a product:  
  POST http://localhost:5200/products/  
  
  Example body for product creation:  
  ```
  {  
    "name": "sample name",  
    "category": "Empty",  
    "sku": "abcdef",  
    "price": 100,  
    "quantity": 10  
  }
  ```
  
  **!Important: The field 'category' should either be : 'Empty', 'Smartphones', 'Computers', 'Tablets' or 'Games'.  
  Any other value will set the field to 'Empty'**
  
### Update a product:  
  PATCH http://localhost:5200/products/:id
  
### Delete a product:  
  DELETE http://localhost:5200/products/:id


## Test

```bash
# unit tests
$ npm run test

```

## Stay in touch

- Author - [Jonathan Sylvestre](https://github.com/Stovenn)

