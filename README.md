# Electron Folder Opener

[![Greenkeeper badge](https://badges.greenkeeper.io/Raul6469/electron-folder-opener.svg)](https://greenkeeper.io/)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/3ca13e811c044010959bdb1dda2465ce)](https://www.codacy.com/app/vb4007/electron-folder-opener?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Raul6469/electron-folder-opener&amp;utm_campaign=Badge_Grade)

## What is this ?

This simple application built with Electron offers the possibility to open local folders of your file system at a specified path by just one click on a web page.

## How do I use it ?

*You will need NodeJS in order to execute this program*

Clone this repo, access the `electron-folder-opener` directory, and run

`npm install`

and

`npm start`

Then you can insert in your web pages links that will trigger the program :

``` html
<a class="protocol" href="folderopener://open?path=your\folder\path">Open this!</a>
```

Your file explorer should open at the specified path on click.

If the program is not running by the time the link is clicked, the program will start and display a notification saying that it is ready to open folders. At the moment it is not possible to open the folder when the app is just launched.

## Contributing

I would be very happy to hear feedback about it! So feel free to tell me what you think or suggest changes. And don't hesitate to tell if it works (or not) for you.

## License

[CC0 1.0 (Public Domain)](LICENSE.md)
