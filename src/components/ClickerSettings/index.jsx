import React from "react";
import styles from "./../Clicker/style.module.css";
import cx from "classnames";

const ClickerSettings = ({
  clickHandler,
  step,
  buttonMath,
  automatikClick,
  interval,
  stop,
  reset,
}) => {
  return (
    <div>
      <label className={cx(styles.text)}>
        Введите число:
        <input
          className={cx(styles.input)}
          placeholder="По умолчанию стоит: 1"
          onChange={clickHandler}
          type="number"
          value={step}
        />
      </label>
      <button className={cx(styles.btn)} onClick={buttonMath}>
        Добавить это число
      </button>

      <button className={cx(styles.btn)} onClick={automatikClick}>
        Добавлять автоматически
      </button>
      <div className={cx(styles.container2)}>
        <button className={cx(styles.btn)} onClick={stop}>
          Стоп
        </button>
        <button className={cx(styles.btn)} onClick={reset}>
          Ресетник
        </button>
      </div>
      <div className={cx(styles.container2)}>
        <label className={cx(styles.text)}>
          Настройка частоты автокликера в мс:
          <input
            className={cx(styles.input)}
            placeholder="По умолчанию 1000мс"
            onChange={interval}
            type="number"
          />
        </label>
      </div>
    </div>
  );
};

export default ClickerSettings;
