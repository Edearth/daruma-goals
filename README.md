# Daruma goals

## What is this project about?

This is _yet another to-do/goal tracking app_.
I want to have a reminder of what my goals are,
so when I read about darumas and liked the concept
I thought about making a home page like that.
I also want to learn more about React,
so this is the perfect excuse.

Since

## How do darumas work?

It's simple:
you get one and it's eyes are blank.
You decide on a goal and paint the left eye.
Once you meet that goal, you paint the right eye.

Apparently you can then burn all your darumas at the end of the year?
I have no idea how that works. It could be a nice recap 😂
But maybe having an option to store a history would be nice.

## How do I want the app to work?

You open a new browser tab and the app is shown.
There you see your current darumas with the goal written below.
All of them with just the left eye painted.

There is a button to create a new goal/daruma.
You click on it and a dialog is shown.
You can select between multiple base darumas, colors, etc.
Then you write the goal you want to achieve and paint the left eye.

When the modal closes, the daruma list is updated and you can see your new goal.
Once you finish a goal, you click on that daruma and paint the right eye.
It disappears from the list (maybe it's shown somewhere else?).

I'd love if I could make the painting for both eyes be **actual painting**.
Like, you paint the eye with the cursor,
the bmp is sent to the server and it's stored so you can later see your creation.
You could have a simple dot (·) eye, an X, a heart...
even the dollar sign if your goal is related to money.

## Thoughts on the server side

The plan is to have a frontend and a backend project.
The frontend is definitely going to be made in React.
I'm thinking about doing some nice Python+Flask for the backend
(it's simple and cute).
But if this React app _requires_ Node to run,
I'd like to re-use the same server to run both projects.
I have no idea if that can be done,
but it seems it could save some resources?
I need to investigate this.

