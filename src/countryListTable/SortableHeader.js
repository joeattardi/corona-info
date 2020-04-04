import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames";

import styles from "./SortableHeader.module.scss";

export default function SortableHeader({ column, currentSort, sortDirection, onSort }) {
  const classes = classNames(styles["sortable-header"], {
    [styles["sort-asc"]]: sortDirection === "asc"
  });

  return (
    <div className={classes}>
      <button onClick={onSort}>
        {column.label}
        {currentSort === column.property ? (
          <span className={styles["sort-indicator"]}>
            <FontAwesomeIcon icon={faCaretDown} />
          </span>
        ) : null}
      </button>
    </div>
  );
}
