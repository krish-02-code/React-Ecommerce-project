import { it, describe, expect } from 'vitest'
import { formatmoney } from './money'

describe('formatMoney', () => {
    it('formats 1999 cents as $19.99', () => {
        expect(formatmoney(1999)).toBe('$19.99');
    });

    it('displays 2 decimals', () => {
        expect(formatmoney(1090)).toBe('$10.90');
        expect(formatmoney(100)).toBe('$1.00');
    })
})
