# number_format method
### use this function in js just as in php
to use function in webpack projects you can export number_format at the end of number_format.js file and import in webpack entry file :

```
# in number_format.js
export default number_format
```
```
# in webpack entry file
import number_format from "./number_format.js"
global.number_format = number_format
```
