# 📘 Searching & Sorting Algorithms (Beginner Friendly – JavaScript)

---

## 🔍 Linear Search

### 📖 Definition (Detailed)

Linear Search is the most basic searching technique. The algorithm starts from the **first element** of the array and compares each element with the target value. If a match is found, the search stops. If the end of the array is reached without finding the element, the search fails.

Think of it like **searching a name in an unsorted attendance register** — you read names one by one.

---

### 🧠 How It Works (Step by Step)

1. Start from index `0`
2. Compare current element with the key
3. If match → stop and return index
4. If not → move to next element
5. Repeat until array ends

---

### 🧠 JavaScript Code

```javascript
function linearSearch(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) return i;
  }
  return -1;
}
```

---

### 🧪 Example Explanation

Array: `[8, 4, 5, 6, 9]`, Key: `6`

* Compare 8 ❌
* Compare 4 ❌
* Compare 5 ❌
* Compare 6 ✅ Found

---

### 👀 Visual Diagram

```
[8] → [4] → [5] → [6] → [9]
              ↑ Found
```

---

### ⚡ Beginner Tips

* Works on any array
* Very slow for large data
* Time Complexity: O(n)

---

## 🔍 Binary Search

### 📖 Definition

Binary Search works only on **sorted arrays**. It repeatedly divides the array into halves.

---

### 🧠 JavaScript Code

```javascript
function binarySearch(arr, key) {
  let low = 0, high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === key) return mid;
    else if (arr[mid] < key) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}
```

---

### 🧪 Example

```javascript
let arr = [1, 3, 5, 6, 8, 9];
let key = 6;
console.log(binarySearch(arr, key));
```

Output: `3`

---

### 👀 Visual Diagram

```
[1 3 5 6 8 9]
      ↑ mid
         Found
```

---

### ⚡ Beginner Tips

* Array must be sorted
* Very fast
* Time Complexity: O(log n)

---

## 🔄 Bubble Sort

### 📖 Definition

Bubble Sort compares **adjacent elements** and swaps them if needed. Largest elements move to the end.

---

### 🧠 JavaScript Code

```javascript
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
```

---

### 🧪 Example

```javascript
let arr = [8, 4, 5, 6];
console.log(bubbleSort(arr));
```

Output: `[4, 5, 6, 8]`

---

### 👀 Visual Diagram

```
Pass 1: [8 4] 5 6 → swap
Pass 2: 4 [8 5] 6 → swap
Pass 3: 4 5 [8 6] → swap
Final : [4 5 6 8]
```

---

### ⚡ Beginner Tips

* Easy to learn
* Very slow for big data
* Time Complexity: O(n²)

---

## 🎯 Selection Sort

### 📖 Definition

Selection Sort repeatedly finds the **smallest element** and places it at the beginning.

---

### 🧠 JavaScript Code

```javascript
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}
```

---

### 🧪 Example

```javascript
let arr = [8, 4, 5, 6];
console.log(selectionSort(arr));
```

Output: `[4, 5, 6, 8]`

---

### 👀 Visual Diagram

```
[8 4 5 6]
 ↓
Minimum = 4 → swap
[4 8 5 6]
```

---

### ⚡ Beginner Tips

* Fewer swaps
* Always slow
* Time Complexity: O(n²)

---

## ✏️ Insertion Sort

### 📖 Definition

Insertion Sort works like sorting playing cards. It inserts each element into its correct position.

---

### 🧠 JavaScript Code

```javascript
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
```

---

### 🧪 Example

```javascript
let arr = [8, 4, 5, 6];
console.log(insertionSort(arr));
```

Output: `[4, 5, 6, 8]`

---

### 👀 Visual Diagram

```
[8 | 4 5 6]
Insert 4 → [4 8]
Insert 5 → [4 5 8]
Insert 6 → [4 5 6 8]
```

---

### ⚡ Beginner Tips

* Great for nearly sorted data
* Stable algorithm
* Time Complexity: O(n²)

---

## 🌳 Merge Sort

### 📖 Definition

Merge Sort divides the array, sorts each part, and merges them back together.

---

### 🧠 JavaScript Code

```javascript
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let result = [], i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}
```

---

### 🧪 Example

```javascript
let arr = [8, 4, 5, 6, 9, 1, 3, 6];
console.log(mergeSort(arr));
```

Output: `[1, 3, 4, 5, 6, 6, 8, 9]`

---

### 👀 Visual Diagram

```
                 [8, 4, 5, 6, 9, 1, 3, 6]
                           |
        -------------------------------------------------
        |                                               |
   [8, 4, 5, 6]                                   [9, 1, 3, 6]
        |                                               |
   -------------------                           -------------------
   |                 |                           |                 |
 [8, 4]           [5, 6]                       [9, 1]           [3, 6]
   |                 |                           |                 |
 -------           -------                     -------           -------
 |     |           |     |                     |     |           |     |
[8]   [4]         [5]   [6]                   [9]   [1]         [3]   [6]

[8]+[4]→[4,8]   [5]+[6]→[5,6]
[4,8]+[5,6]→[4,5,6,8]

[9]+[1]→[1,9]   [3]+[6]→[3,6]
[1,9]+[3,6]→[1,3,6,9]

FINAL MERGE
[4,5,6,8] + [1,3,6,9]
        ↓
[1,3,4,5,6,6,8,9]
```

---

### ⚡ Beginner Tips

* Very fast
* Uses extra memory
* Time Complexity: O(n log n)

---

## 📌 Final Summary

| Algorithm      | Type   | Best       | Worst      | Use When      |
| -------------- | ------ | ---------- | ---------- | ------------- |
| Linear Search  | Search | O(1)       | O(n)       | Small data    |
| Binary Search  | Search | O(1)       | O(log n)   | Sorted data   |
| Bubble Sort    | Sort   | O(n)       | O(n²)      | Learning      |
| Selection Sort | Sort   | O(n²)      | O(n²)      | Simple logic  |
| Insertion Sort | Sort   | O(n)       | O(n²)      | Nearly sorted |
| Merge Sort     | Sort   | O(n log n) | O(n log n) | Large data    |
