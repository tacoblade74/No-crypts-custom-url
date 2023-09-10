# No-crypts-custom-url
A react app for importing your civitai bookmarks into [NoCrypt's google colab](https://colab.research.google.com/drive/1wEa-tS10h4LlDykd87TF5zzpXIIQoCmq)!  

Now you can select whichever model or LoRA you want (that you have bookmarked in civitai) and this react app while generate a string that you can paste into custom url field

The homepage has 2 cards and a text field. One card takes you to models page where you can see all checkpoints and other card takes you to LoRAs page. Each card in these pages can be selected by clicking on them, this will add it's download url to the final custom url string (on homepage). You can also visit the civitai page for the model/LoRA by clicking on the title of that model/LoRA  on top of the card!

# Running the website

I tried a lot to host this directly on github but No, nothing wants to work conveniently so please forgive for making you "install" the react app and run it on your local machine.

## Clone the repo
`git clone https://github.com/tacoblade74/No-crypts-custom-url.git`

## Prereq
- Make sure you have node installed. You can install it from official node.js site.   
- All the following commands are to be "executed" or run in the project's directory so please `cd` into it and then continue.
- You'll need your civitai api key to load your favourites so please have that ready. You can find it in civitai profile page or somewhere around there.

## Install dependencies
`npm install`

## Start up the website!
`npm start`

Congrats! Now it should be working unless ofcourse... it isn't. Push a issue if you encounter a problem and i'd be happy to help!

