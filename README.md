# Loom Url Extractor

This extension let's you scrap loom embed url from any webpage and copy to user clipboard. there is also a option to generate YTDLP download command.

Table of Contents
=================
- [Loom Url Extractor](#loom-url-extractor)
- [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Loading the Extension](#loading-the-extension)
  - [Scripts](#scripts)
    - [`npm start`](#npm-start)
    - [`npm run build`](#npm-run-build)
    - [`npm run zip`](#npm-run-zip)
    - [`npm run pack`](#npm-run-pack)
  - [Feedback and Support](#feedback-and-support)

## Getting Started

To get started, follow these steps:

1. Clone the repository in your local machine

```
git clone https://github.com/akashvaghela09/loom-url-extractor.git
```

2. Navigate to the project directory:

```
cd loom-url-extractor
```

3. Install the dependencies:

```
npm install
```

4. Before starting the server
   - Make sure that you are using node version 16.
   - Check node version using the following command:

        ```
        node -v
        ```

   - If you are using a different node version, then install node version 16 using the following command:

        ```
        nvm install 16
        ```

   - Check this [link](https://techstacker.com/run-multiple-node-versions-node-nvm/) on how to install and use `nvm`, manage multiple node versions, and switch between them.

5. Start the development server:

```
npm start
```

Happy Hacking :)


## Loading the Extension

To load the extension in Chrome, follow these steps:

1. Open Chrome and go to the extensions page `chrome://extensions`.
2. Enable developer mode by clicking the toggle in the top right corner.
3. Click the "Load unpacked" button and select the `dev` folder.

_(Note: if you just want to use the extension then extract release zip file and load folder as explained above)_

The extension should now be loaded in Chrome. You can verify this by looking for the extension's icon in the browser toolbar. 

## Scripts

The following scripts are available:

### `npm start`

This script starts the development server and enables hot reloading using webpack. To use it, run:

```
npm start
```

### `npm run build`

This script builds the extension for production. It creates a build folder with the compiled code and assets. To use it, run:

```
npm run build
```

### `npm run zip`

This script creates a ZIP archive of the extension. It includes the manifest.json file, the backgroundScript and contentScript folders, and the files in the build folder. To use it, run:

```
npm run zip
```

### `npm run pack`

This script combines the build and zip scripts into one command. It first builds the extension, then creates a ZIP archive of the result. To use it, run:

```
npm run pack
```

## Feedback and Support

If you have any questions or issues with the extension, please don't hesitate to reach out. You can send me a message through the repository's issues page or via email at <akashvaghela@protonmail.com>.

---

Akash Vaghela | [Website](https://akash11.com)
