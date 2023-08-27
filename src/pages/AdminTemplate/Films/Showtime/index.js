import React, { useEffect, useState } from "react";
import { Form, DatePicker, InputNumber, Button, Select } from "antd";
import api from "../../../../util/api";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import moment from "moment";

export default function Showtime() {
  const { id } = useParams();

  const formik = useFormik({
    initialValues: {
      maPhim: id,
      ngayChieuGioChieu: "",
      maRap: "",
      giaVe: 0,
    },
    onSubmit: (values) => {
      api
        .post("QuanLyDatVe/TaoLichChieu", values)
        .then((result) => alert(result.data.content))
        .catch((error) => console.log(error));
    },
  });

  const [state, setState] = useState({
    heThongRap: [],
    cumRap: [],
  });

  useEffect(() => {
    api
      .get("QuanLyRap/LayThongTinHeThongRap")
      .then((result) =>
        setState({
          ...state,
          heThongRap: result.data.content,
        }),
      )
      .catch((error) => console.log(error));
  }, []);

  const onChangeHeThongRap = (value) => {
    api
      .get(`QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${value}`)
      .then((result) =>
        setState({
          ...state,
          cumRap: result.data.content,
        }),
      )
      .catch((error) => console.log(error));
  };

  const onChangeCumRap = (value) => {
    formik.setFieldValue("maRap", value);
  };

  const onChangeDatePicker = (value) => {
    formik.setFieldValue(
      "ngayChieuGioChieu",
      moment(value).format("DD/MM/YYYY hh:mm:ss"),
    );
  };

  const onOk = (value) => {
    formik.setFieldValue(
      "ngayChieuGioChieu",
      moment(value).format("DD/MM/YYYY hh:mm:ss"),
    );
  };

  const onChangeInputNumber = (value) => {
    formik.setFieldValue("giaVe", value);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      autoComplete="off"
      onSubmitCapture={formik.handleSubmit}
    >
      <h2 className="text-2xl font-semibold text-center mb-5">
        Tạo lịch chiếu
      </h2>
      <Form.Item label="Hệ thống rạp">
        <Select
          placeholder="Chọn hệ thống rạp"
          onChange={onChangeHeThongRap}
          options={state.heThongRap?.map((rap) => {
            return {
              label: rap.tenHeThongRap,
              value: rap.maHeThongRap,
            };
          })}
        />
      </Form.Item>
      <Form.Item label="Cụm rạp">
        <Select
          placeholder="Chọn cụm rạp"
          onChange={onChangeCumRap}
          options={state.cumRap?.map((cum) => ({
            label: cum.tenCumRap,
            value: cum.maCumRap,
          }))}
        />
      </Form.Item>
      <Form.Item label="Ngày giờ chiếu">
        <DatePicker
          format="DD/MM/YYYY hh:mm:ss"
          showTime
          onChange={onChangeDatePicker}
          onOk={onOk}
        />
      </Form.Item>
      <Form.Item label="Giá vé (75.000-150.000)">
        <InputNumber min={75000} max={150000} onChange={onChangeInputNumber} />
      </Form.Item>
      <Form.Item label="Chức năng">
        <Button htmlType="submit">Tạo lịch chiếu</Button>
      </Form.Item>
    </Form>
  );
}
