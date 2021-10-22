import { Account } from "../account/account.model";
import { Category } from "../category/category.model";

export interface Item {
    category: Category,
    amount: number,
    name: string
    account: Account
}

export const generateItem = (category= {} as Category, amount?: number, name?: string, account = {} as Account) => {
 return {
     name,
     category,
     amount,
     account
 }
} 