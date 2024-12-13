import { Link } from "react-router-dom";

const Logo = ({ img, color, fontSize, fontWeight }) => {
  return (
    <Link href="/">
      <div className="items-center gap-3 flex mr-20">
        <img src={`${img}`} alt="TalentsBlocks logo" width={36} height={36} />
        <h5 className={`${color} ${fontSize} ${fontWeight}`}>TalentsBlocks</h5>
      </div>
    </Link>
  );
};

export default Logo;
