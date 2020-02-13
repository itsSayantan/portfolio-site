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

export type MainHeaderPropsType = {
    headerStyles: {
        backgroundColor: string;
        color: string;
    };
    menuItems: Array<MenuItem>;
};

export type AboutPropsType = {
    aboutStyles: {
        pageTitle: {
            color: string;
            fontSize: string;
        };
    };
};
