[![codebeat badge](https://codebeat.co/badges/218717a5-1ebb-4776-a3b8-bb247ca7916f)](https://codebeat.co/projects/github-com-e-shiels-HolidaysFinder-master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/5a66a0ecb300477ebd99f59dd2e9257b)](https://www.codacy.com/app/E-Shiels/HolidaysFinder?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=E-Shiels/HolidaysFinder&amp;utm_campaign=Badge_Grade)
[![Maintainability](https://api.codeclimate.com/v1/badges/8bb6c17f568cdf94c1a2/maintainability)](https://codeclimate.com/github/E-Shiels/HolidaysFinder/maintainability)

# HolidaysFinder #

HolidaysFinder allows you to view holidays in Canada and favorite and filter them.
It was built using React, Create React App, and Redux, as well as assorted middleware and packages. The data is sent from a Rails API backend with archived data from <https://calendarific.com/>.

## Installation ##

Clone down this repository and navigate into the program folder. Then execute the following commands:

```
$ npm install
$ cd HolidaysFinderBackend
$ bundle install
$ rake start
```

While using the app, you can find Canadian holidays (2019 only) by filtering by date and location, and filter them by observance type.

## Libraries/Tools Used ##

It uses:
* [React](https://github.com/facebook/react) as its UI framework.
* [Redux](https://github.com/reduxjs/redux) as a state container.
* [React-Router](https://github.com/ReactTraining/react-router) for declarative routing.
* [Redux Thunk](https://github.com/reduxjs/redux-thunk) for asynchronous fetch requests.
* [Material UI](https://github.com/mui-org/material-ui) for styling my React components.
* [Email Validator](https://github.com/manishsaraan/email-validator) to validate email addresses.
* [Fast Deep Equal](https://github.com/epoberezkin/fast-deep-equal) for comparisons inside componentDidUpdate.
* [React Dates](https://github.com/airbnb/react-dates) for the single-date picker
* [React Picky](https://github.com/Aidurber/react-picky) for the observance/type filter.
* [React Select](https://github.com/JedWatson/react-select) for the location selection.
* [uuid](https://github.com/kelektiv/node-uuid) to generate completely random keys for objects without IDs.
* [humanize-list](https://github.com/johno/humanize-list#readme) to make an array human-readable


## Contributing ##

Bug reports and pull requests are welcome on GitHub at <https://github.com/E-Shiels/HolidaysFinder>.
This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

## License ##

The application is available as open source under the terms of the MIT License.

## Code of Conduct ##

Everyone interacting in the HolidaysFinder project’s codebases, issue trackers,
chat rooms and mailing lists is expected to follow the code of conduct.
