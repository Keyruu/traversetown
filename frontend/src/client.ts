import { createClient } from 'graphql-ws'
import { subscription } from '$houdini/plugins'
import { HoudiniClient } from '$houdini';
import { PUBLIC_GRAPHQL_URL, PUBLIC_GRAPHQL_WS_URL } from '$env/static/public';

export default new HoudiniClient({
    url: PUBLIC_GRAPHQL_URL,
    plugins: [
        subscription(() => createClient({
            url: PUBLIC_GRAPHQL_WS_URL
        }))
    ]

    // uncomment this to configure the network call (for things like authentication)
    // for more information, please visit here: https://www.houdinigraphql.com/guides/authentication
    // fetchParams({ session }) { 
    //     return { 
    //         headers: {
    //             Authentication: `Bearer ${session.token}`,
    //         }
    //     }
    // }
})
