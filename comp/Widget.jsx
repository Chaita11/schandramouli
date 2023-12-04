import Link from "next/link";

const Widget = () => {
  return (
    <div className="widgetContainer flex">
      <div className="oneWidgetContainer">
        <Link href="/" className="linkWidget">
          <div className="widgetContainerCol widgetContainerCol1">About</div>
        </Link>
      </div>
      <div className="twoWidgetContainer">
        <Link href="/" className="linkWidget">
          <div className="widgetContainerCol">Works</div>
        </Link>
        <Link href="/" className="linkWidget">
          <div className="widgetContainerCol">Acheivements</div>
        </Link>
      </div>
    </div>
  );
};

export default Widget;
