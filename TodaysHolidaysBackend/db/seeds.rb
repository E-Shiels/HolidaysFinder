# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Holiday.create(name: "New Year's Day",
    description: "New Year's Day is the first day of a new year according to the Gregorian calendar used in Canada and many other countries.",
    date: "2019-01-01",
    holiday_type: "National holiday",
    locations: "All",
    states: "All"
)
