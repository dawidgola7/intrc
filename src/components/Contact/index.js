import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import Checkbox from "../Checkbox";
import { useTranslation } from "react-i18next";
import "./style.css";
import { sendFormData } from "../../api";

const Contact = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    surname: "",
    company: "",
    personal_data: false,
    marketing: false,
  });

  const { t } = useTranslation();

  const handleChange = (name) => (value) => {
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    sendFormData("/form_contact", value);
  };

  const isErrors = !Object.values(value).every((el) => Boolean(el));

  return (
    <div className="wrapper_contact">
      <div className="wrapper_contact--contact">
        <div className="wrapper_contact--contact-info">
          <div className="wrapper_contact--contact-header">
            {t("contact_desc_1")}
          </div>
          <div className="wrapper_contact--contact-text">
            {t("contact_desc_2")}
          </div>
          <div className="wrapper_contact--contact-phone">+48 22 400 79 96</div>
          <div className="wrapper_contact--contact-email">info@intrack.eu</div>
          <div className="wrapper_contact--contact-line"></div>
        </div>
        <div className="wrapper_contact--contact-form">
          <div className="wrapper_contact--contact-form--inputs">
            <div className="wrapper_contact--contact-form--input">
              <Input
                onChange={handleChange("name")}
                title={t("your_first_name")}
                placeholder={t("enter_first_name")}
              />
            </div>
            <div className="wrapper_contact--contact-form--input">
              <Input
                onChange={handleChange("surname")}
                title={t("your_surname")}
                placeholder={t("enter_surname")}
              />
            </div>
            <div className="wrapper_contact--contact-form--input">
              <Input
                onChange={handleChange("company")}
                title={t("company")}
                placeholder={t("enter_company")}
              />
            </div>
            <div className="wrapper_contact--contact-form--input">
              <Input
                onChange={handleChange("email")}
                title={t("your_email")}
                type="email"
                placeholder={t("email@email.com")}
              />
            </div>
          </div>
          <div className="wrapper_contact--contact-form--button">
            <div>
              <Checkbox
                onClick={handleChange("personal_data")}
                text={t("confirm_personal_data")}
              />
              <Checkbox
                onClick={handleChange("marketing")}
                text={t("confirm_marketing")}
              />
            </div>
            <Button
              style={{ margin: "10px" }}
              isErrors={isErrors}
              onClick={handleClick}
              second
            >
              {t("submit")}
            </Button>
          </div>
        </div>
      </div>
      <div className="wrapper_contact--footer">
        <div>
          Copyright © {new Date().getFullYear()} Ingrifo. All rights reserved.
        </div>
        <div>Created by mufu.studio</div>
      </div>
    </div>
  );
};

export default Contact;
