```javascript
// Incorrect usage of $inc operator
db.collection.updateOne({ name: "John" }, { $inc: { age: -1 } });
// This will throw an error if the age field is not present
```