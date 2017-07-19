# Electron Folder Opener

## What is this ?

This is a little application based on Electron, based on the code of the [Electron quick start](https://github.com/electron/electron-quick-start) repo.

It's goal is to enable the possibility to open local folders by clicking a button or a link on a web page.

## How do I use it ?

**Warning** : This code is all but optimized, I just wanted it to work for now. So don't be afraid of the *poor* quality of the code.

Clone this repo, access the directory, and run

`npm install`

and

`npm start`

You will see that the program will run for 5 seconds, and then it will stop. If you want to know why, check the `main.js` file.

Then, all you have to do (I hope), is to insert links that follows this model :

``` html
<a class="protocol" href="folderopener://open?path=your\path\t">Open this!</a>
```

Keep the `\t` (or anything else of the style `\something`) at the end, otherwise it won't work (I have no idea why, if you know, I would be happy to know!)

In order to make it work, you will have to **double-click** the link, or make a Javascript function that will access this link twice.

Your navigator should ask you the permission to execute your app, and you can choose to always allow it.

... And the folder should open when you double click on the link.

## Contributing

I would be very happy to hear feedback about it! As you noticed, there is a lot to do in order to make it better. So feel free to tell me what you think, suggest changes (issues or PRs)... And don't hesitate to tell if this works (or not) for you! 

## License

[CC0 1.0 (Public Domain)](LICENSE.md)
