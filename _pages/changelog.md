---
layout: page
title: What's New
include_in_header: true
---

# Changelog

<br>

### `Latest`
# Version 0.3.1 (2020-03-29)

#### New Features

- Added support for metric units and non-USD currency
- Added support for languages besides English, French translation added so far
- Created a proper "about" screen with auToDo info

#### Bugfixes

- Improved the setup process for new users with multiple cars
- Fixed issues with local trial data storage
- Restored Statistics page functionality

<br>

### Version 0.3.0 (2020-02-19)

First release for iOS beta!

#### Bugfixes

- Ads are properly cleared on the paid version in all screens
- fixed issue with swiping away ToDos crashing app

<br>

### `Public Beta Release`
## Version 0.2.0 (2020-02-03)

First release to the public beta!

#### New Features

- Added ads on the home screen
- Added the option to pay a one time fee of $2.99 to remove the ads permanently.

<br>

### `Alpha Releases`
### Version 0.1.9 (2020-02-02)
Variety of bugfixes for the signup process.

#### Bugfixes

- Restored the ability to reset account password
- Restored the ability to reach new account setup screen after email validation
- Restored the ability to switch between login and signup screens

<br>

### Version 0.1.8 (2020-01-26)

Improved a variety of minor UX annoyances.

#### Bugfixes

- Autocomplete fields won't clear contents when selecting an item no
- Move the date picker icon so it is reachable
- Show completed ToDo items as completed, rather than "upcoming"
- Configuring multiple cars in the new user setup screen actually adds all cars
- Removed ability to bypass email verification on signup screen
- Added back the dialog for email verification

#### Improvements

- Repeating tasks now show the car they are associated with
- The snackbar that displays when signing in stays until the process completes
- Users with < 4 cars can use a set of toggle buttons for selecting a car in the refueling add/edit screen
- Removed dead link to old repeat editor screen

<br>

### Version 0.1.7 (2020-01-20)

Hotfix for bug found in user testing where a previously signed-in user could not access the home screen.

<br>

### Version 0.1.6 (2020-01-19)

No visible changes.

Added the BILLING permission to the app to allow for the future addition of in-app permissions.

<br>

### Version 0.1.5 (2020-01-18)

Major overhaul of the app's business logic, so the number of noticeable bugs should be much lower than before.

#### New Features

- Trial option on signup, uses local phone storage with no need to create an account.

#### Bugfixes

- Text overflowing on Todo Cards
- Todo items are not created for repeating tasks
- Couldn't open the add/edit screens multiple times

<br>

### Version 0.1.4 (2019-12-01)

Improvements targeted at improving the sign up and sign in UX.

#### New features

- Forgot Password button
- Email Verification for new accounts

#### Bug fixes

- Keyboard's "next" and "done" buttons implemented
- Missing and broken form validation fixed

<br>

### Version 0.1.3 (2019-11-24)

auToDo is now doing a much better job of keeping statistics on your car's refueling history. You can view these stats in the Statistics tab on the home screen, and the stats are used to make sure that notifications for your upcoming ToDo items are delivered on time.

#### New Features

- Due Dates are now predicted for mileage-only ToDo items based on driving behavior.
- The fuel efficiency stat for refueling entries is conditionally shaded based on fuel efficiency history
- Added content to the Statistics tab on the home screen - currently showing the historical data of fuel efficiency and rate of miles driven per day

#### Bugfixes

- Fixed bug that made it impossible to create new refuelings with decimal cost or amount values
- Now properly organizing ToDo items with the soonest upcoming item appearing first on the home screen 

<br>

### Version 0.1.2 (2019-11-19)

A variety of much needed bug-fixes.

#### Bugfixes:

- Conditional shading/preface text for ToDo cards
- No field for associating a ToDo item with a car
- Set a BottomTabController background color that fits with the application
- No todos are created with repeats when creating a new user account
- Verify Core Functionality
- Add a button for a User to delete their account
- Repeating Tasks cannot be properly deleted
- Associated ToDo items are not updated when their repeating interval changes
- Cannot create new repeats
- Required fields aren't actually required for new refuelings/todos
- New standalone ToDo item throws an exception 
- Unhandled exception when car mileage is greater than the value input to a new refueling
- Fix styling in new ToDo screen
- Make a set of test plans for basic app functionality
- Cannot update the soonest upcoming ToDo item 