import { Link } from "react-router-dom";

const Logo = ({ img, width, height }) => {
  return (
    <Link href="/">
      <div className="items-center gap-3 flex mr-20">
        <img src={`${img}`} alt="Talent Blocks Lab logo" width={width} height={height} className="md:w-24"/>
      </div>
    </Link>
  );
};

export default Logo;
