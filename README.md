# teradood

### Important Note

This library was originally a project for **Terabox & Doodstream Direct Link [here](https://teradood.hunternblz.com)**

## Install
Use the stable version:
```
yarn add @kodingkeundev/teradood   
```

## Example Usage

- Example Doodstream Downloader

    ```js
    const { TeraDood } = require('@kodingkeundev/teradood')

    var url = 'xxx'

    TeraDood.doods(url)
      .then(result => {
        // action here
        console.log(result) // for see details result
      })
      .catch(error => {
        // action error here
        console.error('Something went wrong', error) // for see details error
      })
    ```
    **Note:** Of course, replace ```xxx``` with an actual doodstream valid url. 

- Example Terabox Downloader

    ```js
    const { TeraDood } = require('@kodingkeundev/teradood')

    var url = 'xxx'
    TeraDood.terabox(url)
      .then(result => {
        // action here
        console.log(result) // for see details result
      })
      .catch(error => {
        // action error here
        console.error('Something went wrong', error) // for see details error
      })
    ```
    **Note:** Of course, replace ```xxx``` with an actual terabox valid url. 