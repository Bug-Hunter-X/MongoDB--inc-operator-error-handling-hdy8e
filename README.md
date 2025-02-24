# MongoDB $inc Operator Error Handling

This repository demonstrates a common error when using the `$inc` operator in MongoDB:  the operator throws an error if the field being incremented does not exist. The solution shows how to handle this using the `$setOnInsert` operator to create the field if it doesn't exist.