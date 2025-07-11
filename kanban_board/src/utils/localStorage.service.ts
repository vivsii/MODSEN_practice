export const localStorageService = {
    setItem<T = any>(key: string, value: T) {
        try {
            localStorage.setItem(key, JSON.stringify(value))
        } catch (e) {}
    },
    getItem<T = any>(key: string): T | undefined {
        try {
            const data = localStorage.getItem(key)
            return data ? JSON.parse(data) : undefined
        } catch (e) {
            return undefined
        }
    },
    saveBoard(state: any) {
        this.setItem('kanbanBoard', state)
    },
    loadBoard() {
        return this.getItem('kanbanBoard')
    },
}
