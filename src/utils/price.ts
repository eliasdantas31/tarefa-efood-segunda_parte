// src/utils/price.ts
export const formatBRL = (value: number) =>
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
    }).format(value)