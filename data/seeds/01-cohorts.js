
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts').truncate() // truncate resets the id so it stops incrementing
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        {name: 'webpt3_ray'},
        {name: 'webpt3'},
        {name: 'webpt5'}
      ]);
    });
};