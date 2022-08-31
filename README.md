# THE FESTIVAL OF FLAWLESS VICTORY

Projects are easy to start, but sometimes hard to finish. They are the green vegetables of the mind.

## The Eternal Rules of the Eternal Festival

Here's the eightfold path to achieving Flawless Victory:

1. Name your unfinished business.
2. Pick a reasonable deadline for finishing it.
3. Laugh loudly and arrogantly. HA HA HA! This is not optional.
4. Pick a ridiculous deadline that is very imminent instead. One that makes Goro wince with its harshness.
5. FINISH HIM!
6. Post a link to your project and gloat.
7. The chair-in-exile will declare your Flawless Victory and award prizes.
8. Rinse and repeat, until the festival expires. I will suddenly close it with no warning, YOU FOOLS!

Example:
1. A writeup of creating a backend API server with node/express and postgres
2. By the end of this weekend
3. HA HA HA!
4. By midnight tonight

## User Stories

- [ ] As an unregistered user, I want to be able to create a new profile so that I can log in 
- [ ] As a user, I want to be able to log in so that I can participate in the Festival
- [ ] As a user, I want to be able to log out so that I can get on with my life
- [ ] As a user, I want to be able to see a profile page so I can see my user info and current projects
- [ ] As a user, I want to be able to create a new project with a name, reasonable deadline, and ridiculous deadline so that I can work towards completing it
- [ ] As a user, I want to be able to mark a project complete so that I can win the Festival and get a prize
- [ ] As a user, I want to be able to see the current status of a project so that I can see what I'm working on and how much time I have left to complete the task
- [ ] As a user, I want to be able to see a list of other users' current projects so that I can see what other people are working on 
- [ ] As a user, I want to be able to mark a project public or private so that I can display my greatness or hide my shame
- [ ] As a user, I want to be able to like or comment on other users' projects so that I can encourage them to complete them
- [ ] As a user, I want to be able to see a list of projects that I've liked, so that I can see a list of projects that I'm interested in

## Models

- User
  - Username
  - Name
  - Password Digest
  - Photo URL
  - Has many Projects
  - Has many Comments
  - Has many Likes

- Project
  - Title
  - Description
  - Reasonable Deadline
  - Ridiculous Deadline
  - Completed?
  - Belongs to User
  - Has many Comments
  - Has many Likes

- Comment
  - Text
  - Belongs to User
  - Belongs to Project

- Like
  - Belongs to User
  - Belongs to Project
  - (a user can only like a project once)