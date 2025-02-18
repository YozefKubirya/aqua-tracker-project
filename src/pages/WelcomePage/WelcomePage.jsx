import css from "./WelcomePage.module.css";
import { Link } from "react-router-dom";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { HiOutlinePresentationChartBar } from "react-icons/hi2";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { RxDotFilled } from "react-icons/rx";
import { useTranslation } from "react-i18next";
export default function WelcomePage() {
  const { t } = useTranslation();

  return (
    <div className={css["backround-image"]}>
      <div className={css["main-page"]}>
        <section className={css["main-paige-info"]}>
          <h1 className={css["main-paige-title"]}>{t("welcomePage.title")}</h1>
          <p className={css["main-paige-text"]}>
            {t("welcomePage.description")}
          </p>
          <div className={css["main-paige-benefits"]}>
            <h2 className={css["main-benefits-title"]}>
              {t("welcomePage.benefitsTitle")}
            </h2>
            <ul className={css["main-benefits-list"]}>
              <li>
                <HiOutlineCalendarDays
                  size={32}
                  color="#407bff"
                  style={{ marginRight: "8px" }}
                />
                {t("welcomePage.benefit1")}
              </li>
              <li>
                <HiOutlinePresentationChartBar
                  size={32}
                  color="#407bff"
                  style={{ marginRight: "8px" }}
                />
                {t("welcomePage.benefit2")}
              </li>
              <li>
                <HiOutlineWrenchScrewdriver
                  size={32}
                  color="#407bff"
                  style={{ marginRight: "8px" }}
                />
                {t("welcomePage.benefit3")}
              </li>
            </ul>
          </div>
          <Link to="/signup">
            <button className={css["try-main-button"]}>
              {t("welcomePage.tryButton")}
            </button>
          </Link>
        </section>
        <section className={css["why-drink-water"]}>
          <h2 className={css["why-drink-title"]}>
            {t("welcomePage.whyDrinkTitle")}
          </h2>
          <ul className={css["why-drink-list"]}>
            <li>
              <RxDotFilled size={20} color="#407bff" />
              {t("welcomePage.whyDrink1")}
            </li>
            <li>
              <RxDotFilled size={20} color="#407bff" />
              {t("welcomePage.whyDrink2")}
            </li>
            <li>
              <RxDotFilled size={20} color="#407bff" />
              {t("welcomePage.whyDrink3")}
            </li>
            <li>
              <RxDotFilled size={20} color="#407bff" />
              {t("welcomePage.whyDrink4")}
            </li>
            <li>
              <RxDotFilled size={20} color="#407bff" />
              {t("welcomePage.whyDrink5")}
            </li>
            <li>
              <RxDotFilled size={20} color="#407bff" />
              {t("welcomePage.whyDrink6")}
            </li>
            <li>
              <RxDotFilled size={20} color="#407bff" />
              {t("welcomePage.whyDrink7")}
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
