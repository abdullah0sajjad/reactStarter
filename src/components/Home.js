import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useTranslation } from "react-i18next";

export default function Home() {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

  const date = new Date();
  return (
    <div className="card flex justify-content-center">
      <div className="font-bold text-xl w-full dark:text-white ltr:ml-8 rtl:mr-8">
        {t("welcome_to_react")}
      </div>
      <div>
        <Button
          label={t("show")}
          icon="pi pi-external-link"
          onClick={() => setVisible(true)}
        />
      </div>
      <Dialog
        header={t("header")}
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">{t("open_dialog", { date })}</p>
      </Dialog>
    </div>
  );
}
