export type LoaderAreaStyleType = {
    loaderAreaBackgroundColor?: string;
};

export type LoaderBarStyleType = {
    loaderBarBackgroundColor?: string;
    loaderBarBoxShadow?: string;
};

export type ContentLoadingIndicatorPropsType = {
    width?: string;
    height?: string;
    backgroundColor?: string;
    borderRadius?: string;
    marginBottom?: string;
    children?: JSX.Element;
};

export type MenuItem = {
    text: string;
    link: string;
};

export type MobileMenuPropsType = {
    // for now menItems is a part of the theme.
    // can be done outside theme if the menu items are fetched dynamically
    menuItems: Array<MenuItem>;
    open: boolean;
    menuStyles: {
        wrapper: {
            backgroundColor: string;
        };
        item: {
            color: string;
            borderBottom: string;
        };
        closeButton: {
            color: string;
        };
    };
};

export type MobileMenuItemsPropsType = {
    menuItems: Array<MenuItem>;
    color: string;
    borderBottom: string;
    onLinkClick: () => void;
};

export type MainHeaderPropsType = {
    headerStyles: {
        backgroundColor: string;
        color: string;
    };
    menuItems: Array<MenuItem>;
};

export type HomePropsType = {
    homeStyles: {
        pageTitle: {
            color: string;
            fontSize: string;
        };
    };
};

export type AboutPropsType = {
    aboutStyles: {
        pageTitle: {
            color: string;
            fontSize: string;
        };
    };
};

export type ProjectsPropsType = {
    projectsStyles: {
        pageTitle: {
            color: string;
            fontSize: string;
        };
    };
};

export type ProjectsDataPropsType = {
    data: Array<any>;
};
