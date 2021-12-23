export interface TClaimRequest {
    totalItems: number;
    claims: Claim[];
}

export interface Claim {
    _id: string;
    title: string;
    description: string;
    type?: Type;
    status?: Status;
    user: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

interface Type {
    name: string;
    slug: "hard" | "soft" | "net" | "troublesh";
}

interface Status {
    name: string;
    slug: "decl" | "new" | "done" | "in-progress";
}
