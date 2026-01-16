# Kage.js 使用指南

本文档提供了 Kage.js 的详细使用指南和最佳实践。

## 📖 目录

- [安装](#安装)
- [快速开始](#快速开始)
- [按需导入](#按需导入)
- [API 详解](#api-详解)
- [常见使用场景](#常见使用场景)
- [最佳实践](#最佳实践)

## 安装

```bash
npm install wssf-kage-js
# 或
yarn add wssf-kage-js
# 或
pnpm add wssf-kage-js
```

## 快速开始

### 全量导入

```typescript
import * as kage from 'wssf-kage-js';

kage.chunk([1, 2, 3, 4], 2);
kage.camelCase('hello-world');
```

### 按需导入（推荐）

```typescript
import { chunk, camelCase } from 'wssf-kage-js';

chunk([1, 2, 3, 4], 2);
camelCase('hello-world');
```

## 按需导入

为了减小打包体积，推荐使用按需导入：

```typescript
// ✅ 好的做法
import { chunk, uniq } from 'wssf-kage-js';

// ❌ 不推荐
import * as kage from 'wssf-kage-js';
```

配合现代打包工具（如 Webpack、Rollup、Vite），Tree-shaking 会自动移除未使用的代码。

## API 详解

### 数组操作

#### 基础操作

```typescript
import { head, last, tail, slice } from 'wssf-kage-js';

const arr = [1, 2, 3, 4, 5];

head(arr);        // 1
last(arr);        // 5
tail(arr);        // [2, 3, 4, 5]
slice(arr, 1, 3); // [2, 3]
```

#### 去重

```typescript
import { uniq, uniqBy } from 'wssf-kage-js';

// 简单去重
uniq([1, 2, 2, 3, 3]);
// => [1, 2, 3]

// 根据属性去重
const users = [
  { id: 1, name: '张三' },
  { id: 1, name: '张三' },
  { id: 2, name: '李四' },
];
uniqBy(users, (u) => u.id);
// => [{ id: 1, name: '张三' }, { id: 2, name: '李四' }]
```

#### 扁平化

```typescript
import { flatten, flattenDeep } from 'wssf-kage-js';

// 浅层扁平化
flatten([1, [2, 3], [4]]);
// => [1, 2, 3, 4]

// 深度扁平化
flattenDeep([1, [2, [3, [4]]]]);
// => [1, 2, 3, 4]
```

#### 分块

```typescript
import { chunk } from 'wssf-kage-js';

chunk([1, 2, 3, 4, 5], 2);
// => [[1, 2], [3, 4], [5]]

// 实际应用：分页数据
const items = Array.from({ length: 100 }, (_, i) => i + 1);
const pageSize = 10;
const pages = chunk(items, pageSize);
// 得到 10 页数据，每页 10 条
```

#### 集合操作

```typescript
import { difference, intersection } from 'wssf-kage-js';

// 差集
difference([1, 2, 3], [2, 3, 4]);
// => [1]

// 交集
intersection([1, 2, 3], [2, 3, 4]);
// => [2, 3]
```

### 对象操作

#### 嵌套属性访问

```typescript
import { get, set } from 'wssf-kage-js';

const data = {
  user: {
    profile: {
      name: '张三',
      age: 25,
    },
  },
};

// 安全地获取嵌套属性
get(data, 'user.profile.name');           // '张三'
get(data, 'user.profile.email', '默认值'); // '默认值'

// 使用数组路径
get(data, ['user', 'profile', 'name']);   // '张三'

// 设置嵌套属性
set(data, 'user.profile.email', 'zhang@example.com');
```

#### 对象合并

```typescript
import { merge } from 'wssf-kage-js';

const defaults = {
  theme: 'light',
  lang: 'zh',
  features: {
    darkMode: false,
    notifications: true,
  },
};

const userConfig = {
  theme: 'dark',
  features: {
    darkMode: true,
  },
};

const config = merge({}, defaults, userConfig);
// {
//   theme: 'dark',
//   lang: 'zh',
//   features: {
//     darkMode: true,
//     notifications: true
//   }
// }
```

#### 属性选择与排除

```typescript
import { pick, omit } from 'wssf-kage-js';

const user = {
  id: 1,
  name: '张三',
  email: 'zhang@example.com',
  password: 'secret',
  createdAt: '2024-01-01',
};

// 选择需要的字段
const publicUser = pick(user, ['id', 'name', 'email']);
// { id: 1, name: '张三', email: 'zhang@example.com' }

// 排除敏感字段
const safeUser = omit(user, ['password']);
// { id: 1, name: '张三', email: 'zhang@example.com', createdAt: '2024-01-01' }
```

#### 深拷贝

```typescript
import { cloneDeep } from 'wssf-kage-js';

const original = {
  name: '张三',
  address: {
    city: '北京',
    street: '长安街',
  },
  hobbies: ['reading', 'coding'],
};

const cloned = cloneDeep(original);
cloned.address.city = '上海'; // 不会影响原对象
```

### 字符串操作

#### 命名风格转换

```typescript
import { camelCase, snakeCase, kebabCase } from 'wssf-kage-js';

const str = 'hello world example';

camelCase(str);  // 'helloWorldExample'
snakeCase(str);  // 'hello_world_example'
kebabCase(str);  // 'hello-world-example'

// 实际应用：转换 API 响应
const apiData = {
  user_name: '张三',
  user_email: 'zhang@example.com',
};

const frontendData = Object.fromEntries(
  Object.entries(apiData).map(([key, value]) => [camelCase(key), value])
);
// { userName: '张三', userEmail: 'zhang@example.com' }
```

#### 字符串处理

```typescript
import { capitalize, truncate, trim, repeat } from 'wssf-kage-js';

capitalize('hello');  // 'Hello'

truncate('这是一段很长的文本', { length: 10 });
// '这是一段很长...'

truncate('这是一段很长的文本', { length: 10, omission: '···' });
// '这是一段很···'

trim('  hello  ');      // 'hello'
trim('--hello--', '-'); // 'hello'

repeat('*', 5);         // '*****'
```

### 函数工具

#### 防抖（Debounce）

```typescript
import { debounce } from 'wssf-kage-js';

// 搜索框输入防抖
const searchInput = document.getElementById('search');
const debouncedSearch = debounce((value: string) => {
  // 发送搜索请求
  console.log('搜索:', value);
}, 300);

searchInput?.addEventListener('input', (e) => {
  debouncedSearch((e.target as HTMLInputElement).value);
});

// 取消防抖
debouncedSearch.cancel();
```

#### 节流（Throttle）

```typescript
import { throttle } from 'wssf-kage-js';

// 滚动事件节流
const throttledScroll = throttle(() => {
  console.log('处理滚动');
}, 200);

window.addEventListener('scroll', throttledScroll);

// 取消节流
throttledScroll.cancel();
```

#### 只执行一次

```typescript
import { once } from 'wssf-kage-js';

// 初始化只执行一次
const initialize = once(() => {
  console.log('初始化应用');
  // ... 初始化逻辑
});

initialize(); // 执行
initialize(); // 不执行
initialize(); // 不执行
```

#### 记忆化

```typescript
import { memoize } from 'wssf-kage-js';

// 缓存计算结果
const fibonacci = memoize((n: number): number => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});

fibonacci(10); // 计算
fibonacci(10); // 使用缓存

// 清除缓存
fibonacci.cache.clear();
```

#### 柯里化

```typescript
import { curry } from 'wssf-kage-js';

const add = (a: number, b: number, c: number) => a + b + c;
const curriedAdd = curry(add);

// 多种调用方式
curriedAdd(1)(2)(3);     // 6
curriedAdd(1, 2)(3);     // 6
curriedAdd(1)(2, 3);     // 6
curriedAdd(1, 2, 3);     // 6
```

### 数学运算

```typescript
import { range, random, clamp, mean, max, min } from 'wssf-kage-js';

// 生成数字序列
range(5);           // [0, 1, 2, 3, 4]
range(1, 5);        // [1, 2, 3, 4]
range(0, 10, 2);    // [0, 2, 4, 6, 8]

// 随机数
random(1, 10);              // 整数 1-10
random(1, 10, true);        // 浮点数 1.0-10.0

// 限制范围
clamp(15, 1, 10);   // 10
clamp(-5, 1, 10);   // 1
clamp(5, 1, 10);    // 5

// 统计函数
mean([1, 2, 3, 4, 5]);      // 3
max([1, 5, 3, 2]);          // 5
min([3, 1, 5, 2]);          // 1
```

## 常见使用场景

### 场景 1: 表单数据处理

```typescript
import { pick, isEmpty, trim } from 'wssf-kage-js';

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
}

function validateAndSubmit(formData: FormData) {
  // 提取需要提交的字段
  const submitData = pick(formData, ['username', 'email', 'password']);
  
  // 清理空格
  Object.keys(submitData).forEach(key => {
    if (typeof submitData[key] === 'string') {
      submitData[key] = trim(submitData[key]);
    }
  });
  
  // 检查是否为空
  if (isEmpty(submitData.username)) {
    throw new Error('用户名不能为空');
  }
  
  return submitData;
}
```

### 场景 2: 数据转换

```typescript
import { mapValues, camelCase, get } from 'wssf-kage-js';

// API 响应数据转换
function transformApiResponse(data: any) {
  // 将所有数字加倍
  const doubled = mapValues(data, (value) => 
    typeof value === 'number' ? value * 2 : value
  );
  
  // 获取嵌套数据
  const userName = get(data, 'user.profile.name', '匿名用户');
  
  return { doubled, userName };
}
```

### 场景 3: 分页处理

```typescript
import { chunk, range } from 'wssf-kage-js';

function paginate<T>(items: T[], pageSize: number) {
  const pages = chunk(items, pageSize);
  
  return {
    pages,
    totalPages: pages.length,
    totalItems: items.length,
    getPage: (pageNum: number) => pages[pageNum - 1] || [],
  };
}

// 使用
const data = range(1, 101); // 1-100
const pagination = paginate(data, 10);
console.log(pagination.getPage(1)); // [1, 2, 3, ..., 10]
```

### 场景 4: 性能优化

```typescript
import { debounce, throttle, memoize } from 'wssf-kage-js';

// 搜索优化
const expensiveSearch = debounce((query: string) => {
  // 执行搜索
}, 300);

// 滚动优化
const handleScroll = throttle(() => {
  // 处理滚动
}, 100);

// 计算优化
const expensiveCalculation = memoize((input: number) => {
  // 复杂计算
  return input * 2;
});
```

## 最佳实践

### 1. 按需导入

```typescript
// ✅ 推荐
import { chunk, uniq } from 'wssf-kage-js';

// ❌ 不推荐
import * as kage from 'wssf-kage-js';
```

### 2. 类型安全

```typescript
import { get } from 'wssf-kage-js';

interface User {
  name: string;
  age: number;
}

const user = { name: '张三', age: 25 };

// 使用类型断言
const name = get<string>(user, 'name');
```

### 3. 防抖和节流的选择

- **防抖**：等待用户停止操作后执行（搜索框、表单验证）
- **节流**：固定时间间隔执行（滚动、窗口调整）

### 4. 深拷贝的性能考虑

```typescript
import { cloneDeep } from 'wssf-kage-js';

// 对于简单对象，使用展开运算符更快
const simple = { a: 1, b: 2 };
const copy1 = { ...simple };

// 对于复杂嵌套对象，使用 cloneDeep
const complex = { a: { b: { c: 1 } } };
const copy2 = cloneDeep(complex);
```

### 5. 函数组合

```typescript
import { compose, pipe } from 'wssf-kage-js';

const addOne = (x: number) => x + 1;
const double = (x: number) => x * 2;

// compose: 从右到左
const composed = compose(double, addOne);
composed(5); // (5 + 1) * 2 = 12

// pipe: 从左到右
const piped = pipe(addOne, double);
piped(5); // (5 + 1) * 2 = 12
```

## 总结

Kage.js 提供了丰富的工具函数，可以帮助你：

- ✅ 简化数组和对象操作
- ✅ 提高字符串处理效率
- ✅ 优化函数性能
- ✅ 进行常用数学计算
- ✅ 保证类型安全

更多示例请参考项目中的 `examples.ts` 文件。
