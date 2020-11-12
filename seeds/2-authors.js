exports.seed = function (knex, Promise) {
  return knex('authors').insert([
    { id: 1, name: 'Ambitious Aardvark', email: 'aardvark@example.org' },
    { id: 2, name: 'Bamboozled Baboon', email: 'baboon@example.org' }
  
  ])
}
