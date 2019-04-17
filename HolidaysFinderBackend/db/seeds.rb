# JSON file importing technique from https://stackoverflow.com/questions/40942569/parsing-from-a-json-file-in-ruby-and-extract-numbers-from-nested-hashes

File.open('C:\Users\erics\Documents\Coding and Programming\HolidaysFinder\HolidaysFinder Git\HolidaysFinder\src\data.json') do |f|
  data = JSON.parse(f.read)
  data['holidays'].each do |holiday|
    Holiday.create(name: holiday['name'],
      description: holiday['description'],
      date: holiday['date']['iso'],
      holiday_type: holiday['type'].join(', '),
      locations: holiday['locations'],
      states: holiday['states'].class == String ? holiday['states'] : holiday['states'] .map { |state| state['name'].gsub(/[^\w\s]/, '').strip }.join(', '))
  end
end
