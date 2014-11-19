# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
school_list = [
  ['high school high', 'school in the city'],
  ['another school', 'its in the country'],
  ['magnet school', 'all magnets all the time']
]

school_list.each do |name, description|
  School.create(name: name, description: description)
end


