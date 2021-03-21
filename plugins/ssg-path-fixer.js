export function fixPathWhenSSG (route, parent) {
  if (process.env['VITE_SSG'] !== 'true') return route

  if (route.component.match(/\/index\.(vue|js)$/)) {
    console.log(`\nfix index path of ${route.component} for SSG\n`)
    return {
      ...route,
      path: `${route.path}/index`
    }
  } else {
    return route
  }
}
