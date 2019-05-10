(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_new_string=runtime.caml_new_string;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    var global_data=runtime.caml_get_global_data(),Printf=global_data.Printf;
    caml_call1
     (Printf[2],
      [0,
       [11,caml_new_string("Hello, yy world!\n"),0],
       caml_new_string("Hello, yy world!\n")]);
    var Hello=[0];
    runtime.caml_register_global(2,Hello,"Hello");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiIuaGVsbG8uZW9ianMvYnl0ZS9oZWxsby5jbW8uanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7STs7Ozs7O0lBQVE7Ozs7Ozs7VSIsInNvdXJjZXMiOlsiL2RpcnNfbGFwdG9wX3NreWZhbGwwMS91c2VyX2JrYl9jbG91ZC1kcm9wYm94X3NreWZhbGwvY2xvdWQtZGF0YTEuYmtiLnByb3Qvd29ya185eC5jZDFvL2JlbnR4dF9wdWJsaWMuOTUuMTEvZHVuZS1zdGFydGVyL2R1bmUtc3RhcnRlci5naXQvanMvX2J1aWxkL2RlZmF1bHQvaGVsbG8ubWwiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IF8gPSBQcmludGYucHJpbnRmIFwiSGVsbG8sIHl5IHdvcmxkIVxcblwiXG4iXX0=
