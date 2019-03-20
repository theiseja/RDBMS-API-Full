
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {name: 'Steve', cohort_id: 1},
        {name: 'Nick', cohort_id: 2},
        {name: 'Jen', cohort_id: 3},
        {name: 'Amy', cohort_id: 4},
        {name: 'Kelly', cohort_id: 5},
        {name: 'Stan', cohort_id: 6},
        {name: 'Courtney', cohort_id: 7}
      ]);
    });
};
