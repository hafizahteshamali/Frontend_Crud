import { useDispatch, useSelector} from "react-redux";
import { deleteReq, getReq } from "../Api/axios";
import { useEffect } from "react";
import { GetAllUser } from "../Redux/Reducer/UserReducer";
import { useNavigate } from "react-router-dom";
import Header from "../Component/Header/Header";

const GetUser = () => {
  const dispatch = useDispatch();
  const allData = useSelector((state) => state?.UserReducer?.user);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const response = await getReq("/users");
      const exactData = response?.data?.data;
      await dispatch(GetAllUser(exactData));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async (id) => {
    try {
      await deleteReq(`/users/deleteuser/${id}`);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
    <div className="bg-slate-300 min-h-[100vh] w-full">
      <div className="w-[1200px] m-auto p-1 min-h-[90vh]">
        <h1 className="text-3xl font-bold text-center">All Users Data</h1>
        <table className="w-[100%] bg-slate-500 text-white text-center mt-5">
          <thead>
            <tr className="border-[1px] border-black p-2">
              <th className="border-[1px] border-black p-1">Name</th>
              <th className="border-[1px] border-black p-1">Email</th>
              <th className="border-[1px] border-black p-1">Description</th>
              <th className="border-[1px] border-black p-1">Actions</th>
            </tr>
          </thead>

          <tbody>
            {allData.length === 0 ?
            (<tr>
              <td colSpan='4'>no data found...!</td>
            </tr>) : 
            (
              allData?.map((item, index) => {
                return (
                  <tr className="border-[1px] border-black p-2" key={index}>
                    <td className="border-[1px] border-black p-1">{item.name}</td>
                    <td className="border-[1px] border-black p-1">
                      {item.email}
                    </td>
                    <td className="border-[1px] border-black p-1">
                      {item.description}
                    </td>
                    <td className="p-1 flex justify-center items-center gap-2">
                      <button
                        onClick={() => deleteData(item._id)}
                        className="bg-red-800 rounded-md text-white p-3"
                      >
                        delete
                      </button>
                      <button
                        onClick={() =>
                          navigate("/adduser", {
                            state: {
                              isUpdate: true,
                              Uid: item._id,
                              existingData: item,
                            },
                          })
                        }
                        className="bg-yellow-400 rounded-md text-white p-3"
                      >
                        edit
                      </button>
                    </td>
                  </tr>
                );
              })
            )
            }
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default GetUser;
