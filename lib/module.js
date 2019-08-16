import path from 'path';

export default function nuxtBootstrapVue(moduleOptions) {
  console.log(this.options.comfortable);
  let options;

  if (this.options.comfortable) {
    options = this.options.comfortable;
  }

  if (moduleOptions) {
    options = moduleOptions;
  }

  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    options: options
  })
}