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
Holiday.create(name: "Epiphany",
    description: "Many people in Canada annually observe Epiphany, or Three Kings’ Day, on January 6. It is a Christian observance.",
    date: "2019-01-06",
    holiday_type: "Observance, Christian",
    locations: "All",
    states: "All"
)
Holiday.create(name: "Islander Day",
description: "Islander Day is a day off for many people in the province of Prince Edward Island in Canada.",
date: "2019-02-18",
holiday_type: "Common local holiday",
locations: "PE",
states:  "PE"
)
Holiday.create(name: "Family Day",
    description: "Family Day is a public holiday in the Canadian provinces of Alberta, Ontario, Saskatchewan, British Columbia, and New Brunswick.",
    date: "2019-02-18",
    holiday_type: "Common local holiday",
    locations: "AB, ON, SK, NB",
    states: "AB, ON, SK, NB")
