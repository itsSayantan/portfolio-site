export type PageTitlePropsType1 = {
    text: string;
    children?: JSX.Element;
};

export type PageTitlePropsType2 = {
    text?: string;
    children: JSX.Element;
};

export type PageTitlePropsType = PageTitlePropsType1 | PageTitlePropsType2;
