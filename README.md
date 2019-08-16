# Comfortable Module

> Easy <a href="https://github.com/cmftable/comfortable-javascript">Comfortable</a> integration with nuxt.js

## Install with yarn
```
yarn add comfortable-nuxt
```

## Install with npm
```
npm install comfortable-nuxt
```

## nuxt.config.js
```javascript
module.exports = {
  modules: [
    'comfortable-nuxt',
  ],

  comfortable: {
    // apiKey: ''
    // repositoryApiId: ''
    // options: {
    //    useProxy: true,
    //    proxy: 'https://your-proxy.com/v1'
    // }
  }
}

or inline

module.exports = {
  ...

  modules: [
    ['comfortable-nuxt', {
      // apiKey: ''
      // repositoryApiId: ''
      // options: {
      //    useProxy: true,
      //    proxy: 'https://your-proxy.com/v1'
      // }
    }]
  ],

  ...
}

```

## More information
 - [Developer Documentation](https://docs.comfortable.io)
 - [Javascript SDK Documentation](https://docs.comfortable.io/sdk/javascript)
 - [Changelog](https://github.com/cmftable/comfortable-javascript/releases)

## Contributing
Pull requests are always welcome!
<br/>

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)


## License
This repository is published under the [MIT](LICENSE) license.