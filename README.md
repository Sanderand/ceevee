# Ceevee

![A gif of Ceevee running](https://media.giphy.com/media/3ohnEFSIKWqRYTGTu0/giphy.gif)

Try a running version right [here](http://ceevee.andresander.com). 

## Why is this here?

After working on a lot of different jobs I really got fed up with updating my CV, especially the formatting part. Also, updating CVs in multiple languages sucks. For sure there must be an easier way than using Pages, Word or even LaTeX, right? As I really like the web as a platform I thought I'd do myself a massive favour by building a web application that helps me maintain and access my CV(s) from all my devices. Of course building that wouldn't take long, I thought. It did. 
As I have not been putting too much effort into ths project recently I thought I'd publish it to the vast dimensions of the internet so that other people could benefit from this project or even improve to it.

## So, what is Ceevee?

Ceevee is an Angular-based, Firebase-powered app that let's users login and manage their CV(s). A user can

- create a new CV
- delete an existing CV
- copy an existing CV

CVs can be freely structured using the following section types:

- Header
- Title
- Text
- Education
- Experience
- Feedback
- Skills

A user can print a CV or export it as PDF right from Ceevee. Additionally users can change Fonts and text sizes to optimize the appearance of their particular CV(s).

## How to get your own copy running

- Clone this repository
- Setup a firebase project
- Create the following files `src/environments/environment.ts` and `src/environments/environment.prod.ts` with the below contents
- Install angular cli globally. I'm running `1.4.5`. Then run `npm i`
- `ng serve`
- Go to `localhost:4200`

### Put this in the environment files

```
export const environment = {
	production: false,
	firebase: {
		apiKey: '<YOUR_FIREBASE_API_KEY>',
		authDomain: '<YOUR_FIREBASE_AUTH_DOMAIN>',
		databaseURL: '<YOUR_FIREBASE_DATABASE_URL>',
		projectId: '<YOUR_FIREBASE_PROJECT_ID>',
		storageBucket: '<YOUR_FIREBASE_STORAGE_BUCKET>',
		messagingSenderId: '<YOUR_FIREBASE_MESSAGING_SENDER_ID>'
	}
};
```

## Future work and ideas

- Multiple themes to choose from
- Ordering item within a section
- Accessibility
- Proper way of handling multi language CVs
- Creating CVs right from professional social network profiles
- Management interface for recruiters

## More techical stuff

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
- Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
- Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).