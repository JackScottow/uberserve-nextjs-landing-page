import ScrollToTop from "react-scroll-up";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function BackToTop() {
  return (
    <ScrollToTop showUnder={160}>
      <a id="scrollUp" alt="Scroll to top">
        <FontAwesomeIcon icon={faArrowUp} />
      </a>
    </ScrollToTop>
  );
}
