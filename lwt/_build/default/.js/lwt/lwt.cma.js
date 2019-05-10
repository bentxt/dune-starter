(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_fresh_oo_id=runtime.caml_fresh_oo_id,
     caml_new_string=runtime.caml_new_string,
     caml_obj_tag=runtime.caml_obj_tag,
     caml_register_global=runtime.caml_register_global,
     caml_trampoline=runtime.caml_trampoline,
     caml_trampoline_return=runtime.caml_trampoline_return,
     caml_update_dummy=runtime.caml_update_dummy,
     caml_wrap_exception=runtime.caml_wrap_exception;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    function caml_call4(f,a0,a1,a2,a3)
     {return f.length == 4
              ?f(a0,a1,a2,a3)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3])}
    function caml_call5(f,a0,a1,a2,a3,a4)
     {return f.length == 5
              ?f(a0,a1,a2,a3,a4)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4])}
    function caml_call6(f,a0,a1,a2,a3,a4,a5)
     {return f.length == 6
              ?f(a0,a1,a2,a3,a4,a5)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5])}
    function caml_call7(f,a0,a1,a2,a3,a4,a5,a6)
     {return f.length == 7
              ?f(a0,a1,a2,a3,a4,a5,a6)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Lwt_sequence_Empty=caml_new_string("Lwt_sequence.Empty"),
     cst_wakeup_later_exn=caml_new_string("wakeup_later_exn"),
     cst_wakeup_later=caml_new_string("wakeup_later"),
     cst_wakeup_later_result=caml_new_string("wakeup_later_result"),
     cst_wakeup_exn=caml_new_string("wakeup_exn"),
     cst_wakeup=caml_new_string("wakeup"),
     cst_wakeup_result=caml_new_string("wakeup_result"),
     cst_Fatal_error_exception=caml_new_string("Fatal error: exception "),
     cst_Lwt_Resolution_loop_Canceled=
      caml_new_string("Lwt.Resolution_loop.Canceled"),
     cst$3=caml_new_string("    "),
     cst$4=caml_new_string("   "),
     cst$5=caml_new_string(" |"),
     cst_Lwt_stream_parse=caml_new_string("Lwt_stream.parse"),
     cst_Lwt_stream_create_bounded=
      caml_new_string("Lwt_stream.create_bounded"),
     cst_Lwt_stream_bounded_push_resize=
      caml_new_string("Lwt_stream.bounded_push#resize"),
     cst=caml_new_string(""),
     cst$0=caml_new_string(""),
     cst$1=caml_new_string(""),
     cst$2=caml_new_string(""),
     cst_Lwt_stream_clone=caml_new_string("Lwt_stream.clone"),
     shared=
      [0,
       caml_new_string("blocked"),
       caml_new_string("close"),
       caml_new_string("push"),
       caml_new_string("count"),
       caml_new_string("size"),
       caml_new_string("set_reference"),
       caml_new_string("resize"),
       caml_new_string("closed")],
     cst_Lwt_stream_Closed=caml_new_string("Lwt_stream.Closed"),
     cst_Lwt_stream_Full=caml_new_string("Lwt_stream.Full"),
     cst_Lwt_stream_Empty=caml_new_string("Lwt_stream.Empty"),
     cst_Lwt_switch_Off=caml_new_string("Lwt_switch.Off"),
     Not_found=global_data.Not_found,
     Assert_failure=global_data.Assert_failure,
     List=global_data.List,
     CamlinternalLazy=global_data.CamlinternalLazy,
     Random=global_data.Random,
     Invalid_argument=global_data.Invalid_argument,
     Failure=global_data.Failure,
     Pervasives=global_data.Pervasives,
     Printf=global_data.Printf,
     Queue=global_data.Queue,
     Printexc=global_data.Printexc,
     Map=global_data.Map,
     Buffer=global_data.Buffer,
     CamlinternalOO=global_data.CamlinternalOO,
     String=global_data.String,
     Array=global_data.Array,
     Empty=[248,cst_Lwt_sequence_Empty,caml_fresh_oo_id(0)],
     _N_=[0,caml_new_string("src/core/lwt.ml"),2605,6],
     _O_=[0,caml_new_string("src/core/lwt.ml"),2625,6],
     _T_=[0,0],
     _U_=[0,0],
     _S_=[0,0],
     _R_=[0,0],
     _Q_=[0,0],
     _P_=[0,0],
     _M_=[0,caml_new_string("src/core/lwt.ml"),2580,13],
     _L_=[0,0],
     _K_=[0,0],
     _I_=[0,1],
     _J_=[0,1],
     _G_=[0,1],
     _H_=[0,1],
     _F_=[0,1],
     _E_=[0,1],
     _C_=[0,0],
     _D_=[0,1],
     _A_=[0,1],
     _B_=[0,1],
     _y_=[0,1],
     _z_=[0,1],
     _w_=[0,0],
     _x_=[0,1],
     _u_=[0,0],
     _v_=[0,1],
     _r_=[0,0],
     _s_=[0,0],
     _t_=[0,1],
     _p_=[0,0],
     _q_=[0,1],
     _n_=[0,0],
     _o_=[0,1],
     _l_=[0,0],
     _m_=[0,0],
     _k_=[0,0],
     _j_=[0,0],
     _i_=[0,0],
     _f_=[0,[11,caml_new_string("Lwt."),[2,0,0]],caml_new_string("Lwt.%s")],
     _g_=[0,[11,caml_new_string("Lwt."),[2,0,0]],caml_new_string("Lwt.%s")],
     _h_=[0,1],
     _c_=[0,[11,caml_new_string("Lwt."),[2,0,0]],caml_new_string("Lwt.%s")],
     _d_=[0,[11,caml_new_string("Lwt."),[2,0,0]],caml_new_string("Lwt.%s")],
     _e_=[0,0],
     _a_=[0,caml_new_string("src/core/lwt.ml"),993,23],
     _b_=[0,caml_new_string("src/core/lwt.ml"),994,22],
     _aa_=[0,caml_new_string("src/core/lwt_pqueue.ml"),73,15],
     _ah_=[0,[4,6,[0,2,2],0,[12,32,0]],caml_new_string("%02x ")],
     _ag_=
      [0,
       [4,6,[0,2,8],0,[11,caml_new_string("|  "),0]],
       caml_new_string("%08x|  ")],
     _af_=
      [0,
       [11,
        caml_new_string("Lwt_stream.iter_n: max_concurrency must be > 0, "),
        [4,0,0,0,[11,caml_new_string(" given"),0]]],
       caml_new_string
        ("Lwt_stream.iter_n: max_concurrency must be > 0, %d given")],
     _ac_=
      [0,
       caml_new_string("size"),
       caml_new_string("set_reference"),
       caml_new_string("resize"),
       caml_new_string("push"),
       caml_new_string("count"),
       caml_new_string("closed"),
       caml_new_string("close"),
       caml_new_string("blocked")],
     _ad_=[0,caml_new_string("closed")];
    function get(node){return node[3]}
    function set(node,data){node[3] = data;return 0}
    function remove(node)
     {var
       _gM_=node[4],
       _gN_=
        _gM_?(node[4] = 0,node[1][2] = node[2],node[2][1] = node[1],0):_gM_;
      return _gN_}
    function create(param)
     {var seq=[];caml_update_dummy(seq,[0,seq,seq]);return seq}
    function is_empty(seq){return seq[2] === seq?1:0}
    function length(seq)
     {var curr=seq[2],len=0;
      for(;;)
       {if(curr === seq)return len;
        var len$0=len + 1 | 0,curr$0=curr[2],curr=curr$0,len=len$0;
        continue}}
    function add_l(data,seq)
     {var node=[0,seq,seq[2],data,1];
      seq[2][1] = node;
      seq[2] = node;
      return node}
    function add_r(data,seq)
     {var node=[0,seq[1],seq,data,1];
      seq[1][2] = node;
      seq[1] = node;
      return node}
    function take_l(seq)
     {if(is_empty(seq))throw Empty;
      var node=seq[2];
      remove(node);
      return node[3]}
    function take_r(seq)
     {if(is_empty(seq))throw Empty;
      var node=seq[1];
      remove(node);
      return node[3]}
    function take_opt_l(seq)
     {if(is_empty(seq))return 0;
      var node=seq[2];
      remove(node);
      return [0,node[3]]}
    function take_opt_r(seq)
     {if(is_empty(seq))return 0;
      var node=seq[1];
      remove(node);
      return [0,node[3]]}
    function transfer_l(s1,s2)
     {s2[2][1] = s1[1];
      s1[1][2] = s2[2];
      s2[2] = s1[2];
      s1[2][1] = s2;
      s1[1] = s1;
      s1[2] = s1;
      return 0}
    function transfer_r(s1,s2)
     {s2[1][2] = s1[2];
      s1[2][1] = s2[1];
      s2[1] = s1[1];
      s1[1][2] = s2;
      s1[1] = s1;
      s1[2] = s1;
      return 0}
    function iter_l(f,seq)
     {var curr=seq[2];
      for(;;)
       {var _gL_=curr !== seq?1:0;
        if(_gL_)
         {if(curr[4])caml_call1(f,curr[3]);
          var curr$0=curr[2],curr=curr$0;
          continue}
        return _gL_}}
    function iter_r(f,seq)
     {var curr=seq[1];
      for(;;)
       {var _gK_=curr !== seq?1:0;
        if(_gK_)
         {if(curr[4])caml_call1(f,curr[3]);
          var curr$0=curr[1],curr=curr$0;
          continue}
        return _gK_}}
    function iter_node_l(f,seq)
     {var curr=seq[2];
      for(;;)
       {var _gJ_=curr !== seq?1:0;
        if(_gJ_)
         {if(curr[4])caml_call1(f,curr);
          var curr$0=curr[2],curr=curr$0;
          continue}
        return _gJ_}}
    function iter_node_r(f,seq)
     {var curr=seq[1];
      for(;;)
       {var _gI_=curr !== seq?1:0;
        if(_gI_)
         {if(curr[4])caml_call1(f,curr);
          var curr$0=curr[1],curr=curr$0;
          continue}
        return _gI_}}
    function fold_l(f,seq,acc)
     {var curr=seq[2],acc$0=acc;
      for(;;)
       {if(curr === seq)return acc$0;
        if(curr[4])
         {var
           acc$1=caml_call2(f,curr[3],acc$0),
           curr$0=curr[2],
           curr=curr$0,
           acc$0=acc$1;
          continue}
        var curr$1=curr[2],curr=curr$1;
        continue}}
    function fold_r(f,seq,acc)
     {var curr=seq[1],acc$0=acc;
      for(;;)
       {if(curr === seq)return acc$0;
        if(curr[4])
         {var
           acc$1=caml_call2(f,curr[3],acc$0),
           curr$0=curr[1],
           curr=curr$0,
           acc$0=acc$1;
          continue}
        var curr$1=curr[1],curr=curr$1;
        continue}}
    function find_node_l(f,seq)
     {var curr=seq[2];
      for(;;)
       {if(curr !== seq)
         {if(curr[4])
           {if(caml_call1(f,curr[3]))return curr;
            var curr$0=curr[2],curr=curr$0;
            continue}
          var curr$1=curr[2],curr=curr$1;
          continue}
        throw Not_found}}
    function find_node_r(f,seq)
     {var curr=seq[1];
      for(;;)
       {if(curr !== seq)
         {if(curr[4])
           {if(caml_call1(f,curr[3]))return curr;
            var curr$0=curr[1],curr=curr$0;
            continue}
          var curr$1=curr[1],curr=curr$1;
          continue}
        throw Not_found}}
    function find_node_opt_l(f,seq)
     {try
       {var _gG_=[0,find_node_l(f,seq)];return _gG_}
      catch(_gH_)
       {_gH_ = caml_wrap_exception(_gH_);
        if(_gH_ === Not_found)return 0;
        throw _gH_}}
    function find_node_opt_r(f,seq)
     {try
       {var _gE_=[0,find_node_r(f,seq)];return _gE_}
      catch(_gF_)
       {_gF_ = caml_wrap_exception(_gF_);
        if(_gF_ === Not_found)return 0;
        throw _gF_}}
    var
     Lwt_sequence=
      [0,
       get,
       set,
       remove,
       create,
       is_empty,
       length,
       add_l,
       add_r,
       Empty,
       take_l,
       take_r,
       take_opt_l,
       take_opt_r,
       transfer_l,
       transfer_r,
       iter_l,
       iter_r,
       iter_node_l,
       iter_node_r,
       fold_l,
       fold_r,
       find_node_opt_l,
       find_node_opt_r,
       find_node_l,
       find_node_r];
    caml_register_global(79,Lwt_sequence,"Lwt_sequence");
    var
     compare=runtime.caml_compare,
     Storage_map=caml_call1(Map[1],[0,compare]);
    function state_of_result(param)
     {if(0 === param[0]){var x=param[1];return [0,x]}
      var exn=param[1];
      return [1,exn]}
    function underlying(p)
     {var _gD_=p[1];
      switch(_gD_[0])
       {case 0:return p;
        case 1:return p;
        case 2:return p;
        default:
         var p$0=_gD_[1],p$1=underlying(p$0);
         if(1 - (p$1 === p$0?1:0))p[1] = [3,p$1];
         return p$1}}
    function set_promise_state(p,state){p[1] = state;return p}
    var next_key_id=[0,0];
    function new_key(param)
     {var id=next_key_id[1];next_key_id[1] = id + 1 | 0;return [0,id,0]}
    var current_storage=[0,Storage_map[1]];
    function get$0(key)
     {try
       {var refresh=caml_call2(Storage_map[27],key[1],current_storage[1]);
        caml_call1(refresh,0);
        var value=key[2];
        key[2] = 0;
        return value}
      catch(_gC_)
       {_gC_ = caml_wrap_exception(_gC_);
        if(_gC_ === Not_found)return 0;
        throw _gC_}}
    function with_value(key,value,f)
     {if(value)
       var
        refresh=function(param){key[2] = value;return 0},
        new_storage=
         caml_call3(Storage_map[4],key[1],refresh,current_storage[1]);
      else
       var new_storage=caml_call2(Storage_map[7],key[1],current_storage[1]);
      var saved_storage=current_storage[1];
      current_storage[1] = new_storage;
      try
       {var result=caml_call1(f,0);
        current_storage[1] = saved_storage;
        return result}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        current_storage[1] = saved_storage;
        throw exn}}
    function concat_regular_callbacks(l1,l2)
     {return typeof l1 === "number"?l2:typeof l2 === "number"?l1:[0,l1,l2]}
    function clean_up_callback_cells(callbacks)
     {if(typeof callbacks !== "number")
       switch(callbacks[0])
        {case 0:
          var
           l2=callbacks[2],
           l1=callbacks[1],
           l1$0=clean_up_callback_cells(l1),
           l2$0=clean_up_callback_cells(l2);
          return concat_regular_callbacks(l1$0,l2$0);
         case 2:if(! callbacks[1][1])return 0;break
         }
      return callbacks}
    function clear_explicitly_removable_callback_cell(cell,ps)
     {cell[1] = 0;
      function _gz_(p)
       {var _gA_=underlying(p)[1];
        switch(_gA_[0])
         {case 1:return 0;
          case 2:
           var callbacks=_gA_[1],_gB_=callbacks[1];
           if(typeof _gB_ !== "number" && 2 === _gB_[0])
            {callbacks[1] = 0;return 0}
           var cleanups_deferred=callbacks[4] + 1 | 0;
           return 42 < cleanups_deferred
                   ?(callbacks[4]
                     =
                     0,
                     callbacks[1]
                     =
                     clean_up_callback_cells(callbacks[1]),
                     0)
                   :(callbacks[4] = cleanups_deferred,0);
          default:return 0}}
      return caml_call2(List[15],_gz_,ps)}
    function add_regular_callback_list_node(callbacks,node)
     {var
       _gy_=callbacks[1],
       node$0=typeof _gy_ === "number"?node:[0,node,_gy_];
      callbacks[1] = node$0;
      return 0}
    function add_implicitly_removed_callback(callbacks,f)
     {return add_regular_callback_list_node(callbacks,[1,f])}
    function add_explicitly_removable_callback_and_give_cell(ps,f)
     {var
       cell=[],
       self_removing_callback_wrapper=
        function _gx_(_gw_){return _gx_.fun(_gw_)};
      caml_update_dummy(cell,[0,[0,self_removing_callback_wrapper]]);
      caml_update_dummy
       (self_removing_callback_wrapper,
        function(result)
         {clear_explicitly_removable_callback_cell(cell,ps);
          return caml_call1(f,result)});
      var node=[2,cell];
      function _gu_(p)
       {var _gv_=underlying(p)[1];
        switch(_gv_[0])
         {case 1:throw [0,Assert_failure,_b_];
          case 2:
           var callbacks=_gv_[1];
           return add_regular_callback_list_node(callbacks,node);
          default:throw [0,Assert_failure,_a_]}}
      caml_call2(List[15],_gu_,ps);
      return cell}
    function add_explicitly_removable_callback_to_each_of(ps,f)
     {add_explicitly_removable_callback_and_give_cell(ps,f);return 0}
    function add_cancel_callback(callbacks,f)
     {var
       node=[1,current_storage[1],f],
       node$0=typeof callbacks[2] === "number"?node:[0,node,callbacks[2]];
      callbacks[2] = node$0;
      return 0}
    var
     async_exception_hook=
      [0,
       function(exn)
        {caml_call1(Pervasives[37],cst_Fatal_error_exception);
         var _gt_=caml_call1(Printexc[1],exn);
         caml_call1(Pervasives[37],_gt_);
         caml_call1(Pervasives[36],10);
         caml_call1(Printexc[4],Pervasives[28]);
         caml_call1(Pervasives[51],Pervasives[28]);
         return caml_call1(Pervasives[87],2)}];
    function handle_with_async_exception_hook(f,v)
     {try
       {var _gs_=caml_call1(f,v);return _gs_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        return caml_call1(async_exception_hook[1],exn)}}
    var Canceled=[248,cst_Lwt_Resolution_loop_Canceled,caml_fresh_oo_id(0)];
    function run_callbacks(callbacks,result)
     {if(1 === result[0])
       var _gq_=result[1] === Canceled?1:0,is_canceled=_gq_;
      else
       var is_canceled=0;
      if(is_canceled)
       {var
         _go_=callbacks[2],
         iter_callback_list$2=
          function(counter,fs,rest)
           {var fs$0=fs,rest$0=rest;
            for(;;)
             if(typeof fs$0 === "number")
              {if(counter < 50)
                {var counter$0=counter + 1 | 0;
                 return iter_list$0(counter$0,rest$0)}
               return caml_trampoline_return(iter_list$0,[0,rest$0])}
             else
              switch(fs$0[0])
               {case 0:
                 var
                  fs$1=fs$0[2],
                  fs$2=fs$0[1],
                  rest$1=[0,fs$1,rest$0],
                  fs$0=fs$2,
                  rest$0=rest$1;
                 continue;
                case 1:
                 var f=fs$0[2],storage=fs$0[1];
                 current_storage[1] = storage;
                 handle_with_async_exception_hook(f,0);
                 if(counter < 50)
                  {var counter$1=counter + 1 | 0;
                   return iter_list$0(counter$1,rest$0)}
                 return caml_trampoline_return(iter_list$0,[0,rest$0]);
                default:
                 var node=fs$0[1];
                 remove(node);
                 if(counter < 50)
                  {var counter$2=counter + 1 | 0;
                   return iter_list$0(counter$2,rest$0)}
                 return caml_trampoline_return(iter_list$0,[0,rest$0])}},
         iter_list$0=
          function(counter,rest)
           {if(rest)
             {var rest$0=rest[2],fs=rest[1];
              if(counter < 50)
               {var counter$0=counter + 1 | 0;
                return iter_callback_list$2(counter$0,fs,rest$0)}
              return caml_trampoline_return
                      (iter_callback_list$2,[0,fs,rest$0])}
            return 0},
         iter_callback_list=
          function(fs,rest)
           {return caml_trampoline(iter_callback_list$2(0,fs,rest))};
        iter_callback_list(_go_,0)}
      var _gp_=callbacks[1];
      function iter_callback_list$1(counter,fs,rest)
       {var fs$0=fs,rest$0=rest;
        for(;;)
         if(typeof fs$0 === "number")
          {if(counter < 50)
            {var counter$0=counter + 1 | 0;return iter_list(counter$0,rest$0)}
           return caml_trampoline_return(iter_list,[0,rest$0])}
         else
          switch(fs$0[0])
           {case 0:
             var
              fs$1=fs$0[2],
              fs$2=fs$0[1],
              rest$1=[0,fs$1,rest$0],
              fs$0=fs$2,
              rest$0=rest$1;
             continue;
            case 1:
             var f=fs$0[1];
             caml_call1(f,result);
             if(counter < 50)
              {var counter$1=counter + 1 | 0;
               return iter_list(counter$1,rest$0)}
             return caml_trampoline_return(iter_list,[0,rest$0]);
            default:
             var _gr_=fs$0[1][1];
             if(_gr_)
              {var f$0=_gr_[1];
               caml_call1(f$0,result);
               if(counter < 50)
                {var counter$2=counter + 1 | 0;
                 return iter_list(counter$2,rest$0)}
               return caml_trampoline_return(iter_list,[0,rest$0])}
             if(counter < 50)
              {var counter$3=counter + 1 | 0;
               return iter_list(counter$3,rest$0)}
             return caml_trampoline_return(iter_list,[0,rest$0])}}
      function iter_list(counter,rest)
       {if(rest)
         {var rest$0=rest[2],fs=rest[1];
          if(counter < 50)
           {var counter$0=counter + 1 | 0;
            return iter_callback_list$1(counter$0,fs,rest$0)}
          return caml_trampoline_return(iter_callback_list$1,[0,fs,rest$0])}
        return 0}
      function iter_callback_list$0(fs,rest)
       {return caml_trampoline(iter_callback_list$1(0,fs,rest))}
      return iter_callback_list$0(_gp_,0)}
    var
     current_callback_nesting_depth=[0,0],
     deferred_callbacks=caml_call1(Queue[2],0),
     default_maximum_callback_nesting_depth=42;
    function leave_resolution_loop(storage_snapshot)
     {if(1 === current_callback_nesting_depth[1])
       for(;;)
        {if(! caml_call1(Queue[11],deferred_callbacks))
          {var
            match=caml_call1(Queue[6],deferred_callbacks),
            result=match[2],
            callbacks=match[1];
           run_callbacks(callbacks,result);
           continue}
         break}
      current_callback_nesting_depth[1]
      =
      current_callback_nesting_depth[1]
      -
      1
      |
      0;
      current_storage[1] = storage_snapshot;
      return 0}
    function run_in_resolution_loop(f)
     {current_callback_nesting_depth[1]
      =
      current_callback_nesting_depth[1]
      +
      1
      |
      0;
      var storage_snapshot=current_storage[1],result=caml_call1(f,0);
      leave_resolution_loop(storage_snapshot);
      return result}
    function abandon_wakeups(param)
     {var _gn_=0 !== current_callback_nesting_depth[1]?1:0;
      return _gn_?leave_resolution_loop(Storage_map[1]):_gn_}
    function run_callbacks_or_defer_them(opt,_gm_,callbacks,result)
     {if(opt)var sth=opt[1],allow_deferring=sth;else var allow_deferring=1;
      if(_gm_)
       var sth$0=_gm_[1],maximum_callback_nesting_depth=sth$0;
      else
       var
        maximum_callback_nesting_depth=
         default_maximum_callback_nesting_depth;
      var
       should_defer=
        allow_deferring
         ?maximum_callback_nesting_depth <= current_callback_nesting_depth[1]
           ?1
           :0
         :allow_deferring;
      return should_defer
              ?caml_call2(Queue[4],[0,callbacks,result],deferred_callbacks)
              :run_in_resolution_loop
                (function(param){return run_callbacks(callbacks,result)})}
    function resolve(allow_deferring,maximum_callback_nesting_depth,p,result)
     {var match=p[1],callbacks=match[1],p$0=set_promise_state(p,result);
      run_callbacks_or_defer_them
       (allow_deferring,maximum_callback_nesting_depth,callbacks,result);
      return p$0}
    function run_callback_or_defer_it(opt,f,if_deferred)
     {if(opt)
       var sth=opt[1],run_immediately_and_ensure_tail_call=sth;
      else
       var run_immediately_and_ensure_tail_call=0;
      if(run_immediately_and_ensure_tail_call)return caml_call1(f,0);
      var should_defer=42 <= current_callback_nesting_depth[1]?1:0;
      if(should_defer)
       {var
         match=caml_call1(if_deferred,0),
         deferred_result=match[3],
         deferred_callback=match[2],
         immediate_result=match[1],
         deferred_record=[0,[1,deferred_callback],0,0,0];
        caml_call2
         (Queue[4],[0,deferred_record,deferred_result],deferred_callbacks);
        return immediate_result}
      return run_in_resolution_loop(function(param){return caml_call1(f,0)})}
    function wakeup_general(api_function_name,p,result)
     {var p$0=underlying(p),_gl_=p$0[1];
      switch(_gl_[0])
       {case 1:
         return _gl_[1] === Canceled
                 ?0
                 :caml_call3(Printf[9],Pervasives[1],_d_,api_function_name);
        case 2:
         var result$0=state_of_result(result);
         resolve(_e_,0,p$0,result$0);
         return 0;
        default:
         return caml_call3(Printf[9],Pervasives[1],_c_,api_function_name)}}
    function wakeup_result(r,result)
     {return wakeup_general(cst_wakeup_result,r,result)}
    function wakeup(r,v){return wakeup_general(cst_wakeup,r,[0,v])}
    function wakeup_exn(r,exn)
     {return wakeup_general(cst_wakeup_exn,r,[1,exn])}
    function wakeup_later_general(api_function_name,p,result)
     {var p$0=underlying(p),_gk_=p$0[1];
      switch(_gk_[0])
       {case 1:
         return _gk_[1] === Canceled
                 ?0
                 :caml_call3(Printf[9],Pervasives[1],_g_,api_function_name);
        case 2:
         var result$0=state_of_result(result);
         resolve(0,_h_,p$0,result$0);
         return 0;
        default:
         return caml_call3(Printf[9],Pervasives[1],_f_,api_function_name)}}
    function wakeup_later_result(r,result)
     {return wakeup_later_general(cst_wakeup_later_result,r,result)}
    function wakeup_later(r,v)
     {return wakeup_later_general(cst_wakeup_later,r,[0,v])}
    function wakeup_later_exn(r,exn)
     {return wakeup_later_general(cst_wakeup_later_exn,r,[1,exn])}
    function cancel(match)
     {var canceled_result=[1,Canceled];
      function cancel_and_collect_callbacks(callbacks_accumulator,p)
       {var p$0=p;
        for(;;)
         {var p$1=underlying(p$0),_gi_=p$1[1];
          switch(_gi_[0])
           {case 1:return callbacks_accumulator;
            case 2:
             var callbacks=_gi_[1],_gj_=callbacks[3];
             if(typeof _gj_ === "number")
              return 0 === _gj_
                      ?callbacks_accumulator
                      :(set_promise_state(p$1,canceled_result),
                        [0,callbacks,callbacks_accumulator]);
             else
              {if(0 === _gj_[0]){var p$2=_gj_[1],p$0=p$2;continue}
               var ps=_gj_[1];
               return caml_call3
                       (List[20],
                        cancel_and_collect_callbacks,
                        callbacks_accumulator,
                        ps)}
            default:return callbacks_accumulator}}}
      var callbacks=cancel_and_collect_callbacks(0,match);
      function _gh_(param)
       {return run_callbacks_or_defer_them(_i_,0,param,canceled_result)}
      return caml_call2(List[15],_gh_,callbacks)}
    function lift(v){return [0,[0,v]]}
    function of_result(result){return [0,state_of_result(result)]}
    function fail(exn){return [0,[1,exn]]}
    var return_unit=lift(0),return_none=lift(0);
    function return_some(x){return lift([0,x])}
    var acc=lift(0),return_true=lift(1),return_false=lift(0);
    function return_ok(x){return lift([0,x])}
    function return_error(x){return lift([1,x])}
    function fail_with(msg){return [0,[1,[0,Failure,msg]]]}
    function fail_invalid_arg(msg){return [0,[1,[0,Invalid_argument,msg]]]}
    function new_pending(how_to_cancel)
     {var state=[2,[0,0,0,how_to_cancel,0]];return [0,state]}
    function wait(param){var p=new_pending(0);return [0,p,p]}
    function task(param){var p=new_pending(1);return [0,p,p]}
    function waiter_of_wakener(r){return r}
    function add_task_r(sequence)
     {var
       p=new_pending(1),
       node=add_r(p,sequence),
       match=p[1],
       callbacks=match[1];
      callbacks[2] = [2,node];
      return p}
    function add_task_l(sequence)
     {var
       p=new_pending(1),
       node=add_l(p,sequence),
       match=p[1],
       callbacks=match[1];
      callbacks[2] = [2,node];
      return p}
    function protected$0(p)
     {switch(underlying(p)[1][0])
       {case 1:return p;
        case 2:
         var
          p$0=new_pending(1),
          f=
           function(p_result)
            {var p=underlying(p$0);resolve(_j_,0,p,p_result);return 0},
          ps=[0,p,0],
          cell=add_explicitly_removable_callback_and_give_cell(ps,f),
          remove_the_callback=
           function(param)
            {return clear_explicitly_removable_callback_cell(cell,ps)},
          match=p$0[1],
          p_callbacks=match[1];
         add_cancel_callback(p_callbacks,remove_the_callback);
         return p$0;
        default:return p}}
    function no_cancel(p)
     {var _gg_=underlying(p)[1];
      switch(_gg_[0])
       {case 1:return p;
        case 2:
         var
          p_callbacks=_gg_[1],
          p$0=new_pending(0),
          callback=
           function(p_result)
            {var p=underlying(p$0);resolve(_k_,0,p,p_result);return 0};
         add_implicitly_removed_callback(p_callbacks,callback);
         return p$0;
        default:return p}}
    function make_into_proxy(outer_promise,user_provided_promise)
     {var p=underlying(user_provided_promise);
      if(p === outer_promise)return p;
      var _gf_=p[1];
      switch(_gf_[0])
       {case 1:return resolve(_m_,0,outer_promise,p[1]);
        case 2:
         var
          p_callbacks=_gf_[1],
          match=outer_promise[1],
          outer_callbacks=match[1],
          regular_callbacks=
           concat_regular_callbacks(outer_callbacks[1],p_callbacks[1]),
          cleanups_deferred=outer_callbacks[4] + p_callbacks[4] | 0;
         if(42 < cleanups_deferred)
          var
           regular_callbacks$0=clean_up_callback_cells(regular_callbacks),
           cleanups_deferred$0=0;
         else
          var
           regular_callbacks$0=regular_callbacks,
           cleanups_deferred$0=cleanups_deferred;
         var
          _gd_=p_callbacks[2],
          _ge_=outer_callbacks[2],
          cancel_callbacks=
           typeof _ge_ === "number"
            ?_gd_
            :typeof _gd_ === "number"?_ge_:[0,_ge_,_gd_];
         outer_callbacks[1] = regular_callbacks$0;
         outer_callbacks[2] = cancel_callbacks;
         outer_callbacks[4] = cleanups_deferred$0;
         outer_callbacks[3] = p_callbacks[3];
         set_promise_state(p,[3,outer_promise]);
         return outer_promise;
        default:return resolve(_l_,0,outer_promise,p[1])}}
    function bind(p,f)
     {var p$0=underlying(p);
      function create_result_promise_and_callback_if_deferred(param)
       {var p=new_pending([0,p$0]),saved_storage=current_storage[1];
        function callback(p_result)
         {if(1 === p_result[0])
           {var p$2=underlying(p);resolve(_n_,0,p$2,p_result);return 0}
          var v=p_result[1];
          current_storage[1] = saved_storage;
          try
           {var _gc_=caml_call1(f,v),p$0=_gc_}
          catch(exn){exn = caml_wrap_exception(exn);var p$0=fail(exn)}
          var p$1=underlying(p);
          make_into_proxy(p$1,p$0);
          return 0}
        return [0,p,callback]}
      var _ga_=p$0[1];
      switch(_ga_[0])
       {case 1:return [0,_ga_];
        case 2:
         var
          p_callbacks=_ga_[1],
          match=create_result_promise_and_callback_if_deferred(0),
          callback=match[2],
          p$1=match[1];
         add_implicitly_removed_callback(p_callbacks,callback);
         return p$1;
        default:
         var
          v=_ga_[1],
          _gb_=
           function(param)
            {var
              match=create_result_promise_and_callback_if_deferred(0),
              callback=match[2],
              p=match[1];
             return [0,p,callback,p$0[1]]};
         return run_callback_or_defer_it
                 (_o_,function(param){return caml_call1(f,v)},_gb_)}}
    function backtrace_bind(add_loc,p,f)
     {var p$0=underlying(p);
      function create_result_promise_and_callback_if_deferred(param)
       {var p=new_pending([0,p$0]),saved_storage=current_storage[1];
        function callback(p_result)
         {if(1 === p_result[0])
           {var exn=p_result[1],p$2=underlying(p);
            resolve(_p_,0,p$2,[1,caml_call1(add_loc,exn)]);
            return 0}
          var v=p_result[1];
          current_storage[1] = saved_storage;
          try
           {var _f$_=caml_call1(f,v),p$0=_f$_}
          catch(exn)
           {exn = caml_wrap_exception(exn);
            var p$0=fail(caml_call1(add_loc,exn))}
          var p$1=underlying(p);
          make_into_proxy(p$1,p$0);
          return 0}
        return [0,p,callback]}
      var _f9_=p$0[1];
      switch(_f9_[0])
       {case 1:var exn=_f9_[1];return [0,[1,caml_call1(add_loc,exn)]];
        case 2:
         var
          p_callbacks=_f9_[1],
          match=create_result_promise_and_callback_if_deferred(0),
          callback=match[2],
          p$1=match[1];
         add_implicitly_removed_callback(p_callbacks,callback);
         return p$1;
        default:
         var
          v=_f9_[1],
          _f__=
           function(param)
            {var
              match=create_result_promise_and_callback_if_deferred(0),
              callback=match[2],
              p=match[1];
             return [0,p,callback,p$0[1]]};
         return run_callback_or_defer_it
                 (_q_,function(param){return caml_call1(f,v)},_f__)}}
    function map(f,p)
     {var p$0=underlying(p);
      function create_result_promise_and_callback_if_deferred(param)
       {var p=new_pending([0,p$0]),saved_storage=current_storage[1];
        function callback(p_result)
         {if(1 === p_result[0])
           {var p$1=underlying(p);resolve(_s_,0,p$1,p_result);return 0}
          var v=p_result[1];
          current_storage[1] = saved_storage;
          try
           {var _f8_=[0,caml_call1(f,v)],p_result$0=_f8_}
          catch(exn){exn = caml_wrap_exception(exn);var p_result$0=[1,exn]}
          var p$0=underlying(p);
          resolve(_r_,0,p$0,p_result$0);
          return 0}
        return [0,p,callback]}
      var _f4_=p$0[1];
      switch(_f4_[0])
       {case 1:return [0,_f4_];
        case 2:
         var
          p_callbacks=_f4_[1],
          match=create_result_promise_and_callback_if_deferred(0),
          callback=match[2],
          p$1=match[1];
         add_implicitly_removed_callback(p_callbacks,callback);
         return p$1;
        default:
         var
          v=_f4_[1],
          _f5_=
           function(param)
            {var
              match=create_result_promise_and_callback_if_deferred(0),
              callback=match[2],
              p=match[1];
             return [0,p,callback,p$0[1]]};
         return run_callback_or_defer_it
                 (_t_,
                  function(param)
                   {try
                     {var _f7_=[0,caml_call1(f,v)],_f6_=_f7_}
                    catch(exn){exn = caml_wrap_exception(exn);var _f6_=[1,exn]}
                    return [0,_f6_]},
                  _f5_)}}
    function catch$0(f,h)
     {try
       {var _f2_=caml_call1(f,0),p=_f2_}
      catch(exn){exn = caml_wrap_exception(exn);var p=fail(exn)}
      var p$0=underlying(p);
      function create_result_promise_and_callback_if_deferred(param)
       {var p=new_pending([0,p$0]),saved_storage=current_storage[1];
        function callback(p_result)
         {if(1 === p_result[0])
           {var exn=p_result[1];
            current_storage[1] = saved_storage;
            try
             {var _f3_=caml_call1(h,exn),p$1=_f3_}
            catch(exn){exn = caml_wrap_exception(exn);var p$1=fail(exn)}
            var p$2=underlying(p);
            make_into_proxy(p$2,p$1);
            return 0}
          var p$0=underlying(p);
          resolve(_u_,0,p$0,p_result);
          return 0}
        return [0,p,callback]}
      var _f0_=p$0[1];
      switch(_f0_[0])
       {case 1:
         var
          exn=_f0_[1],
          _f1_=
           function(param)
            {var
              match=create_result_promise_and_callback_if_deferred(0),
              callback=match[2],
              p=match[1];
             return [0,p,callback,p$0[1]]};
         return run_callback_or_defer_it
                 (_v_,function(param){return caml_call1(h,exn)},_f1_);
        case 2:
         var
          p_callbacks=_f0_[1],
          match=create_result_promise_and_callback_if_deferred(0),
          callback=match[2],
          p$1=match[1];
         add_implicitly_removed_callback(p_callbacks,callback);
         return p$1;
        default:return p$0}}
    function backtrace_catch(add_loc,f,h)
     {try
       {var _fY_=caml_call1(f,0),p=_fY_}
      catch(exn){exn = caml_wrap_exception(exn);var p=fail(exn)}
      var p$0=underlying(p);
      function create_result_promise_and_callback_if_deferred(param)
       {var p=new_pending([0,p$0]),saved_storage=current_storage[1];
        function callback(p_result)
         {if(1 === p_result[0])
           {var exn=p_result[1];
            current_storage[1] = saved_storage;
            try
             {var _fZ_=caml_call1(h,exn),p$1=_fZ_}
            catch(exn)
             {exn = caml_wrap_exception(exn);
              var p$1=fail(caml_call1(add_loc,exn))}
            var p$2=underlying(p);
            make_into_proxy(p$2,p$1);
            return 0}
          var p$0=underlying(p);
          resolve(_w_,0,p$0,p_result);
          return 0}
        return [0,p,callback]}
      var _fW_=p$0[1];
      switch(_fW_[0])
       {case 1:
         var
          exn=_fW_[1],
          _fX_=
           function(param)
            {var
              match=create_result_promise_and_callback_if_deferred(0),
              callback=match[2],
              p=match[1];
             return [0,p,callback,p$0[1]]};
         return run_callback_or_defer_it
                 (_x_,
                  function(param)
                   {return caml_call1(h,caml_call1(add_loc,exn))},
                  _fX_);
        case 2:
         var
          p_callbacks=_fW_[1],
          match=create_result_promise_and_callback_if_deferred(0),
          callback=match[2],
          p$1=match[1];
         add_implicitly_removed_callback(p_callbacks,callback);
         return p$1;
        default:return p$0}}
    function try_bind(f$0,f,h)
     {try
       {var _fT_=caml_call1(f$0,0),p=_fT_}
      catch(exn){exn = caml_wrap_exception(exn);var p=fail(exn)}
      var p$0=underlying(p);
      function create_result_promise_and_callback_if_deferred(param)
       {var p=new_pending([0,p$0]),saved_storage=current_storage[1];
        function callback(p_result)
         {if(1 === p_result[0])
           {var exn=p_result[1];
            current_storage[1] = saved_storage;
            try
             {var _fV_=caml_call1(h,exn),p$2=_fV_}
            catch(exn){exn = caml_wrap_exception(exn);var p$2=fail(exn)}
            var p$3=underlying(p);
            make_into_proxy(p$3,p$2);
            return 0}
          var v=p_result[1];
          current_storage[1] = saved_storage;
          try
           {var _fU_=caml_call1(f,v),p$0=_fU_}
          catch(exn){exn = caml_wrap_exception(exn);var p$0=fail(exn)}
          var p$1=underlying(p);
          make_into_proxy(p$1,p$0);
          return 0}
        return [0,p,callback]}
      var _fQ_=p$0[1];
      switch(_fQ_[0])
       {case 1:
         var
          exn=_fQ_[1],
          _fS_=
           function(param)
            {var
              match=create_result_promise_and_callback_if_deferred(0),
              callback=match[2],
              p=match[1];
             return [0,p,callback,p$0[1]]};
         return run_callback_or_defer_it
                 (_z_,function(param){return caml_call1(h,exn)},_fS_);
        case 2:
         var
          p_callbacks=_fQ_[1],
          match=create_result_promise_and_callback_if_deferred(0),
          callback=match[2],
          p$1=match[1];
         add_implicitly_removed_callback(p_callbacks,callback);
         return p$1;
        default:
         var
          v=_fQ_[1],
          _fR_=
           function(param)
            {var
              match=create_result_promise_and_callback_if_deferred(0),
              callback=match[2],
              p=match[1];
             return [0,p,callback,p$0[1]]};
         return run_callback_or_defer_it
                 (_y_,function(param){return caml_call1(f,v)},_fR_)}}
    function backtrace_try_bind(add_loc,f$0,f,h)
     {try
       {var _fN_=caml_call1(f$0,0),p=_fN_}
      catch(exn){exn = caml_wrap_exception(exn);var p=fail(exn)}
      var p$0=underlying(p);
      function create_result_promise_and_callback_if_deferred(param)
       {var p=new_pending([0,p$0]),saved_storage=current_storage[1];
        function callback(p_result)
         {if(1 === p_result[0])
           {var exn=p_result[1];
            current_storage[1] = saved_storage;
            try
             {var _fP_=caml_call1(h,exn),p$2=_fP_}
            catch(exn)
             {exn = caml_wrap_exception(exn);
              var p$2=fail(caml_call1(add_loc,exn))}
            var p$3=underlying(p);
            make_into_proxy(p$3,p$2);
            return 0}
          var v=p_result[1];
          current_storage[1] = saved_storage;
          try
           {var _fO_=caml_call1(f,v),p$0=_fO_}
          catch(exn)
           {exn = caml_wrap_exception(exn);
            var p$0=fail(caml_call1(add_loc,exn))}
          var p$1=underlying(p);
          make_into_proxy(p$1,p$0);
          return 0}
        return [0,p,callback]}
      var _fK_=p$0[1];
      switch(_fK_[0])
       {case 1:
         var
          exn=_fK_[1],
          _fM_=
           function(param)
            {var
              match=create_result_promise_and_callback_if_deferred(0),
              callback=match[2],
              p=match[1];
             return [0,p,callback,p$0[1]]};
         return run_callback_or_defer_it
                 (_B_,
                  function(param)
                   {return caml_call1(h,caml_call1(add_loc,exn))},
                  _fM_);
        case 2:
         var
          p_callbacks=_fK_[1],
          match=create_result_promise_and_callback_if_deferred(0),
          callback=match[2],
          p$1=match[1];
         add_implicitly_removed_callback(p_callbacks,callback);
         return p$1;
        default:
         var
          v=_fK_[1],
          _fL_=
           function(param)
            {var
              match=create_result_promise_and_callback_if_deferred(0),
              callback=match[2],
              p=match[1];
             return [0,p,callback,p$0[1]]};
         return run_callback_or_defer_it
                 (_A_,function(param){return caml_call1(f,v)},_fL_)}}
    function finalize(f$0,f)
     {function _fH_(e)
       {function _fJ_(param){return fail(e)}return bind(caml_call1(f,0),_fJ_)}
      return try_bind
              (f$0,
               function(x)
                {function _fI_(param){return lift(x)}
                 return bind(caml_call1(f,0),_fI_)},
               _fH_)}
    function backtrace_finalize(add_loc,f$0,f)
     {function _fE_(e)
       {function _fG_(param){return fail(caml_call1(add_loc,e))}
        return bind(caml_call1(f,0),_fG_)}
      return backtrace_try_bind
              (add_loc,
               f$0,
               function(x)
                {function _fF_(param){return lift(x)}
                 return bind(caml_call1(f,0),_fF_)},
               _fE_)}
    function on_cancel(p,f)
     {var p$0=underlying(p),_fC_=p$0[1];
      switch(_fC_[0])
       {case 1:
         if(_fC_[1] === Canceled)
          {var
            _fD_=
             function(param)
              {return [0,
                       0,
                       function(param)
                        {return handle_with_async_exception_hook(f,0)},
                       _C_]};
           return run_callback_or_defer_it
                   (_D_,
                    function(param)
                     {return handle_with_async_exception_hook(f,0)},
                    _fD_)}
         return 0;
        case 2:var callbacks=_fC_[1];return add_cancel_callback(callbacks,f);
        default:return 0}}
    function on_success(p,f)
     {var p$0=underlying(p);
      function callback_if_deferred(param)
       {var saved_storage=current_storage[1];
        return function(result)
         {if(1 === result[0])return 0;
          var v=result[1];
          current_storage[1] = saved_storage;
          return handle_with_async_exception_hook(f,v)}}
      var _fA_=p$0[1];
      switch(_fA_[0])
       {case 1:return 0;
        case 2:
         var p_callbacks=_fA_[1],callback=callback_if_deferred(0);
         return add_implicitly_removed_callback(p_callbacks,callback);
        default:
         var
          v=_fA_[1],
          _fB_=
           function(param)
            {var callback=callback_if_deferred(0);
             return [0,0,callback,p$0[1]]};
         return run_callback_or_defer_it
                 (_E_,
                  function(param)
                   {return handle_with_async_exception_hook(f,v)},
                  _fB_)}}
    function on_failure(p,f)
     {var p$0=underlying(p);
      function callback_if_deferred(param)
       {var saved_storage=current_storage[1];
        return function(result)
         {if(1 === result[0])
           {var exn=result[1];
            current_storage[1] = saved_storage;
            return handle_with_async_exception_hook(f,exn)}
          return 0}}
      var _fy_=p$0[1];
      switch(_fy_[0])
       {case 1:
         var
          exn=_fy_[1],
          _fz_=
           function(param)
            {var callback=callback_if_deferred(0);
             return [0,0,callback,p$0[1]]};
         return run_callback_or_defer_it
                 (_F_,
                  function(param)
                   {return handle_with_async_exception_hook(f,exn)},
                  _fz_);
        case 2:
         var p_callbacks=_fy_[1],callback=callback_if_deferred(0);
         return add_implicitly_removed_callback(p_callbacks,callback);
        default:return 0}}
    function on_termination(p,f)
     {var p$0=underlying(p);
      function callback_if_deferred(param)
       {var saved_storage=current_storage[1];
        return function(result)
         {current_storage[1] = saved_storage;
          return handle_with_async_exception_hook(f,0)}}
      var _fv_=p$0[1];
      switch(_fv_[0])
       {case 1:
         var
          _fx_=
           function(param)
            {var callback=callback_if_deferred(0);
             return [0,0,callback,p$0[1]]};
         return run_callback_or_defer_it
                 (_H_,
                  function(param)
                   {return handle_with_async_exception_hook(f,0)},
                  _fx_);
        case 2:
         var p_callbacks=_fv_[1],callback=callback_if_deferred(0);
         return add_implicitly_removed_callback(p_callbacks,callback);
        default:
         var
          _fw_=
           function(param)
            {var callback=callback_if_deferred(0);
             return [0,0,callback,p$0[1]]};
         return run_callback_or_defer_it
                 (_G_,
                  function(param)
                   {return handle_with_async_exception_hook(f,0)},
                  _fw_)}}
    function on_any(p,f,g)
     {var p$0=underlying(p);
      function callback_if_deferred(param)
       {var saved_storage=current_storage[1];
        return function(result)
         {if(1 === result[0])
           {var exn=result[1];
            current_storage[1] = saved_storage;
            return handle_with_async_exception_hook(g,exn)}
          var v=result[1];
          current_storage[1] = saved_storage;
          return handle_with_async_exception_hook(f,v)}}
      var _fs_=p$0[1];
      switch(_fs_[0])
       {case 1:
         var
          exn=_fs_[1],
          _fu_=
           function(param)
            {var callback=callback_if_deferred(0);
             return [0,0,callback,p$0[1]]};
         return run_callback_or_defer_it
                 (_J_,
                  function(param)
                   {return handle_with_async_exception_hook(g,exn)},
                  _fu_);
        case 2:
         var p_callbacks=_fs_[1],callback=callback_if_deferred(0);
         return add_implicitly_removed_callback(p_callbacks,callback);
        default:
         var
          v=_fs_[1],
          _ft_=
           function(param)
            {var callback=callback_if_deferred(0);
             return [0,0,callback,p$0[1]]};
         return run_callback_or_defer_it
                 (_I_,
                  function(param)
                   {return handle_with_async_exception_hook(f,v)},
                  _ft_)}}
    function async(f)
     {try
       {var _fr_=caml_call1(f,0),p=_fr_}
      catch(exn){exn = caml_wrap_exception(exn);var p=fail(exn)}
      var _fq_=underlying(p)[1];
      switch(_fq_[0])
       {case 1:var exn=_fq_[1];return caml_call1(async_exception_hook[1],exn);
        case 2:
         var
          p_callbacks=_fq_[1],
          callback=
           function(result)
            {if(1 === result[0])
              {var exn=result[1];
               return caml_call1(async_exception_hook[1],exn)}
             return 0};
         return add_implicitly_removed_callback(p_callbacks,callback);
        default:return 0}}
    function ignore_result(p)
     {var _fp_=underlying(p)[1];
      switch(_fp_[0])
       {case 1:var exn=_fp_[1];throw exn;
        case 2:
         var
          p_callbacks=_fp_[1],
          callback=
           function(result)
            {if(1 === result[0])
              {var exn=result[1];
               return caml_call1(async_exception_hook[1],exn)}
             return 0};
         return add_implicitly_removed_callback(p_callbacks,callback);
        default:return 0}}
    function join(ps)
     {var
       p=new_pending([1,ps]),
       number_pending_in_ps=[0,0],
       join_result=[0,_K_];
      function callback(new_result)
       {if(1 === new_result[0])
         if(1 !== join_result[1][0])join_result[1] = new_result;
        number_pending_in_ps[1] = number_pending_in_ps[1] - 1 | 0;
        var _fm_=0 === number_pending_in_ps[1]?1:0;
        if(_fm_)
         {var p$0=underlying(p),_fn_=join_result[1];
          resolve(_L_,0,underlying(p$0),_fn_);
          var _fo_=0}
        else
         var _fo_=_fm_;
        return _fo_}
      var ps$0=ps;
      for(;;)
       {if(ps$0)
         {var ps$1=ps$0[2],p$0=ps$0[1],_fl_=underlying(p$0)[1];
          switch(_fl_[0])
           {case 1:
             if(1 !== join_result[1][0])join_result[1] = _fl_;
             var ps$0=ps$1;
             continue;
            case 2:
             var p_callbacks=_fl_[1];
             number_pending_in_ps[1] = number_pending_in_ps[1] + 1 | 0;
             add_implicitly_removed_callback(p_callbacks,callback);
             var ps$0=ps$1;
             continue;
            default:var ps$0=ps$1;continue}}
        return 0 === number_pending_in_ps[1]?[0,join_result[1]]:p}}
    function both(p1,p2)
     {var
       v1=[0,0],
       v2=[0,0],
       p1$0=bind(p1,function(v){v1[1] = [0,v];return return_unit}),
       p2$0=bind(p2,function(v){v2[1] = [0,v];return return_unit}),
       _fi_=join([0,p1$0,[0,p2$0,0]]);
      return map
              (function(param)
                {var _fj_=v1[1],_fk_=v2[1];
                 if(_fj_)
                  if(_fk_){var v2$0=_fk_[1],v1$0=_fj_[1];return [0,v1$0,v2$0]}
                 throw [0,Assert_failure,_M_]},
               _fi_)}
    function count_resolved_promises_in(ps)
     {function accumulate(total,p)
       {switch(underlying(p)[1][0])
         {case 1:return total + 1 | 0;
          case 2:return total;
          default:return total + 1 | 0}}
      return caml_call3(List[20],accumulate,0,ps)}
    function nth_resolved(ps,n)
     {var ps$0=ps,n$0=n;
      for(;;)
       {if(ps$0)
         {var ps$1=ps$0[2],p=ps$0[1];
          switch(underlying(p)[1][0])
           {case 1:
             if(0 < n$0){var n$2=n$0 - 1 | 0,ps$0=ps$1,n$0=n$2;continue}
             return p;
            case 2:var ps$0=ps$1;continue;
            default:
             if(0 < n$0){var n$1=n$0 - 1 | 0,ps$0=ps$1,n$0=n$1;continue}
             return p}}
        throw [0,Assert_failure,_N_]}}
    function nth_resolved_and_cancel_pending(ps,n)
     {var ps$0=ps,n$0=n;
      for(;;)
       {if(ps$0)
         {var ps$1=ps$0[2],p=ps$0[1];
          switch(underlying(p)[1][0])
           {case 1:
             if(0 < n$0){var n$2=n$0 - 1 | 0,ps$0=ps$1,n$0=n$2;continue}
             caml_call2(List[15],cancel,ps$1);
             return p;
            case 2:cancel(p);var ps$0=ps$1;continue;
            default:
             if(0 < n$0){var n$1=n$0 - 1 | 0,ps$0=ps$1,n$0=n$1;continue}
             caml_call2(List[15],cancel,ps$1);
             return p}}
        throw [0,Assert_failure,_O_]}}
    var prng=[246,function(_fh_){return caml_call1(Random[11][1],[0])}];
    function choose(ps)
     {var n=count_resolved_promises_in(ps);
      if(0 === n)
       {var
         p=new_pending([1,ps]),
         callback=
          function(result)
           {var p$0=underlying(p);resolve(_P_,0,p$0,result);return 0};
        add_explicitly_removable_callback_to_each_of(ps,callback);
        return p}
      if(1 === n)return nth_resolved(ps,0);
      var
       _ff_=caml_obj_tag(prng),
       _fg_=
        250 === _ff_
         ?prng[1]
         :246 === _ff_?caml_call1(CamlinternalLazy[2],prng):prng;
      return nth_resolved(ps,caml_call2(Random[11][5],_fg_,n))}
    function pick(ps)
     {var n=count_resolved_promises_in(ps);
      if(0 === n)
       {var
         p=new_pending([1,ps]),
         callback=
          function(result)
           {caml_call2(List[15],cancel,ps);
            var p$0=underlying(p);
            resolve(_Q_,0,p$0,result);
            return 0};
        add_explicitly_removable_callback_to_each_of(ps,callback);
        return p}
      if(1 === n)return nth_resolved_and_cancel_pending(ps,0);
      var
       _fd_=caml_obj_tag(prng),
       _fe_=
        250 === _fd_
         ?prng[1]
         :246 === _fd_?caml_call1(CamlinternalLazy[2],prng):prng;
      return nth_resolved_and_cancel_pending
              (ps,caml_call2(Random[11][5],_fe_,n))}
    function collect_fulfilled_promises_after_pending(results,ps)
     {var results$0=results,ps$0=ps;
      for(;;)
       {if(ps$0)
         {var ps$1=ps$0[2],p=ps$0[1],_fc_=underlying(p)[1];
          switch(_fc_[0])
           {case 1:return _fc_;
            case 2:var ps$0=ps$1;continue;
            default:
             var
              v=_fc_[1],
              results$1=[0,v,results$0],
              results$0=results$1,
              ps$0=ps$1;
             continue}}
        return [0,caml_call1(List[9],results$0)]}}
    function nchoose(ps)
     {var ps$2=ps;
      for(;;)
       {if(ps$2)
         {var ps$3=ps$2[2],p$0=ps$2[1],_fb_=underlying(p$0)[1];
          switch(_fb_[0])
           {case 1:return [0,_fb_];
            case 2:var ps$2=ps$3;continue;
            default:
             var v$0=_fb_[1],acc$1=[0,v$0,0],acc=acc$1,ps$0=ps$3;
             for(;;)
              {if(ps$0)
                {var ps$1=ps$0[2],p=ps$0[1],_fa_=underlying(p)[1];
                 switch(_fa_[0])
                  {case 1:return [0,_fa_];
                   case 2:var ps$0=ps$1;continue;
                   default:
                    var v=_fa_[1],acc$0=[0,v,acc],acc=acc$0,ps$0=ps$1;continue}}
               return lift(caml_call1(List[9],acc))}}}
        var
         p$1=new_pending([1,ps]),
         callback=
          function(result)
           {var
             p=underlying(p$1),
             result$0=collect_fulfilled_promises_after_pending(0,ps);
            resolve(_R_,0,p,result$0);
            return 0};
        add_explicitly_removable_callback_to_each_of(ps,callback);
        return p$1}}
    function npick(ps)
     {var ps$2=ps;
      for(;;)
       {if(ps$2)
         {var ps$3=ps$2[2],p$0=ps$2[1],_e$_=underlying(p$0)[1];
          switch(_e$_[0])
           {case 1:caml_call2(List[15],cancel,ps);return [0,_e$_];
            case 2:var ps$2=ps$3;continue;
            default:
             var v$0=_e$_[1],acc$1=[0,v$0,0],acc=acc$1,ps$0=ps$3;
             for(;;)
              {if(ps$0)
                {var ps$1=ps$0[2],p=ps$0[1],_e__=underlying(p)[1];
                 switch(_e__[0])
                  {case 1:caml_call2(List[15],cancel,ps);return [0,_e__];
                   case 2:var ps$0=ps$1;continue;
                   default:
                    var v=_e__[1],acc$0=[0,v,acc],acc=acc$0,ps$0=ps$1;continue}}
               caml_call2(List[15],cancel,ps);
               return lift(caml_call1(List[9],acc))}}}
        var
         p$1=new_pending([1,ps]),
         callback=
          function(result)
           {var
             p=underlying(p$1),
             result$0=collect_fulfilled_promises_after_pending(0,ps);
            caml_call2(List[15],cancel,ps);
            resolve(_S_,0,p,result$0);
            return 0};
        add_explicitly_removable_callback_to_each_of(ps,callback);
        return p$1}}
    function nchoose_split(ps)
     {var pending_acc=0,ps$2=ps;
      for(;;)
       {if(ps$2)
         {var ps$3=ps$2[2],p$0=ps$2[1],_e7_=underlying(p$0)[1];
          switch(_e7_[0])
           {case 1:return [0,_e7_];
            case 2:
             var
              pending_acc$0=[0,p$0,pending_acc],
              pending_acc=pending_acc$0,
              ps$2=ps$3;
             continue;
            default:
             var
              v$0=_e7_[1],
              results$1=[0,v$0,0],
              results=results$1,
              pending=pending_acc,
              ps$0=ps$3;
             for(;;)
              {if(ps$0)
                {var ps$1=ps$0[2],p=ps$0[1],_e6_=underlying(p)[1];
                 switch(_e6_[0])
                  {case 1:return [0,_e6_];
                   case 2:
                    var pending$0=[0,p,pending],pending=pending$0,ps$0=ps$1;
                    continue;
                   default:
                    var
                     v=_e6_[1],
                     results$0=[0,v,results],
                     results=results$0,
                     ps$0=ps$1;
                    continue}}
               return lift([0,caml_call1(List[9],results),pending])}}}
        var
         p$1=new_pending([1,ps]),
         callback=
          function(result)
           {var to_resolve=underlying(p$1),fulfilled=0,pending=0,ps$0=ps;
            for(;;)
             {if(ps$0)
               {var ps$1=ps$0[2],p=ps$0[1],_e8_=underlying(p)[1];
                switch(_e8_[0])
                 {case 1:resolve(_T_,0,to_resolve,_e8_);break;
                  case 2:
                   var pending$0=[0,p,pending],pending=pending$0,ps$0=ps$1;
                   continue;
                  default:
                   var
                    v=_e8_[1],
                    fulfilled$0=[0,v,fulfilled],
                    fulfilled=fulfilled$0,
                    ps$0=ps$1;
                   continue}}
              else
               {var _e9_=caml_call1(List[9],pending);
                resolve
                 (_U_,0,to_resolve,[0,[0,caml_call1(List[9],fulfilled),_e9_]])}
              return 0}};
        add_explicitly_removable_callback_to_each_of(ps,callback);
        return p$1}}
    function state(p)
     {var _e5_=underlying(p)[1];
      switch(_e5_[0])
       {case 1:var exn=_e5_[1];return [1,exn];
        case 2:return 0;
        default:var v=_e5_[1];return [0,v]}}
    function debug_state_is(expected_state,p)
     {return lift(runtime.caml_equal(state(p),expected_state))}
    function is_sleeping(p)
     {switch(underlying(p)[1][0])
       {case 1:return 0;case 2:return 1;default:return 0}}
    function poll(p)
     {var _e4_=underlying(p)[1];
      switch(_e4_[0])
       {case 1:var e=_e4_[1];throw e;
        case 2:return 0;
        default:var v=_e4_[1];return [0,v]}}
    function apply(f,x)
     {try
       {var _e3_=caml_call1(f,x);return _e3_}
      catch(exn){exn = caml_wrap_exception(exn);return fail(exn)}}
    function wrap(f)
     {try
       {var _e2_=lift(caml_call1(f,0));return _e2_}
      catch(exn){exn = caml_wrap_exception(exn);return fail(exn)}}
    function wrap1(f,x1)
     {try
       {var _e1_=lift(caml_call1(f,x1));return _e1_}
      catch(exn){exn = caml_wrap_exception(exn);return fail(exn)}}
    function wrap2(f,x1,x2)
     {try
       {var _e0_=lift(caml_call2(f,x1,x2));return _e0_}
      catch(exn){exn = caml_wrap_exception(exn);return fail(exn)}}
    function wrap3(f,x1,x2,x3)
     {try
       {var _eZ_=lift(caml_call3(f,x1,x2,x3));return _eZ_}
      catch(exn){exn = caml_wrap_exception(exn);return fail(exn)}}
    function wrap4(f,x1,x2,x3,x4)
     {try
       {var _eY_=lift(caml_call4(f,x1,x2,x3,x4));return _eY_}
      catch(exn){exn = caml_wrap_exception(exn);return fail(exn)}}
    function wrap5(f,x1,x2,x3,x4,x5)
     {try
       {var _eX_=lift(caml_call5(f,x1,x2,x3,x4,x5));return _eX_}
      catch(exn){exn = caml_wrap_exception(exn);return fail(exn)}}
    function wrap6(f,x1,x2,x3,x4,x5,x6)
     {try
       {var _eW_=lift(caml_call6(f,x1,x2,x3,x4,x5,x6));return _eW_}
      catch(exn){exn = caml_wrap_exception(exn);return fail(exn)}}
    function wrap7(f,x1,x2,x3,x4,x5,x6,x7)
     {try
       {var _eV_=lift(caml_call7(f,x1,x2,x3,x4,x5,x6,x7));return _eV_}
      catch(exn){exn = caml_wrap_exception(exn);return fail(exn)}}
    var pause_hook=[0,function(_eU_){return 0}],paused=create(0),_V_=[0,0];
    function pause(param)
     {var p=add_task_r(paused);
      _V_[1]++;
      caml_call1(pause_hook[1],_V_[1]);
      return p}
    function wakeup_paused(param)
     {if(is_empty(paused)){_V_[1] = 0;return 0}
      var tmp=create(0);
      transfer_r(paused,tmp);
      _V_[1] = 0;
      return iter_l(function(r){return wakeup(r,0)},tmp)}
    function register_pause_notifier(f){pause_hook[1] = f;return 0}
    function paused_count(param){return _V_[1]}
    function _W_(f,p){return bind(p,f)}
    function _X_(p,f){return map(f,p)}
    function _Y_(p$0,p){return join([0,p$0,[0,p,0]])}
    function _Z_(p$0,p){return choose([0,p$0,[0,p,0]])}
    function map$0(t,f){return map(f,t)}
    function bind$0(t,f){return bind(t,f)}
    var Open_on_rhs=[0],Let_syntax=[0,lift,map$0,bind$0,both,Open_on_rhs];
    function make_value(v){return [0,v]}
    function make_error(exn){return [1,exn]}
    var
     ___=[0,bind,_X_,_Y_,_Z_,_W_,map,Let_syntax],
     Lwt=
      [0,
       task,
       wakeup_later,
       wakeup_later_exn,
       lift,
       fail,
       bind,
       catch$0,
       finalize,
       try_bind,
       async,
       async_exception_hook,
       both,
       join,
       pick,
       choose,
       npick,
       nchoose,
       nchoose_split,
       Canceled,
       cancel,
       on_cancel,
       protected$0,
       no_cancel,
       wait,
       map,
       on_success,
       on_failure,
       on_termination,
       on_any,
       ___,
       return_unit,
       return_none,
       acc,
       return_true,
       return_false,
       of_result,
       wakeup_later_result,
       state,
       new_key,
       get$0,
       with_value,
       wakeup,
       wakeup_exn,
       wakeup_result,
       make_value,
       make_error,
       waiter_of_wakener,
       add_task_r,
       add_task_l,
       pause,
       wakeup_paused,
       paused_count,
       register_pause_notifier,
       wrap,
       wrap1,
       wrap2,
       wrap3,
       wrap4,
       wrap5,
       wrap6,
       wrap7,
       return_some,
       return_ok,
       return_error,
       fail_with,
       fail_invalid_arg,
       bind,
       _X_,
       _Z_,
       _Y_,
       _W_,
       map,
       is_sleeping,
       ignore_result,
       poll,
       apply,
       backtrace_bind,
       backtrace_catch,
       backtrace_finalize,
       backtrace_try_bind,
       abandon_wakeups,
       debug_state_is];
    caml_register_global(91,Lwt,"Lwt");
    function create$0(param){return [0,0,create(0)]}
    function lock(m){return m[1]?add_task_r(m[2]):(m[1] = 1,return_unit)}
    function unlock(m)
     {var _eT_=m[1];
      return _eT_
              ?is_empty(m[2])?(m[1] = 0,0):wakeup_later(take_l(m[2]),0)
              :_eT_}
    function with_lock(m,f)
     {function _eR_(param)
       {return finalize(f,function(param){unlock(m);return return_unit})}
      var _eS_=lock(m);
      return caml_call2(___[1],_eS_,_eR_)}
    function is_locked(m){return m[1]}
    function is_empty$0(m){return is_empty(m[2])}
    var Lwt_mutex=[0,create$0,lock,unlock,is_locked,is_empty$0,with_lock];
    caml_register_global(92,Lwt_mutex,"Lwt_mutex");
    function wait$0(mutex,cvar)
     {var waiter=add_task_r(cvar);
      if(mutex){var m=mutex[1];unlock(m)}
      function _eQ_(param)
       {if(mutex){var m=mutex[1];return lock(m)}return return_unit}
      return finalize(function(param){return waiter},_eQ_)}
    function signal(cvar,arg)
     {try
       {var _eO_=wakeup_later(take_l(cvar),arg);return _eO_}
      catch(_eP_)
       {_eP_ = caml_wrap_exception(_eP_);
        if(_eP_ === Empty)return 0;
        throw _eP_}}
    function broadcast(cvar,arg)
     {var _eM_=0,wakeners=fold_r(function(x,l){return [0,x,l]},cvar,_eM_);
      iter_node_l(remove,cvar);
      function _eN_(wakener){return wakeup_later(wakener,arg)}
      return caml_call2(List[15],_eN_,wakeners)}
    function broadcast_exn(cvar,exn)
     {var _eK_=0,wakeners=fold_r(function(x,l){return [0,x,l]},cvar,_eK_);
      iter_node_l(remove,cvar);
      function _eL_(wakener){return wakeup_later_exn(wakener,exn)}
      return caml_call2(List[15],_eL_,wakeners)}
    var Lwt_condition=[0,create,wait$0,signal,broadcast,broadcast_exn];
    caml_register_global(93,Lwt_condition,"Lwt_condition");
    function tail_recursive_map(f,l)
     {var _eJ_=caml_call2(List[19],f,l);return caml_call1(List[9],_eJ_)}
    function tail_recursive_mapi(f,param)
     {var acc=0,i=0,param$0=param;
      for(;;)
       {if(param$0)
         {var
           tl=param$0[2],
           hd=param$0[1],
           i$0=i + 1 | 0,
           acc$0=[0,caml_call2(f,i,hd),acc],
           acc=acc$0,
           i=i$0,
           param$0=tl;
          continue}
        return caml_call1(List[9],acc)}}
    function iter_s(f,l)
     {if(l)
       {var
         l$0=l[2],
         x=l[1],
         _eH_=function(param){return iter_s(f,l$0)},
         _eI_=apply(f,x);
        return caml_call2(___[1],_eI_,_eH_)}
      return return_unit}
    function iter_p(f,l)
     {var ts=tail_recursive_map(function(_eG_){return apply(f,_eG_)},l);
      return join(ts)}
    function _$_(i,f,l)
     {if(l)
       {var
         l$0=l[2],
         x=l[1],
         _eE_=function(param){return _$_(i + 1 | 0,f,l$0)},
         _eF_=apply(caml_call1(f,i),x);
        return caml_call2(___[1],_eF_,_eE_)}
      return return_unit}
    function iteri_s(f,l){return _$_(0,f,l)}
    function iteri_p(f,l)
     {function f$0(i)
       {var _eC_=caml_call1(f,i);
        return function(_eD_){return apply(_eC_,_eD_)}}
      var ts=tail_recursive_mapi(f$0,l);
      return join(ts)}
    function map_s(f,l)
     {function inner(acc,param)
       {if(param)
         {var
           tl=param[2],
           hd=param[1],
           _eA_=function(r){return inner([0,r,acc],tl)},
           _eB_=apply(f,hd);
          return caml_call2(___[1],_eB_,_eA_)}
        return lift(caml_call1(List[9],acc))}
      return inner(0,l)}
    function collect(acc,param)
     {if(param)
       {var
         ts=param[2],
         t=param[1],
         _ez_=function(i){return collect([0,i,acc],ts)};
        return caml_call2(___[1],t,_ez_)}
      return lift(caml_call1(List[9],acc))}
    function map_p(f,l)
     {var ts=tail_recursive_map(function(_ey_){return apply(f,_ey_)},l);
      return collect(0,ts)}
    function filter_map_s(f,l)
     {function inner(acc,param)
       {if(param)
         {var
           tl=param[2],
           hd=param[1],
           _ew_=
            function(param)
             {if(param){var v=param[1];return inner([0,v,acc],tl)}
              return inner(acc,tl)},
           _ex_=apply(f,hd);
          return caml_call2(___[1],_ex_,_ew_)}
        return lift(caml_call1(List[9],acc))}
      return inner(0,l)}
    function filter_map_p(f,l)
     {function collect_optional(acc,param)
       {if(param)
         {var
           ts=param[2],
           t=param[1],
           _ev_=
            function(param)
             {if(param){var v=param[1];return collect_optional([0,v,acc],ts)}
              return collect_optional(acc,ts)};
          return caml_call2(___[1],t,_ev_)}
        return lift(caml_call1(List[9],acc))}
      var ts=tail_recursive_map(function(_eu_){return apply(f,_eu_)},l);
      return collect_optional(0,ts)}
    function mapi_s(f,l)
     {function inner(acc,i,param)
       {if(param)
         {var
           tl=param[2],
           hd=param[1],
           _es_=function(v){return inner([0,v,acc],i + 1 | 0,tl)},
           _et_=apply(caml_call1(f,i),hd);
          return caml_call2(___[1],_et_,_es_)}
        return lift(caml_call1(List[9],acc))}
      return inner(0,0,l)}
    function mapi_p(f,l)
     {function f$0(i)
       {var _eq_=caml_call1(f,i);
        return function(_er_){return apply(_eq_,_er_)}}
      var ts=tail_recursive_mapi(f$0,l);
      return collect(0,ts)}
    function rev_map_append_s(acc,f,l)
     {if(l)
       {var
         l$0=l[2],
         x=l[1],
         _eo_=function(x){return rev_map_append_s([0,x,acc],f,l$0)},
         _ep_=apply(f,x);
        return caml_call2(___[1],_ep_,_eo_)}
      return lift(acc)}
    function rev_map_s(f,l){return rev_map_append_s(0,f,l)}
    function rev_map_p(f,l$1)
     {var acc$0=acc,l=l$1;
      for(;;)
       {if(l)
         {var
           l$0=l[2],
           x=l[1],
           _el_=
            function(acc)
              {return function(x)
                {function _en_(l){return [0,x,l]}
                 return caml_call2(___[2],acc,_en_)}}
             (acc$0),
           _em_=apply(f,x),
           acc$1=caml_call2(___[1],_em_,_el_),
           acc$0=acc$1,
           l=l$0;
          continue}
        return acc$0}}
    function fold_left_s(f,acc,l)
     {if(l)
       {var
         l$0=l[2],
         x=l[1],
         _ej_=function(acc){return fold_left_s(f,acc,l$0)},
         _ek_=apply(caml_call1(f,acc),x);
        return caml_call2(___[1],_ek_,_ej_)}
      return lift(acc)}
    function fold_right_s(f,l,acc)
     {function inner(f,a,param)
       {if(param)
         {var
           tl=param[2],
           hd=param[1],
           _eh_=function(a){return inner(f,a,tl)},
           _ei_=apply(caml_call1(f,hd),a);
          return caml_call2(___[1],_ei_,_eh_)}
        return lift(a)}
      return inner(f,acc,caml_call1(List[9],l))}
    function for_all_s(f,l)
     {if(l)
       {var
         l$0=l[2],
         x=l[1],
         _ef_=
          function(param){return 0 === param?return_false:for_all_s(f,l$0)},
         _eg_=apply(f,x);
        return caml_call2(___[1],_eg_,_ef_)}
      return return_true}
    function for_all_p(f,l)
     {function _ec_(bl)
       {function _ee_(x){return x}return lift(caml_call2(List[27],_ee_,bl))}
      var _ed_=map_p(f,l);
      return caml_call2(___[1],_ed_,_ec_)}
    function exists_s(f,l)
     {if(l)
       {var
         l$0=l[2],
         x=l[1],
         _ea_=function(param){return 0 === param?exists_s(f,l$0):return_true},
         _eb_=apply(f,x);
        return caml_call2(___[1],_eb_,_ea_)}
      return return_false}
    function exists_p(f,l)
     {function _d9_(bl)
       {function _d$_(x){return x}return lift(caml_call2(List[28],_d$_,bl))}
      var _d__=map_p(f,l);
      return caml_call2(___[1],_d__,_d9_)}
    function find_s(f,l)
     {if(l)
       {var
         l$0=l[2],
         x=l[1],
         _d7_=function(param){return 0 === param?find_s(f,l$0):lift(x)},
         _d8_=apply(f,x);
        return caml_call2(___[1],_d8_,_d7_)}
      return fail(Not_found)}
    function optionalize(f,x)
     {function _d5_(b){return b?lift([0,x]):lift(0)}
      var _d6_=caml_call1(f,x);
      return caml_call2(___[1],_d6_,_d5_)}
    function filter_s(f,l)
     {return filter_map_s(function(_d4_){return optionalize(f,_d4_)},l)}
    function filter_p(f,l)
     {return filter_map_p(function(_d3_){return optionalize(f,_d3_)},l)}
    function partition_s(f,l)
     {function inner(acc1,acc2,param)
       {if(param)
         {var
           tl=param[2],
           hd=param[1],
           _d0_=
            function(b)
             {return b?inner([0,hd,acc1],acc2,tl):inner(acc1,[0,hd,acc2],tl)},
           _d1_=apply(f,hd);
          return caml_call2(___[1],_d1_,_d0_)}
        var _d2_=caml_call1(List[9],acc2);
        return lift([0,caml_call1(List[9],acc1),_d2_])}
      return inner(0,0,l)}
    function partition_p(f,l)
     {function g(x)
       {function _dY_(b){return lift([0,b,x])}
        var _dZ_=apply(f,x);
        return caml_call2(___[1],_dZ_,_dY_)}
      function _dP_(tl)
       {function _dR_(_dX_){return _dX_[1]}
        var
         _dS_=caml_call2(List[35],_dR_,tl),
         group1=tail_recursive_map(function(_dW_){return _dW_[2]},_dS_);
        function _dT_(x){return 1 - x[1]}
        var
         _dU_=caml_call2(List[35],_dT_,tl),
         group2=tail_recursive_map(function(_dV_){return _dV_[2]},_dU_);
        return lift([0,group1,group2])}
      var _dQ_=map_p(g,l);
      return caml_call2(___[1],_dQ_,_dP_)}
    var
     Lwt_list=
      [0,
       iter_s,
       iter_p,
       iteri_s,
       iteri_p,
       map_s,
       map_p,
       mapi_s,
       mapi_p,
       rev_map_s,
       rev_map_p,
       fold_left_s,
       fold_right_s,
       for_all_s,
       for_all_p,
       exists_s,
       exists_p,
       find_s,
       filter_s,
       filter_p,
       filter_map_s,
       filter_map_p,
       partition_s,
       partition_p];
    caml_register_global(94,Lwt_list,"Lwt_list");
    function create_empty(param)
     {var _dO_=create(0);return [0,0,create(0),_dO_]}
    function create$1(v){var _dN_=create(0);return [0,[0,v],create(0),_dN_]}
    function put(mvar,v)
     {if(mvar[1])
       {var match=task(0),w=match[2],res=match[1],node=add_r([0,v,w],mvar[2]);
        on_cancel(res,function(param){return remove(node)});
        return res}
      var match$0=take_opt_l(mvar[3]);
      if(match$0){var w$0=match$0[1];wakeup_later(w$0,v)}else mvar[1] = [0,v];
      return return_unit}
    function take_available(mvar)
     {var _dM_=mvar[1];
      if(_dM_)
       {var v$0=_dM_[1],match=take_opt_l(mvar[2]);
        if(match)
         {var match$0=match[1],w=match$0[2],v=match$0[1];
          mvar[1] = [0,v];
          wakeup_later(w,0)}
        else
         mvar[1] = 0;
        return [0,v$0]}
      return 0}
    function take(mvar)
     {var match=take_available(mvar);
      if(match){var v=match[1];return lift(v)}
      return add_task_r(mvar[3])}
    function is_empty$1(mvar){return mvar[1]?0:1}
    var Lwt_mvar=[0,create$1,create_empty,put,take,take_available,is_empty$1];
    caml_register_global(95,Lwt_mvar,"Lwt_mvar");
    function create$2(m,opt,_dK_,_dJ_,create$0)
     {if(opt)
       var sth=opt[1],validate=sth;
      else
       var validate=function(param){return return_true};
      if(_dK_)
       var sth$0=_dK_[1],check=sth$0;
      else
       var check=function(param,f){return caml_call1(f,1)};
      if(_dJ_)
       var sth$1=_dJ_[1],dispose=sth$1;
      else
       var dispose=function(param){return return_unit};
      var _dL_=create(0);
      return [0,
              create$0,
              check,
              validate,
              dispose,
              [0,[0,0]],
              m,
              0,
              caml_call1(Queue[2],0),
              _dL_]}
    function create_member(p)
     {function _dI_(exn){p[7] = p[7] - 1 | 0;return fail(exn)}
      return catch$0
              (function(param){p[7] = p[7] + 1 | 0;return caml_call1(p[1],0)},
               _dI_)}
    function release(p,c)
     {var match=take_opt_l(p[9]);
      if(match){var wakener=match[1];return wakeup_later(wakener,c)}
      return caml_call2(Queue[4],c,p[8])}
    function dispose(p,c)
     {function _dG_(param){p[7] = p[7] - 1 | 0;return return_unit}
      var _dH_=caml_call1(p[4],c);
      return caml_call2(___[1],_dH_,_dG_)}
    function validate_and_return(p,c)
     {function _dy_(e)
       {function _dC_(param)
         {var match=take_opt_l(p[9]);
          if(match)
           {var
             wakener=match[1],
             _dE_=function(exn){return wakeup_later_exn(wakener,exn)},
             _dF_=function(c){return wakeup_later(wakener,c)};
            on_any(apply(p[1],0),_dF_,_dE_)}
          return fail(e)}
        var _dD_=dispose(p,c);
        return caml_call2(___[1],_dD_,_dC_)}
      function _dz_(param)
       {if(0 === param)
         {var _dA_=function(param){return create_member(p)},_dB_=dispose(p,c);
          return caml_call2(___[1],_dB_,_dA_)}
        return lift(c)}
      return try_bind(function(param){return caml_call1(p[3],c)},_dz_,_dy_)}
    function use(p,f)
     {function _dn_(c)
       {var cleared=p[5][1];
        function _dq_(e)
         {function _dv_(param){return fail(e)}
          var ok=[0,0],_dw_=cleared[1];
          function _du_(result){ok[1] = result;return 0}
          caml_call2(p[2],c,_du_);
          if(_dw_)
           var switch$0=0;
          else
           if(ok[1])
            {release(p,c);var _dx_=return_unit,switch$0=1}
           else
            var switch$0=0;
          if(! switch$0)var _dx_=dispose(p,c);
          return caml_call2(___[1],_dx_,_dv_)}
        var promise=catch$0(function(param){return caml_call1(f,c)},_dq_);
        function _dr_(param)
         {if(cleared[1])
           {var _ds_=function(param){return promise},_dt_=dispose(p,c);
            return caml_call2(___[1],_dt_,_ds_)}
          release(p,c);
          return promise}
        return caml_call2(___[1],promise,_dr_)}
      if(caml_call1(Queue[11],p[8]))
       if(p[7] < p[6])
        var _do_=create_member(p);
       else
        var
         _dl_=function(_dp_){return validate_and_return(p,_dp_)},
         _dm_=add_task_r(p[9]),
         _do_=caml_call2(___[1],_dm_,_dl_);
      else
       var c=caml_call1(Queue[5],p[8]),_do_=validate_and_return(p,c);
      return caml_call2(___[1],_do_,_dn_)}
    function clear(p)
     {var _dh_=p[8],_di_=0;
      function _dj_(l,element){return [0,element,l]}
      var elements=caml_call3(Queue[14],_dj_,_di_,_dh_);
      caml_call1(Queue[9],p[8]);
      var old_cleared=p[5][1];
      old_cleared[1] = 1;
      p[5][1] = [0,0];
      return iter_s(function(_dk_){return dispose(p,_dk_)},elements)}
    function wait_queue_length(p){return length(p[9])}
    var Lwt_pool=[0,create$2,use,clear,wait_queue_length];
    caml_register_global(96,Lwt_pool,"Lwt_pool");
    function Make(Ord)
     {function link(t1,t2)
       {var
         c2=t2[3],
         r2=t2[2],
         x2=t2[1],
         c1=t1[3],
         r1=t1[2],
         x1=t1[1],
         c=caml_call2(Ord[1],x1,x2);
        return 0 < c?[0,x2,r2 + 1 | 0,[0,t1,c2]]:[0,x1,r1 + 1 | 0,[0,t2,c1]]}
      function ins(t,ts)
       {var t$0=t,ts$0=ts;
        for(;;)
         {if(ts$0)
           {var ts$1=ts$0[2],t$1=ts$0[1];
            if(t$0[2] < t$1[2])return [0,t$0,ts$0];
            var t$2=link(t$0,t$1),t$0=t$2,ts$0=ts$1;
            continue}
          return [0,t$0,0]}}
      var empty=0;
      function is_empty(ts){return 0 === ts?1:0}
      function add(x,ts){return ins([0,x,0,0],ts)}
      function union(ts$0,ts)
       {if(ts$0)
         {if(ts)
           {var ts2=ts[2],t2=ts[1],ts1=ts$0[2],t1=ts$0[1];
            if(t1[2] < t2[2])return [0,t1,union(ts1,[0,t2,ts2])];
            if(t2[2] < t1[2])return [0,t2,union([0,t1,ts1],ts2)];
            var _dg_=union(ts1,ts2);
            return ins(link(t1,t2),_dg_)}
          return ts$0}
        return ts}
      function find_min(param)
       {if(param)
         {var _de_=param[2],_df_=param[1];
          if(_de_)
           {var x=find_min(_de_),c=caml_call2(Ord[1],_df_[1],x);
            return 0 <= c?x:_df_[1]}
          return _df_[1]}
        throw Not_found}
      function lookup_min(t)
       {try
         {var _dc_=[0,find_min(t)];return _dc_}
        catch(_dd_)
         {_dd_ = caml_wrap_exception(_dd_);
          if(_dd_ === Not_found)return 0;
          throw _dd_}}
      function get_min(param)
       {if(param)
         {var _da_=param[2],_db_=param[1];
          if(_da_)
           {var
             match=get_min(_da_),
             ts=match[2],
             t=match[1],
             c=caml_call2(Ord[1],_db_[1],t[1]);
            return 0 <= c?[0,t,[0,_db_,ts]]:[0,_db_,_da_]}
          return [0,_db_,0]}
        throw [0,Assert_failure,_aa_]}
      function remove_min(ts)
       {if(ts)
         {var _c$_=get_min(ts),ts$0=_c$_[2],match=_c$_[1],c=match[3];
          return union(caml_call1(List[9],c),ts$0)}
        throw Not_found}
      function size(l)
       {var _c9_=0;
        function _c__(s,t){var tl=t[3];return s + (1 + size(tl) | 0) | 0}
        return caml_call3(List[20],_c__,_c9_,l)}
      return [0,empty,is_empty,add,union,find_min,lookup_min,remove_min,size]}
    var Lwt_pqueue=[0,Make];
    caml_register_global(97,Lwt_pqueue,"Lwt_pqueue");
    function return$0(x){return lift([0,x])}
    function fail$0(e){return lift([1,e])}
    function ok(x){return map(function(y){return [0,y]},x)}
    function map$1(f,e)
     {return map
              (function(param)
                {if(0 === param[0]){var x=param[1];return [0,caml_call1(f,x)]}
                 var e=param[1];
                 return [1,e]},
               e)}
    function map_err(f,e)
     {return map
              (function(param)
                {if(0 === param[0]){var x=param[1];return [0,x]}
                 var e=param[1];
                 return [1,caml_call1(f,e)]},
               e)}
    function catch$1(e){return catch$0(function(param){return ok(e)},fail$0)}
    function get_exn(e)
     {return bind
              (e,
               function(param)
                {if(0 === param[0]){var x=param[1];return lift(x)}
                 var e=param[1];
                 return fail(e)})}
    function bind$1(e,f)
     {return bind
              (e,
               function(param)
                {if(0 === param[0]){var x=param[1];return caml_call1(f,x)}
                 var e=param[1];
                 return lift([1,e])})}
    function bind_lwt(e,f)
     {return bind
              (e,
               function(param)
                {if(0 === param[0]){var x=param[1];return ok(caml_call1(f,x))}
                 var e=param[1];
                 return fail$0(e)})}
    function bind_result(e,f)
     {return map
              (function(param)
                {if(0 === param[0]){var x=param[1];return caml_call1(f,x)}
                 var e=param[1];
                 return [1,e]},
               e)}
    function bind_lwt_err(e,f)
     {return bind
              (e,
               function(param)
                {if(0 === param[0]){var x=param[1];return return$0(x)}
                 var e=param[1];
                 return bind(caml_call1(f,e),fail$0)})}
    function _ab_(e,f){return map$1(f,e)}
    var
     Lwt_result=
      [0,
       return$0,
       fail$0,
       lift,
       ok,
       catch$1,
       get_exn,
       map$1,
       map_err,
       bind$1,
       bind_lwt,
       bind_lwt_err,
       bind_result,
       [0,_ab_,bind$1],
       _ab_,
       bind$1];
    caml_register_global(98,Lwt_result,"Lwt_result");
    var
     Closed=[248,cst_Lwt_stream_Closed,caml_fresh_oo_id(0)],
     Full=[248,cst_Lwt_stream_Full,caml_fresh_oo_id(0)],
     Empty$0=[248,cst_Lwt_stream_Empty,caml_fresh_oo_id(0)];
    function new_node(param)
     {var node=[];caml_update_dummy(node,[0,node,0]);return node}
    function clone(s)
     {if(3 === s[1][0])caml_call1(Pervasives[1],cst_Lwt_stream_clone);
      return [0,s[1],s[2],s[3],s[4]]}
    function from_source(source)
     {var last=new_node(0),match=wait(0),close=match[2];
      return [0,source,close,last,[0,last]]}
    function from(f){return from_source([0,[0,f,return_unit]])}
    function from_direct(f){return from_source([1,f])}
    function closed(s){return s[2]}
    function is_closed(s){return 1 - is_sleeping(s[2])}
    function on_terminate(s,f)
     {return async(function(param){return caml_call2(___[2],s[2],f)})}
    function enqueue(e,last)
     {var _c8_=last[1],new_last=new_node(0);
      _c8_[2] = e;
      _c8_[1] = new_last;
      last[1] = new_last;
      return 0}
    function enqueue$0(e,s){return enqueue(e,s[4])}
    function create_with_reference(param)
     {var
       match=wait(0),
       push_signal_resolver=match[2],
       push_signal=match[1],
       push_signal_resolver$0=[0,push_signal_resolver],
       source=[0,push_signal,0,0],
       t=from_source([2,source]),
       close=t[2],
       last=t[4];
      function push(x)
       {if(1 - is_sleeping(close))throw Closed;
        enqueue(x,last);
        if(source[2])
         {source[2] = 0;
          var
           old_push_signal_resolver=push_signal_resolver$0[1],
           match=wait(0),
           new_push_signal_resolver=match[2],
           new_waiter=match[1];
          source[1] = new_waiter;
          push_signal_resolver$0[1] = new_push_signal_resolver;
          wakeup_later(old_push_signal_resolver,0)}
        var _c7_=0 === x?1:0;
        return _c7_?wakeup(close,0):_c7_}
      return [0,t,push,function(x){source[3] = x;return 0}]}
    function of_seq(s)
     {var s$0=[0,s];
      function get(param)
       {var match=caml_call1(s$0[1],0);
        if(match){var s=match[2],elt=match[1];s$0[1] = s;return [0,elt]}
        return 0}
      return from_direct(get)}
    function create$3(param)
     {var match=create_with_reference(0),push=match[2],source=match[1];
      return [0,source,push]}
    function of_iter(iter,i)
     {var match=create$3(0),push=match[2],stream=match[1];
      caml_call2(iter,function(x){return caml_call1(push,[0,x])},i);
      caml_call1(push,0);
      return stream}
    function of_list(l){return of_iter(List[15],l)}
    function of_array(a){return of_iter(Array[13],a)}
    function of_string(s){return of_iter(String[8],s)}
    function notify_pusher(info,last)
     {enqueue(info[5],last);
      info[5] = 0;
      var old_wakener=info[7],match=task(0),wakener=match[2],waiter=match[1];
      info[6] = waiter;
      info[7] = wakener;
      return wakeup_later(old_wakener,0)}
    function _ae_(_cy_)
     {var
       _cz_=caml_call2(CamlinternalOO[3],_cy_,cst),
       _cA_=caml_call2(CamlinternalOO[3],_cy_,cst$0),
       _cB_=caml_call2(CamlinternalOO[3],_cy_,cst$1),
       _cC_=caml_call2(CamlinternalOO[3],_cy_,cst$2),
       _cD_=caml_call3(CamlinternalOO[4],_cy_,_ac_,_ad_),
       _cM_=_cD_[9],
       _cE_=_cD_[1],
       _cF_=_cD_[2],
       _cG_=_cD_[3],
       _cH_=_cD_[4],
       _cI_=_cD_[5],
       _cJ_=_cD_[6],
       _cK_=_cD_[7],
       _cL_=_cD_[8];
      function _cN_(self_1,x){self_1[_cz_ + 1][8] = x;return 0}
      function _cO_(self_1){return self_1[_cM_ + 1]}
      function _cP_(self_1){return 0 !== self_1[_cz_ + 1][5]?1:0}
      function _cQ_(self_1){return self_1[_cz_ + 1][4]}
      function _cR_(self_1)
       {var _c5_=1 - self_1[_cM_ + 1];
        if(_c5_)
         {self_1[_cM_ + 1] = 1;
          var _c6_=self_1[_cB_ + 1][1],new_last=new_node(0);
          _c6_[2] = 0;
          _c6_[1] = new_last;
          self_1[_cB_ + 1][1] = new_last;
          if(0 !== self_1[_cz_ + 1][5])
           {self_1[_cz_ + 1][5] = 0;
            wakeup_later_exn(self_1[_cz_ + 1][7],Closed)}
          if(self_1[_cz_ + 1][2])
           {self_1[_cz_ + 1][2] = 0;
            var old_wakener=self_1[_cA_ + 1][1];
            wakeup_later(old_wakener,0)}
          return wakeup(self_1[_cC_ + 1],0)}
        return _c5_}
      function _cS_(self_1,x)
       {if(self_1[_cM_ + 1])return fail(Closed);
        if(0 === self_1[_cz_ + 1][5])
         {if(self_1[_cz_ + 1][3] <= self_1[_cz_ + 1][4])
           {self_1[_cz_ + 1][5] = [0,x];
            var
             _c4_=
              function(exn)
               {if(exn === Canceled)
                 {self_1[_cz_ + 1][5] = 0;
                  var match=task(0),wakener=match[2],waiter=match[1];
                  self_1[_cz_ + 1][6] = waiter;
                  self_1[_cz_ + 1][7] = wakener;
                  return fail(exn)}
                return fail(exn)};
            return catch$0(function(param){return self_1[_cz_ + 1][6]},_c4_)}
          enqueue([0,x],self_1[_cB_ + 1]);
          self_1[_cz_ + 1][4] = self_1[_cz_ + 1][4] + 1 | 0;
          if(self_1[_cz_ + 1][2])
           {self_1[_cz_ + 1][2] = 0;
            var
             old_wakener=self_1[_cA_ + 1][1],
             match=wait(0),
             new_wakener=match[2],
             new_waiter=match[1];
            self_1[_cz_ + 1][1] = new_waiter;
            self_1[_cA_ + 1][1] = new_wakener;
            wakeup_later(old_wakener,0)}
          return return_unit}
        return fail(Full)}
      function _cT_(self_1,size)
       {if(size < 0)
         caml_call1(Pervasives[1],cst_Lwt_stream_bounded_push_resize);
        self_1[_cz_ + 1][3] = size;
        var
         _c2_=self_1[_cz_ + 1][4] < self_1[_cz_ + 1][3]?1:0,
         _c3_=_c2_?0 !== self_1[_cz_ + 1][5]?1:0:_c2_;
        return _c3_
                ?(self_1[_cz_ + 1][4]
                  =
                  self_1[_cz_ + 1][4]
                  +
                  1
                  |
                  0,
                  notify_pusher(self_1[_cz_ + 1],self_1[_cB_ + 1]))
                :_c3_}
      var
       _cU_=
        [0,
         _cE_,
         function(self_1){return self_1[_cz_ + 1][3]},
         _cG_,
         _cT_,
         _cH_,
         _cS_,
         _cK_,
         _cR_,
         _cI_,
         _cQ_,
         _cL_,
         _cP_,
         _cJ_,
         _cO_,
         _cF_,
         _cN_];
      caml_call2(CamlinternalOO[11],_cy_,_cU_);
      return function(_c0_,_cZ_,_cY_,_cX_,_cW_,_cV_)
       {var _c1_=caml_call2(CamlinternalOO[24],_cZ_,_cy_);
        _c1_[_cC_ + 1] = _cV_;
        _c1_[_cB_ + 1] = _cW_;
        _c1_[_cA_ + 1] = _cX_;
        _c1_[_cz_ + 1] = _cY_;
        _c1_[_cM_ + 1] = 0;
        return _c1_}}
    var bounded_push_impl=caml_call2(CamlinternalOO[19],shared,_ae_);
    function create_bounded(size)
     {if(size < 0)caml_call1(Pervasives[1],cst_Lwt_stream_create_bounded);
      var
       match=wait(0),
       wakener=match[2],
       waiter=match[1],
       match$0=task(0),
       push_wakener=match$0[2],
       push_waiter=match$0[1],
       wakener_cell=[0,wakener],
       info=[0,waiter,0,size,0,0,push_waiter,push_wakener,0],
       t=from_source([3,info]);
      return [0,
              t,
              caml_call5(bounded_push_impl[1],0,info,wakener_cell,t[4],t[2])]}
    function feed(s)
     {var _cv_=s[1];
      switch(_cv_[0])
       {case 0:
         var from=_cv_[1];
         if(is_sleeping(from[2]))return protected$0(from[2]);
         var
          _cw_=
           function(x)
            {enqueue$0(x,s);if(0 === x)wakeup(s[2],0);return return_unit},
          _cx_=caml_call1(from[1],0),
          thread=caml_call2(___[1],_cx_,_cw_);
         from[2] = thread;
         return protected$0(thread);
        case 1:
         var f=_cv_[1],x=caml_call1(f,0);
         enqueue$0(x,s);
         if(0 === x)wakeup(s[2],0);
         return return_unit;
        case 2:var push=_cv_[1];push[2] = 1;return protected$0(push[1]);
        default:var push$0=_cv_[1];push$0[2] = 1;return protected$0(push$0[1])}}
    function consume(s,node)
     {var _ct_=node === s[3]?1:0;
      if(_ct_)
       {s[3] = node[1];
        var _cu_=s[1];
        if(3 === _cu_[0])
         {var info=_cu_[1];
          return 0 === info[5]
                  ?(info[4] = info[4] - 1 | 0,0)
                  :notify_pusher(info,s[4])}
        return 0}
      return _ct_}
    function peek_rec(s,node)
     {if(node === s[4][1])
       {var _cr_=function(param){return peek_rec(s,node)},_cs_=feed(s);
        return caml_call2(___[1],_cs_,_cr_)}
      return lift(node[2])}
    function peek(s){return peek_rec(s,s[3])}
    function npeek_rec(node,acc,n,s)
     {var node$0=node,acc$0=acc,n$0=n;
      for(;;)
       {if(0 < n$0)
         {if(node$0 === s[4][1])
           {var
             _co_=function(param){return npeek_rec(node$0,acc$0,n$0,s)},
             _cp_=feed(s);
            return caml_call2(___[1],_cp_,_co_)}
          var _cq_=node$0[2];
          if(_cq_)
           {var
             x=_cq_[1],
             n$1=n$0 - 1 | 0,
             acc$1=[0,x,acc$0],
             node$1=node$0[1],
             node$0=node$1,
             acc$0=acc$1,
             n$0=n$1;
            continue}
          return lift(caml_call1(List[9],acc$0))}
        return lift(caml_call1(List[9],acc$0))}}
    function npeek(n,s){return npeek_rec(s[3],0,n,s)}
    function get_rec(s,node)
     {if(node === s[4][1])
       {var _cm_=function(param){return get_rec(s,node)},_cn_=feed(s);
        return caml_call2(___[1],_cn_,_cm_)}
      if(0 !== node[2])consume(s,node);
      return lift(node[2])}
    function get$1(s){return get_rec(s,s[3])}
    function get_exn_rec(s,node)
     {if(node === s[4][1])
       {var
         _cj_=function(exn){return lift([0,[1,exn]])},
         _ck_=function(param){return get_exn_rec(s,node)};
        return try_bind(function(param){return feed(s)},_ck_,_cj_)}
      var _cl_=node[2];
      if(_cl_){var value=_cl_[1];consume(s,node);return lift([0,[0,value]])}
      return return_none}
    function map_exn(s)
     {return from(function(param){return get_exn_rec(s,s[3])})}
    function get_exn_rec$0(s,node)
     {if(node === s[4][1])
       {var
         _cg_=function(exn){return lift([0,[1,exn]])},
         _ch_=function(param){return get_exn_rec$0(s,node)};
        return try_bind(function(param){return feed(s)},_ch_,_cg_)}
      var _ci_=node[2];
      if(_ci_){var value=_ci_[1];consume(s,node);return lift([0,[0,value]])}
      return return_none}
    function wrap_exn(s)
     {return from(function(param){return get_exn_rec$0(s,s[3])})}
    function nget_rec(node,acc,n,s)
     {var node$0=node,acc$0=acc,n$0=n;
      for(;;)
       {if(0 < n$0)
         {if(node$0 === s[4][1])
           {var
             _cd_=function(param){return nget_rec(node$0,acc$0,n$0,s)},
             _ce_=feed(s);
            return caml_call2(___[1],_ce_,_cd_)}
          var _cf_=s[3][2];
          if(_cf_)
           {var x=_cf_[1];
            consume(s,node$0);
            var
             n$1=n$0 - 1 | 0,
             acc$1=[0,x,acc$0],
             node$1=node$0[1],
             node$0=node$1,
             acc$0=acc$1,
             n$0=n$1;
            continue}
          return lift(caml_call1(List[9],acc$0))}
        return lift(caml_call1(List[9],acc$0))}}
    function nget(n,s){return nget_rec(s[3],0,n,s)}
    function get_while_rec(node,acc,f,s)
     {var node$0=node,acc$0=acc;
      for(;;)
       {if(node$0 === s[4][1])
         {var
           _ca_=function(param){return get_while_rec(node$0,acc$0,f,s)},
           _cb_=feed(s);
          return caml_call2(___[1],_cb_,_ca_)}
        var _cc_=node$0[2];
        if(_cc_)
         {var x=_cc_[1],test=caml_call1(f,x);
          if(test)
           {consume(s,node$0);
            var acc$1=[0,x,acc$0],node$1=node$0[1],node$0=node$1,acc$0=acc$1;
            continue}
          return lift(caml_call1(List[9],acc$0))}
        return lift(caml_call1(List[9],acc$0))}}
    function get_while(f,s){return get_while_rec(s[3],0,f,s)}
    function get_while_s_rec(node,acc,f,s)
     {if(node === s[4][1])
       {var
         _b7_=function(param){return get_while_s_rec(node,acc,f,s)},
         _b8_=feed(s);
        return caml_call2(___[1],_b8_,_b7_)}
      var _b9_=node[2];
      if(_b9_)
       {var
         x=_b9_[1],
         _b__=
          function(param)
           {return 0 === param
                    ?lift(caml_call1(List[9],acc))
                    :(consume(s,node),get_while_s_rec(node[1],[0,x,acc],f,s))},
         _b$_=caml_call1(f,x);
        return caml_call2(___[1],_b$_,_b__)}
      return lift(caml_call1(List[9],acc))}
    function get_while_s(f,s){return get_while_s_rec(s[3],0,f,s)}
    function next_rec(s,node)
     {if(node === s[4][1])
       {var _b4_=function(param){return next_rec(s,node)},_b5_=feed(s);
        return caml_call2(___[1],_b5_,_b4_)}
      var _b6_=node[2];
      if(_b6_){var x=_b6_[1];consume(s,node);return lift(x)}
      return fail(Empty$0)}
    function next(s){return next_rec(s,s[3])}
    function last_new_rec(node,x,s)
     {var node$0=node,x$0=x;
      for(;;)
       {if(node$0 === s[4][1])
         {var thread=feed(s),match=state(thread);
          if(typeof match === "number")
           return lift(x$0);
          else
           {if(0 === match[0])continue;var exn=match[1];return fail(exn)}}
        var _b3_=node$0[2];
        if(_b3_)
         {var x$1=_b3_[1];
          consume(s,node$0);
          var node$1=node$0[1],node$0=node$1,x$0=x$1;
          continue}
        return lift(x$0)}}
    function last_new(s)
     {var node=s[3];
      if(node === s[4][1])
       {var thread=next(s),match=state(thread);
        if(typeof match !== "number" && 0 === match[0])
         {var x=match[1];return last_new_rec(node,x,s)}
        return thread}
      var _b2_=node[2];
      if(_b2_)
       {var x$0=_b2_[1];consume(s,node);return last_new_rec(node[1],x$0,s)}
      return fail(Empty$0)}
    function to_list_rec(node,acc,s)
     {var node$0=node,acc$0=acc;
      for(;;)
       {if(node$0 === s[4][1])
         {var
           _bZ_=function(param){return to_list_rec(node$0,acc$0,s)},
           _b0_=feed(s);
          return caml_call2(___[1],_b0_,_bZ_)}
        var _b1_=node$0[2];
        if(_b1_)
         {var x=_b1_[1];
          consume(s,node$0);
          var acc$1=[0,x,acc$0],node$1=node$0[1],node$0=node$1,acc$0=acc$1;
          continue}
        return lift(caml_call1(List[9],acc$0))}}
    function to_list(s){return to_list_rec(s[3],0,s)}
    function to_string_rec(node,buf,s)
     {var node$0=node;
      for(;;)
       {if(node$0 === s[4][1])
         {var
           _bW_=function(param){return to_string_rec(node$0,buf,s)},
           _bX_=feed(s);
          return caml_call2(___[1],_bX_,_bW_)}
        var _bY_=node$0[2];
        if(_bY_)
         {var x=_bY_[1];
          consume(s,node$0);
          caml_call2(Buffer[10],buf,x);
          var node$1=node$0[1],node$0=node$1;
          continue}
        return lift(caml_call1(Buffer[2],buf))}}
    function to_string(s)
     {var _bV_=caml_call1(Buffer[1],128);return to_string_rec(s[3],_bV_,s)}
    function junk(s)
     {var node=s[3];
      if(node === s[4][1])
       {var
         _bT_=
          function(param){if(0 !== node[2])consume(s,node);return return_unit},
         _bU_=feed(s);
        return caml_call2(___[1],_bU_,_bT_)}
      if(0 !== node[2])consume(s,node);
      return return_unit}
    function njunk_rec(node,n,s)
     {var node$0=node,n$0=n;
      for(;;)
       {if(0 < n$0)
         {if(node$0 === s[4][1])
           {var
             _bR_=function(param){return njunk_rec(node$0,n$0,s)},
             _bS_=feed(s);
            return caml_call2(___[1],_bS_,_bR_)}
          if(node$0[2])
           {consume(s,node$0);
            var n$1=n$0 - 1 | 0,node$1=node$0[1],node$0=node$1,n$0=n$1;
            continue}
          return return_unit}
        return return_unit}}
    function njunk(n,s){return njunk_rec(s[3],n,s)}
    function junk_while_rec(node,f,s)
     {var node$0=node;
      for(;;)
       {if(node$0 === s[4][1])
         {var
           _bO_=function(param){return junk_while_rec(node$0,f,s)},
           _bP_=feed(s);
          return caml_call2(___[1],_bP_,_bO_)}
        var _bQ_=node$0[2];
        if(_bQ_)
         {var x=_bQ_[1],test=caml_call1(f,x);
          if(test)
           {consume(s,node$0);var node$1=node$0[1],node$0=node$1;continue}
          return return_unit}
        return return_unit}}
    function junk_while(f,s){return junk_while_rec(s[3],f,s)}
    function junk_while_s_rec(node,f,s)
     {if(node === s[4][1])
       {var
         _bJ_=function(param){return junk_while_s_rec(node,f,s)},
         _bK_=feed(s);
        return caml_call2(___[1],_bK_,_bJ_)}
      var _bL_=node[2];
      if(_bL_)
       {var
         x=_bL_[1],
         _bM_=
          function(param)
           {return 0 === param
                    ?return_unit
                    :(consume(s,node),junk_while_s_rec(node[1],f,s))},
         _bN_=caml_call1(f,x);
        return caml_call2(___[1],_bN_,_bM_)}
      return return_unit}
    function junk_while_s(f,s){return junk_while_s_rec(s[3],f,s)}
    function junk_old(s)
     {var node=s[3];
      for(;;)
       {if(node === s[4][1])
         {var thread=feed(s),match=state(thread);
          if(typeof match === "number")
           return return_unit;
          else
           {if(0 === match[0])continue;var exn=match[1];return fail(exn)}}
        if(node[2]){consume(s,node);var node$0=node[1],node=node$0;continue}
        return return_unit}}
    function get_available(s)
     {var node=s[3],acc=0;
      for(;;)
       {if(node === s[4][1])
         {var thread=feed(s),match=state(thread);
          if(typeof match === "number")
           return caml_call1(List[9],acc);
          else
           {if(0 === match[0])continue;var exn=match[1];throw exn}}
        var _bI_=node[2];
        if(_bI_)
         {var x=_bI_[1];
          consume(s,node);
          var acc$0=[0,x,acc],node$0=node[1],node=node$0,acc=acc$0;
          continue}
        return caml_call1(List[9],acc)}}
    function get_available_up_to(n$1,s)
     {var node=s[3],acc=0,n=n$1;
      for(;;)
       {if(0 < n)
         {if(node === s[4][1])
           {var thread=feed(s),match=state(thread);
            if(typeof match === "number")
             return caml_call1(List[9],acc);
            else
             {if(0 === match[0])continue;var exn=match[1];throw exn}}
          var _bH_=s[3][2];
          if(_bH_)
           {var x=_bH_[1];
            consume(s,node);
            var
             n$0=n - 1 | 0,
             acc$0=[0,x,acc],
             node$0=node[1],
             node=node$0,
             acc=acc$0,
             n=n$0;
            continue}
          return caml_call1(List[9],acc)}
        return caml_call1(List[9],acc)}}
    function is_empty$2(s)
     {if(s[3] === s[4][1])
       {var _bF_=function(param){return is_empty$2(s)},_bG_=feed(s);
        return caml_call2(___[1],_bG_,_bF_)}
      return lift(0 === s[3][2]?1:0)}
    function map$2(f,s)
     {return from
              (function(param)
                {function _bD_(param)
                  {if(param)
                    {var x=param[1],x$0=caml_call1(f,x);return [0,x$0]}
                   return 0}
                 var _bE_=get$1(s);
                 return caml_call2(___[2],_bE_,_bD_)})}
    function map_s$0(f,s)
     {return from
              (function(param)
                {function _bz_(param)
                  {if(param)
                    {var
                      x=param[1],
                      _bB_=function(x){return [0,x]},
                      _bC_=caml_call1(f,x);
                     return caml_call2(___[2],_bC_,_bB_)}
                   return return_none}
                 var _bA_=get$1(s);
                 return caml_call2(___[1],_bA_,_bz_)})}
    function filter(f,s)
     {function next(param)
       {var t=get$1(s);
        function _by_(param)
         {if(param){var x=param[1],test=caml_call1(f,x);return test?t:next(0)}
          return return_none}
        return caml_call2(___[1],t,_by_)}
      return from(next)}
    function filter_s$0(f,s)
     {function next(param)
       {var t=get$1(s);
        function _bv_(param)
         {if(param)
           {var
             x=param[1],
             _bw_=function(param){return 0 === param?next(0):t},
             _bx_=caml_call1(f,x);
            return caml_call2(___[1],_bx_,_bw_)}
          return t}
        return caml_call2(___[1],t,_bv_)}
      return from(next)}
    function filter_map(f,s)
     {function next(param)
       {function _bt_(param)
         {if(param)
           {var x=param[1],x$0=caml_call1(f,x);return x$0?lift(x$0):next(0)}
          return return_none}
        var _bu_=get$1(s);
        return caml_call2(___[1],_bu_,_bt_)}
      return from(next)}
    function filter_map_s$0(f,s)
     {function next(param)
       {function _bq_(param)
         {if(param)
           {var
             x=param[1],
             t=caml_call1(f,x),
             _bs_=function(param){return param?t:next(0)};
            return caml_call2(___[1],t,_bs_)}
          return return_none}
        var _br_=get$1(s);
        return caml_call2(___[1],_br_,_bq_)}
      return from(next)}
    function map_list(f,s)
     {var pendings=[0,0];
      function next(param)
       {var _bn_=pendings[1];
        if(_bn_){var l=_bn_[2],x=_bn_[1];pendings[1] = l;return lift([0,x])}
        function _bo_(param)
         {if(param)
           {var x=param[1],l=caml_call1(f,x);pendings[1] = l;return next(0)}
          return return_none}
        var _bp_=get$1(s);
        return caml_call2(___[1],_bp_,_bo_)}
      return from(next)}
    function map_list_s(f,s)
     {var pendings=[0,0];
      function next(param)
       {var _bi_=pendings[1];
        if(_bi_){var l=_bi_[2],x=_bi_[1];pendings[1] = l;return lift([0,x])}
        function _bj_(param)
         {if(param)
           {var
             x=param[1],
             _bl_=function(l){pendings[1] = l;return next(0)},
             _bm_=caml_call1(f,x);
            return caml_call2(___[1],_bm_,_bl_)}
          return return_none}
        var _bk_=get$1(s);
        return caml_call2(___[1],_bk_,_bj_)}
      return from(next)}
    function flatten(s){return map_list(function(l){return l},s)}
    function fold_rec(node,f,s,acc)
     {var node$0=node,acc$0=acc;
      for(;;)
       {if(node$0 === s[4][1])
         {var
           _bf_=function(param){return fold_rec(node$0,f,s,acc$0)},
           _bg_=feed(s);
          return caml_call2(___[1],_bg_,_bf_)}
        var _bh_=node$0[2];
        if(_bh_)
         {var x=_bh_[1];
          consume(s,node$0);
          var
           acc$1=caml_call2(f,x,acc$0),
           node$1=node$0[1],
           node$0=node$1,
           acc$0=acc$1;
          continue}
        return lift(acc$0)}}
    function fold(f,s,acc){return fold_rec(s[3],f,s,acc)}
    function fold_s_rec(node,f,s,acc)
     {if(node === s[4][1])
       {var
         _ba_=function(param){return fold_s_rec(node,f,s,acc)},
         _bb_=feed(s);
        return caml_call2(___[1],_bb_,_ba_)}
      var _bc_=node[2];
      if(_bc_)
       {var x=_bc_[1];
        consume(s,node);
        var
         _bd_=function(acc){return fold_s_rec(node[1],f,s,acc)},
         _be_=caml_call2(f,x,acc);
        return caml_call2(___[1],_be_,_bd_)}
      return lift(acc)}
    function fold_s(f,s,acc){return fold_s_rec(s[3],f,s,acc)}
    function iter_rec(node,f,s)
     {var node$0=node;
      for(;;)
       {if(node$0 === s[4][1])
         {var _a9_=function(param){return iter_rec(node$0,f,s)},_a__=feed(s);
          return caml_call2(___[1],_a__,_a9_)}
        var _a$_=node$0[2];
        if(_a$_)
         {var x=_a$_[1];
          consume(s,node$0);
          caml_call1(f,x);
          var node$1=node$0[1],node$0=node$1;
          continue}
        return return_unit}}
    function iter(f,s){return iter_rec(s[3],f,s)}
    function iter_s_rec(node,f,s)
     {if(node === s[4][1])
       {var _a4_=function(param){return iter_s_rec(node,f,s)},_a5_=feed(s);
        return caml_call2(___[1],_a5_,_a4_)}
      var _a6_=node[2];
      if(_a6_)
       {var x=_a6_[1];
        consume(s,node);
        var
         _a7_=function(param){return iter_s_rec(node[1],f,s)},
         _a8_=caml_call1(f,x);
        return caml_call2(___[1],_a8_,_a7_)}
      return return_unit}
    function iter_s$0(f,s){return iter_s_rec(s[3],f,s)}
    function iter_p_rec(node,f,s)
     {if(node === s[4][1])
       {var _a0_=function(param){return iter_p_rec(node,f,s)},_a1_=feed(s);
        return caml_call2(___[1],_a1_,_a0_)}
      var _a2_=node[2];
      if(_a2_)
       {var x=_a2_[1];
        consume(s,node);
        var
         res=caml_call1(f,x),
         rest=iter_p_rec(node[1],f,s),
         _a3_=function(param){return rest};
        return caml_call2(___[1],res,_a3_)}
      return return_unit}
    function iter_p$0(f,s){return iter_p_rec(s[3],f,s)}
    function iter_n(opt,f,stream)
     {if(opt)var sth=opt[1],max_concurrency=sth;else var max_concurrency=1;
      if(max_concurrency <= 0)
       {var message=caml_call2(Printf[4],_af_,max_concurrency);
        caml_call1(Pervasives[1],message)}
      function loop(running,available)
       {function _aU_(param)
         {var available=param[2],running=param[1];
          function _aY_(param)
           {if(param)
             {var elt=param[1];
              return loop([0,caml_call1(f,elt),running],available - 1 | 0)}
            return join(running)}
          var _aZ_=get$1(stream);
          return caml_call2(___[1],_aZ_,_aY_)}
        if(0 < available)
         var _aV_=lift([0,running,available]);
        else
         var
          _aW_=
           function(param)
            {var running=param[2],complete=param[1];
             return lift
                     ([0,running,available + caml_call1(List[1],complete) | 0])},
          _aX_=nchoose_split(running),
          _aV_=caml_call2(___[1],_aX_,_aW_);
        return caml_call2(___[1],_aV_,_aU_)}
      return loop(0,max_concurrency)}
    function find_rec(node,f,s)
     {var node$0=node;
      for(;;)
       {if(node$0 === s[4][1])
         {var _aR_=function(param){return find_rec(node$0,f,s)},_aS_=feed(s);
          return caml_call2(___[1],_aS_,_aR_)}
        var _aT_=node$0[2];
        if(_aT_)
         {var x=_aT_[1];
          consume(s,node$0);
          var test=caml_call1(f,x);
          if(test)return lift(_aT_);
          var node$1=node$0[1],node$0=node$1;
          continue}
        return return_none}}
    function find(f,s){return find_rec(s[3],f,s)}
    function find_s_rec(node,f,s)
     {if(node === s[4][1])
       {var _aM_=function(param){return find_s_rec(node,f,s)},_aN_=feed(s);
        return caml_call2(___[1],_aN_,_aM_)}
      var _aO_=node[2];
      if(_aO_)
       {var x=_aO_[1];
        consume(s,node);
        var
         _aP_=
          function(param)
           {return 0 === param?find_s_rec(node[1],f,s):lift(_aO_)},
         _aQ_=caml_call1(f,x);
        return caml_call2(___[1],_aQ_,_aP_)}
      return return_none}
    function find_s$0(f,s){return find_s_rec(s[3],f,s)}
    function find_map_rec(node,f,s)
     {var node$0=node;
      for(;;)
       {if(node$0 === s[4][1])
         {var
           _aJ_=function(param){return find_map_rec(node$0,f,s)},
           _aK_=feed(s);
          return caml_call2(___[1],_aK_,_aJ_)}
        var _aL_=node$0[2];
        if(_aL_)
         {var x=_aL_[1];
          consume(s,node$0);
          var x$0=caml_call1(f,x);
          if(0 === x$0){var node$1=node$0[1],node$0=node$1;continue}
          return lift(x$0)}
        return return_none}}
    function find_map(f,s){return find_map_rec(s[3],f,s)}
    function find_map_s_rec(node,f,s)
     {if(node === s[4][1])
       {var
         _aF_=function(param){return find_map_s_rec(node,f,s)},
         _aG_=feed(s);
        return caml_call2(___[1],_aG_,_aF_)}
      var _aH_=node[2];
      if(_aH_)
       {var x=_aH_[1];
        consume(s,node);
        var
         t=caml_call1(f,x),
         _aI_=function(param){return param?t:find_map_s_rec(node[1],f,s)};
        return caml_call2(___[1],t,_aI_)}
      return return_none}
    function find_map_s(f,s){return find_map_s_rec(s[3],f,s)}
    function combine(s1,s2)
     {function next(param)
       {var t1=get$1(s1),t2=get$1(s2);
        function _aD_(n1)
         {function _aE_(match)
           {if(n1)
             if(match){var x2=match[1],x1=n1[1];return lift([0,[0,x1,x2]])}
            return return_none}
          return caml_call2(___[1],t2,_aE_)}
        return caml_call2(___[1],t1,_aD_)}
      return from(next)}
    function append(s1,s2)
     {var current_s=[0,s1];
      function next(param)
       {var t=get$1(current_s[1]);
        function _aC_(param)
         {return param
                  ?t
                  :current_s[1] === s2?return_none:(current_s[1] = s2,next(0))}
        return caml_call2(___[1],t,_aC_)}
      return from(next)}
    function concat(s_top)
     {var current_s=[0,from(function(param){return return_none})];
      function next(param)
       {var t=get$1(current_s[1]);
        function _az_(param)
         {if(param)return t;
          function _aA_(param)
           {if(param){var s=param[1];current_s[1] = s;return next(0)}
            return return_none}
          var _aB_=get$1(s_top);
          return caml_call2(___[1],_aB_,_aA_)}
        return caml_call2(___[1],t,_az_)}
      return from(next)}
    function choose$0(streams)
     {function source(s)
       {function _ax_(x){return [0,s,x]}
        var _ay_=get$1(s);
        return [0,s,caml_call2(___[2],_ay_,_ax_)]}
      var streams$0=[0,caml_call2(List[17],source,streams)];
      function next(param)
       {var _as_=streams$0[1];
        if(_as_)
         {var
           _at_=
            function(param)
             {var x=param[2],s=param[1],l=caml_call2(List[45],s,_as_);
              return x
                      ?(streams$0[1] = [0,source(s),l],lift(x))
                      :(streams$0[1] = l,next(0))},
           _au_=function(_aw_){return _aw_[2]},
           _av_=choose(caml_call2(List[17],_au_,_as_));
          return caml_call2(___[1],_av_,_at_)}
        return return_none}
      return from(next)}
    function parse(s,f)
     {if(3 === s[1][0])caml_call1(Pervasives[1],cst_Lwt_stream_parse);
      var node=s[3];
      function _ar_(exn){s[3] = node;return fail(exn)}
      return catch$0(function(param){return caml_call1(f,s)},_ar_)}
    function hexdump(stream)
     {var buf=caml_call1(Buffer[1],80),num=[0,0];
      return from
              (function(param)
                {function _an_(l)
                  {if(l)
                    {caml_call1(Buffer[8],buf);
                     caml_call3(Printf[5],buf,_ag_,num[1]);
                     num[1] = num[1] + 16 | 0;
                     var pos=0,param=l;
                     for(;;)
                      {if(param)
                        {var l$0=param[2],x=param[1];
                         if(8 === pos)caml_call2(Buffer[10],buf,32);
                         caml_call3(Printf[5],buf,_ah_,x);
                         var pos$0=pos + 1 | 0,pos=pos$0,param=l$0;
                         continue}
                       var pos$1=pos;
                       for(;;)
                        {if(pos$1 < 16)
                          {if(8 === pos$1)
                            caml_call2(Buffer[14],buf,cst$3);
                           else
                            caml_call2(Buffer[14],buf,cst$4);
                           var pos$2=pos$1 + 1 | 0,pos$1=pos$2;
                           continue}
                         caml_call2(Buffer[14],buf,cst$5);
                         var
                          _ap_=
                           function(ch)
                            {if(32 <= ch)
                              if(126 < ch)var switch$0=0;else var _aq_=ch,switch$0=1;
                             else
                              var switch$0=0;
                             if(! switch$0)var _aq_=46;
                             return caml_call2(Buffer[10],buf,_aq_)};
                         caml_call2(List[15],_ap_,l);
                         caml_call2(Buffer[10],buf,124);
                         return lift([0,caml_call1(Buffer[2],buf)])}}}
                   return return_none}
                 var _ao_=nget(16,stream);
                 return caml_call2(___[1],_ao_,_an_)})}
    var
     Lwt_stream=
      [0,
       from,
       from_direct,
       Closed,
       create$3,
       create_with_reference,
       Full,
       create_bounded,
       of_seq,
       of_list,
       of_array,
       of_string,
       clone,
       to_list,
       to_string,
       Empty$0,
       peek,
       npeek,
       get$1,
       nget,
       get_while,
       get_while_s,
       next,
       last_new,
       junk,
       njunk,
       junk_while,
       junk_while_s,
       junk_old,
       get_available,
       get_available_up_to,
       is_empty$2,
       is_closed,
       closed,
       on_terminate,
       on_terminate,
       choose$0,
       map$2,
       map_s$0,
       filter,
       filter_s$0,
       filter_map,
       filter_map_s$0,
       map_list,
       map_list_s,
       fold,
       fold_s,
       iter,
       iter_p$0,
       iter_s$0,
       iter_n,
       find,
       find_s$0,
       find_map,
       find_map_s,
       combine,
       append,
       concat,
       flatten,
       wrap_exn,
       parse,
       hexdump,
       map_exn];
    caml_register_global(103,Lwt_stream,"Lwt_stream");
    var Off=[248,cst_Lwt_switch_Off,caml_fresh_oo_id(0)];
    function create$4(param){return [0,[0,[0,0]]]}
    function is_on(switch$0){return switch$0[1]?1:0}
    function check(param){if(param)if(! param[1][1])throw Off;return 0}
    function add_hook(switch$0,hook)
     {if(switch$0)
       {var _am_=switch$0[1][1];
        if(_am_){var os=_am_[1];os[1] = [0,hook,os[1]];return 0}
        throw Off}
      return 0}
    function add_hook_or_exec(switch$0,hook)
     {if(switch$0)
       {var _al_=switch$0[1][1];
        if(_al_){var os=_al_[1];os[1] = [0,hook,os[1]];return return_unit}
        return caml_call1(hook,0)}
      return return_unit}
    function turn_off(switch$0)
     {var _aj_=switch$0[1];
      if(_aj_)
       {var match=_aj_[1],hooks=match[1];
        switch$0[1] = 0;
        var _ak_=function(hook){return apply(hook,0)};
        return join(caml_call2(List[17],_ak_,hooks))}
      return return_unit}
    function with_switch(fn)
     {var switch$0=create$4(0);
      function _ai_(param){return turn_off(switch$0)}
      return finalize(function(param){return caml_call1(fn,switch$0)},_ai_)}
    var
     Lwt_switch=
      [0,
       create$4,
       with_switch,
       is_on,
       turn_off,
       Off,
       check,
       add_hook,
       add_hook_or_exec];
    caml_register_global(104,Lwt_switch,"Lwt_switch");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJsd3QuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdfQ==
