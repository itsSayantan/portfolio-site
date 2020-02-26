export const routerBaseName =
    process.env.NODE_ENV === 'production' ? '/portfolio-site/' : '/';

export const portfolioBackendEndpoint =
    'https://sayantan-portfolio-backend.herokuapp.com';
export const githubFetchProjectsUrl =
    portfolioBackendEndpoint + '/api/projects/getAll';
export const githubFetchTimeLineItemsUrl =
    portfolioBackendEndpoint + '/api/getTimeLineItems';
export const getPostByIDEndpoint = portfolioBackendEndpoint + '/api/posts/get';

export const openMobileMenuAction = 'OPEN_MOBILE_MENU';
export const closeMobileMenuAction = 'CLOSE_MOBILE_MENU';
export const enableMainLoaderAction = 'ENABLE_MAIN_LOADER_ACTION';
export const disableMainLoaderAction = 'DISABLE_MAIN_LOADER_ACTION';
export const setProjectsDataAction = 'SET_PROJECTS_DATA_ACTION';
export const setTimeLineDataAction = 'SET_TIME_LINE_DATA_ACTION';
export const setPostDataAction = 'SET_POST_DATA_ACTION';
