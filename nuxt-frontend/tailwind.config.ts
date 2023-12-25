import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    // Safelisting some classes to avoid content purge
    safelist: [
        'left-0','left-full','right-0', 'right-full', 'before:left-0','before:left-full','before:right-0', 'before:right-full'
    ]
}
