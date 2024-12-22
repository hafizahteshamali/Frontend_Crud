import { useForm } from "react-hook-form";
import { postReq, putReq } from "../Api/axios";
import { useDispatch, useSelector } from "react-redux";
import { AddAllUser } from "../Redux/Reducer/UserReducer";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Component/Header/Header";

const AddUser = () => {

  const location = useLocation();
  const {isUpdate, Uid, existingData} = location.state || {};

  const dispatch = useDispatch();
  const userData = useSelector((state) => state);
  const navigate = useNavigate()


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      if(isUpdate){
        const updateData = await putReq(`/users/updateuser/${Uid}`, data);
        navigate('/');
        reset();
      }else{
      event.preventDefault();
      const response = await postReq("/users/adduser", data);
      const singleData = response?.data?.data;
      await dispatch(AddAllUser(singleData));
      navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    if(isUpdate){
      reset({
        name: existingData.name,
        email: existingData.email,
        description: existingData.description,
      })
    }
  },[isUpdate && existingData])

  return (
    <>
      <Header />
    <div className="bg-slate-300 min-h-[100vh] flex justify-center items-center w-full">
      <div className="w-[40%] m-auto p-4 rounded-lg bg-slate-600">
        <form
          className="flex flex-col justify-center gap-7 min-h-[400px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-3xl text-white font-bold text-center">
            {isUpdate ? "Update User Form" : "Add User Form"}
          </h1>

          <input
            className="p-3 bg-transparent text-white text-xl outline-none border-b-2 border-black "
            type="text"
            placeholder="enter your name"
            {...register("name")}
          />
          {errors.name && <span>This field is required</span>}

          <input
            className="p-3 bg-transparent text-white text-xl outline-none border-b-2 border-black "
            type="email"
            placeholder="enter your email"
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}

          <input
            className="p-3 bg-transparent text-white text-xl outline-none border-b-2 border-black "
            type="text"
            placeholder="enter your description"
            {...register("description", { required: true })}
          />
          {errors.description && <span>This field is required</span>}

          <input
            className="text-xl text-white border-[1px] border-black p-3 bg-slate-800"
            type="submit"
          />
        </form>
      </div>
    </div>
    </>
  );
};

export default AddUser;
