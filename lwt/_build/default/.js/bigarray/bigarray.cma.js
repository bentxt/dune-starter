(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_ba_change_layout=runtime.caml_ba_change_layout,
     caml_ba_create=runtime.caml_ba_create,
     caml_ba_dim_1=runtime.caml_ba_dim_1,
     caml_ba_dim_2=runtime.caml_ba_dim_2,
     caml_ba_kind=runtime.caml_ba_kind,
     caml_ba_num_dims=runtime.caml_ba_num_dims,
     caml_ba_reshape=runtime.caml_ba_reshape,
     caml_ba_slice=runtime.caml_ba_slice,
     caml_check_bound=runtime.caml_check_bound,
     caml_mul=runtime.caml_mul,
     caml_new_string=runtime.caml_new_string;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    function caml_call6(f,a0,a1,a2,a3,a4,a5)
     {return f.length == 6
              ?f(a0,a1,a2,a3,a4,a5)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Bigarray_array3_of_genarray=
      caml_new_string("Bigarray.array3_of_genarray"),
     cst_Bigarray_array2_of_genarray=
      caml_new_string("Bigarray.array2_of_genarray"),
     cst_Bigarray_array1_of_genarray=
      caml_new_string("Bigarray.array1_of_genarray"),
     cst_Bigarray_array0_of_genarray=
      caml_new_string("Bigarray.array0_of_genarray"),
     cst_Bigarray_Array3_of_array_non_cubic_data=
      caml_new_string("Bigarray.Array3.of_array: non-cubic data"),
     cst_Bigarray_Array3_of_array_non_cubic_data$0=
      caml_new_string("Bigarray.Array3.of_array: non-cubic data"),
     cst_Bigarray_Array2_of_array_non_rectangular_data=
      caml_new_string("Bigarray.Array2.of_array: non-rectangular data"),
     Pervasives=global_data.Pervasives,
     Array=global_data.Array,
     Sys=global_data.Sys,
     _a_=[255,0,0,0],
     float32=0,
     float64=1,
     int8_signed=2,
     int8_unsigned=3,
     int16_signed=4,
     int16_unsigned=5,
     int32=6,
     int64=7,
     int$0=8,
     nativeint=9,
     complex32=10,
     complex64=11,
     char$0=12;
    function kind_size_in_bytes(param)
     {switch(param)
       {case 0:return 4;
        case 1:return 8;
        case 2:return 1;
        case 3:return 1;
        case 4:return 2;
        case 5:return 2;
        case 6:return 4;
        case 7:return 8;
        case 8:return Sys[10] / 8 | 0;
        case 9:return Sys[10] / 8 | 0;
        case 10:return 8;
        case 11:return 16;
        default:return 1}}
    var c_layout=0,fortran_layout=1;
    function dims(a)
     {var
       n=caml_ba_num_dims(a),
       d=runtime.caml_make_vect(n,0),
       _I_=n - 1 | 0,
       _H_=0;
      if(! (_I_ < 0))
       {var i=_H_;
        for(;;)
         {var _J_=runtime.caml_ba_dim(a,i);
          caml_check_bound(d,i)[i + 1] = _J_;
          var _K_=i + 1 | 0;
          if(_I_ !== i){var i=_K_;continue}
          break}}
      return d}
    function size_in_bytes(arr)
     {var _B_=dims(arr),_C_=1;
      function _D_(_G_,_F_){return caml_mul(_G_,_F_)}
      var _E_=caml_call3(Array[17],_D_,_C_,_B_);
      return caml_mul(kind_size_in_bytes(caml_ba_kind(arr)),_E_)}
    function map_file(fd,opt,kind,layout,shared,dims)
     {if(opt)var sth=opt[1],pos=sth;else var pos=_a_;
      return runtime.caml_ba_map_file_bytecode(fd,kind,layout,shared,dims,pos)}
    var Genarray=[0,dims,size_in_bytes,map_file];
    function create(kind,layout){return caml_ba_create(kind,layout,[0])}
    function get(arr){return runtime.caml_ba_get_generic(arr,[0])}
    function set(arr)
     {var _z_=[0];
      return function(_A_){return runtime.caml_ba_set_generic(arr,_z_,_A_)}}
    function size_in_bytes$0(arr)
     {return kind_size_in_bytes(caml_ba_kind(arr))}
    function of_value(kind,layout,v)
     {var a=create(kind,layout);caml_call1(set(a),v);return a}
    function create$0(kind,layout,dim)
     {return caml_ba_create(kind,layout,[0,dim])}
    function size_in_bytes$1(arr)
     {var _y_=caml_ba_dim_1(arr);
      return caml_mul(kind_size_in_bytes(caml_ba_kind(arr)),_y_)}
    function slice(a,n)
     {var match=runtime.caml_ba_layout(a);
      return 0 === match?caml_ba_slice(a,[0,n]):caml_ba_slice(a,[0,n])}
    function of_array(kind,layout,data)
     {var
       ba=create$0(kind,layout,data.length - 1),
       ofs=0 === layout?0:1,
       _w_=data.length - 1 - 1 | 0,
       _v_=0;
      if(! (_w_ < 0))
       {var i=_v_;
        for(;;)
         {runtime.caml_ba_set_1
           (ba,i + ofs | 0,caml_check_bound(data,i)[i + 1]);
          var _x_=i + 1 | 0;
          if(_w_ !== i){var i=_x_;continue}
          break}}
      return ba}
    function map_file$0(fd,pos,kind,layout,shared,dim)
     {return caml_call6(Genarray[3],fd,pos,kind,layout,shared,[0,dim])}
    function create$1(kind,layout,dim1,dim2)
     {return caml_ba_create(kind,layout,[0,dim1,dim2])}
    function size_in_bytes$2(arr)
     {var _t_=caml_ba_dim_2(arr),_u_=caml_ba_dim_1(arr);
      return caml_mul(caml_mul(kind_size_in_bytes(caml_ba_kind(arr)),_u_),_t_)}
    function slice_left(a,n){return caml_ba_slice(a,[0,n])}
    function slice_right(a,n){return caml_ba_slice(a,[0,n])}
    function of_array$0(kind,layout,data)
     {var
       dim1=data.length - 1,
       dim2=0 === dim1?0:caml_check_bound(data,0)[1].length - 1,
       ba=create$1(kind,layout,dim1,dim2),
       ofs=0 === layout?0:1,
       _o_=dim1 - 1 | 0,
       _n_=0;
      if(! (_o_ < 0))
       {var i=_n_;
        for(;;)
         {var row=caml_check_bound(data,i)[i + 1];
          if(row.length - 1 !== dim2)
           caml_call1
            (Pervasives[1],cst_Bigarray_Array2_of_array_non_rectangular_data);
          var _q_=dim2 - 1 | 0,_p_=0;
          if(! (_q_ < 0))
           {var j=_p_;
            for(;;)
             {runtime.caml_ba_set_2
               (ba,i + ofs | 0,j + ofs | 0,caml_check_bound(row,j)[j + 1]);
              var _s_=j + 1 | 0;
              if(_q_ !== j){var j=_s_;continue}
              break}}
          var _r_=i + 1 | 0;
          if(_o_ !== i){var i=_r_;continue}
          break}}
      return ba}
    function map_file$1(fd,pos,kind,layout,shared,dim1,dim2)
     {return caml_call6(Genarray[3],fd,pos,kind,layout,shared,[0,dim1,dim2])}
    function create$2(kind,layout,dim1,dim2,dim3)
     {return caml_ba_create(kind,layout,[0,dim1,dim2,dim3])}
    function size_in_bytes$3(arr)
     {var
       _k_=runtime.caml_ba_dim_3(arr),
       _l_=caml_ba_dim_2(arr),
       _m_=caml_ba_dim_1(arr);
      return caml_mul
              (caml_mul
                (caml_mul(kind_size_in_bytes(caml_ba_kind(arr)),_m_),_l_),
               _k_)}
    function slice_left_1(a,n,m){return caml_ba_slice(a,[0,n,m])}
    function slice_right_1(a,n,m){return caml_ba_slice(a,[0,n,m])}
    function slice_left_2(a,n){return caml_ba_slice(a,[0,n])}
    function slice_right_2(a,n){return caml_ba_slice(a,[0,n])}
    function of_array$1(kind,layout,data)
     {var
       dim1=data.length - 1,
       dim2=0 === dim1?0:caml_check_bound(data,0)[1].length - 1,
       dim3=
        0 === dim2
         ?0
         :caml_check_bound(caml_check_bound(data,0)[1],0)[1].length - 1,
       ba=create$2(kind,layout,dim1,dim2,dim3),
       ofs=0 === layout?0:1,
       _c_=dim1 - 1 | 0,
       _b_=0;
      if(! (_c_ < 0))
       {var i=_b_;
        for(;;)
         {var row=caml_check_bound(data,i)[i + 1];
          if(row.length - 1 !== dim2)
           caml_call1
            (Pervasives[1],cst_Bigarray_Array3_of_array_non_cubic_data);
          var _e_=dim2 - 1 | 0,_d_=0;
          if(! (_e_ < 0))
           {var j=_d_;
            for(;;)
             {var col=caml_check_bound(row,j)[j + 1];
              if(col.length - 1 !== dim3)
               caml_call1
                (Pervasives[1],cst_Bigarray_Array3_of_array_non_cubic_data$0);
              var _h_=dim3 - 1 | 0,_g_=0;
              if(! (_h_ < 0))
               {var k=_g_;
                for(;;)
                 {runtime.caml_ba_set_3
                   (ba,
                    i + ofs | 0,
                    j + ofs | 0,
                    k + ofs | 0,
                    caml_check_bound(col,k)[k + 1]);
                  var _j_=k + 1 | 0;
                  if(_h_ !== k){var k=_j_;continue}
                  break}}
              var _i_=j + 1 | 0;
              if(_e_ !== j){var j=_i_;continue}
              break}}
          var _f_=i + 1 | 0;
          if(_c_ !== i){var i=_f_;continue}
          break}}
      return ba}
    function map_file$2(fd,pos,kind,layout,shared,dim1,dim2,dim3)
     {return caml_call6
              (Genarray[3],fd,pos,kind,layout,shared,[0,dim1,dim2,dim3])}
    function array0_of_genarray(a)
     {return 0 === caml_ba_num_dims(a)
              ?a
              :caml_call1(Pervasives[1],cst_Bigarray_array0_of_genarray)}
    function array1_of_genarray(a)
     {return 1 === caml_ba_num_dims(a)
              ?a
              :caml_call1(Pervasives[1],cst_Bigarray_array1_of_genarray)}
    function array2_of_genarray(a)
     {return 2 === caml_ba_num_dims(a)
              ?a
              :caml_call1(Pervasives[1],cst_Bigarray_array2_of_genarray)}
    function array3_of_genarray(a)
     {return 3 === caml_ba_num_dims(a)
              ?a
              :caml_call1(Pervasives[1],cst_Bigarray_array3_of_genarray)}
    function reshape_0(a){return caml_ba_reshape(a,[0])}
    function reshape_1(a,dim1){return caml_ba_reshape(a,[0,dim1])}
    function reshape_2(a,dim1,dim2){return caml_ba_reshape(a,[0,dim1,dim2])}
    function reshape_3(a,dim1,dim2,dim3)
     {return caml_ba_reshape(a,[0,dim1,dim2,dim3])}
    var
     Bigarray=
      [0,
       float32,
       float64,
       complex32,
       complex64,
       int8_signed,
       int8_unsigned,
       int16_signed,
       int16_unsigned,
       int$0,
       int32,
       int64,
       nativeint,
       char$0,
       kind_size_in_bytes,
       c_layout,
       fortran_layout,
       Genarray,
       [0,create,caml_ba_change_layout,size_in_bytes$0,get,set,of_value],
       [0,
        create$0,
        caml_ba_change_layout,
        size_in_bytes$1,
        slice,
        of_array,
        map_file$0],
       [0,
        create$1,
        caml_ba_change_layout,
        size_in_bytes$2,
        slice_left,
        slice_right,
        of_array$0,
        map_file$1],
       [0,
        create$2,
        caml_ba_change_layout,
        size_in_bytes$3,
        slice_left_1,
        slice_right_1,
        slice_left_2,
        slice_right_2,
        of_array$1,
        map_file$2],
       array0_of_genarray,
       array1_of_genarray,
       array2_of_genarray,
       array3_of_genarray,
       caml_ba_reshape,
       reshape_0,
       reshape_1,
       reshape_2,
       reshape_3];
    runtime.caml_register_global(11,Bigarray,"Bigarray");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJiaWdhcnJheS5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W119
