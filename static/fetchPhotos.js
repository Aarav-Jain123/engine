import { createApi } from 'unsplash-js';
import * as nodeFetch from 'node-fetch'

var accessKey = 'Y-7dgcgFLPlIYQwcra4uxM-UbIoVpFEdBU1ieQ1B0hQ';

const unsplash = createApi({
  accessKey: accessKey,
  fetch: nodeFetch.default as unknown as fetch.type,
});