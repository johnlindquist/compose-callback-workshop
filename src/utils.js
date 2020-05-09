export let compose = (...fns) => fns.reduce((previous, next) => {
    return (...args) => previous(next(...args))
})