export const generateListWithIds = (title, items) => {
    let res = Array.from(Array(items).keys());
    // console.log(res);
    return  res.map((item, index) => title + ' ' + (index + 1) );
}