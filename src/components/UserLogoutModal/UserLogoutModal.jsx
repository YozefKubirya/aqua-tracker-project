import { useDispatch } from "react-redux";
import css from "./UserLogoutModal.module.css";
import { IoCloseOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { logOut } from "../../redux/auth/operations.js";

export const UserLogoutModal = ({ onCancel }) => {
  const dispatch = useDispatch();
  const logOutUser = () => {
    dispatch(logOut());
  };
  const { t } = useTranslation();

  return (
    <div className={css.logOutContainer}>
      <button className={css.closeBtn} onClick={onCancel}>
        <IoCloseOutline />
      </button>
      <h2 className={css.logOutTitle}>{t("modals.logout")}</h2>
      <p className={css.logOutText}>{t("modals.leave")}</p>
      <div className={css.btnContainer}>
        <button className={css.cancelBtn} onClick={onCancel}>
          {t("modals.cancel")}
        </button>
        <button className={css.logoutBtn} onClick={logOutUser}>
          {t("modals.LogOut")}
        </button>
      </div>
    </div>
  );
};
