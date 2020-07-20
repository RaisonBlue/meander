export const toDate = timestamp => {
  const d = typeof timestamp ==='string'
    ? new Date(parseInt(timestamp))
    : new Date(timestamp)
  return `${d.getDate()}.${add0(d.getMonth() +1)}.${d.getFullYear()}`
}

const add0 = x => `${x}`.length < 10
  ? `0${x}`
  : `${x}`