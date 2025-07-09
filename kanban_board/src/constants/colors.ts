const COLUMN_COLORS = {
    'To Do': '#5046e5',
    'In Progress': '#f49e0b',
    Done: '#23c55e',
    'Column title': '#c7cdc1',
}

const PRIORITY_COLORS = {
    High: '#ef4444',
    Medium: '#3b82f6',
    Low: '#22c55e',
    Priority: '#22223b',
}

const RANDOM_COLORS = [
    '#8B5CF6',
    '#EC4899',
    '#06B6D4',
    '#F59E0B',
    '#EF4444',
    '#84CC16',
    '#F97316',
    '#6366F1',
]

export const getColumnColor = (title: string): string => {
    const presetColor = COLUMN_COLORS[title as keyof typeof COLUMN_COLORS]
    if (presetColor) {
        return presetColor
    }

    const randomIndex = title.length % RANDOM_COLORS.length
    return RANDOM_COLORS[randomIndex]
}

export const getPriorityColor = (priority: string): string => {
    const normalizedPriority = priority?.trim() || ''
    const standardColor =
        PRIORITY_COLORS[normalizedPriority as keyof typeof PRIORITY_COLORS]
    if (standardColor) {
        return standardColor
    }

    if (normalizedPriority) {
        const randomIndex = normalizedPriority.length % RANDOM_COLORS.length
        return RANDOM_COLORS[randomIndex]
    }
    return '#6b7280'
}
