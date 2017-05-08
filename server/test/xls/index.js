/**
 * Created by tianzx on 2017/5/8.
 */
const XLSX = require('xlsx');
const workbook = XLSX.readFile('./网关发货计划.xlsx');
const sheetNames = workbook.SheetNames; // 返回 ['sheet1', 'sheet2',……]
const worksheet = workbook.Sheets[sheetNames[0]];
// console.log( worksheet['A1']);

console.log(XLSX.utils.sheet_to_json(worksheet))
