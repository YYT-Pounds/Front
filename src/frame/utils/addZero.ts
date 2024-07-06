/**
 * 日期加零 -- 仅限展示
 */
export const dateAddZero = (date: number | string) => {
    if (Number(date) < 10) {
        date = "0" + String(date)
    }
    return date
}