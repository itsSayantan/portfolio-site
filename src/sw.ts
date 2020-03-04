export const register = () => {
    if ('serviceWorker' in navigator) {
        // this file will be a part of the bundle.js file after build and the
        // sw.js file will be in the same level. Thus the sw.js file will be
        // available by /sw.js
        navigator.serviceWorker
            .register('/service-worker.js')
            .then(req => console.log('service worker registered'))
            .catch(error =>
                console.log('service worker could not be registered')
            );
    }
};
