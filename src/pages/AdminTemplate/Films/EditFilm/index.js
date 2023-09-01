import React, { useEffect, useState } from "react";
import { DatePicker, Form, Input, InputNumber, Switch } from "antd";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { actGetInfoFilm } from "../../../../redux/actions/GetInfoFilmAction";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { actUpdateFilm } from "../../../../redux/actions/UpdateFilmAction";
import * as yup from "yup";

dayjs.extend(customParseFormat);

const EditFilm = () => {
  const dispatch = useDispatch();
  const [imgSrc, setImgSrc] = useState("");
  const { id } = useParams();
  const { data } = useSelector((state) => state.GetInfoFilmReducer);

  const editFilmSchema = yup.object().shape({
    tenPhim: yup.string().required("Tên phim không bỏ trống!"),
    trailer: yup.string().required("Trailer không bỏ trống!"),
    moTa: yup.string().required("Mô tả không bỏ trống!"),
    ngayKhoiChieu: yup.string().required("Ngày khởi chiếu không bỏ trống!"),
    danhGia: yup
      .number()
      .required("Đánh giá không bỏ trống!")
      .min(1, "Đánh giá từ 1 đến 10")
      .max(10, "Đánh giá từ 1 đến 10"),
  });

  useEffect(() => {
    dispatch(actGetInfoFilm(id));
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maPhim: data?.maPhim,
      tenPhim: data?.tenPhim,
      trailer: data?.trailer,
      moTa: data?.moTa,
      ngayKhoiChieu: data?.ngayKhoiChieu,
      dangChieu: data?.dangChieu,
      sapChieu: data?.sapChieu,
      hot: data?.hot,
      danhGia: data?.danhGia,
      maNhom: "GP09",
      hinhAnh: null,
    },
    validationSchema: editFilmSchema,
    onSubmit: (values) => {
      //tạo đối tượng formData
      const formData = new FormData();

      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          if (values.hinhAnh !== null) {
            formData.append("File", values.hinhAnh, values.hinhAnh.name);
          }
        }
      }
      //call api
      dispatch(actUpdateFilm(formData));
    },
  });

  const handleChangeDatePicker = (value) => {
    const ngayKhoiChieu = dayjs(value, "DD/MM/YYYY");
    formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
  };

  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeFile = async (e) => {
    const file = e.target.files[0];

    await formik.setFieldValue("hinhAnh", file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setImgSrc(e.target.result);
    };
  };

  return (
    <>
      <h2 className="text-2xl font-semibold text-center mb-5">Cập nhật phim</h2>
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: "default",
        }}
      >
        <Form.Item label="Tên phim">
          <Input
            name="tenPhim"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.tenPhim}
          />
          {formik.touched.tenPhim && formik.errors.tenPhim ? (
            <div style={{ color: "red" }}>{formik.errors.tenPhim}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Trailer">
          <Input
            name="trailer"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.trailer}
          />
          {formik.touched.trailer && formik.errors.trailer ? (
            <div style={{ color: "red" }}>{formik.errors.trailer}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Mô tả">
          <Input
            name="moTa"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.moTa}
          />
          {formik.touched.moTa && formik.errors.moTa ? (
            <div style={{ color: "red" }}>{formik.errors.moTa}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Ngày khởi chiếu">
          <DatePicker
            format="DD/MM/YYYY"
            name="ngayKhoiChieu"
            onChange={handleChangeDatePicker}
            onBlur={formik.handleBlur}
            value={dayjs(formik.values.ngayKhoiChieu)}
          />
          {formik.touched.ngayKhoiChieu && formik.errors.ngayKhoiChieu ? (
            <div style={{ color: "red" }}>{formik.errors.ngayKhoiChieu}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Đang chiếu" valuePropName="checked">
          <Switch
            onChange={handleChangeSwitch("dangChieu")}
            checked={formik.values.dangChieu}
          />
        </Form.Item>
        <Form.Item label="Sắp chiếu" valuePropName="checked">
          <Switch
            onChange={handleChangeSwitch("sapChieu")}
            checked={formik.values.sapChieu}
          />
        </Form.Item>
        <Form.Item label="Hot" valuePropName="checked">
          <Switch
            onChange={handleChangeSwitch("hot")}
            checked={formik.values.hot}
          />
        </Form.Item>
        <Form.Item label="Đánh giá">
          <InputNumber
            name="danhGia"
            onChange={handleChangeSwitch("danhGia")}
            onBlur={formik.handleBlur}
            min={1}
            max={10}
            value={formik.values.danhGia}
          />
          {formik.touched.danhGia && formik.errors.danhGia ? (
            <div style={{ color: "red" }}>{formik.errors.danhGia}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Hình ảnh">
          <input
            type="file"
            onChange={handleChangeFile}
            accept="image/jpg,image/png,image/gif,image/png"
          />
          <br />
          <img
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
            src={imgSrc === "" ? data?.hinhAnh : imgSrc}
            alt="img"
          />
        </Form.Item>
        <Form.Item label="Tác vụ">
          <button
            type="submit"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded"
          >
            Cập nhật
          </button>
        </Form.Item>
      </Form>
    </>
  );
};
export default EditFilm;
