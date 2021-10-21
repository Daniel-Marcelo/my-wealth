export interface Category {
    name: string
}

export const generateCategory = (name?: string) => ({
    name
})