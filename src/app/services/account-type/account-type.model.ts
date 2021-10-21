export interface AccountType {
    name: string
}

export const generateAccountType = (name?: string) => ({
    name
}) 