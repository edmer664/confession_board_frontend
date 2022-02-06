import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Footer() {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);
  return (
    <footer
      id="sticky-footer"
      className="flex-shrink-0 py-4 bg-dark text-white-50"
    >
      <div className="container text-center d-flex flex-column">
        <small>
          This is an open source project. The author of this project is not
          responsible for any content on this site. Please use with moderation.
        </small>
        <small>Copyright &copy; Confession Board</small>
      </div>
    </footer>
  );
}
