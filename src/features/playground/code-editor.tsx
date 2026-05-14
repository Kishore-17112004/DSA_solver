"use client";

import Editor from "@monaco-editor/react";

const starterCode = `def binary_search(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        if nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
`;

export function CodeEditor() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border/70">
      <Editor height="360px" defaultLanguage="python" defaultValue={starterCode} theme="vs-dark" />
    </div>
  );
}
