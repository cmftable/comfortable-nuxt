import path from 'path';

export default function nuxtBootstrapVue(moduleOptions) {
  let options;

  if (this.options.comfortable) {
    options = this.options.comfortable;
  }

  if (Object.keys(moduleOptions) > 0) {
    options = moduleOptions;
  }

  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    options: options
  })
}
