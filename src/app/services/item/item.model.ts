import { Category } from "../category/category.model";

export interface Item {
    category: Category,
    amount: number,
    name: string
}

export const generateItem = (category?: Category, amount?: number, name?: string) => {
 return {
     name,
     category,
     amount
 }
} 