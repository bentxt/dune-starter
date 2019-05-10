(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_trampoline=runtime.caml_trampoline,
     caml_trampoline_return=runtime.caml_trampoline_return;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function empty(param){return 0}
    function return$0(x,param){return [0,x,empty]}
    function map(f,seq,param)
     {var match=caml_call1(seq,0);
      if(match)
       {var
         next=match[2],
         x=match[1],
         _g_=function(_h_){return map(f,next,_h_)};
        return [0,caml_call1(f,x),_g_]}
      return 0}
    function filter_map(f,seq,param)
     {var seq$0=seq;
      for(;;)
       {var match=caml_call1(seq$0,0);
        if(match)
         {var next=match[2],x=match[1],match$0=caml_call1(f,x);
          if(match$0)
           {var y=match$0[1];
            return [0,y,function(_f_){return filter_map(f,next,_f_)}]}
          var seq$0=next;
          continue}
        return 0}}
    function filter(f,seq,param)
     {var seq$0=seq;
      for(;;)
       {var match=caml_call1(seq$0,0);
        if(match)
         {var next=match[2],x=match[1];
          if(caml_call1(f,x))
           return [0,x,function(_e_){return filter(f,next,_e_)}];
          var seq$0=next;
          continue}
        return 0}}
    function flat_map$0(counter,f,seq,param)
     {var match=caml_call1(seq,0);
      if(match)
       {var next=match[2],x=match[1],_d_=caml_call1(f,x),_c_=0;
        if(counter < 50)
         {var counter$0=counter + 1 | 0;
          return flat_map_app$0(counter$0,f,_d_,next,_c_)}
        return caml_trampoline_return(flat_map_app$0,[0,f,_d_,next,_c_])}
      return 0}
    function flat_map_app$0(counter,f,seq,tail,param)
     {var match=caml_call1(seq,0);
      if(match)
       {var next=match[2],x=match[1];
        return [0,x,function(_b_){return flat_map_app(f,next,tail,_b_)}]}
      var _a_=0;
      if(counter < 50)
       {var counter$0=counter + 1 | 0;return flat_map$0(counter$0,f,tail,_a_)}
      return caml_trampoline_return(flat_map$0,[0,f,tail,_a_])}
    function flat_map(f,seq,param)
     {return caml_trampoline(flat_map$0(0,f,seq,param))}
    function flat_map_app(f,seq,tail,param)
     {return caml_trampoline(flat_map_app$0(0,f,seq,tail,param))}
    function fold_left(f,acc,seq)
     {var acc$0=acc,seq$0=seq;
      for(;;)
       {var match=caml_call1(seq$0,0);
        if(match)
         {var
           next=match[2],
           x=match[1],
           acc$1=caml_call2(f,acc$0,x),
           acc$0=acc$1,
           seq$0=next;
          continue}
        return acc$0}}
    function iter(f,seq)
     {var seq$0=seq;
      for(;;)
       {var match=caml_call1(seq$0,0);
        if(match)
         {var next=match[2],x=match[1];
          caml_call1(f,x);
          var seq$0=next;
          continue}
        return 0}}
    var Seq=[0,empty,return$0,map,filter,filter_map,flat_map,fold_left,iter];
    runtime.caml_register_global(0,Seq,"Seq");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJzZXEuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdfQ==
