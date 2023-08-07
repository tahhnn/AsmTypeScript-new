export interface Product {
    find(arg0: (p: any) => boolean): unknown;
    map(arg0: (item: Product) => { key: any; filter(arg0: (item: any) => boolean): unknown; id?: string | number | undefined; name: string; price: number; image: string; description: string; categoryId: string; }): Product[] | undefined;
    key: any;
    filter(arg0: (item: any) => boolean): unknown;
    id?: string | number;
    name: string;
    price: number;
    image: string;
    description: string;
    categoryId: string;
}
export interface CateType {
    id: string;
    key: string;
    name: string;
}
export interface AdminType {
    updateProduct?: (product: Product) => void;
    deleteProduct?: (product: Product) => void;
    addProduct?: (product: Product) => void;
    handleCateDelete?: (product:CateType)=>void;
}