import { toast, ToastContainer } from "react-toastify";

export const Failed = (errors) => {
  toast("Failed ! Please Try Again !", {
    type: "error",
    position: toast.POSITION.TOP_RIGHT,
    //  autoClose:toast.autoClose
    // autoClose={3000}
    // hideProgressBar={false}
    // newestOnTop={false}
    // draggable={false}
    // pauseOnVisibilityChange
    // closeOnClick
    // pauseOnHover
  });
  console.log("error", errors);
};

const getAreaName = () => {
  axios
    .get(`${urls.CFCURL}/master/area/getAll`)
    .then((r) => {
      if (r?.status == 200 || res?.status == 201 || res?.status == "SUCCESS") {
        setAreaName(
          r.data.area.map((row) => ({
            id: row.id,
            areaName: row.areaName,
            areaNameMr: row.areaNameMr,
          })),
        );
      } else {
        Failed(errors);
      }
    })
    .catch((errors) => {
      Failed(errors);
    });
};

// 		 if (r?.status == 200 || res?.status == 201 || res?.status == "SUCCESS")
// {

// 		} else {
//       Failed(errors);
//     }

//  .catch((errors) => {
//           Failed(errors);
//         });
