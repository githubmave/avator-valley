exports.seed = function (knex, Promise) {
  return knex('authors').insert([
    { id: 99901, name: 'Ambitious Aardvark', email: 'aardvark@example.org' },
    { id: 99902, name: 'Bamboozled Baboon', email: 'baboon@example.org' }
  
  ])
}
