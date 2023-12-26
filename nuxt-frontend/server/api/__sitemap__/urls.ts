import type {ReleasesType} from "~/composables/nocodb-types";

export default defineSitemapEventHandler(async () => {
    const config = useRuntimeConfig();
    const result = await $fetch<ReleasesType>(`${config.public.nocodbUrl}/api/v1/releases`);

    const releasesSitemap = result.list.map(release => {
        return {
            loc: `/music/${release.songtitle.replace(/ /g, '')}`,
            // will end up in the releases sitemap
            // _sitemap: 'music',
            // changefreq: 'weekly',
            // priority: 0.8,
        }
    })

    return [
        ...releasesSitemap
    ]
})
