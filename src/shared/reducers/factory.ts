import { StateType } from '@Shared/types/reducer';

export function getInitialStateValues(): StateType {
    return {
        AppTheme: {
            MainLoader: {
                loaderAreaBackgroundColor: '#efefef',
                loaderBarBackgroundColor: 'darkcyan',
                loaderBarBoxShadow: '0 0 1px 1px #777888'
            },
            ContentLoadingIndicator: {
                width: '100%',
                height: '18px',
                backgroundColor: 'rgba(205, 205, 205, 0.42)',
                borderRadius: '0',
                marginBottom: '10px'
            },
            MobileMenu: {
                // for now menItems is a part of the theme.
                // can be done outside theme if the menu items are fetched dynamically
                menuItems: [
                    { id: 1, text: 'Home', link: '' },
                    { id: 2, text: 'About', link: '/about' },
                    { id: 3, text: 'Projects', link: '/projects' }
                ],
                open: false,
                menuStyles: {
                    wrapper: {
                        backgroundColor: '#589dd0'
                    },
                    item: {
                        color: '#fff',
                        borderBottom: '1px solid #fff'
                    },
                    closeButton: {
                        color: '#fff'
                    }
                }
            },
            MainHeader: {
                headerStyles: {
                    backgroundColor: '#fff',
                    color: '#589dd0'
                },
                menuItems: [
                    { id: 1, text: 'Home', link: '' },
                    { id: 2, text: 'About', link: '/about' },
                    { id: 3, text: 'Projects', link: '/projects' }
                ]
            },
            Home: {
                homeStyles: {
                    pageTitle: {
                        color: 'rgb(0, 83, 144)',
                        fontSize: '2rem'
                    }
                }
            },
            Post: {
                postStyles: {
                    pageTitle: {
                        color: 'rgb(0, 83, 144)',
                        fontSize: '2rem'
                    }
                }
            },
            About: {
                aboutStyles: {
                    pageTitle: {
                        color: 'rgb(0, 83, 144)',
                        fontSize: '2rem'
                    }
                }
            },
            Projects: {
                projectsStyles: {
                    pageTitle: {
                        color: 'rgb(0, 83, 144)',
                        fontSize: '2rem'
                    }
                }
            }
        },
        AppState: {
            mainLoader: {
                enabled: false
            },
            appNotification: {
                message: '',
                type: 'info',
                styles: {
                    info: {
                        backgroundColor: '#589dd0',
                        color: '#fff'
                    },
                    warn: {
                        backgroundColor: '#e29e44',
                        color: '#fff'
                    },
                    error: {
                        backgroundColor: '#dc2f2f',
                        color: '#fff'
                    },
                    success: {
                        backgroundColor: '#228220',
                        color: '#fff'
                    }
                }
            }
        },
        ProjectsData: {
            data: []
        },
        TimeLineData: {
            data: []
        },
        PostData: {
            header: '',
            date: '',
            content: ''
        }
    };
}
