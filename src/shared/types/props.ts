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
};

export type MenuItem = {
    text: string;
    link: string;
};

export type MobileMenuPropsType = {
    menuItems: Array<MenuItem>;
    open: boolean;
};
