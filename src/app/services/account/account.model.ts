import { AccountType } from "../account-type/account-type.model";
import { Category } from "../category/category.model";

export interface Account {
    name: string,
    type: AccountType
}

export const generateAccount = (name?: string, type = {} as AccountType) => ({
    name, type
})