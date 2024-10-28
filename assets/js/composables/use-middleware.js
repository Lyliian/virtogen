export function useMiddleware(router) {

    router.beforeEach((to, from, next) => {
        if (to.meta.isGranted) {
            const roles = Array.isArray(to.meta.isGranted)
                ? to.meta.isGranted
                : [to.meta.isGranted];

            let canAccess = roles.includes('ROLE_USER')
            
            console.log(canAccess)
            if(!canAccess) {
                console.log('acces interdit')
                router.push({name: from.name})
            }
        }
        return next()
    });
}