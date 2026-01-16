/**
 * Kage.js 使用示例
 * 展示各个模块的常用功能
 */

import {
  // Array
  chunk,
  uniq,
  flatten,
  shuffle,
  sum,
  // Object
  get,
  set,
  merge,
  pick,
  cloneDeep,
  // String
  camelCase,
  snakeCase,
  kebabCase,
  capitalize,
  truncate,
  // Function
  debounce,
  throttle,
  once,
  memoize,
  // Math
  range,
  random,
  clamp,
  mean,
  // Lang
  isEmpty,
  isArray,
  isObject,
} from './src/index';

console.log('=== Kage.js 使用示例 ===\n');

// ============ 数组操作 ============
console.log('📦 数组操作:');
console.log('chunk([1,2,3,4,5], 2):', chunk([1, 2, 3, 4, 5], 2));
console.log('uniq([1,2,2,3,3]):', uniq([1, 2, 2, 3, 3]));
console.log('flatten([1,[2,3],[4]]):', flatten([1, [2, 3], [4]]));
console.log('shuffle([1,2,3,4,5]):', shuffle([1, 2, 3, 4, 5]));
console.log('sum([1,2,3,4,5]):', sum([1, 2, 3, 4, 5]));
console.log();

// ============ 对象操作 ============
console.log('🔧 对象操作:');
const obj = { a: { b: { c: 3 } }, d: 4 };
console.log('原始对象:', obj);
console.log("get(obj, 'a.b.c'):", get(obj, 'a.b.c'));

const newObj = {};
set(newObj, 'x.y.z', 100);
console.log("set({}, 'x.y.z', 100):", newObj);

console.log('merge({ a: 1 }, { b: 2 }):', merge({ a: 1 }, { b: 2 }));
console.log('pick({ a:1, b:2, c:3 }, ["a","c"]):', pick({ a: 1, b: 2, c: 3 }, ['a', 'c']));

const original = { name: '张三', address: { city: '北京' } };
const cloned = cloneDeep(original);
cloned.address.city = '上海';
console.log('深拷贝测试 - 原对象:', original);
console.log('深拷贝测试 - 克隆对象:', cloned);
console.log();

// ============ 字符串操作 ============
console.log('✏️  字符串操作:');
console.log("camelCase('hello-world'):", camelCase('hello-world'));
console.log("snakeCase('helloWorld'):", snakeCase('helloWorld'));
console.log("kebabCase('helloWorld'):", kebabCase('helloWorld'));
console.log("capitalize('hello'):", capitalize('hello'));
console.log("truncate('hello world', {length: 8}):", truncate('hello world', { length: 8 }));
console.log();

// ============ 函数工具 ============
console.log('⚡ 函数工具:');

// 防抖示例
let debounceCount = 0;
const debouncedFn = debounce(() => {
  debounceCount++;
  console.log(`防抖函数执行了 ${debounceCount} 次`);
}, 100);
console.log('调用防抖函数 3 次...');
debouncedFn();
debouncedFn();
debouncedFn();
setTimeout(() => {
  console.log('100ms 后防抖函数应该只执行 1 次');
}, 150);

// 只执行一次
const onceFn = once(() => {
  console.log('这个函数只会执行一次');
  return '结果';
});
console.log('第一次调用 once:', onceFn());
console.log('第二次调用 once:', onceFn());

// 记忆化
const expensiveOperation = memoize((n: number) => {
  console.log(`计算 ${n} * 2`);
  return n * 2;
});
console.log('第一次调用 memoize(5):', expensiveOperation(5));
console.log('第二次调用 memoize(5) (使用缓存):', expensiveOperation(5));
console.log();

// ============ 数学运算 ============
console.log('🔢 数学运算:');
console.log('range(5):', range(5));
console.log('range(2, 8, 2):', range(2, 8, 2));
console.log('random(1, 10):', random(1, 10));
console.log('clamp(15, 1, 10):', clamp(15, 1, 10));
console.log('mean([1,2,3,4,5]):', mean([1, 2, 3, 4, 5]));
console.log();

// ============ 类型检查 ============
console.log('🔍 类型检查:');
console.log('isEmpty([]):', isEmpty([]));
console.log('isEmpty([1]):', isEmpty([1]));
console.log('isArray([]):', isArray([]));
console.log('isArray({}):', isArray({}));
console.log('isObject({}):', isObject({}));
console.log('isObject([]):', isObject([]));
console.log();

// ============ 实际应用场景 ============
console.log('💡 实际应用场景:');

// 场景1: 数据处理
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

const users: User[] = [
  { id: 1, name: 'zhangsan', email: 'zhang@example.com', age: 25 },
  { id: 2, name: 'lisi', email: 'li@example.com', age: 30 },
  { id: 3, name: 'wangwu', email: 'wang@example.com', age: 28 },
];

console.log('用户数据处理:');
console.log('- 平均年龄:', mean(users.map((u) => u.age)));
console.log('- 只保留 name 和 email:', users.map((u) => pick(u, ['name', 'email'])));
console.log(
  '- 转换为驼峰命名:',
  users.map((u) => ({ ...u, name: camelCase(u.name) }))
);

// 场景2: 分页数据
const items = range(1, 51); // 1-50
const pageSize = 10;
const pages = chunk(items, pageSize);
console.log(`\n分页示例 (共 ${items.length} 条数据, 每页 ${pageSize} 条):`);
console.log(`- 总页数: ${pages.length}`);
console.log('- 第1页:', pages[0]);
console.log('- 最后一页:', pages[pages.length - 1]);

console.log('\n✅ 示例运行完成!');
