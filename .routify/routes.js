
/**
 * @roxi/routify 2.7.3
 * File generated Wed Feb 03 2021 00:34:54 GMT+0800 (Central Indonesia Time)
 */

export const __version = "2.7.3"
export const __timestamp = "2021-02-02T16:34:54.886Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "root": true,
  "children": [
    {
      "isIndex": true,
      "isPage": true,
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    }
  ],
  "path": "/"
}


export const {tree, routes} = buildClientTree(_tree)

