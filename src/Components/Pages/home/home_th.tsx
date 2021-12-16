import { ArrowBottom, ArrowTop, ThStyle, ThTxt } from "./style";

type THomeThProps = {
    rows?: boolean;
    column?: "title" | "createdAt" | "type" | "status";
    sort?: "asc" | "desc";
    columnActive?: "title" | "createdAt" | "type" | "status";
    setColum?: React.Dispatch<
        React.SetStateAction<"title" | "createdAt" | "type" | "status" | undefined>
    >;
    setSort?: React.Dispatch<React.SetStateAction<"desc" | "asc" | undefined>>;
};

export const Th: React.FC<THomeThProps> = ({
    children,
    rows,
    column,
    setColum,
    setSort,
    columnActive,
    sort,
}) => {
    return (
        <>
            <ThStyle>
                <ThTxt>
                    {children}
                    {rows && (
                        <>
                            <ArrowTop
                                onClick={() => {
                                    if (column === columnActive && sort === "asc") {
                                        setColum!(undefined);
                                        setSort!(undefined);
                                        return;
                                    }
                                    setColum!(column);
                                    setSort!("asc");
                                }}
                                active={column === columnActive && sort === "asc"}
                            />
                            <ArrowBottom
                                onClick={() => {
                                    if (column === columnActive && sort === "desc") {
                                        setColum!(undefined);
                                        setSort!(undefined);
                                        return;
                                    }
                                    setColum!(column);
                                    setSort!("desc");
                                }}
                                active={column === columnActive && sort === "desc"}
                            />
                        </>
                    )}
                </ThTxt>
            </ThStyle>
        </>
    );
};
