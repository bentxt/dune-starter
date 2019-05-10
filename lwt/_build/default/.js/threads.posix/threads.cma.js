(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_check_bound=runtime.caml_check_bound,
     caml_make_vect=runtime.caml_make_vect,
     caml_new_string=runtime.caml_new_string,
     caml_register_global=runtime.caml_register_global,
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
    var
     global_data=runtime.caml_get_global_data(),
     cst_Thread_kill_not_implemented=
      caml_new_string("Thread.kill: not implemented"),
     cst_Win32=caml_new_string("Win32"),
     cst_Thread_at_shutdown=caml_new_string("Thread.at_shutdown"),
     cst_Event_receive=caml_new_string("Event.receive"),
     cst_Event_choose=caml_new_string("Event.choose"),
     cst$0=caml_new_string(""),
     cst_timed_write=caml_new_string("timed_write"),
     cst=caml_new_string(""),
     cst_timed_read=caml_new_string("timed_read"),
     Unix=global_data.Unix,
     Sys=global_data.Sys,
     Pervasives=global_data.Pervasives,
     Callback=global_data.Callback,
     List=global_data.List,
     Queue=global_data.Queue,
     Array=global_data.Array,
     Random=global_data.Random,
     Bytes=global_data.Bytes;
    function create(fn,arg)
     {return runtime.caml_thread_new
              (function(param)
                {try
                  {caml_call1(fn,arg);var _aF_=0;return _aF_}
                 catch(exn)
                  {exn = caml_wrap_exception(exn);
                   caml_call1(Pervasives[51],Pervasives[27]);
                   caml_call1(Pervasives[51],Pervasives[28]);
                   return runtime.caml_thread_uncaught_exception(exn)}})}
    function kill(th)
     {return caml_call1(Pervasives[1],cst_Thread_kill_not_implemented)}
    function preempt(signal){return runtime.caml_thread_yield(0)}
    var _a_=runtime.caml_string_notequal(Sys[5],cst_Win32)?Sys[35]:Sys[26];
    caml_call2(Sys[15],_a_,[0,preempt]);
    runtime.caml_thread_initialize(0);
    function _b_(param)
     {runtime.caml_thread_cleanup(0);return caml_call2(Sys[15],_a_,0)}
    caml_call2(Callback[1],cst_Thread_at_shutdown,_b_);
    function delay(time){caml_call4(Unix[82],0,0,0,time);return 0}
    function wait_read(fd){return 0}
    function wait_write(fd){return 0}
    function wait_timed_read(fd,d)
     {return caml_call4(Unix[82],[0,fd,0],0,0,d)[1]?1:0}
    function wait_timed_write(fd,d)
     {return caml_call4(Unix[82],0,[0,fd,0],0,d)[2]?1:0}
    var select=Unix[82];
    function wait_pid(p){return caml_call2(Unix[15],0,p)}
    function _c_(_aE_){return runtime.caml_wait_signal(_aE_)}
    function _d_(_aD_,_aC_){return runtime.caml_thread_sigmask(_aD_,_aC_)}
    function _e_(_aB_){return runtime.caml_thread_yield(_aB_)}
    function _f_(_aA_){return runtime.caml_thread_join(_aA_)}
    function _g_(_az_){return runtime.caml_thread_exit(_az_)}
    function _h_(_ay_){return runtime.caml_thread_id(_ay_)}
    var
     Thread=
      [0,
       create,
       function(_ax_){return runtime.caml_thread_self(_ax_)},
       _h_,
       _g_,
       kill,
       delay,
       _f_,
       wait_read,
       wait_write,
       wait_timed_read,
       wait_timed_write,
       select,
       wait_pid,
       _e_,
       _d_,
       _c_];
    caml_register_global(13,Thread,"Thread");
    function _i_(_aw_){return runtime.caml_mutex_unlock(_aw_)}
    function _j_(_av_){return runtime.caml_mutex_try_lock(_av_)}
    function _k_(_au_){return runtime.caml_mutex_lock(_au_)}
    var
     Mutex=
      [0,function(_at_){return runtime.caml_mutex_new(_at_)},_k_,_j_,_i_];
    caml_register_global(14,Mutex,"Mutex");
    function _l_(_as_){return runtime.caml_condition_broadcast(_as_)}
    function _m_(_ar_){return runtime.caml_condition_signal(_ar_)}
    function _n_(_aq_,_ap_){return runtime.caml_condition_wait(_aq_,_ap_)}
    var
     Condition=
      [0,function(_ao_){return runtime.caml_condition_new(_ao_)},_n_,_m_,_l_];
    caml_register_global(15,Condition,"Condition");
    function new_channel(param)
     {var _an_=caml_call1(Queue[2],0);return [0,caml_call1(Queue[2],0),_an_]}
    var masterlock=runtime.caml_mutex_new(0);
    function do_aborts(abort_env,genev,performed)
     {var _aj_=0 !== abort_env?1:0;
      if(_aj_)
       {if(0 <= performed)
         {var
           ids_done=caml_check_bound(genev,performed)[performed + 1][2],
           _ak_=
            function(param)
             {var
               f=param[2],
               id=param[1],
               _am_=1 - caml_call2(List[31],id,ids_done);
              return _am_?caml_call1(f,0):_am_};
          return caml_call2(List[15],_ak_,abort_env)}
        var _al_=function(param){var f=param[2];return caml_call1(f,0)};
        return caml_call2(List[15],_al_,abort_env)}
      return _aj_}
    function scramble_array(a)
     {var len=a.length - 1;
      if(0 === len)caml_call1(Pervasives[1],cst_Event_choose);
      var _ag_=len - 1 | 0;
      if(! (_ag_ < 1))
       {var i=_ag_;
        for(;;)
         {var
           j=caml_call1(Random[5],i + 1 | 0),
           temp=caml_check_bound(a,i)[i + 1],
           _ah_=caml_check_bound(a,j)[j + 1];
          caml_check_bound(a,i)[i + 1] = _ah_;
          caml_check_bound(a,j)[j + 1] = temp;
          var _ai_=i - 1 | 0;
          if(1 !== i){var i=_ai_;continue}
          break}}
      return a}
    var count=[0,0];
    function flatten_event(abort_list,accu,accu_abort,ev)
     {var abort_list$0=abort_list,accu_abort$0=accu_abort,ev$0=ev;
      for(;;)
       switch(ev$0[0])
        {case 0:
          var bev=ev$0[1];
          return [0,[0,[0,bev,abort_list$0],accu],accu_abort$0];
         case 1:
          var evl=ev$0[1],accu$0=accu,accu_abort$1=accu_abort$0,param=evl;
          for(;;)
           {if(param)
             {var
               l=param[2],
               ev$1=param[1],
               match=flatten_event(abort_list$0,accu$0,accu_abort$1,ev$1),
               accu_abort$2=match[2],
               accu$1=match[1],
               accu$0=accu$1,
               accu_abort$1=accu_abort$2,
               param=l;
              continue}
            return [0,accu$0,accu_abort$1]}
         case 2:
          var fn=ev$0[2],ev$2=ev$0[1];
          count[1]++;
          var
           _af_=count[1],
           accu_abort$3=[0,[0,_af_,fn],accu_abort$0],
           abort_list$1=[0,_af_,abort_list$0],
           abort_list$0=abort_list$1,
           accu_abort$0=accu_abort$3,
           ev$0=ev$2;
          continue;
         default:var fn$0=ev$0[1],ev$3=caml_call1(fn$0,0),ev$0=ev$3;continue}}
    function sync(ev)
     {var
       match=flatten_event(0,0,0,ev),
       abort_env=match[2],
       evl=match[1],
       genev=scramble_array(caml_call1(Array[12],evl)),
       performed=[0,-1],
       condition=runtime.caml_condition_new(0),
       bev=
        caml_make_vect
         (genev.length - 1,
          caml_call3(caml_check_bound(genev,0)[1][1],performed,condition,0)),
       _Y_=genev.length - 1 - 1 | 0,
       _X_=1;
      if(! (_Y_ < 1))
       {var i$2=_X_;
        for(;;)
         {var
           _ad_=
            caml_call3
             (caml_check_bound(genev,i$2)[i$2 + 1][1],performed,condition,i$2);
          caml_check_bound(bev,i$2)[i$2 + 1] = _ad_;
          var _ae_=i$2 + 1 | 0;
          if(_Y_ !== i$2){var i$2=_ae_;continue}
          break}}
      runtime.caml_mutex_lock(masterlock);
      var i=0;
      for(;;)
       {if(bev.length - 1 <= i)
         var ___=0;
        else
         {var _Z_=caml_call1(caml_check_bound(bev,i)[i + 1][1],0);
          if(! _Z_){var i$0=i + 1 | 0,i=i$0;continue}
          var ___=_Z_}
        if(1 - ___)
         {var _aa_=bev.length - 1 - 1 | 0,_$_=0;
          if(! (_aa_ < 0))
           {var i$1=_$_;
            for(;;)
             {caml_call1(caml_check_bound(bev,i$1)[i$1 + 1][2],0);
              var _ac_=i$1 + 1 | 0;
              if(_aa_ !== i$1){var i$1=_ac_;continue}
              break}}
          runtime.caml_condition_wait(condition,masterlock);
          for(;;)
           {if(! (0 <= performed[1]))
             {runtime.caml_condition_wait(condition,masterlock);continue}
            break}}
        runtime.caml_mutex_unlock(masterlock);
        if(0 === abort_env)
         {var _ab_=performed[1];
          return caml_call1(caml_check_bound(bev,_ab_)[_ab_ + 1][3],0)}
        var
         num=performed[1],
         result=caml_call1(caml_check_bound(bev,num)[num + 1][3],0);
        do_aborts(abort_env,genev,num);
        return result}}
    function poll(ev)
     {var
       match=flatten_event(0,0,0,ev),
       abort_env=match[2],
       evl=match[1],
       genev=scramble_array(caml_call1(Array[12],evl)),
       performed=[0,-1],
       condition=runtime.caml_condition_new(0),
       bev=
        caml_make_vect
         (genev.length - 1,
          caml_call3(caml_check_bound(genev,0)[1][1],performed,condition,0)),
       _S_=genev.length - 1 - 1 | 0,
       _R_=1;
      if(! (_S_ < 1))
       {var i$1=_R_;
        for(;;)
         {var
           _V_=
            caml_call3
             (caml_check_bound(genev,i$1)[i$1 + 1][1],performed,condition,i$1);
          caml_check_bound(bev,i$1)[i$1 + 1] = _V_;
          var _W_=i$1 + 1 | 0;
          if(_S_ !== i$1){var i$1=_W_;continue}
          break}}
      runtime.caml_mutex_lock(masterlock);
      var i=0;
      for(;;)
       {if(bev.length - 1 <= i)
         var ready=0;
        else
         {var _T_=caml_call1(caml_check_bound(bev,i)[i + 1][1],0);
          if(! _T_){var i$0=i + 1 | 0,i=i$0;continue}
          var ready=_T_}
        if(ready)
         {runtime.caml_mutex_unlock(masterlock);
          var
           _U_=performed[1],
           result=[0,caml_call1(caml_check_bound(bev,_U_)[_U_ + 1][3],0)];
          do_aborts(abort_env,genev,performed[1]);
          return result}
        performed[1] = 0;
        runtime.caml_mutex_unlock(masterlock);
        do_aborts(abort_env,genev,-1);
        return 0}}
    function cleanup_queue(q)
     {var q$0=caml_call1(Queue[2],0);
      function _P_(c)
       {var _Q_=-1 === c[1][1]?1:0;return _Q_?caml_call2(Queue[3],c,q$0):_Q_}
      caml_call2(Queue[13],_P_,q);
      return q$0}
    function always(data)
     {return [0,
              function(performed,condition,evnum)
               {function _N_(param){return data}
                function _O_(param){return 0}
                return [0,
                        function(param){performed[1] = evnum;return 1},
                        _O_,
                        _N_]}]}
    function send(channel,data)
     {return [0,
              function(performed,condition,evnum)
               {var wcomm=[0,performed,condition,[0,data],evnum];
                function _J_(param){return 0}
                function _K_(param)
                 {channel[1] = cleanup_queue(channel[1]);
                  return caml_call2(Queue[3],wcomm,channel[1])}
                return [0,
                        function(param)
                         {function poll(param)
                           {for(;;)
                             {var rcomm=caml_call1(Queue[5],channel[2]);
                              if(0 <= rcomm[1][1])continue;
                              rcomm[3] = wcomm[3];
                              performed[1] = evnum;
                              rcomm[1][1] = rcomm[4];
                              return runtime.caml_condition_signal(rcomm[2])}}
                          try
                           {poll(0);var _L_=1;return _L_}
                          catch(_M_)
                           {_M_ = caml_wrap_exception(_M_);
                            if(_M_ === Queue[1])return 0;
                            throw _M_}},
                        _K_,
                        _J_]}]}
    function receive(channel)
     {return [0,
              function(performed,condition,evnum)
               {var rcomm=[0,performed,condition,0,evnum];
                function _E_(param)
                 {var _I_=rcomm[3];
                  if(_I_){var res=_I_[1];return res}
                  return caml_call1(Pervasives[1],cst_Event_receive)}
                function _F_(param)
                 {channel[2] = cleanup_queue(channel[2]);
                  return caml_call2(Queue[3],rcomm,channel[2])}
                return [0,
                        function(param)
                         {function poll(param)
                           {for(;;)
                             {var wcomm=caml_call1(Queue[5],channel[1]);
                              if(0 <= wcomm[1][1])continue;
                              rcomm[3] = wcomm[3];
                              performed[1] = evnum;
                              wcomm[1][1] = wcomm[4];
                              return runtime.caml_condition_signal(wcomm[2])}}
                          try
                           {poll(0);var _G_=1;return _G_}
                          catch(_H_)
                           {_H_ = caml_wrap_exception(_H_);
                            if(_H_ === Queue[1])return 0;
                            throw _H_}},
                        _F_,
                        _E_]}]}
    function choose(evl){return [1,evl]}
    function wrap_abort(ev,fn){return [2,ev,fn]}
    function guard(fn){return [3,fn]}
    function wrap(ev,fn)
     {switch(ev[0])
       {case 0:
         var genev=ev[1];
         return [0,
                 function(performed,condition,evnum)
                  {var bev=caml_call3(genev,performed,condition,evnum);
                   function _D_(param)
                    {return caml_call1(fn,caml_call1(bev[3],0))}
                   return [0,bev[1],bev[2],_D_]}];
        case 1:
         var evl=ev[1],_C_=function(ev){return wrap(ev,fn)};
         return [1,caml_call2(List[17],_C_,evl)];
        case 2:var f=ev[2],ev$0=ev[1];return [2,wrap(ev$0,fn),f];
        default:
         var gu=ev[1];
         return [3,function(param){return wrap(caml_call1(gu,0),fn)}]}}
    function select$0(evl){return sync([1,evl])}
    var
     Event=
      [0,
       new_channel,
       send,
       receive,
       always,
       choose,
       wrap,
       wrap_abort,
       guard,
       sync,
       select$0,
       poll];
    caml_register_global(20,Event,"Event");
    var
     wait=Unix[14],
     waitpid=Unix[15],
     system=Unix[16],
     read=Unix[25],
     write=Unix[26],
     write_substring=Unix[28],
     select$1=Unix[82];
    function timed_read(fd,buff,ofs,len,timeout)
     {if(wait_timed_read(fd,timeout))
       return caml_call4(Unix[25],fd,buff,ofs,len);
      throw [0,Unix[1],62,cst_timed_read,cst]}
    function timed_write(fd,buff,ofs,len,timeout)
     {if(wait_timed_write(fd,timeout))
       return caml_call4(Unix[26],fd,buff,ofs,len);
      throw [0,Unix[1],62,cst_timed_write,cst$0]}
    function timed_write_substring(fd,buff,ofs,len,timeout)
     {return timed_write(fd,caml_call1(Bytes[43],buff),ofs,len,timeout)}
    var
     pipe=Unix[67],
     open_process_in=Unix[71],
     open_process_out=Unix[72],
     open_process=Unix[73],
     socket=Unix[121],
     accept=Unix[124],
     recv=Unix[131],
     recvfrom=Unix[132],
     send$0=Unix[133],
     send_substring=Unix[134],
     sendto=Unix[135],
     sendto_substring=Unix[136],
     open_connection=Unix[146];
    function _o_(_B_,_A_){return runtime.unix_connect(_B_,_A_)}
    function _p_(_z_){return runtime.unix_sleep(_z_)}
    function _q_(_y_,_x_){return runtime.unix_execvp(_y_,_x_)}
    function _r_(_w_,_v_,_u_){return runtime.unix_execve(_w_,_v_,_u_)}
    var
     ThreadUnix=
      [0,
       function(_t_,_s_){return runtime.unix_execv(_t_,_s_)},
       _r_,
       _q_,
       wait,
       waitpid,
       system,
       read,
       write,
       write_substring,
       timed_read,
       timed_write,
       timed_write_substring,
       select$1,
       pipe,
       open_process_in,
       open_process_out,
       open_process,
       _p_,
       socket,
       accept,
       _o_,
       recv,
       recvfrom,
       send$0,
       send_substring,
       sendto,
       sendto_substring,
       open_connection];
    caml_register_global(22,ThreadUnix,"ThreadUnix");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJ0aHJlYWRzLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXX0=
