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
                menuItems: [
                    { text: 'About', link: '/' },
                    { text: 'Projects', link: '/projects' }
                ],
                open: false
            }
        }
    };
}
