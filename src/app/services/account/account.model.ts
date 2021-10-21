import { Category } from "../category/category.model";

export interface Account {
    name: string,
    category: Category
}

export const generateAccount = (name?: string, category?: Category) => ({
    name, category
})