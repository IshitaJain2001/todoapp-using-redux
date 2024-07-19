
//logging middlewares

export const middleware=store=>next=>action=>{
    console.log('dispatching',action,store)
    return next(action)
}