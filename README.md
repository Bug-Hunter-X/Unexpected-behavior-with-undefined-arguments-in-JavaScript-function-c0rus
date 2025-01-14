# JavaScript Bug: Unexpected Behavior with Undefined Arguments

This repository demonstrates a common bug in JavaScript functions: failure to handle undefined arguments.  The `foo` function correctly handles null values, but not undefined values, resulting in unexpected behavior.

## Bug Description

The `foo` function adds two numbers.  It correctly handles null values by returning null. However, it does not handle undefined arguments, which can lead to unexpected behavior or errors.

## Solution

The solution involves explicitly checking for both null and undefined values using a combination of strict equality checks or using optional chaining and nullish coalescing operator.