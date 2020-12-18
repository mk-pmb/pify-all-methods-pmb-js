
<!--#echo json="package.json" key="name" underline="=" -->
pify-all-methods-pmb
====================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Promisify (using pify) bound versions of almost all methods of an object.
<!--/#echo -->



API
---

This module exports one function:

### pam(orig)

Returns a flat copy of `orig`, except all own enumerable properties that are
* functions,
* and different from their same-named twin on the Object prototype
are replaced with a `pify`-ed bound (to `orig`) version of themselves.




<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
