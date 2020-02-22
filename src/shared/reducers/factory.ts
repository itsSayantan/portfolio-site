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
                    { text: 'About', link: '/' },
                    { text: 'Projects', link: '/projects' }
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
                    { text: 'About', link: '/' },
                    { text: 'Projects', link: '/projects' }
                ]
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
            }
        },
        ProjectsData: []
    };
}
