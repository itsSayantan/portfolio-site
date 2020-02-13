export type PageTitlePropsType1 = {
    text: string;
    textColor: string;
    fontSize: string;
    children?: JSX.Element;
};

export type PageTitlePropsType2 = {
    text?: string;
    textColor?: string;
    fontSize?: string;
    children: JSX.Element;
};

export type PageTitlePropsType = PageTitlePropsType1 | PageTitlePropsType2;
