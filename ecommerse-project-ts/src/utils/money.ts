
export function formatmoney(amountCents:number){
    return (
        `$${ (amountCents/ 100).toFixed(2)}`
    );
};