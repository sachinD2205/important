import { Add, Delete } from "@mui/icons-material";
import { useEffect } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import style from "./uploadButtonHawker.module.css";
import axios from "axios";
import urls from "../../../URLS/urls";

const UploadButtonHawker = (props) => {
  const [filePath, setFilePath] = useState(null);
  console.log("1234", filePath);

  // useEffect
  useEffect(() => {
    console.log("sachin", props);
  }, [props]);

  // useEffect
  useEffect(() => {
    console.log("props.filePath <->", props);
    if (props?.fileName) {
      setFilePath(props?.fileName);
    }
  }, [props?.fileName]);

  // file Upload
  const handleFile = async (e) => {
    let formData = new FormData();
    formData.append("file", e?.target?.files[0]);
    formData.append("appName", props?.appName);
    formData.append("serviceName", props?.serviceName);

    axios
      .post(`${urls.CFCURL}/file/upload`, formData)
      .then((res) => {
        // try {
        if (res?.status == "200" || res?.status == "201") {
          setFilePath(res?.data?.filePath);
          props.filePath(res?.data?.filePath);
          swal({
            title: JSON.stringify(<FormattedLabel id='documentUpload1' />),
            text: <FormattedLabel id='documentUploadSuccessfully' />,
            icon: "success",
          });
        } else if (res?.status == "500") {
          alert("d");
          console.log("res?.data", res?.data);
          console.log("res?.status", res?.status);
          swal({
            title: "Please Upload Valid Document",
            text: " hello else if!!!",
            icon: "error",
          });
        } else if (res?.status == "400") {
          alert("d");
          console.log("res?.data", res?.data);
          console.log("res?.status", res?.status);
          swal({
            title: "Please Upload Valid Document",
            text: " hello  400 else if!!!",
            icon: "error",
          });
        }
        console.log("res", res?.data);
        ("");
        // } catch (error) {
        //   console.log("error1212", error);
        // }
      })
      .catch((error) => {
        swal({
          title: "Please Upload Valid Document",
          text: " file not more than 2mb and valid format document !!!",
          icon: "error",
        });
        console.log("error500", error?.response);
        console.log("error504", error?.response?.data);
        console.log("error505", error?.response?.data?.message);
        console.log("error501", error);
        console.log("error502", error?.data?.response);
        console.log("error503", error?.data?.response?.data);
      });

    // const newData = axios
    //   .post(`${urls.CFCURL}/file/upload`, formData)
    //   .then((r) => {
    //     console.log("res.data.status", r?.status, "res.data.message", r?.data);
    //     setFilePath(r.data.filePath);
    //     props.filePath(r.data.filePath);
    //   });
    // console.log("new Data", newData);
  };

  // shwoFileName
  function showFileName(fileName) {
    let fileNamee = [];
    fileNamee = fileName?.split("__");
    return fileNamee[1];
  }

  // delete file
  const discard = async (e) => {
    swal({
      title: "Delete?",
      text: "Are you sure you want to delete the file ? ",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`${urls.CFCURL}/file/discard?filePath=${filePath}`)
          .then((res) => {
            if (res.status == 200) {
              setFilePath(null), props.filePath(null);
              swal("File Deleted Successfully!", { icon: "success" });
            } else {
              swal("Something went wrong..!!!");
            }
          });
      } else {
        swal("File is Safe");
      }
    });
  };

  //view
  return (
    <div className={style.align}>
      <label className={style.uploadButton}>
        {!filePath && (
          <>
            <Add
              color='secondary'
              sx={{
                width: 30,
                height: 30,
                border: "1.4px dashed #9c27b0",
                marginRight: 1.5,
              }}
            />
            <input
              type='file'
              onChange={(e) => {
                handleFile(e);
              }}
              hidden
            />
          </>
        )}
        {filePath ? (
          <a
            href={`${urls.CFCURL}/file/preview?filePath=${filePath}`}
            target='__blank'
          >
            {showFileName(filePath)}
          </a>
        ) : (
          <span className={style.fileName}>Add File</span>
        )}
      </label>
      {filePath && (
        <IconButton
          onClick={(e) => {
            discard(
              e,
            ); /* setFilePath(null),props.filePath(null),discardFile() */
          }}
        >
          <Delete color='error' />
        </IconButton>
      )}
    </div>
  );
};
export default UploadButtonHawker;
