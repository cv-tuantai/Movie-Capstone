import React, { useState } from "react";
import { DatePicker, Form, Input, InputNumber, Switch } from "antd";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { actAddFilm } from "../../../../redux/actions/AddFilmAction";
import * as yup from "yup";

const AddFilm = () => {
  const dispatch = useDispatch();
  const [imgSrc, setImgSrc] = useState("");

  const addFilmSchema = yup.object().shape({
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

  const formik = useFormik({
    initialValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: 0,
      hinhAnh: {},
    },
    validationSchema: addFilmSchema,
    onSubmit: (values) => {
      values.maNhom = "GP09";

      //tạo đối tượng formData
      const formData = new FormData();

      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          formData.append("File", values.hinhAnh, values.hinhAnh.name);
        }
      }

      // call api
      dispatch(actAddFilm(formData));
    },
  });

  const handleChangeDatePicker = (value) => {
    const ngayKhoiChieu = value.format("DD/MM/YYYY");
    formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
  };

  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeFile = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setImgSrc(e.target.result);
    };

    formik.setFieldValue("hinhAnh", file);
  };

  return (
    <>
      <h2 className="text-2xl font-semibold text-center mb-5">Thêm phim mới</h2>
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
          />
          {formik.touched.moTa && formik.errors.moTa ? (
            <div style={{ color: "red" }}>{formik.errors.moTa}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Ngày khởi chiếu">
          <DatePicker
            name="ngayKhoiChieu"
            format="DD/MM/YYYY"
            onChange={handleChangeDatePicker}
            onBlur={formik.handleBlur}
          />
          {formik.touched.ngayKhoiChieu && formik.errors.ngayKhoiChieu ? (
            <div style={{ color: "red" }}>{formik.errors.ngayKhoiChieu}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Đang chiếu" valuePropName="checked">
          <Switch onChange={handleChangeSwitch("dangChieu")} />
        </Form.Item>
        <Form.Item label="Sắp chiếu" valuePropName="checked">
          <Switch onChange={handleChangeSwitch("sapChieu")} />
        </Form.Item>
        <Form.Item label="Hot" valuePropName="checked">
          <Switch onChange={handleChangeSwitch("hot")} />
        </Form.Item>
        <Form.Item label="Đánh giá">
          <InputNumber
            onChange={handleChangeSwitch("danhGia")}
            onBlur={formik.handleBlur}
            min={1}
            max={10}
            name="danhGia"
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
            name="hinhAnh"
          />
          <br />
          <img
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
            src={imgSrc}
            alt="img"
          />
        </Form.Item>
        <Form.Item label="Tác vụ">
          <button
            type="submit"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded"
          >
            Thêm phim
          </button>
        </Form.Item>
      </Form>
    </>
  );
};
export default AddFilm;
