# Comfortable Nuxt.js Module

> Nuxt.js Module for  <a href="https://www.comfortable.io">Comfortable Headless CMS</a>

## Installation with yarn
```
yarn add comfortable-nuxt
```

## Installation with npm
```
npm install comfortable-nuxt
```

## Setup

In nuxt.config.js:

```javascript
module.exports = {
  modules: [
    'comfortable-nuxt',
  ],

  comfortable: {
    apiKey: 'YOUR_TOKEN'
    repositoryApiId: 'YOUR_REPO_ID'
    // options: {
    //    useProxy: true,
    //    proxy: 'https://your-proxy.com/v1'
    // }
  }
}
  ...
}

```

## Usage

The comfortable-nuxt module is a wrapper for the <a href="https://github.com/cmftable/comfortable-javascript">comfortable-javasctipt SDK</a>.
<br>The documentation with methods and examples for the JavaScript SDK can be found here: <a href="https://docs.comfortable.io/sdk/javascript">https://docs.comfortable.io/sdk/javascript</a>

The nuxt module initializes the SDK automatically and exposes API methods as `$cmft` as a Promise.
<br>SDK Methods like **filters** and **sorting** are exposed as `$Comfortable`.


## Examples

For the following examples we'll use the `await` operator and fetch content for a page, but you can use `$cmft` like a regular promise with any component.

### Fetching documents for a page

```javascript

  export default {
    async asyncData(context) {
      const options = {
        embedAssets: true
      };
      const documents = await context.$cmft.getDocuments(options);

      return {
        documents: documents.data,
      }
    }
  }

  /**
   * With filters:
   */
   
   export default {
    async asyncData(context) {
      const options = {
        embedAssets: true,
        filters: new context.$Comfortable.Filter()
        .addAnd('slug', 'equal', context.params.slug)
      };
      const documents = await context.$cmft.getDocuments(options);

      return {
        documents: documents.data,
      }
    }
  }

```

### Fetching a collection

```javascript

  export default {
    async asyncData(context) {
      const options = {
        embedAssets: true
      };
      const documents = await context.$cmft.getCollection('flyingCars', options);

      return {
        documents: documents.data,
      }
    }
  }

```

### Fetching a single document

```javascript

  export default {
    async asyncData(context) {
      const options = {
        embedAssets: true
      };
      const document = await context.$cmft.getDocument('DOCUMENT_ID', options);

      return {
        document: document.data,
      }
    }
  }

```

### Fetching a document with alias

```javascript

  export default {
    async asyncData(context) {
      const options = {
        embedAssets: true
      };
      const page = await context.$cmft.getAlias('deLorean', options);

      return {
        page: page.data,
      }
    }
  }

```


## More information
 - [Comfortable CMS Documentation](https://docs.comfortable.io)
 - [Javascript SDK Documentation](https://docs.comfortable.io/sdk/javascript)
 - [JavaScript SDK Changelog](https://github.com/cmftable/comfortable-javascript/releases)

## Contributing
Pull requests are always welcome!
<br/>

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)


## License
This repository is published under the [MIT](LICENSE) license.