import Comfortable from 'comfortable-javascript';

export default (context, inject) => {
  const COMFORTABLE_APIKEY = '<%= options.apiKey %>';
  const COMFORTABLE_REPOSITORY_API_ID = '<%= options.repositoryApiId %>';
  let options = JSON.parse('<%= options.options ? JSON.stringify(options.options) : JSON.stringify({}) %>');

  const comfortableApi = Comfortable.api(COMFORTABLE_REPOSITORY_API_ID, COMFORTABLE_APIKEY, options);
  context.$cmft = comfortableApi;
  inject('cmft', comfortableApi);
}